import React from 'react'

const InfoCard = props => {
const { title , date , photo , copyright , caption } = props;
console.log(props)
if (!props.photo) return <h3>Loading...</h3>;
    return (
        <section className='card'>
            <h1>{title}</h1>
            <p>{copyright}</p>
            <h3>{date}</h3>
            <img src = {photo} alt={copyright}></img>
            
            <p>{caption}</p>
        </section>

    )
}

export default InfoCard;