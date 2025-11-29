import Logo from '../../assets/logo-inicio-sesion2.jpg'; 
import '../estilos/ImgLogo.css';
function ImgLogoRegistro (){
    return (
        <>
        <div className="logo-registro">
            <img src={Logo} alt="Logo DineMeNow" className="logo"/>
            <h4>DineMeNow</h4>
        </div>
        <p className="text-secondary small" style={{ textAlign: 'center' }}>
        Crea tu cuenta
        </p>
        </>
    )
    }
export default ImgLogoRegistro