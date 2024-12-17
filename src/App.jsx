
import React, { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackSummmary from "./components/FeedbackSummmary";

function App() {

  // State to hold the list of feedbacks
  const [feedbacks, setFeedbacks] = useState([]);

  // Function to handle feedback submission
  const handleFeedbackSubmit = (data) => {
    setFeedbacks([...feedbacks, data]);
  };

  // Load feedbacks from localStorage when app loads
  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks"));
    if (savedFeedbacks) {
      setFeedbacks(savedFeedbacks);
    }
  }, []);

  // Save feedbacks to localStorage whenever feedbacks state changes
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackSummmary feedbacks={feedbacks} />
    </>
  );
}

export default App;
