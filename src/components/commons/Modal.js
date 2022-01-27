import React, { useContext} from 'react';
import { ModalContext } from '../../contexts/modalContex';
const Modal = (props) => {
    
    const {showModal,modalTitle, setShowModal,setModalTitle} =useContext(ModalContext);

    return ( 
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
            <div className="modal-background">

            </div>
            <div className="modal-card">
                <header className='modal-card-head'>
                    <p className="modal-card-title">
                        {modalTitle}
                    </p>
                    <button
                        className='delete'
                        aria-label="close"
                        onClick={()=>{
                            setShowModal(false);
                            setModalTitle();
                        }
                            
                        }
                    >
                    </button>
                </header>
                <section className='modal-card-body'> 
                    {props.children}
                </section>
            </div>
        </div>
     );
}
 
export default Modal;