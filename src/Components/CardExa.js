import React from 'react'
import './CSS/CardExa.css'
import book from './IMG/pragmatic.jpg'


const CardExa = () => {
    return (
        <div>
            <div className="box"> 
                <img alt="dal_makhni.img" src={book} className="img" />
            </div>
        </div>
    )
} 

export default CardExa
