import { InputForm } from "../form/Input.style"
import { ButtonForm } from "../form/Button.style"

function Login({className}){

    function handleOnChange(){

    }

    return (
        <div className={className}>
            <h1>Login</h1>
            <p>Novo no site? Registre-se</p>
            <form>
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