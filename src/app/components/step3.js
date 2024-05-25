import React, { useState } from "react";
import axios from "axios";
import "../style.css";

const Step3 = ({ onFinish, onBack }) => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");

  const handleCepChange = async (e) => {
    const cepValue = e.target.value;
    setCep(cepValue);

    if (cepValue.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cepValue}/json/`
        );
        const data = response.data;
        setAddress(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const handleFinish = () => {
    if (cep) {
      onFinish();
    } else {
      alert("CEP é obrigatório.");
    }
  };

  return (
    <div className="form">
      <div className="container2">
        <div className="inline-fields2">
          <div className="box">
            <label>CEP*</label>
            <input
              type="text"
              value={cep}
              onChange={handleCepChange}
              placeholder="CEP"
            />
          </div>
          <div className="box">
            <label>Logradouro</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Endereço"
            />
          </div>
          <div className="box">
            <label>Numero</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Numero"
            />
          </div>
        </div>
        <div className="box">
          <label>Bairro</label>
          <input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            placeholder="Bairro"
          />
        </div>
        <div className="inline-fields">
          <div className="box">
            <label>UF</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Estado"
            />
          </div>
          <div className="box">
            <label>Cidade</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Cidade"
            />
          </div>
        </div>
        <p>Campos marcados com * são obrigatórios</p>
        <div className="button-container">
          <button className="voltar-button" onClick={onBack}>Voltar</button>
          <button onClick={handleFinish}>Finalizar</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
