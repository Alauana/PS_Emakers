import './Admin.css'
import Navbar from '../NavBar/NavBar'

function Admin() {
    return(
        <div className="container">
            <Navbar/>
            <div className="admin">
                <div className="register-game">
                    <legend>Cadastrar Jogo</legend>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <div className="input-register">
                            <input type="text" id='title' placeholder="Título do Jogo"/>
                        </div>
                        <div className="input-register">
                            <input type="text" id='gender' placeholder="Gênero"/>
                        </div>
                        <div className="input-register">
                            <input type="text" id='description' placeholder="Descrição"/>
                        </div>
                        <div className="input-register">
                            <input type="text" id='image' placeholder="Inserir Imagem"/>
                        </div>
                        <div className="register-button">
                            <button className='cadastrar'>Cadastrar</button>
                        </div>
                    </form>
                </div>
                <div className="delete-game">
                    <legend>Remover Jogo</legend>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <div className="input-delete">
                            <input type="text" id='title-id' placeholder="Título do Jogo ou ID"/>
                        </div>
                        <div className="delete-button">
                            <button className='remover'>Remover</button>
                        </div>
                    </form>
                </div>
                <div className="edit-game">
                    <legend>Editar Jogo</legend>
                    <form action="/public/save-classes" id="create-class" method="POST">
                        <div className="input-edit">
                            <input type="text" id='title' placeholder="Título do Jogo"/>
                        </div>
                        <div className="input-edit">
                            <input type="text" id='gender' placeholder="Gênero"/>
                        </div>
                        <div className="input-edit">
                            <input type="text" id='description' placeholder="Descrição"/>
                        </div>
                        <div className="input-edit">
                            <input type="text" id='image' placeholder="Inserir Imagem"/>
                        </div>
                        <div className="edit-button">
                            <button className='modificar'>Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin