import React, { useState } from "react";
import "./FlashcardsPage.css";

export default function FlashcardsPage() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="page">
      <div className="header">
        <button className="back-button">←</button>
        <h1>Flashcards</h1>
        <div className="progress-bar"></div>
      </div>

      <div className="card">
        <div className="card-header">
          <span role="img" aria-label="doc">📄</span>
          <span className="card-title">curs</span>
        </div>

        <div className="card-content">
  {!showAnswer ? (
    <button
      className={`answer-btn ${showAnswer ? "hide" : ""}`}
      onClick={() => setShowAnswer(true)}
    >
      răspuns
    </button>
  ) : (
    <div className="answer-box">Acesta este un răspuns de test!!!!!!</div>
  )}
</div>


        {showInput ? (
          <div className="input-box">
            <img src="/keyboard-icon.svg" alt="keyboard" />
            <input
              type="text"
              className="answer-input"
              placeholder="Scrie răspunsul tău..."
            />
          </div>
        ) : (
          <img
            src="/keyboard-icon.svg"
            alt="keyboard"
            className="keyboard-icon"
            onClick={() => setShowInput(true)}
          />
        )}

      </div>

      <div className="controls">
        <button className="arrow">←</button>

        <div className="emotions">
          <button
            className={`emotion red ${selectedEmotion === "red" ? "selected" : ""}`}
            onClick={() => setSelectedEmotion("red")}
          >
            😞
          </button>
          <button
            className={`emotion yellow ${selectedEmotion === "yellow" ? "selected" : ""}`}
            onClick={() => setSelectedEmotion("yellow")}
          >
            😐
          </button>
          <button
            className={`emotion green ${selectedEmotion === "green" ? "selected" : ""}`}
            onClick={() => setSelectedEmotion("green")}
          >
            😊
          </button>
        </div>

        <button className="arrow">→</button>
      </div>
    </div>
  );
}
