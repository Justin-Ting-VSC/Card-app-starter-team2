import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  /* TODO: Complete the EditCard page
    - display a form for editing a card (use the CardForm component to display the form)
    - handle form submission to call updateCard API
    - handle loading, busy, and error states
    - style as a form UI */


  const { id } = useParams();  // Get the card id from the URL
  const [values, setValues] = useState({
    card_name: "",
    card_pic: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch the card details when the component mounts
  useEffect(() => {
    async function loadCard() {
      try {
        const cards = await getCards();
        const card = cards.find((c) => c.id === parseInt(id));  // Find the card with the matching ID
        if (card) {
          setValues({ card_name: card.card_name, card_pic: card.card_pic });
        } else {
          setError("Card not found");
        }
      } catch (error) {
        console.error("Failed to load card", error);
        setError("Failed to load card");
      } finally {
        setLoading(false);
      }
    }
    loadCard();
  }, [id]);

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handle form submission to update the card
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(""); // Reset error message
    try {
      await updateCard(id, values); // Update card via API
      navigate("/cards"); // Redirect to Cards page after updating
    } catch (error) {
      console.error("Failed to update card", error);
      setError("Failed to update card. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  // If still loading, show the loading state
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <main className="edit-card">
      <h1 style={{textAlign : "center"}}>Edit Card</h1>
      {/* Render CardForm component with pre-filled data */}
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update Card"
      />
    </main>
  );
}