import React ,{ useContext, useEffect, useState }from 'react';
import { ClienteContext } from '../../contexts/clienteContext';
import { ModalContext } from '../../contexts/modalContex';

const FormCliente = () => {

    const {setShowModal} =useContext(ModalContext);

    const{registrarCliente, actualizarCliente,clienteActual,obtenerCliente}= useContext(ClienteContext);

    const clienteDefault={
        nombres: '',
        apellidos:'',
        direccion:'',
        telefono: '',
        email:'',

    }

    const [cliente, setCliente]=useState(clienteDefault);

    const [mensaje, setMensaje]=useState(null);

    useEffect(()=>{
      if(clienteActual!== null){
        setCliente({
          ...clienteActual,
          direccion: clienteActual.direccion ? clienteActual.direccion : '',
          telefono: clienteActual.telefono ? clienteActual.telefono : '',
        })
      }else{
        setCliente(clienteDefault);
      }
    },[clienteActual])

    const handleChange= e=>{
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e =>{
        e.preventDefault();

        //validacion
        if(cliente.nombres.trim() ==='' || cliente.apellidos.trim()==='' || cliente.email.trim()===''){
            setMensaje('Los nombre, apellidos y el email son obligatorios');
            return;
        }

        
        //obtener objeto a enviar
        if(clienteActual !== null){
            actualizarCliente(obtenerClienteAEnviar());
        }
        else{
            registrarCliente(obtenerClienteAEnviar());
        }
        


        //cerra y limpiar el modal
        
        cerrarModal();
        
    } 

    const limpiarForm= () => {
        setMensaje(null);
        setCliente(clienteDefault);
    }

    const cerrarModal= () => {
        limpiarForm();
        setShowModal(false);
        obtenerCliente(null);
    }

    const obtenerClienteAEnviar =()=>{
        //eliminamos los componenetes que no tengan datos
        let clienteTemp={...cliente};
        if(clienteTemp.direccion==="")delete clienteTemp.direccion;
        if(clienteTemp.telefono==="")delete clienteTemp.telefono;
        return clienteTemp;
    }

    return ( 
        <form onSubmit={handleOnSubmit}>

        {mensaje ? <div className="notification is-danger">{mensaje}</div>: null}
            
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Nombre Completo</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Nombre"
                name="nombres"
                value={cliente.nombres}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                value={cliente.apellidos}
                onChange={handleChange}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Direccion</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su direccion"
                name="direccion"
                value={cliente.direccion}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-map-marked-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Telefono</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Telefono"
                name="telefono"
                value={cliente.telefono}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Email</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="email"
                placeholder="Ingrese su Email"
                name="email"
                value={cliente.email}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">Guardar</button>
              <button
                type="button"
                className="button"
                onClick={()=> cerrarModal()}
              >Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
     );
}
 
export default FormCliente;