import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../Genrate/formSlice';


const FormList = () => {

 const dispatch = useDispatch();

  let forms = useSelector((state) => state.form.forms);
 //const forms = JSON.parse(localStorage.getItem("form-data"))
  console.log(forms)
  
  //console.log(new Date().toLocaleString())

 const handleDelete=(title)=> {
   let new_form=  forms.filter((item)=> item.title !== title)
   dispatch(addQuestion(new_form));
  // alert("deleted successfully") 
}
 const handleEdit =()=>{

 }





 return (
    <div>
      <h3>Form List</h3>
      <table>
        <thead>
          <tr>
            <th>Form Title</th>
            <th>Created At</th>
            <th>Form URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms && forms.map((form) => (
            <tr key={form.slug}>
              <td>{form.title}</td>
              <td>{form.createdAt}</td>
              <td>{form.url}</td>
              <td>
                <button onClick={()=>handleEdit(form.title)}>Edit</button>
                <button onClick={()=>handleDelete(form.title)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormList;
