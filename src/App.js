import React, { useState, useRef } from 'react'
import './App.css';

function App() {
  var [speed, setSpeed] = useState('1');
  var [total, setTotal] = useState('0');
  var [profit, setProfit] = useState('0');
  var [dispMonth, setDispMonth] = useState('0');
  var inputHUF = useRef();
  var inputLength = useRef();
  var inHUF = 0;
  var inLength = 0;
  var curMonth = 0;
  var growth = 1.1;
  var sim;


  function simulationStart() {
    inHUF = inputHUF.current.value;
    total = inputHUF.current.value;
    inLength = inputLength.current.value;
    sim = setInterval(Simulation, 1000);
  }

  function simulationEnd() {
    clearInterval(sim);
  }
 
  function Simulation() {
    curMonth = curMonth + parseInt(speed);
    dispMonth = inLength - curMonth;
    setDispMonth(dispMonth);
    total *= growth;
    setTotal(total);
    profit = total - inHUF;
    setProfit(profit);

    console.log('Tic');
    console.log(total);

  }

  return (    
  <div className='App'>
    <header className='Back-header'>      
      <h1><b>Investment calculation</b></h1>           
    </header>
    <header className="App-header">
        <p className='specification'>        
        <b>R1</b> The customer can select the deposited amount of money.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1a</b> If the customer selects the 0-100.000 Ft category then the growth
        is 1% at the end of each
        month.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1b</b> If the customer selects the 100.000 - 1.000.000 Ft category then
        the growth is 2% at the
        end of each month.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1c</b> If the customer selects the 1.000.000 - 10.000.000 Ft category then
        the growth is 3% at the
        end of
        each month.
        <br/> <b>R2</b> The customer can select the duration of investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2a</b> If the customer selects 0–1-year period then the growth is 0% at the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2b</b> If the customer selects 2–5-year period then the growth is 2% at the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2c</b> If the customer selects 6–10-year period then the growth is 5% at the end of the investment.
        <br/> <b>R3</b> The customer can adjust the investment once a year.
        <br/> <b>R4</b> The customer can only increase the amount of the invested money.
        <br/> <b>R5</b> The customer can only increase the period of the investment.
        <br/> <b>R6</b> When the customer interrupts the investment during the investment period, then growth rate at the end of the investment (specified at R2) is 0%.
        <br/> <b>R7</b> If the customer selects the highest categories of amount and period then they can have an extra 3% growth at the end of the investment.
        <br/> <b>R8</b> The program displays the total expected growth based on the chosen categories after each activity.
      </p>
      <p className="testcases">
            <br/>Deposited amount (HUF): <input size="8" ref={inputHUF}/>
            <br/>Deposit lenght (MONTH): <input size="4" ref={inputLength}/>
            <br/> <br/><button className="button" onClick={simulationStart}> Start simulation </button> 
            <button className="button" onClick={simulationEnd}> Interruption </button> {' '}
            Simulation speed: {' '} <span>{speed}</span> (Month/second) {' '}
            <button
            className='button'
            onClick={() => {
              speed++
              setSpeed(speed)
            }}
          > <b>+</b>
          </button>
          <button
            className='button'
            onClick={() => {
              speed--
              setSpeed(speed)
            }}
          > <b>-</b>
          </button>
          <br/> <br/>The investment ends in: {' '} <span>{dispMonth}</span> Month
            <br/> <br/>Total:{' '}<span>{total}</span> HUF
            <br/>Profit:{' '}<span>{profit}</span> HUF
            <br/><button
            className='button'
            onClick={() => {
              total = 0;
              setSpeed(1);
            }}> Withdraw </button> 
            </p>
    </header>
  </div>
  );
}

export default App;
