import { useEffect, useState } from 'react'
import {useUserContext} from '../hook/useUserContext'
import { ButtonRemove } from '../form/Button.style'

function Users({className}){
    const {currentUser} = useUserContext()
    const [users, setUsers] = useState(null)
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log('Erro ao carregar dados de usuários: ' + err))

        fetch('http://localhost:5000/blogs', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((err) => console.log('Erro ao carregar blogs de usuários: ' + err))
    }, [])

    function remove(id, email, blogs){

        blogs.map((blog) => {
            if(blog.emailUser === email){
                fetch(`http://localhost:5000/blogs/${blog.id}`, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log('Erro ao deletar dados de blog: ' + err))
            }
        })

        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log('Erro ao deletar dados de usuários: ' + err))
    }


    if (currentUser && currentUser.adm) {
        return (
            <div className={className}>
                {users && users.map((user) => (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <ButtonRemove id={user.id} email={user.email} blogs={blogs} onClick={remove}>Excluir usuário</ButtonRemove>
                    </div>
                ))}
            </div>
        );
    }

}

export default Users