import React from 'react'
import "../App.css"
function Card({id,name}) {
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    return (
        
            <div className="card"  style={{"backgroundColor" : colors[id%5].primaryColor}} >
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id+1}.png`} alt={name}/>
            <h1>{name}</h1>
            </div>
            
       
    )
}

export default Card
