import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
// Components
import RenderTime from './RenderTime'
import SelectTimezone from './SelectTimezone'

function App() {
  const [timezone, setTimezone] = useState('America/New_York')

  const handleTimezone = e => {
    setTimezone(e.target.value)
  }

  return (
    <div className='app-div'>
      <h1>World Clock</h1>
      <SelectTimezone handleTimezone={handleTimezone} />
      <RenderTime timezone={timezone} />{' '}
      {/* Use RenderTime component to set timezone and render different clocks*/}
    </div>
  )
}

export default App
