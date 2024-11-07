import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left Part */}
      <fieldset className="left-part">
        <legend className="hero-title">
          Khmer.English-Dictionary.Help | English to Khmer Dictionary
        </legend>
        <p className="hero-text">
          This is not just an ordinary English to Khmer dictionary & Khmer to English dictionary. This dictionary has the largest database for word meaning. It does not only give you English to Khmer and Khmer to English word meaning, it provides English to English word meaning along with Antonyms, Synonyms, Examples, Related words and Examples from your favorite TV Shows. This dictionary helps you to search quickly for Khmer to English translation, English to Khmer translation. It has more than 500,000 word meaning and is still growing. This English to Khmer dictionary also provides you an Android application for your offline use. The dictionary has mainly three features: translate English words to Khmer, translate Khmer words to English, copy & paste any paragraph in the Read Text box then tap on any word to get instant word meaning. This website also provides you English Grammar, TOEFL and most common words.
        </p>
        <div className="button-container">
          <button className="hero-button">Khmer to English Dictionary</button>
          <button className="hero-button">Read Text</button>
          <button className="hero-button">Favorite Words</button>
          <button className="hero-button">Learn Words</button>
          <button className="hero-button">Vocabulary Games</button>
          <button className="hero-button">Fill in the Blanks</button>
          <button className="hero-button">Word Search History</button>
        </div>
      </fieldset>

      {/* Right Part */}
      <fieldset className="right-part">
        <legend className="article-title">Article Section</legend>
        <ul className="article-list">
          <li>Verb Patterns – Gerunds Or Infinitives <small>Published: 28 Feb, 2023</small></li>
          <li>Using The Past To Talk About The Present Or Future <small>Published: 27 Feb, 2023</small></li>
          <li>Conditionals Review <small>Published: 17 Feb, 2023</small></li>
          <li>Infinitives Of Purpose <small>Published: 09 Feb, 2023</small></li>
          <li>Linking Words Of Contrast <small>Published: 08 Feb, 2023</small></li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Hero;
