import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormRegister() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const nav = useNavigate()

  const Change = (e) => {
    const { id, value } = e.target
    if (id === "cpf") {
      let maskedValue = value.replace(/\D/g, "")
      if (maskedValue.length <= 11) {
        maskedValue = maskedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      }
      setFormData({ ...formData, [id]: maskedValue })
    } else {
      setFormData({ ...formData, [id]: value })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.username) newErrors.username = "Campo obrigatório"
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.cpf || formData.cpf.length !== 14) {
      newErrors.cpf = "CPF inválido"
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Senha precisa ter pelo menos 6 caracteres"
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não conferem"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const Submit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem("users")) || []
      users.push({
        username: formData.username,
        email: formData.email,
        cpf: formData.cpf,
        password: formData.password,
      })
      localStorage.setItem("users", JSON.stringify(users))
      nav("/login")
    }
  }

  return (
    <div id="container">
      <div className="registerPage">
        <main>
          <form onSubmit={Submit} id="create-class">
            <legend>Registrar</legend>

            <div className="input-block" id='username'>
              <input type="text" id="username"
                placeholder="Nome de Usuário" value={formData.username} onChange={Change}/>
              {errors.username && <a style={{ display: "block" }}>{errors.username}</a>}
            </div>
            <div className="input-block" id='email'>
              <input type="email" id="email" placeholder="E-mail" value={formData.email} onChange={Change}/>
              {errors.email && <a style={{ display: "block" }}>{errors.email}</a>}      
            </div>
            <div className="input-block" id='cpf'>
              <input type="text" id="cpf" maxLength="14" placeholder="CPF" value={formData.cpf} onChange={Change}/>
              {errors.cpf && <a style={{ display: "block" }}>{errors.cpf}</a>}
            </div>
            <div className="input-block" id='password'>
              <input type="password" id="password" placeholder="Senha" value={formData.password} onChange={Change}/>
              {errors.password && <a style={{ display: "block" }}>{errors.password}</a>}
            </div>
            <div className="input-block" id='password-confirmation'>
              <input type="password" id="confirmPassword" placeholder="Confirmar Senha" value={formData.confirmPassword} onChange={Change}/>
              {errors.confirmPassword && <a style={{ display: "block" }}>{errors.confirmPassword}</a>}
            </div>

            <div className="arrow">
              <button className="next">
                <EastIcon fontSize="inherit"/>
              </button>
            </div>
          </form>

          <div className="loginUp">
            <button name="login" onClick={() => nav('/login')}>Fazer Login</button>
          </div>
        </main>
        <div className="imagem">  
          <img src="/images/capa.svg" alt="banner" />
        </div>
      </div>    
    </div>
  )
}

export default FormRegister
