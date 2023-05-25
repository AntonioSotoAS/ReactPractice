import React, { useState } from "react";
import useFetchData from "../helpers/useFetchData";
import Card from "./Card";

export const MultipleCustomHooks = () => {
  const [searchId, setSearchId] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { data, hasError: fetchError } = useFetchData(searchId);

  const onInputPersonageId = (event) => {
    setSearchId(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (searchId) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setHasError(false); // Reiniciar el estado de error
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${searchId}`
      );
      if (response.status === 404) {
        setHasError(true); // Establecer el estado de error si el card no existe
      } else {
        const data = await response.json();
        setCharacterList([...characterList, data]);
        setShowList(true);
        setSearchId("");
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setHasError(true); // Establecer el estado de error si ocurre un error en la petición
    }
  };

  const onDelete = (index) => {
    const updatedList = [...characterList];
    updatedList.splice(index, 1);
    setCharacterList(updatedList);
  };

  const onDeleteAll = () => {
    setCharacterList([]);
    setShowList(false);
  };

  return (
    <>
      <h1>Rick and Morty</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <input
          type="number"
          className="form-control"
          placeholder="Buscar por Id"
          name="idRickyandMorty"
          value={searchId}
          onChange={onInputPersonageId}
        />

        <button variant="primary" type="submit">
          Agregar
        </button>
      </form>

      {showList && characterList.length > 0 && (
        <button onClick={onDeleteAll}>Eliminar todo</button>
      )}


      {isLoading && <div>Loading...</div>}

      {hasError && <div>No existe un card con ese ID</div>}

      {showList && (
        <div className="character-list">
          {characterList.map((character, index) => (
            <Card
              key={index}
              name={character.name}
              image={character.image}
              status={character.status}
              type={character.type}
              gender={character.gender}
              onDelete={() => onDelete(index)}
            />
          ))}
        </div>
      )}

      
    </>
  );
};

export default MultipleCustomHooks;
