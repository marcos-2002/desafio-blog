import { InputForm } from "../form/Input.style"
import { ButtonForm } from "../form/Button.style"
import { useUserContext } from "../hook/useUserContext"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Updade({className}){

    const {currentUser, setCurrentUser} = useUserContext()
    const [userUpdate, setUserUpdate] = useState(currentUser || {})
    const navigate = useNavigate()

    function handleOnChange(e){
        setUserUpdate({...userUpdate, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        fetch(`http://localhost:5000/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userUpdate)
        })
        .then((res) => res.json())
        .then((data) => {
            setCurrentUser(data)
            navigate('/')
        })
        .catch((err) => console.log('Erro ao atualizar dados de usuário: ' + err))
    }

    useEffect(() => {
        if(!currentUser){
            navigate('/login')
        }
    }, [])

    if(currentUser){
        return (
            <div className={className}>
                <h2>Atualizar</h2>
                <p>Insira seus dados de atualização</p>
                <form onSubmit={submit}>
                    <InputForm
                        type='text'
                        text='Insira seu e-mail'
                        name='email'
                        placeholder='ex: email@email.com'
                        value={userUpdate.email}
                        onChange={handleOnChange}
                    />
                    <InputForm
                        type='text'
                        text='Insira seu nome'
                        name='name'
                        placeholder='ex: Lucas da Silva'
                        value={userUpdate.name}
                        onChange={handleOnChange}
                    />
                    <InputForm
                        type='password'
                        text='Insira sua senha'
                        name='password'
                        placeholder='Insira a senha'
                        value={userUpdate.password}
                        onChange={handleOnChange}
                    />
                    <ButtonForm>Atualizar</ButtonForm>
                </form>
            </div>
        )
    }
}

export default Updade