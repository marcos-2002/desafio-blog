import { Link } from "react-router-dom"
import { useUserContext } from "../hook/useUserContext"

function Navbar({className}){

    const {currentUser} = useUserContext()

    return (
        <header className={className}>
            <h1><Link to='/'>Blog</Link></h1>
            <nav>
            <Link to='/'>Home</Link>
                <Link to='/blog'>Criar blog</Link>
                <Link to='/users'>{currentUser && currentUser.adm ? 'Usuários': ''}</Link>
                <Link to='update'>Usuario</Link>
            </nav>
        </header>
    )
}

export default Navbar