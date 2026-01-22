import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";
import Navbar from "../components/Navbar"; // Import Navbar component

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const data = await getCards();
      setCards(data);
    } catch (error) {
      console.error("Failed to load cards", error);
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(card) {
    setBusy(true);
    try {
      const res = await deleteCard(card.id);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
    } catch (error) {
      console.error("Failed to delete card", error);
      setError("Failed to delete card");
    }
  }

  return (
    <main className="card-list">
      <Navbar /> {/* Add Navbar here */}
      
      {/* Loading and Error State */}
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {/* Cards Grid */}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={handleDelete}
            busy={loading}
            disabled={busy}
          />
        ))}
      </div>
    </main>
  );
}
