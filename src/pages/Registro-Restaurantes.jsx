import React, {useState} from "react";
import Form_Restaurante from "../components/comRegistro-Restaurantes/form-info-restaurante";
import Form_Info_Operativa from "../components/comRegistro-Restaurantes/form-info-operativa";
import Form_Info_Documentos from "../components/comRegistro-Restaurantes/form-info-documentacion";
import {RegistrarRestaurante} from "../api/RestaurantRegister";// Importa la función para registrar el restaurante
import { Form } from "react-bootstrap";
import '../components/comRegistro-Restaurantes/page-style.css';

export default function RegistroCompleto() {
    //datos igual al dto
    const [formData, setFormData] = useState({
        propietario: "",
        nit: "",
        razonSocial: "",
        nombre: "",
        descripcion: "",
        capacidad: "",
        categoria: "",
        telefono: "",
        correo: "",

        //objeto anidado para la direccion
        direccion:{
            calle: "",
            numero: "",
            ciudad: "",
            codigoPostal: "",
            pais: ""
        },

        //array para servicios adicionales
        servicios: [],

        horarioApertura: "00:00",
        horarioCierre: "00:00",

        diasAbierto: [],
        foto: "",
        urlRut: "",
        urlCamaraComercio: "",

        estado: "PENDIENTE",
        password: "", //se genera en el back, pero el dto lo tiene como requerido, por eso se inicializa como ""
        mustChangePassword: false //booleano para indicar si el usuario debe cambiar su contraseña al iniciar sesión por primera vez
     });


     //funcion para manejar texto normal(nombre, descripcion, etc)
        const handleChange = (e) => {
            const { name, value } = e.target;

            //si el campo es capacidad, convertir el valor a número para el back
            const valorFinal = name === "capacidad" ? parseInt(value) || 0 : value; //si el valor no es un número válido, se asigna 0
            
            setFormData({
                ...formData,
                [name]: valorFinal
            });
        };

        //funcion para manejar la direccion, que es un objeto anidado
        const handleDireccionChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                direccion: {
                    ...formData.direccion,
                    [name]: value
                }
            });
        };

        //funcion para los archivos (rut y cc)
        const handleFileChange = (nombreCampo, archivo)=>{
            // Por ahora, como el Back espera un String (URL), se guardarda 
        // el nombre del archivo para probar. 
        // Luego se conectara con un servidor de verdad.

        setFormData({
            ...formData,
            [nombreCampo]: archivo ? archivo.name: ""
        });
    };

    //funcion que envia todo al back
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            // Creamos una copia limpia para el envío
        const datosParaEnviar = {
            ...formData,
            // Filtramos cualquier valor nulo, indefinido o vacío que se haya colado
            servicios: formData.servicios.filter(s => s !== null && s !== undefined && s !== ""),
            diasAbierto: formData.diasAbierto.filter(d => d !== null && d !== undefined && d !== "")
        };

        console.log("Datos limpios que viajan al Back: ", datosParaEnviar);
        const respuesta = await RegistrarRestaurante(datosParaEnviar);
        alert("¡Registro exitoso! Revisa tu correo.");
    } catch(error){
        console.error("Error al Registrar: ", error);
        
        // Si el error trae el mensaje del back, se muestra
        const mensajeError = error.response?.data || "No se pudo enviar el registro. Revisa los campos";
        alert(mensajeError);
        }  
    };

    return(
        <form onSubmit={handleSubmit} className="container mt-4">
        {/*seccion 1: datos basicos*/}
        <Form_Restaurante
            onChange={handleChange}
            onDireccionChange={handleDireccionChange}
            valores={formData}
        />

        {/*seccion 2: operativa*/}
        <Form_Info_Operativa
            onChange={handleChange}
            onDireccionChange={handleDireccionChange}
            setFormData={setFormData}//para poder editar servicios
            valores={formData}
        />

        {/*seccion 3: documentos*/}
        <Form_Info_Documentos
            onFileChange={handleFileChange}
            valores={formData}
        />

        <div className="d-flex justify-content-center gap-3 mt-5 mb-5">
             <button type="button" className="btn btn-secondary px-4" href="/">
             Cancelar
             </button>

            <button type="submit" className="px-4 buttonNaranjaDegrade">
                Enviar Solicitud
            </button>
        </div>
    </form>
    );
}
