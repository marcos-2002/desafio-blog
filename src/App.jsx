import { Outlet } from "react-router-dom"
import { FooterStyled } from "./components/layout/Footer.style"
import { NavbarStyled } from "./components/layout/Navbar.style"


function App() {

  return (
    <>
      <NavbarStyled />
      <Outlet />
      <FooterStyled />
    </>
  )
}

export default App
