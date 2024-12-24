import './AccountPage.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function AccountPage() {
    return (
        <div id="container">
            <div className="AccountPage">
                <div className="dados">
                    <div className="text">
                        <h1>Olá, Usuário</h1>
                        <h2>Seu email é ...</h2>
                        <h2>Seu CPF é ...</h2>
                    </div>
                    <div className="buttons">
                        <button className='alterar'>Alterar Dados <EditIcon fontSize='small'/></button>
                        <button className='excluir'>Excluir Conta <DeleteForeverIcon fontSize='small'/> </button>
                        <button className='admin'>Tela do admin</button>
                    </div>
                </div>

                <div className="games">
                    <div className="image">
                        <img src='../../../public/images/bobEsponja.svg' alt='BobEsponja'/>
                        <br/>
                        <h4>100/100</h4>
                    </div> 
                    <div className="image">
                        <img src='../../../public/images/Deliver.svg' alt='Deliver'/>
                        <br/>
                        <h4>95/100</h4>
                    </div> 
                    <div className="image">
                        <img src='../../../public/images/GodofWar.svg' alt='GodofWar'/>
                        <br/>
                        <h4>75/100</h4>
                    </div> 
                    <div className="image">
                        <img src='../../../public/images/deathStranding.svg' alt='deathStranding'/>
                        <br/>
                        <h4>Adicionar Avaliação</h4>
                    </div>                                         
                </div>
                <div className="carrinho">
                    <button className="carrinho"><ShoppingCartOutlinedIcon fontSize='large'/></button>
                </div>
            </div>    
        </div>
    )
}

export default AccountPage
