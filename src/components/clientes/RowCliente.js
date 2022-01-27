import React, { useContext } from 'react';
import { ClienteContext } from '../../contexts/clienteContext';
import { ModalContext } from '../../contexts/modalContex';

const RowCliente = ({cliente}) => {

    const{setModalTitle, setShowModal}= useContext(ModalContext);

    const{obtenerCliente,eliminarCliente}=useContext(ClienteContext);

    const abrirModalModificarCliente = () =>{
        obtenerCliente(cliente);
        setModalTitle('Modificar Cliente');
        setShowModal(true);
    }

    

    return ( 
        <tr>
            <td>
                <button 
                    className="button is-small is-info mr-1" 
                    title='Modificar'
                    onClick={()=>abrirModalModificarCliente()}
                    >
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button 
                    className="button is-small is-danger" 
                    title='Eliminar'
                    onClick={()=>eliminarCliente(cliente.idCliente)}
                    >
                    <span className="icon is-small">
                    <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{cliente.nombres}</td>
            <td>{cliente.apellidos}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.email}</td>
        </tr>
     );
}
 
export default RowCliente;