import './AccountPage.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Navbar from "../NavBar/NavBar"

function AccountPage() {
  const nav = useNavigate()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((u) => u.username === loggedUser)

    if (user) {
      setUserData(user)
    } else {
      nav("/login")
    }
  }, [nav])

  const DeleteAccount = () => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const updatedUsers = users.filter((u) => u.username !== userData.username)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
    localStorage.removeItem("loggedUser")
    nav("/registrar")
  }

  if (!userData) return null

  return (
    <div id="container">
      <Navbar />
      <div className="AccountPage">
        <div className="dados">
          <div className="infos">
            <h1>Olá, {userData.username}</h1>
            <h2>Seu email é {userData.email}</h2>
            <h2>Seu CPF é {userData.cpf}</h2>
          </div>
          <div className="buttons">
            <button className='alterar'>
              Alterar Dados 
              <div className="editIcon">
                <EditIcon fontSize='inherit'/>
              </div>
            </button>
            <button className='excluir' onClick={DeleteAccount}>
              Excluir Conta 
              <div className="deleteIcon">
                <DeleteForeverIcon fontSize='inherit'/> 
              </div>
            </button>
            <button className='admin' onClick={() => nav('/admin')}>
              Tela do admin
            </button>
          </div>
        </div>

        <div className="adquiridos">
          <div className="legend">Jogos Adquiridos:</div>
      
          <div className="games">
            <div className="image">
              <img src='/images/bobEsponja.svg' alt='BobEsponja'/>
              <h4>100/100</h4>
            </div> 
            <div className="image">
              <img src='/images/Deliver.svg' alt='Deliver'/>
              <h4>95/100</h4>
            </div> 
            <div className="image">
              <img src='/images/GodofWar.svg' alt='GodofWar'/>
              <h4>75/100</h4>
            </div> 
            <div className="image">
              <img src='/images/deathStranding.svg' alt='deathStranding'/>
              <h4>Adicionar Avaliação</h4>
            </div>                                         
          </div>
        
          <div className="carrinho">
            <button className="carrinho" onClick={() => nav('/carrinho')}><ShoppingCartOutlinedIcon fontSize='large'/></button>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default AccountPage
