import React from 'react';
import Drawer from 'react-drag-drawer';
import style from './ModalWindow.module.css';
import logo from '../../images/logoToor.gif';


const ModalWindow = (props)=> {
     const {open, closeModalComments, modalMessageInfo} = props;
    return (
        <Drawer
            open = {open}
            modalElementClass = {style.modal}
        >
            <div className={style.message}>{modalMessageInfo}</div>
            <div className={style.logo}><img src={logo} alt="logo"/></div>
            <button className={style.button} onClick={()=>closeModalComments(false)}>Закрити</button>
        </Drawer>
    )
};

export default ModalWindow;