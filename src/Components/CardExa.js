import React from 'react'
import './CSS/CardExa.css'
// import Dal_Makni from './IMG/Dal_Makni.jpg'
// import { Button,Card } from 'react-bootstrap'
import Page from './Page'
import book from './IMG/pragmatic.jpg'


const CardExa = () => {
    return (
        <div>
            <div className="box"> 
                <img alt="sadia.img" src={book} style={{width:"275px",height:"400px"}} />
                <Page props="book"/>
            </div>
        </div>
    )
} 

export default CardExa
