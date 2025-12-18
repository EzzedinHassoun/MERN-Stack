import { useState } from "react";

const tossCoin = () => {
  return Math.random() > 0.5 ? "heads" : "tails";
};

export const HomeComponent = () => {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const fiveHeads = () => {
    return new Promise((resolve) => {
      let headsCount = 0;
      let attempts = 0;
      let flips = [];

      const flip = () => {
        const coin = tossCoin();
        attempts++;
        flips.push(coin);

        if (coin === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }

        if (headsCount === 5) {
          resolve({
            message: `It took ${attempts} tries to flip five "heads"`,
            flips: flips,
          });
        } else {
          setTimeout(flip, 100);
        }
      };

      flip();
    });
  };

  const handleFlip = () => {
    setResult("Flipping...");
    setHistory([]);

    fiveHeads().then((data) => {
      setResult(data.message);
      setHistory(data.flips);
    });
  };

  return (
    <div className="home-container">
      <button className="flip-btn" onClick={handleFlip}>
        Start Flipping
      </button>

      <h3 className="result-text">{result}</h3>

      <ul className="history-list">
        {history.map((flip, index) => (
          <li key={index} className="history-item">
            Flip {index + 1}: {flip}
          </li>
        ))}
      </ul>
    </div>
  );
};
