import React, { useState } from 'react';

const FormModal = ({ isOpen, onClose, onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('Text');
  const [choices, setChoices] = useState('');

  const handleAdd = () => {
    const questionData = { title: question, answerType,
        
        choices: answerType === 'Multichoice Checkbox' || answerType === 'Single Select radio' ? choices.split('\n').map((choice) => choice.trim()) : [],
    };
    onSubmit(questionData);
    setQuestion('');
    setAnswerType('Text');
    setChoices('');
  };

  return (
    isOpen && (
      <div>
        <h3>Add Question</h3>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <select value={answerType} onChange={(e) => setAnswerType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="Multichoice Checkbox">Multichoice Checkbox</option>
          <option value="Single Select radio">Single Select radio</option>
        </select>
        {answerType === 'Multichoice Checkbox' || answerType === 'Single Select radio' && (
          <textarea value={choices} onChange={(e) => setChoices(e.target.value)} />
        )}
        <button onClick={handleAdd}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    )
  );
};

export default FormModal;
