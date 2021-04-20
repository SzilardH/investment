import React, { useState, useRef } from 'react'
import './App.css';

function App() {
  var [inHuf, setInHuf] = useState('0');
  var [inMonth, setInMonth] = useState('0');
  var [total, setTotal] = useState('0');
  var [profit, setProfit] = useState('0');
  var inputHUF = useRef();
  var inputLength = useRef();
  var SliderValue = useRef();
  var [sliderMonth, setSliderMonth] = useState('0');
  var [growth, setGrowth] = useState('1.01');
  var [premium, setPremium] = useState('1');

  function simulationStart() {
    inHuf = inputHUF.current.value;
    setInHuf(inHuf);
    total = inputHUF.current.value;
    setTotal(total);
    inMonth = inputLength.current.value;
    setInMonth(inMonth);

    if (inHuf < 100000) {
      growth = 1.01;
    } else if (inHuf < 1000000) {
      growth = 1.02;
    } else {
      growth = 1.03;
    }
    setGrowth(growth);

    if (inMonth < 12) {
      premium = 1;
    } else if (inMonth < 60) {
      premium = 1.02;
    } else {
      premium = 1.05;
    }
    setPremium(premium);
  }
  
  function Simulation() {     
    sliderMonth = SliderValue.current.value;
    setSliderMonth(sliderMonth);
    if (sliderMonth < inMonth) {      
      total = inHuf * growth ** sliderMonth;
    } else {      
      total = inHuf * premium * growth ** sliderMonth;
    }
    setTotal(total);
    profit = total - inHuf;
    setProfit(profit);
  }

  return (    
  <div className='App'>
    <header className='Back-header'>      
      <h1><b>Investment calculation</b></h1>           
    </header>
    <header className="App-header">
        <p className='specification'>        
        <b>R1</b> The customer can select the deposited amount of money.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1a</b> If the customer selects the 0-100.000 Ft category then the growth is 1% at the end of each month.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1b</b> If the customer selects the 100.000-1.000.000 Ft category then the growth is 2% at the end of each month.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R1c</b> If the customer selects the 1.000.000+ Ft category then the growth is 3% at the end of each month.
        <br/> <b>R2</b> The customer can select the duration of investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2a</b> If the customer selects 0–1-year (0-12 month) period then the growth is 0% at the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2b</b> If the customer selects 1–5-year (12-60 month) period then the growth is 2% at the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2c</b> If the customer selects 5+ year (60+ month) period then the growth is 5% at the end of the investment.
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
            <br/> <br/><button className="button" onClick={simulationStart}> Invest! </button>             
            <br/> <br/>Total:{' '}<span>{total}</span> HUF
            <br/>Profit:{' '}<span>{profit}</span> HUF            
            </p>
      <div className="slidecontainer">
        <input type="range" min="0" max={inMonth} className="slider" defaultValue="0" ref={SliderValue} 
        onInput={Simulation}></input>
        <p>Month: <span>{sliderMonth}</span></p>
      </div>
    </header>
  </div>
  );
}

export default App;
