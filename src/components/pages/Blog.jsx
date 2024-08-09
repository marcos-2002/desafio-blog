import { ButtonForm } from "../form/Button.style";
import { InputForm } from "../form/Input.style";
import { TextAreaForm } from "../form/TextArea.style";

export default function Blog({className}) {

    function handleOnChange() {

    }

    return (
        <div className={className}>
            <h1>Blog</h1>
            <p>Crie e compartilhe seu blog</p>
            <InputForm
                name="titulo_blog"
                type="text"
                placeholder="Insira seu título"
                text='Insira o título'
                onChange={handleOnChange}
            />
            <TextAreaForm
                name='conteudo'
                text='Insira o conteúdo do blog'
                placeholder='Insira o conteúdo'
                onChange={handleOnChange}
            />
            <ButtonForm>Criar Blog</ButtonForm>
        </div>
    )
}