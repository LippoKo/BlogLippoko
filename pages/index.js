import React, { useState } from 'react';

const ToggleVisibility = () => {
  // Define o estado local para controlar a visibilidade do parágrafo
  const [isVisible, setIsVisible] = useState(true);

  // Função para alternar a visibilidade ao clicar no botão
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Inverte o valor atual de isVisible
  };

  // Retorna a estrutura do componente, incluindo um botão e um parágrafo cuja visibilidade é controlada pelo estado
  return (
    <div>
      {/* Botão para alternar a visibilidade */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar' : 'Mostrar'}
      </button>

      {/* Parágrafo cuja visibilidade é condicional ao estado 'isVisible' */}
      {isVisible && <p>Este parágrafo está visível!</p>}
    </div>
  );
};

export default ToggleVisibility;
