import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginUser } from './components/user/Login.style'
import { CadastroUser } from './components/user/Cadastro.style'
import { GlobalStyle } from './GlobalStyle.jsx'
import { BlogStyle } from './components/pages/Blog.style.jsx'
import { UpdateUser } from './components/user/Cadastro.style'
import { UsersStyle } from './components/pages/Users.style.jsx'
import UserProvider from './components/context/UserProvider.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/login',
        element: <LoginUser />
      },
      {
        path: '/cadastro',
        element: <CadastroUser />
      },
      {
        path:'/blog',
        element: <BlogStyle/>
      },
      {
        path: '/update',
        element: <UpdateUser />
      },
      {
        path: '/users',
        element: <UsersStyle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
