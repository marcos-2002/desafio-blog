import { Link } from "react-router-dom"

function Navbar({className}){
    return (
        <header className={className}>
            <h1><Link to='/'>Tarefas</Link></h1>
            <nav>
                <a>Usuario</a>
                <a>Usuario</a>
                <a>Usuario</a>
                <a>Usuario</a>
                <a>Usuario</a>
            </nav>
        </header>
    )
}

export default Navbar