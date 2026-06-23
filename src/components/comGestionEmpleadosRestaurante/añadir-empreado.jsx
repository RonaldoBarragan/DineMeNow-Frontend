import { LiaEbay } from 'react-icons/lia';
import './añadir-empreado.css'
import { LuUserRoundPlus } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
function Añadirempreado (){
return (
        <>
        <div className="card-Añadir">
            <p className='registro-empleado'> <LuUserRoundPlus /> Registro de Nuevo Empleado</p>
            <p className='datos-empre'> <LuUser /> Datos Personales</p>

            <label>Primer Nombre *</label>
            <input type='text' placeholder='Ej:Carlos'></input>

            <label>Segundo Nombre</label>        
            <input type='text' placeholder='Ej:Alberto'></input>

            <label>Primer Apellido *</label>
            <input type='text' placeholder=''></input>

            <label>Segundo Apellido</label>
            <input type='text' placeholder='Ej:Perez'></input>

            <label>Correo Electronico *</label>
            <input type='email' placeholder='ejemplo@correo.com'></input>

            <label>Telefono *</label>
            <input type='tel' placeholder='3201234567'></input>

            <p className='datos-empre'>Datos Laborales</p>

            <label>Cargo/Puesto *</label>
            <select>
                <option>Seleccione un cargo</option>
                <option>Mesero</option>
                <option>Cocina</option>
                <option>Cajero</option>
                <option>Supervisor</option>
            </select>
        </div>
        
      </>
    )
}
export default Añadirempreado;