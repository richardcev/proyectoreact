import { useState } from "react"
import "./Login.css"

const Login= () =>{
    const [user, setUser]= useState({
        username:"",
        password:""
    })

    const handleSubmit= (e) =>{
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(err => {
              console.log(err)
            });
    }

    return(
        <div className="login-container">
            <h2 className="titulo">Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="text" >Correo eléctronico</label>
                    <input  onChange={(e) =>{
                        setUser({
                            ...user,
                            username: e.target.value
                        })
                    }}
                     required type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="password" className="campo">Contraseña</label>
                    <input  onChange={(e) =>{
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }}
                    type="password" required/>
                </div>
                <div className="submit">
                    <input type="submit" className="boton" value="Ingresar" />
                </div>
            </form>
        </div>
    )
}

export default Login