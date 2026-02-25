import React, { useState } from "react";

const Exam2 = () => {
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
   
   
  return (
    <div>
      <h2>Online Exam Test</h2>
        {
            questions.map((q)=>{
               return <div> 
                <h3>{q.question}</h3>
                {
                    q.options.map((op)=>{
                    return (
                        
                    <label>
                        <input type={q.type} name={q.question+q.id} value={op} checked   />
                    </label>
                    )
                    })
                }

               </div> 
            })
        }
      </div>
  );
};

export default Exam2;