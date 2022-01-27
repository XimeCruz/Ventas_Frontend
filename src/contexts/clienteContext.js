import React, { createContext, useReducer } from 'react';
import { OBTENER_CLIENTES, REGISTRAR_CLIENTE,OBTENER_CLIENTE,MODIFICAR_CLIENTE, ELIMINAR_CLIENTE} from '../const/actionTypes';
import clienteReducer from '../reducer/clienteReducer';

import { v4 as uuidv4 } from 'uuid';

export const ClienteContext = createContext();

export const ClienteContextProvider = props=>{

    const initialState={
        clienteList: [],
        clienteActual: null
    }

    const [state,dispatch]= useReducer(clienteReducer,initialState );

    const obtenerClientes = ()=>{
        const clientes= [
            {
                "idCliente":1,
                "nombres": "Freddy",
                "apellidos": "Aguilar",
                "direccion": "Av.Lincon",
                "telefono": "54534535",
                "email": "ximen@gmail.com"
            },
            {
                "idCliente":2,
                "nombres": "Ximena",
                "apellidos": "Aguilar",
                "direccion": "Av.Lincon",
                "telefono": "54534535",
                "email": "ximen@gmail.com"
            },
            {
                "idCliente":3,
                "nombres": "Alan",
                "apellidos": "Aguilar",
                "direccion": "Av.Lincon",
                "telefono": "54534535",
                "email": "ximen@gmail.com"
            },
        ];
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }

    const registrarCliente = cliente =>{

        let clienteNuevo={
            ...cliente,
            idCliente:  uuidv4()
        }

        dispatch({
            type: REGISTRAR_CLIENTE,
            payload: clienteNuevo
            //payload: cliente
        })
    }

    const obtenerCliente = cliente =>{

        dispatch({
            type: OBTENER_CLIENTE,
            payload: cliente
            //payload: cliente
        })
    }

    const actualizarCliente= cliente => {

        dispatch({
            type: MODIFICAR_CLIENTE,
            payload: cliente
            //payload: cliente
        })
    }

    const eliminarCliente = idCliente =>{
        dispatch({
            type: ELIMINAR_CLIENTE,
            payload: idCliente
        })
    }

    return(
        <ClienteContext.Provider
            value={{
                clientesList: state.clienteList,
                clienteActual: state.clienteActual,

                obtenerClientes,
                registrarCliente,
                obtenerCliente,
                actualizarCliente,
                eliminarCliente
            }}

        >
            {props.children}
        </ClienteContext.Provider>
    )
}


