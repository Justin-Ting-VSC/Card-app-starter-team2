/**
 * API Service (Create React App)
 *
 * 1) Create `.env` at project root
 * 2) Set: REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com
 * 3) Restart `npm start`
 */
const API_URL = process.env.REACT_APP_API_URL;

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /allcards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

export async function getCards() {
  // GET /allcards (provided as reference)
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addCard(card) {
  const res = await fetch(`${API_URL}/addcard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    throw new Error("Failed to add card");
  }

  return res.json();
}

export async function updateCard(id, card) {
  // TODO: implement PUT /updatecard/:id
  const res = await fetch(`${API_URL}/updatecard/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    throw new Error("Failed to update card");
  }

  return res.json();
}

export async function deleteCard(id) {
  try {
    const res = await fetch(`${API_URL}/deletecard/${id}`, {
      method: "DELETE",  // Use DELETE method
    });

    if (!res.ok) {
      throw new Error("Failed to delete card");
    }

    // Return the success message or any data from the server
    return res.json();  // This should return { message: "Card deleted successfully" }
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;  // Re-throw the error for handling in the calling function
  }
}
