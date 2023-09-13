import React, { useState, useEffect } from "react";

function CountdownTimer({ initialTime }) {
  // Initial time 1 = 1 second
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Function to update the countdown timer
  const updateTimer = () => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  };

  useEffect(() => {
    // Start the countdown when the component mounts
    const timerId = setTimeout(updateTimer, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <div className="redText">
      {timeLeft === 0 ? (
        <p>Time's up!</p>
      ) : (
        <p>Time left: {timeLeft} seconds</p>
      )}
    </div>
  );
}

export default CountdownTimer;
