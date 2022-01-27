import React, { useContext, useEffect } from 'react';
import RowCliente from './RowCliente';
import { ClienteContext } from '../../contexts/clienteContext';

const TableCliente = () => {

    const{clientesList,obtenerClientes}=useContext(ClienteContext);

    

    useEffect(()=>{
        obtenerClientes();
        // eslint-disable-next-line 
    },[]);

    if(clientesList.length===0) return <center><p>No existen clientes.</p></center>

    return ( 
        <div className="table-container">
                        <table className='table is-hoverable is-fullwidth'>
                            <thead>
                                <tr>
                                    <th>Acciones</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Direccion</th>
                                    <th>Telefono</th>
                                    <th>Email</th>
                                </tr>
                            </thead> 
                            <tbody>
                                {
                                    clientesList.map(cliente=>(
                                        <RowCliente cliente={cliente} key={cliente.idCliente}/>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                    </div>
     );
}
 
export default TableCliente;