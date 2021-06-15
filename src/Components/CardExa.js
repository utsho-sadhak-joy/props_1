import React from 'react'
import './CSS/CardExa.css'
// import Dal_Makni from './IMG/Dal_Makni.jpg'
// import { Button,Card } from 'react-bootstrap'
import Page from './Page'

const CardExa = () => {
    return (
        <div>
            <div className="box">
                <h1>You're my love</h1>
                <Page props="Sadia"/>
                <Page props="Sharmistha"/>
                <Page props="Subarna"/>
                <Page props="Choity"/>
            </div>
        </div>
    )
} 

export default CardExa
