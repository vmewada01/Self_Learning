import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    isIndian: false,
  });

  const handleChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    // console.log(checked, type, name, value,files )

    if (type == "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type == "checkbox") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const ref = useRef();
  const passRef = useRef();

  const handleOnsubmit = (e) => {
    e.preventDefault();

    if (!form.username) ref.current.focus();
    else if (!form.password) passRef.current.focus();
    console.log(form);
  };

  useEffect =
    (() => {
      console.log(form);
    },
    [form]);

  return (
    <div>
      Form
      <form onSubmit={handleOnsubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            ref={ref}
            value={form.username}
            name="username"
            onChange={handleChange}
            placeholder="Enter Name Here...."
          />
        </div>
        <div>
          <label>Age :</label>
          <input
            type="number"
            value={form.age}
            name="age"
            onChange={handleChange}
            placeholder="Enter Age Here...."
          />
        </div>
        <div>
          <label>E-mail :</label>
          <input
            type="text"
            value={form.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter E-mail Here...."
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            ref={passRef}
            value={form.password}
            name="password"
            onChange={handleChange}
            placeholder="Enter Password Here...."
          />
        </div>
        <div>
          <label> City : </label>
          <select name="city" onChange={handleChange} value={form.city}>
            <option value=""></option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bhopal">Bhopal</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            checked={form.isIndian}
            name="isIndian"
            onChange={handleChange}
          />
          <label> : Is Indian</label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={handleChange}
            />
            <label> Male</label>
          </div>
          <div>
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={handleChange}
            />
            <label> Female</label>
          </div>
        </div>
        <div>
          <label> User Resume : </label>
          <input
            type="file"
            files={form.resume}
            name="resume"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
