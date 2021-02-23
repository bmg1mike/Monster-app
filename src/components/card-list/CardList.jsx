import React from 'react'
import './cardListStyles.css'
import {Card} from './../Card/Card.Component'

function CardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map(monster=>(
                <Card key={monster.id} monster = {monster} />
            ))}
        </div>
    )
}

export default CardList
