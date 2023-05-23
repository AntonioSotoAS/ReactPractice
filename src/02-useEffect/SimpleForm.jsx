import { useEffect, useState } from "react";
import Message from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username : 'antonioSoto',
        email: 'antoniosoto@gmail.com'
    });

    //desestructurando
    const {username,email} = formState;

    const onInputChange = ({ target }) => {
        const {name,value} = target;
        setformState({
            ...formState,
            [ name ] : value
        })

    }

    useEffect( () => {
        //console.log('useEffect change')
      }, [] );

    useEffect( () => {
      //console.log('forms change')
    }, [formState] );

    useEffect( () => {
        //console.log('email change')
      }, [ email ] );

    
      
    

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="antonio@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />

      {
      username === 'antonio2' && <Message />  
      }   
    </>
  );
};

export default SimpleForm;

