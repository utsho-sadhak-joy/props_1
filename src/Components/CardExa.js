import React from 'react'
import './CSS/CardExa.css'
import Dal_Makni from './IMG/Dal_Makni.jpg'
import { Button,Card } from 'react-bootstrap'


const CardExa = () => {
    return (
        <div>
            <Card className="border" >
                {/* <img alt="Dal_Makni" src={Dal_Makni} /> */}
                <Card.Img variant="top" src={Dal_Makni} />
                <Card.Body>
                    <Card.Title> Dal_Makni</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Order</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardExa
