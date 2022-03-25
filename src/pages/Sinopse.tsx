import Header from '../components/Header'
import '../styles/synopsis.css'
import Galery1 from '../image/galery1.jpg'
import Galery2 from '../image/galery2.jpg'
import Galery3 from '../image/galery3.jpg'

const Sinopse = () =>{
  return(
    <div className="synopsis">
      <Header/>

      <div className="text-context">

        <div className="section-text">
        <h1>Synopsis</h1>

        <p>
        Moon Knight follows Steven Grant, a mild-mannered gift-shop employee, who becomes plagued with blackouts and memories of another life. Steven discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.
        </p>
        </div>

        <div className="galery">
          <img src={Galery1} />
          <img src={Galery2} />
          <img src={Galery3} />
        </div>

      </div>

      </div>
    
  )
}

export default Sinopse;