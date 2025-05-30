import React from 'react';
import Options from './Options';
const Questions = ({ question, dispatch, answer}) => {
    
  return (
    <div>
      <h2>{question.question}</h2>
      <Options question={question} dispatch ={dispatch} answer={answer}/>
    </div>
  );
};

export default Questions;
