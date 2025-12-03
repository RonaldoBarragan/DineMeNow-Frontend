import Formulario from "../components/comRegistroCliente/formulario";
import BotonCancelar from "../components/common/botoncancelar";
import ImgLogoGlobal from "../components/common/imgLogo";
const CrearCuentaCliente=() =>{
    return(
        <>
        <BotonCancelar/>
        <ImgLogoGlobal
        texto="Crear Cuenta"/>
        <Formulario/>
        </>
    )
}
export default CrearCuentaCliente