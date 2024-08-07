import { InputForm } from "../form/Input.style"
import { ButtonForm } from "../form/Button.style"

function Cadastro({className}){

    function handleOnChange(){

    }

    return(
        <div className={className}>
            <h2>Cadastro</h2>
            <p>Insira seus dados de cadastro</p>
            <form>
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