import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({})
  const nav = useNavigate()

  const Change = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username) newErrors.username = "Campo obrigatório"
    if (!formData.password) newErrors.password = "Campo obrigatório"

    // Recebe a lista de usuários
    const users = JSON.parse(localStorage.getItem("users")) || []
    // Procura o usuário igual e a senha
    const user = users.find((u) => u.username === formData.username && u.password === formData.password)

    // Se não encontrar retorna a mensagem de erro geral
    if (!user) {
      newErrors.general = "Usuário ou senha inválidos"
    }

    // Atualiza o estado
    setErrors(newErrors)
    // Retorna "true" se não houver erros
    return Object.keys(newErrors).length === 0
  }

  const Submit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Armazena os dados e encaminha para "conta"
      localStorage.setItem("loggedUser", JSON.stringify(formData.username))
      nav("/conta")
    }
  }

  return (
    <div id="container">
      <div className="registerPage">
        <main>
          <form onSubmit={Submit} id="create-class">
            <legend>Login</legend>
            <div className="input-block">
              <input type="text" id="username" placeholder="Nome de Usuário" value={formData.username} onChange={Change}/>
              {errors.username && <a style={{ display: "block" }}>{errors.username}</a>}       
            </div>
            <div className="input-block">
              <input type="password" id="password" placeholder="Senha" value={formData.password} onChange={Change}/>
              {errors.password && <a style={{ display: "block" }}>{errors.password}</a>}
            </div>
            {errors.general && <a style={{ display: "block", color: "red" }}>{errors.general}</a>}
            <div className="arrow">
              <button className="next">
                <EastIcon fontSize="inherit"/>
              </button>
            </div>
          </form>

          <div className="loginUp">
            <button name="createAccount" onClick={() => nav('/registrar')}>Criar Conta</button>
            <button name="forgotPassword" onClick={() => nav('/recuperar')}>Esqueceu a Senha?</button>
          </div>
        </main>

        <div className="imagem">  
          <img src="/images/capa.svg" alt="banner" />
        </div>
      </div>    
    </div>
  )
}

export default FormLogin
