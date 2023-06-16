import logo from './logo.svg';
import './App.css';
import Pin from './components/Pin';
import { useState } from 'react';
import Credit from './CREDIT CARD/Credit';

function App() {
 const [otp, setOtp] = useState("")
 const [CreditPin, setCreditPin] = useState("")

  return (
    <div className="App">
     <Pin length={5} setOtp={setOtp} isOtpValid={true} /> 
    <h2>The OTP is :- {otp}</h2>
    <Credit length={4} setCreditPin={setCreditPin} />
   <h1>Credit Card Pin is : {CreditPin}</h1>
    </div>
  );
}

export default App;
