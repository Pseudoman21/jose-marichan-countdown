import jose from './images/jose-marichan.png'
import Snowfall from 'react-snowfall'
import Countdown from 'react-countdown'
import './App.css'
import Count from './Count'
function App () {
  const Completionist = () => <span>You are good to go!</span>
  return (
    <div className='App'>
      <Snowfall
        // Changes the snowflake color
        color='white'
        // Applied to the canvas element
        style={{ background: 'transparent' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <header className='App-header d-flex'>
        <h2>
        <Count />
        </h2>
        <img src={jose} alt='Christmas Singer of the whole wide universe' />
      </header>
    </div>
  )
}

export default App
