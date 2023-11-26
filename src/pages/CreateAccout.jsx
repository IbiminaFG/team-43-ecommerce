import React from "react";
import "./onboarding.css";
import { useNavigate } from "react-router-dom";

const CreateAccout = () => {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="welcome-container">
          <div className="welcome-display">
            <h1>Create an Account</h1>
            <form>
              <label for="fname">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Website Name:"
                />
              </label>
              <label for="url">
                <input
                  type="text"
                  id="url"
                  name="url"
                  placeholder="Website URL:"
                />
              </label>
              <label for="tag">
                <input
                  type="text"
                  id="tag"
                  name="tag"
                  placeholder="Tag Manager:"
                />
              </label>
              <p>
                Copy and paste the tag manager into all the pages of your
                website and reload.
              </p>
            </form>

            <input
              type="checkbox"
              id="agreeToTerms"
              name="agree"
              value="agree"
            />
            <label className="checkbox" for="agreeToTerms">I agree to let Team 43 access data from my website.</label>

            <div className="div-btns">
              <button
                onClick={() => navigate("success")}
                className="btn"
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="image">
            <img src="create.jpg" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateAccout;
