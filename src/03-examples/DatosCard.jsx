import { useState } from "react"

const DatosCard = ( id ) => {

    const [id, setId] = useState(id)

    const {data,isLoading,hasError} = useFetch('https://rickandmortyapi.com/api/character/{id}')

  return (
    <div>
      
    </div>
  )
}

export default DatosCard
