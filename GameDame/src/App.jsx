import React from 'react'
import { createRoot } from 'react-dom/client'
import FormRegister from './formRegister'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormRegister /> 
  </React.StrictMode>,
)