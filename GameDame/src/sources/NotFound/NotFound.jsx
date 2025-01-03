import "./NotFound.css"

function NotFound() {
    return (
        <div className="container">
            <div className="NotFound">
                <div className="error-message">
                    <div className="ops">Ops...</div>
                    Parece que a página que você está procurando não existe, campeão!
                    <button className="return">Retornar para Home</button>
                </div>
                <img src="../../../public/images/chibi.png" alt="erro" />
            </div>
        </div>
    )
}

export default NotFound