import React from "react";
import "./onboarding.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="welcome-container">
          <div className="welcome-display">
            <h1>Error!</h1>
            <p>
              Unfortunately, your account creation cannot be completed because
              we are unable to retrieve any data from your website. Try to copy
              and paste the tag manager in all the pages of your website and
              reloading your site.
            </p>
            <div className="div-btns">
              <button
                onClick={() => navigate("create-account")}
                className="btn"
                type="button"
              >
                Try again
              </button>
              <button
                onClick={() => navigate("welcome")}
                className="btn second"
                type="button"
              >
                Maybe Later
              </button>
            </div>
          </div>
          <div className="image">
            <img src="error.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
