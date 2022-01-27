import { OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE, MODIFICAR_CLIENTE, ELIMINAR_CLIENTE} from "../const/actionTypes";

export default (state,action) => {

    switch (action.type){
        case OBTENER_CLIENTES:
            return {
                ...state,
                clienteList: action.payload
            };
        case REGISTRAR_CLIENTE:
            return{
                ...state,
                clienteList:[...state.clienteList,action.payload]
                
            };
        case OBTENER_CLIENTE:
            return{
                ...state,
                clienteActual: action.payload
                    
            };

        case MODIFICAR_CLIENTE:
            return{
                ...state,
                clienteList: state.clienteList.map(
                    cliente => cliente.idCliente === action.payload.idCliente ? action.payload : cliente
                )       
            };

        case ELIMINAR_CLIENTE:
            return{
                ...state,
                clienteList: state.clienteList.filter(cliente => cliente.idCliente !== action.payload)     
            };
        
        default:
            return state;
    }

}