import React, { useState } from "react";
import Card from "./Card";
import {
  Alert
} from '@mui/material';
const Form = () => {
  const [quiz, setQuiz] = useState({
    name: "",
    description: "",
  });
  const [flag, setFlag] = useState(null);
  //Crear un estado para manejar el renderizado del mensaje de error
  const handleName = (e) => {
    setQuiz({ ...quiz, name: e.target.value });
  };
  const handleDescription = (e) => {
    setQuiz({ ...quiz, description: e.target.value });
  };

  const validateByLength = (value, size) => {
    const withoutSpaces = value.trim();
    return withoutSpaces.length >= size;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateByLength(quiz.name, 3);
    const isDescriptionValid = validateByLength(quiz.description, 6);
    let result = null;
    if (!isNameValid || !isDescriptionValid) {
      result = false;
    } else {
      result = true;
    }
    //Realizar validaciones para después mostrar un mensaje de error
    setFlag(result);
  };

  const result = () => {
    if (flag === null)  return <div></div>;
    return flag ? (<Alert severity="success">Registration successfully.</Alert>) : (<Alert severity="error">Please check that the information is correct.</Alert>)
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            value={quiz.name}
            onChange={handleName}
            required
          />
        </div>
        <div>
          <label>Descripcion: </label>
          <input
            type="text"
            value={quiz.description}
            onChange={handleDescription}
            required
          />
        </div>
        <button type="submit">Registrar</button>
       </form>
      {result()}
    </div>
  );
};

export default Form;
