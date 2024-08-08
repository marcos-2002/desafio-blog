import { Outlet } from "react-router-dom"
import { FooterStyled } from "./components/layout/Footer.style"
import { NavbarStyled } from "./components/layout/Navbar.style"
import TextArea from "./components/form/TextArea"
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
