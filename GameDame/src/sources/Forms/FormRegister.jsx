import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Forms.css'
import EastIcon from '@mui/icons-material/East'

function FormRegister() {
  // Objeto formData iniciando com campos vazios atualizados pela função setFormData
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })
  // O estado errors irá armazenar uma mensagem de erro e setErrors atualiza este estado
  const [errors, setErrors] = useState({})
  
  // Direcionamento
  const nav = useNavigate()

  // Máscara para CPF
  const Change = (e) => {
    // Obtem o id e o value
    const { id, value } = e.target
    // se o evento tiver sido disparado no id "cpf", remove caracteres não numéricos e a máscara é aplicada
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

  // Esta função faz a verificação dos campos do objeto formData
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

    // O estado de errors é atualizado pelo newErrors, se algum campo estiver vazio, retorna uma mensagem de erro
    setErrors(newErrors)
    // Retorna "true" se não houver nenhum erro
    return Object.keys(newErrors).length === 0
  }

  // Função para validar os dados do formulário
  const Submit = (e) => {
    // Evita o recarregamento
    e.preventDefault()
    // Recebe a função de validação e verifica. Se for válida retorna "true"
    if (validateForm()) {
      // obtem a lista de localStorage ou cria uma lista vazia onde são adicionados os dados
      const users = JSON.parse(localStorage.getItem("users")) || []
      users.push({
        username: formData.username,
        email: formData.email,
        cpf: formData.cpf,
        password: formData.password,
      })
      localStorage.setItem("users", JSON.stringify(users))
      // Redireciona para a página de login
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
