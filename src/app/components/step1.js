import React, { useState } from "react";
import "../style.css";

const Step1 = ({ onNext }) => {
  const [cpf, setCpf] = useState("");

  const validateCPF = (cpf) => {
    if (cpf.length !== 11) {
      return false;
    }
  
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Calcular o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit1 = remainder >= 10 ? 0 : remainder;
  
    if (digit1 !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    // Calcular o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let digit2 = remainder >= 10 ? 0 : remainder;
  
    if (digit2 !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  };
  
  const handleNext = () => {
    if (validateCPF(cpf)) {
      onNext();
    } else {
      alert("CPF inválido");
    }
  };

  return (
    <>
      <div>
        <h2>Cadastre-se</h2>
        <div className="container">
          <label>Informe o seu CPF*</label>
          <div className="box1">
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <button onClick={handleNext} disabled={cpf.length !== 11}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
