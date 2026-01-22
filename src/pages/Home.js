import { Link } from "react-router-dom";
import '../App.css'; // Make sure your CSS is imported

export default function Home() {
  return (
    <main className="home">
      <div className="landing-container">
        <h1 className="welcome-title">Welcome to the Card Management App</h1>
        <p className="instructions">
          This app allows you to create, view, update, and delete cards. To get started, navigate to the Cards page where you can manage your cards.
        </p>
        <Link to="/cards" className="cta-button">
          Go to Cards
        </Link>
      </div>
    </main>
  );
}
