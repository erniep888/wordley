import React, { useState, useEffect } from "react";

const Wordle = () => {
  const wordToGuess = "react"; // You can change the word here
  const maxAttempts = 6;

  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(Array(wordToGuess.length).fill("_"));
  const [gameOver, setGameOver] = useState(false);

  const handleGuessChange = (event: { target: { value: string; }; }) => {
    setGuess(event.target.value.toLowerCase());
  };

  const handleGuessSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    checkGuess();
  };

  const checkGuess = () => {
    const newFeedback = [...feedback];
    for (let i = 0; i < wordToGuess.length; i++) {
      if (guess[i] === wordToGuess[i]) {
        newFeedback[i] = guess[i];
      }
    }

    setAttempts(attempts + 1);
    setFeedback(newFeedback);

    if (newFeedback.join("") === wordToGuess) {
      setGameOver(true);
    } else if (attempts + 1 === maxAttempts) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (gameOver) {
      alert(`Game over! The word was "${wordToGuess}".`);
    }
  }, [gameOver]);

  return (
    <div>
      <h1>Wordle Game</h1>
      <p>Try to guess the word in {maxAttempts} attempts!</p>
      <p>Attempts left: {maxAttempts - attempts}</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          className="text-gray-600"
          type="text"
          value={guess}
          onChange={handleGuessChange}
          maxLength={wordToGuess.length}
        />
        <button type="submit">Guess</button>
      </form>
      <div>
        {feedback.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Wordle;
