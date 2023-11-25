import React from 'react'
import "./onboarding.css";

const Success = () => {
  return (
    <>
    <main>
      <div className="welcome-container">
        <div className="welcome-display">
          <h1>Success!</h1>
          <p>
            Your account has been created successfully. Get started with Team
            43 today.
          </p>
          <div className="div-btns">
            <button className="btn" type="button">
              Continue
            </button>
          </div>
        </div>
        <div className="image">
          <img src="success.jpg" alt="" />
        </div>
      </div>
    </main>
  </>
  )
}

export default Success