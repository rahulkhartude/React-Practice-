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
   
  const handleRadio=(queId,selectedOption)=>{
   setUserAnswers({...userAnswers,[queId]:selectedOption})
  }
   
const handleCheckBox=(queId,selectedOption)=>{
    let currentObj = userAnswers[queId] || [];
   


     
}
const handleSubmit=()=>{
  let total = 0;
     questions.map((question)=>{
      let queId = question.id;
      if(question.answer ==userAnswers[queId])
         total++;
     })



     setScore(total);
}


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
                        <input type={q.type} name={q.id} value={op} checked={q.type=='radio'? userAnswers[q.id]==op : userAnswers[q.id]?.includes(op)} onChange={(e)=> {q.type=='radio'? handleRadio(q.id,e.target.value) :handleCheckBox(q.id,e.target.value) }}    />
                    {op}
                    </label>
                    )
                    })
                }

               </div> 
            })
        }
        <button onClick={handleSubmit} >Submit</button>
        {score}
      </div>
  );
};

export default Exam2;