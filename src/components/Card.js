import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy, disabled }) {
  const handleDelete = () => {
    // Display confirmation dialog before deleting
    const confirmed = window.confirm(`Are you sure you want to delete ${card.card_name}?`);

    if (confirmed) {
      // Proceed with deletion if confirmed
      onDelete(card);
    }
  };

  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} className="card-image" />
      <h2 className="card-name">{card.card_name}</h2>
      <div className="card-buttons">
        <Link to={`/card/${card.id}/edit`} className="edit-button">
          Edit
        </Link>
        <button
          onClick={handleDelete}  // Calls the handleDelete function when clicked
          className="delete-button"
          disabled={disabled}  // Disable button during the deletion process
        >
          {busy ? "Deleting..." : "Delete"}  {/* Change button text based on busy state */}
        </button>
      </div>
    </div>
  );
}
