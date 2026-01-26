import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";
import Navbar from "../components/Navbar"; // Import Navbar component

export default function AddCard() {
  const [values, setValues] = useState({
    card_name: "",
    card_pic: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      if (!token) navigate("/login");
    },
    [navigate]
  )

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(""); // Reset error message
    try {
      await addCard(values);
      navigate("/cards"); // Redirect to Cards page after successful submission
    } catch (error) {
      console.error("Failed to add card", error);
      setError("Failed to add card. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="add-card">
      <Navbar />
      <h1 style={{textAlign : "center"}}>Add a New Card</h1>
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}
