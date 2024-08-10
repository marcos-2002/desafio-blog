import { InputForm } from "../form/Input.style"
import { ButtonForm } from "../form/Button.style"
import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from '../hook/useUserContext.jsx'
import { useEffect, useState } from "react"

function Login({className}){

    const {currentUser, setCurrentUser} = useUserContext()
    const [users, setUsers] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log('Erro ao carregar dados de usuário: ' + err))
    }, [])

    function handleOnChange(e){
        setCurrentUser({...currentUser, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        if(users){
            users.map((user) => {
                if(user.email === currentUser.email && user.password === currentUser.password){
                    setCurrentUser(user)
                    navigate('/')
                }
            })
        }
    }

    return (
        <div className={className}>
            <h1>Login</h1>
            <p>Novo no site? <Link to='/cadastro'>Registre-se</Link></p>
            <form onSubmit={submit}>
                <InputForm
                    type='text'
                    text='Insira seu e-mail'
                    name='email'
                    placeholder='ex: email@email.com'
                    onChange={handleOnChange}
                />
                <InputForm
                    type='password'
                    text='Insira sua senha'
                    name='password'
                    placeholder='Insira a senha'
                    onChange={handleOnChange}
                />
                <ButtonForm>Entrar</ButtonForm>
            </form>
        </div>
    )
}

export default Login