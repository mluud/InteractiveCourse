import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from '../components/MyButton'
import Information from '../components/Information'
import Job from '../components/Job'
import Education from '../components/Education'

function App() {
  let content;
  let flag = true;
  
  if(flag)
  {
    content = <Job/>
  }
  else
  {
    content = <Education/>
  }

  return (
      <div>
        <h1>hello</h1>
        <MyButton/>
        <Information home="Tallinn" study="TLU" like="cats"/>
        {content}
        <h3>---New Approach---</h3>
        {flag? (<Job/>): (<Education/>)}
        <h3>---Additional Approach---</h3>
        {flag && <Education/>}
      </div>
  )
}

export default App
