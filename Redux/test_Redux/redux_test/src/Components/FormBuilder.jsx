import React, { useState } from 'react';
 import { useDispatch } from 'react-redux';
 import { addQuestion } from '../Genrate/formSlice';
import FormModal from './FormModal';

const FormBuilder = () => {
   const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddQuestion = (questionData) => {
    const slug = generateSlug(questionData.title); // Generate the Slug based on the form title
    const formData = { ...questionData, slug }; // Add the Slug to the form data
     const new_Data= {
        ...questionData,
        url : window.location.href +slug ,
        createdAt: new Date().toLocaleString(),
     }
  

    dispatch(addQuestion(new_Data));
//      console.log(questionData)
//      const array =[]
//      array.push(questionData)
//    localStorage.setItem("form-data",JSON.stringify(array))
// console.log(slug)
// console.log("Form URL",  window.location.href +slug)   
 setIsModalOpen(false);
    
  };
  const generateSlug = (title) => {
    // Replace spaces with dashes and convert to lowercase
    return title.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Create New Form</button>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddQuestion} />
    </div>
  );
};

export default FormBuilder;
