import Logo from '../../assets/logo-inicio-sesion2.jpg'; 
import '../estilos/Registrocliente.css';
function ImgLogoRegistro (){
    return (
        <>
        <div>
            <img src={Logo} alt="Logo DineMeNow" className="logo-Regristro"/>
            <h4>DineMeNow</h4>
        </div>
        </>
    )
    }
export default ImgLogoRegistro