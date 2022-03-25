import Header from '../components/Header'
import '../styles/cast.css'
import Card from '../components/Card'
import Oscar from '../image/Oscar_Isaac.jpg'
import Gaspard from '../image/gaspard.jpg'
import Ethan from '../image/ethan.jpg'
import May from '../image/may.jpg'
import Loic from '../image/loic.jpg'
import Lucy from '../image/lucy.jpg'

const Elenco = () =>{
  return(
   <div className="elenco">
    <Header/>
    <div className="cards">
      <div className="cast">
        <Card name='Oscar Isaac'>
          <img src={Oscar} alt="" />
        </Card>

        <Card name='Gaspard Ulliel'>
          <img src={Gaspard} alt="" />
        </Card>

        <Card name='Ethan Hawke'>
          <img src={Ethan} alt="" />
        </Card>
      </div>
      <div className="cast">
        <Card name='May Calamawy'>
          <img src={May} alt="" />
        </Card>

        <Card name='Loic Mabanza'>
          <img src={Loic} alt="" />
        </Card>

        <Card name='lucy thackeray'>
          <img src={Lucy} alt="" />
        </Card>
      </div>

    </div>

   </div>
  )
}

export default Elenco;