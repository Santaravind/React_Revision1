import React from 'react'
import AppHeading from './Component/AppHeading'
import AppPara from './Component/AppPara'
import CurrentTime from './Component/CurrentTime'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <center className='m-3'>
      <AppHeading/>
      <AppPara/>
      <CurrentTime/>
    </center>
  )
}

export default App
