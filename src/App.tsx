import useTime from './hooks/useTime'

import active from './asset/active.svg'
import binaryClock from './asset/binary.svg'
import disable from './asset/disable.svg'
import standardClock from './asset/standard.svg'

import './style.scss'

function App() {
  const {hours,	mines, BinaryHours, BinaryMines} = useTime()

  const getZero = (num: number) => {
    if(num < 10){
      return `0${num}`
    }
    return num    
  }

  return (
    <main>
      <div className='wrapper'>

        <img src={binaryClock} alt="bg" className='bg' />

        <div className='hours'>
          {
            BinaryHours.map((el, i) => {
              return <img key={i} src={el > 0 ? active : disable} alt="point" />
            })
          }
        </div>
        <div className='mines'>
          {
            BinaryMines.map((el, i) => {
              return <img key={i} src={el > 0 ? active : disable} alt="point" className='mines-item' />
            })
          }
        </div>
      </div>

      <div className='wrapper'>

        <img src={standardClock} alt="bg" className='bg' />

        <div className='time'>
          {getZero(hours)}: 
          {getZero(mines)}
        </div>
      </div>
    </main>
  )
}

export default App
