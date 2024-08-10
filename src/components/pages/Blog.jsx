import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../form/Button.style";
import { InputForm } from "../form/Input.style";
import { TextAreaForm } from "../form/TextArea.style";
import { useUserContext } from "../hook/useUserContext";
import { useEffect, useState } from "react";

export default function Blog({className}) {

    const {currentUser} = useUserContext()
    const navigate = useNavigate()
    const [blog, setBlog] = useState()

    useEffect(() => {
        if(!currentUser){
            navigate('/login')
        }else {
            setBlog({...blog, emailUser:currentUser.email})
        }
    }, [])

    function handleOnChange(e) {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    function submit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/blogs', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => navigate('/'))
        .catch((err) => console.log('Erro ao inserir dados do blog: ' + err))
    }


    if(currentUser) {
        return (
            <div className={className}>
                    <h1>Blog</h1>
                    <p>Crie e compartilhe seu blog</p>
                    <form onSubmit={submit}>
                        <InputForm
                            name="title"
                            type="text"
                            placeholder="Insira seu título"
                            text='Insira o título'
                            onChange={handleOnChange}
                        />
                        <TextAreaForm
                            name='content'
                            text='Insira o conteúdo do blog'
                            placeholder='Insira o conteúdo'
                            onChange={handleOnChange}
                        />
                        <ButtonForm>Criar Blog</ButtonForm>
                    </form>
                </div>
        )
    }
}