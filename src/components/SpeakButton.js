"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/SpeakButton.css";


export default function SpeakButton({ word }) {
    // console.log("hello");
    const speak = (text) => {
        // console.log("Speak function called with:", text); // Debug log
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

  return (
    <button
      onClick={() => speak(word)}
      className="mic-button"
      aria-label="Speak"
    >
      <i className="fa-solid fa-volume-high"></i>
    </button>
  );
}
