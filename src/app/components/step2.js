import React, { useState } from "react";
import "../style.css";

const Step2 = ({ onNext, onBack }) => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === "") {
      setName(inputValue);
    }
  };

  const validateBirthDate = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 16;
  };

  const handleBirthDateChange = (e) => {
    const inputValue = e.target.value;
    if (validateBirthDate(inputValue) || inputValue === "") {
      setBirthDate(inputValue);
    } else {
      alert("Você deve ter mais de 16 anos.");
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const maskedValue = inputValue
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
    setPhone(maskedValue);
  };

  const handleNext = () => {
    if (name && birthDate && phone) {
      onNext();
    } else {
      alert("Todos os campos são obrigatórios.");
    }
  };

  return (
    <>
      <div className="form">
        <div className="container2">
          <div className="box">
            <label>Nome*</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Seu nome completo"
            />
          </div>
          <div className="inline-fields">
            <div className="box">
              <label>Data de Nascimento*</label>
              <input
                type="date"
                value={birthDate}
                onChange={handleBirthDateChange}
                placeholder="dd/mm/aa"
              />
            </div>
            <div className="box">
              <label>Celular*</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
                placeholder="(99) 01234-5678"
              />
            </div>
          </div>
          <p>Campos marcados com * são obrigatórios</p>
          <div className="button-container">
            <button onClick={handleNext}>Próximo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
