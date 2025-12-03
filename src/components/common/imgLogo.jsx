import Logo from '../../assets/logo-inicio-sesion2.jpg'; 
import './ImgLogo.css';
function ImgLogoGlobal ({ texto }) {
    return (
        <>
        <div className="logo-registro">
            <img src={Logo} alt="Logo DineMeNow" className="logo"/>
            <h4>DineMeNow</h4>
        </div>
        <p className="text-secondary small" style={{ textAlign: 'center' }}>
        {texto}
        </p>
        </>
    )
    }
export default ImgLogoGlobal