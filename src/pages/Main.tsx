import Header from '../components/Header'
import '../styles/main.css'
import { BsPlay } from 'react-icons/bs'

const Main = () =>{
  return(
    <div className="main">
      <Header/>
      
          <div className="center">
            <div className="name">
              <h1>Moon
              <span>Knight</span></h1>
            </div>
        
        <div className="bnt-trailer">
          <a href='https://www.youtube.com/watch?v=DFa0evfX96s&t=22s'>Watch trailer              <BsPlay/></a>
        </div>
      </div>

    </div>
  )
}

export default Main;