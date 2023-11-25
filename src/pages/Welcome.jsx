import React from "react";
import "./onboarding.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="welcome-container">
          <div className="welcome-display">
            <h1>Welcome to Team 43!</h1>
            <p>
              Team 43 allows business owners dissect customer behavior, monitor
              sales trends in real-time, and refine marketing strategies through
              actionable insights. With intuitive data visualization, it enables
              sellers to make informed decisions, optimizing their marketing
              efforts for enhanced customer engagement and increased sales.
            </p>
            <div className="div-btns">
              <button
                onClick={() => navigate("create-account")}
                className="btn"
                type="button"
              >
                Get Started
              </button>
              <button className="btn second" type="button">
                Sign in
              </button>
            </div>
          </div>
          <div className="image">
            <img src="welcome.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Welcome;
