import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy, disabled }) {
  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} className="card-image" />
      <h2 className="card-name">{card.card_name}</h2>
      <p className="card-id">ID: {card.id}</p>
      <div className="card-buttons">
        <Link to={`/card/${card.id}/edit`} className="edit-button">
          Edit
        </Link>
        <button
          onClick={() => onDelete(card)}
          className="delete-button"
          disabled={disabled}
        >
          {busy ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
