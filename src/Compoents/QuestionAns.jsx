import React, { useState } from 'react'

const CountrySelection = () => {
    const [answer,setAnswer] =useState({});
    const questions = [
  {
    id: 1,
    type: "radio",
    question: "Select Gender",
    options: ["Male", "Female"],
  },
  {
    id: 2,
    type: "checkbox",
    question: "Select Skills",
    options: ["React", "Node", "MongoDB"],
  },
  {
    id: 3,
    type: "text",
    question: "Enter Your Name",
  },
];
  return (
    <div>
      <h1>Question and Answer</h1>
      {
        questions.map((obj)=>
          {return <div>
            <h3 key={obj.id}>{obj.question}</h3>
             {
               obj.type=="radio" ? (obj.options.map((op)=>
              (<input key={op} type='radio' value={op} />)
              )):"Not radio"
             }
            </div>
                }
        )
      }

    </div>
  )
}

export default CountrySelection
