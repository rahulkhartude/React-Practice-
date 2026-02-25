import React, { useState } from "react";

const Exam = () => {
  const questions = [
    {
      id: 1,
      type: "radio",
      question: "Capital of India?",
      options: ["Mumbai", "Delhi", "Pune", "Chennai"],
      answer: "Delhi",
    },
    {
      id: 2,
      type: "radio",
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: 3,
      type: "radio",
      question: "React is?",
      options: ["Library", "Framework", "Language"],
      answer: "Library",
    },
    {
      id: 4,
      type: "checkbox",
      question: "Select Fruits",
      options: ["Apple", "Car", "Banana", "Bike"],
      answer: ["Apple", "Banana"],
    },
    {
      id: 5,
      type: "checkbox",
      question: "Select Even Numbers",
      options: ["1", "2", "3", "4"],
      answer: ["2", "4"],
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Handle Radio
  const handleRadio = (id, value) => {
    setUserAnswers({ ...userAnswers, [id]: value });
  };

  // Handle Checkbox
  const handleCheckbox = (id, value) => {
    const current = userAnswers[id] || [];

    if (current.includes(value)) {
      setUserAnswers({
        ...userAnswers,
        [id]: current.filter((item) => item !== value),
      });
    } else {
      setUserAnswers({
        ...userAnswers,
        [id]: [...current, value],
      });
    }
  };

  // Submit Exam
  const handleSubmit = () => {

    console.log("userAnswers",userAnswers);
    let total = 0;

    questions.forEach((q) => {
      const userAns = userAnswers[q.id];

      if (q.type === "radio") {
        if (userAns === q.answer) {
          total++;
        }
      } else if (q.type === "checkbox") {
        if (
          JSON.stringify(userAns?.sort()) ===
          JSON.stringify(q.answer.sort())
        ) {
          total++;
        }
      }
    });

    setScore(total);
  };

  return (
    <div>
      <h2>Test</h2>

      {questions.map((q) => (
        <div key={q.id}>
          <h4>{q.question}</h4>

          {q.options.map((option) => (
            <div key={option}>
              <label>
                <input
                  type={q.type}
                  name={`question-${q.id}`}
                  value={option}
                  checked={
                    q.type === "radio"
                      ? userAnswers[q.id] === option
                      : userAnswers[q.id]?.includes(option)
                  }
                  onChange={(e) =>
                    q.type === "radio"
                      ? handleRadio(q.id, e.target.value)
                      : handleCheckbox(q.id, e.target.value)
                  }
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>

      {score !== null && (
        <h3>
          Your Score: {score} / {questions.length}
        </h3>
      )}
    </div>
  );
};

export default Exam;