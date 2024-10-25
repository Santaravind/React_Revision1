import { useState } from 'react'
import Input from './Component/Input'
import Buttons from './Component/Buttons'

function App() {
      const [calVal, setcalVal] = useState("");
     const ButtonEvent=(butText)=>{
      if(butText==='C'){
          setcalVal('')
      }else if(butText==='='){
        const result= eval(calVal);
        setcalVal(result);

      }
      else if(butText==='del'){
        const result= calVal.slice(0,-1);
        setcalVal(result);

      }else if(butText==='!'){
        const fact= parseInt(calVal,10);
        if(!isNaN(fact)){
          const factRsult=factorial(fact);
          setcalVal(factRsult.toString());
        }

      }
      else{
        const newVal=calVal+butText;
        setcalVal(newVal);
      }
      
      console.log(butText)}

       const factorial =(n)=>{
        if(n<0) return 'NaN'
        if(n===0||n===1)return 1;
        return n*factorial(n-1);


       };

  return (
    <>
     <center >
      <div className=' box-border border-2 w-1/2 mt-3  '> 
      <h2 className='font-semibold text-2xl bg-purple-300'> Calculater </h2> 
      <Input  inputVal={calVal}/>
      <Buttons onButtonclick={ButtonEvent}/>
      </div>
     
     </center>
    </>
  )
}

export default App
