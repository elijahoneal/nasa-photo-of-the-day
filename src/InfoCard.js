import React from 'react'
import styled from 'styled-components'

const Card = styled.section`
background: #23074d;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #cc5333, #23074d);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #cc5333, #23074d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;

    h1 {
        font-size: 36px;
       padding-top: 3rem;
    }
    h3 {
        font-weight: 300;
        font-size; 30px;
    }
    img{ 
        width:35%;
        height:auto;
    }
    p {
        width: 80%;
        height:auto;
        margin: 1.5rem auto;
        padding-bottom: 3rem;
    }

`

const InfoCard = props => {

const { title , date , photo , caption } = props;
console.log(props)
if (!props.photo) return <h3>Loading...</h3>;
    return (
        <Card>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <img src = {photo} alt={title}></img>
            
            <p>{caption}</p>
        </Card>

    )
}

export default InfoCard;