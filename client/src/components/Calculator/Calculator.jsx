import React,{ useState } from 'react';
import './forCalculator.css';
import '../../styles/variables.css'
class Calculator extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      elevator: false,
      material: '2.5',
      amount: '',
      floor: ''
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //testing for button 'reset'
    this.resInputs = this.resInputs.bind(this);

    //testing button 'calc'
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
  window.scrollTo(0, 500);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.name === 'elevator' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    alert(` 
     поверх = ${this.state.floor}
     кількість мат = ${this.state.amount}
     матеріал по ${this.state.material}
     ліфт = ${this.state.elevator}
     
     `);
  }


  //testing for button 'reset'
  resInputs() {
    this.setState({
      floor: '',
      elevator: false,
      amount: '',
      material: '2.5'
    });
      
  
  }

  calculate() {
    let floor = this.state.floor;
    let materials = this.state.material;
    let amount = this.state.amount;

    const res = amount * floor * materials;

    alert(`сума до оплати = ${res}`);
  }


  render() {
    return(
      <div className='container'>
        <div className='page'>
          <table className='viewCalc'>
            <thead>
              <tr>
                <th colSpan='2'>Калькулятор на вантажні послуги (будівельні матеріали)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="building-mat">будівельні матеріали</label>
              </td>
              <td>
                <select 
                  name="material"
                  value={this.state.material}
                  onChange={this.handleChange} >
                    <option value="2.5"  >мішки до 30кг (2,5грн/пов)</option>
                    <option value="3">мішки більше 30кг (3грн/пов)</option>
                    <option value="4">буд. сміття (до 30кг) (4грн/пов)</option>
                    <option value="3.5">гіпсокартон (3,5грн/пов)</option>
                    <option value="3">плитка (3грн/пов)</option>
                    <option value="5">профіль 3 м (5грн/пов)</option>
                    <option value="6">профіль 4 м (6грн/пов)</option>
                    <option value="2.5">Ламінат-паркет (2.5/пов)</option>
                  </select>
                  <button onClick={this.handleSubmit}>alert</button> 
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="amount">кількість матеріалів (одиниць)</label>
                </td>
                <td>
                  <input 
                    type="number"
                    name='amount'
                    value={this.state.amount}
                    onChange={this.handleChange}
                     />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="floor">на який поверх несемо</label>
                  <br /><label htmlFor="elevator">якщо у вас є ліфт,
                  <br />поставте галочку(рахується як 3 поверхи)</label>
                  <input 
                    type="checkbox"
                    name='elevator'
                    checked={this.state.elevator}
                    onChange={this.handleChange} />
                </td>
                <td>
                  <input type="number"
                    name='floor'
                    value={this.state.floor}
                    onChange={this.handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                <button name='calculate' onClick={this.calculate}>порахувати</button>
                </td>
                <td>
                  <button name='reset' onClick={this.resInputs}>скинути</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>сума до оплати {this.res}</h3>
        </div>
      </div>
    );
  }
};

export default Calculator;
