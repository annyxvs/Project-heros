import React, { ReactNode } from "react";
import { ReactDOM } from "react";
import '../styles/card.css'
import Gal1 from '../image/galery1.jpg'


type Props = {
  name: string;
  children: ReactNode;
}

const Card = ({name,children}: Props) =>{
  return(
    <div className="conteiner-image">
      <div className="card">
      <div id="img-actor">{children}</div> 
      <div className="name-actor">{name}</div>
      </div>
      </div>
  )
}

export default Card;