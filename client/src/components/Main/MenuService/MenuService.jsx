import React from 'react';
import '../MenuService/boxMenu.css';
import Icon from '../../Common/IcoMoon/IcoMoon';
import loader from '../../../images/loader.png';
import { Link } from "react-router-dom";


const MenuService = () => {
  return (
    <div id='container'>

      <Link to='apartmentMove' className="itemMenuService">
        <div className='box'>
          <p>
            <Icon icon='building-o' size={20} color="white"  />
          </p>
          <p>Квартирний переїзд</p>
        </div>
      </Link>

      <Link to='/officeRelocation' className="itemMenuService">
        <div className='box'>
          <p>
            <Icon icon='briefcase' size={20} />
          </p>
          <p>Офісний переїзд</p>
        </div>
      </Link>

      <Link to='buildingMaterials' className="itemMenuService">
        <div className='box'>
          <p>
            <Icon icon='truck' size={20} color="white" />
          </p>
          <p>Доставка будматеріалів</p>
        </div>
      </Link>
      
      <Link to='riggingWorks' className="itemMenuService">
        <div className='box'>
          <img className='iconLoader' src={loader} alt="icon"/>
          Такелажні роботи
        </div>
      </Link>
      
    </div>
  )
}


export default MenuService;
