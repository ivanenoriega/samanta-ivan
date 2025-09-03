import React from "react";
import CountdownTimer from "../CountdownTimer";

// Example usage of the CountdownTimer component
export function CountdownTimerExamples() {
  // Example time data
  const sampleTimeLeft = {
    days: 15,
    hours: 8,
    minutes: 30,
    seconds: 45,
  };

  return (
    <div>
      {/* Default usage (Spanish labels) */}
      <CountdownTimer timeLeft={sampleTimeLeft} />

      {/* Custom title */}
      <CountdownTimer timeLeft={sampleTimeLeft} title="Time Remaining" />

      {/* Custom labels in English */}
      <CountdownTimer
        timeLeft={sampleTimeLeft}
        title="Countdown"
        labels={{
          days: "days",
          hours: "hrs",
          minutes: "min",
          seconds: "sec",
        }}
      />

      {/* Custom labels in French */}
      <CountdownTimer
        timeLeft={sampleTimeLeft}
        title="Temps Restant"
        labels={{
          days: "jours",
          hours: "heures",
          minutes: "minutes",
          seconds: "secondes",
        }}
      />

      {/* With custom className for additional styling */}
      <CountdownTimer
        timeLeft={sampleTimeLeft}
        title="Custom Style"
        className="custom-timer-class"
      />
    </div>
  );
}
