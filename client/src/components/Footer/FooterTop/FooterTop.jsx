import React from 'react';
import style from './FooterTop.module.css';
import Icon from '../../Common/IcoMoon/IcoMoon';
import { Link } from 'react-router-dom';

const FooterTop = () => {
    return (
        <div className={style.section}>
            <div className={style.footer}>
                <div className={style.footerItem}>
                    <h3 className={style.title}>Контакти</h3>
                    <div className={style.phone}><Icon icon='mobile, mobile-phone' size={30} color="#29ADBB" /><Link  to={'tel:380966284473'}>+3 8(096) 628 44 73</Link></div>
                    <div className={style.phone}><Icon icon='mobile, mobile-phone' size={30} color="#29ADBB" /><Link to={"tel:380950512910"}>+3 8(095) 051 29 10</Link></div>
                </div>
                <div className={style.footerItem}>
                    <h3 className={style.title}>Корисні посилання</h3>
                    <div className={style.usefulRef}><Link  to={'#'}>Про нас</Link></div>
                    <div className={style.usefulRef}><Link  to={'comments'}>Відгуки</Link></div>
                </div>
                <div className={style.footerItem}>
                    <h3 className={style.title}>Ми в соціальних мережах</h3>
                    <div className = {style.wrapSocialNet}>
                        <div><Link to={'#'}><Icon icon='facebook2' size={40} color="#5866B1" /></Link></div>
                        <div><Link  to={'#'}><Icon icon='instagram' size={40} color="#B745C3" /></Link></div>
                        <div><Link  to={'#'}><Icon icon='telegram' size={40} color="#2AA1DD" /></Link></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FooterTop;