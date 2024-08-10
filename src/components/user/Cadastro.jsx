import { InputForm } from "../form/Input.style"
import { ButtonForm } from "../form/Button.style"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Cadastro({className}){

    const [user, setUser] = useState({adm: false})
    const navigate = useNavigate()

    function handleOnChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(() => navigate('/login'))
        .catch((err) => console.log('Erro no cadastro de usuários: ' + err))
    }

    return(
        <div className={className}>
            <h2>Cadastro</h2>
            <p>Insira seus dados de cadastro</p>
            <form onSubmit={submit}>
                <InputForm
                    type='text'
                    text='Insira seu e-mail'
                    name='email'
                    placeholder='ex: email@email.com'
                    onChange={handleOnChange}
                />
                <InputForm
                    type='text'
                    text='Insira seu nome'
                    name='name'
                    placeholder='ex: Lucas da Silva'
                    onChange={handleOnChange}
                />
                <InputForm
                    type='password'
                    text='Insira sua senha'
                    name='password'
                    placeholder='Insira a senha'
                    onChange={handleOnChange}
                />
                <ButtonForm>Cadastrar</ButtonForm>
            </form>
        </div>
    )
}

export default Cadastro