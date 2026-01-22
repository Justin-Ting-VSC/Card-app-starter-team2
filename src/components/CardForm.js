import { useState } from "react";

export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  return (
    <form onSubmit={onSubmit} className="card-form">
      <div className="form-group">
        <label htmlFor="card_name">Card Name:</label>
        <input
          type="text"
          id="card_name"
          name="card_name"
          value={values.card_name}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="card_pic">Card Image URL:</label>
        <input
          type="url"
          id="card_pic"
          name="card_pic"
          value={values.card_pic}
          onChange={onChange}
          required
        />
      </div>

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={busy} className="submit-btn">
        {busy ? "Adding..." : submitText}
      </button>
    </form>
  );
}
