import React,{useContext} from 'react';
import { ClienteContext } from '../../contexts/clienteContext';
import { ModalContext } from '../../contexts/modalContex';
const ToolbarCliente = () => {

    const {setModalTitle, setShowModal} =useContext(ModalContext);

    const{obtenerCliente}= useContext(ClienteContext);

    const abrirModalCrear=()=>{
        setModalTitle('Registrar nuevo Cliente');
        setShowModal(true);
        obtenerCliente(null);
    }

    return (  
        <div className="container">
            <button 
                className="button is-small is-primary"
                onClick={()=>abrirModalCrear()}
                >
             <span className="icon is-small">
                <i className="fas fa-plus"></i>
             </span>
             <span>Registrar nuevo</span>
            </button>
        </div>
    );
}
 
export default ToolbarCliente;