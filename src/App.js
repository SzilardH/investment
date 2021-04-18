import logo from './logo.svg';
import './App.css';

function App() {
  return (    
  <div className='App'>
    <header className='Back-header'>      
      <h1><b>Investment calculation</b></h1>           
    </header>
    <header class="App-header">
        <p class='specification'>        
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
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2a</b> If the customer selects 0–1-year period then the growth is 0% at
        the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2b</b> If the customer selects 2–5-year period then the growth is 2% at
        the end of the investment.
        <br/> <b>&nbsp;&nbsp;&nbsp;&nbsp; R2c</b> If the customer selects 6–10-year period then the growth is 5% at
        the end of the investment.
        <br/> <b>R3</b> The customer can adjust the investment once a year.
        <br/> <b>R4</b> The customer can only increase the amount of the invested money.
        <br/> <b>R5</b> The customer can only increase the period of the investment.
        <br/> <b>R6</b> When the customer interrupts the investment during the investment period, then growth rate at
        the end of the investment (specified at R2) is 0%.
        <br/> <b>R7</b> If the customer selects the highest categories of amount and period then they can have an
        extra 3% growth at the end of the investment.
        <br/> <b>R8</b> The program displays the total expected growth based on the chosen categories after each
        activity.
      </p>
    </header>
  </div>
  );
}

export default App;
