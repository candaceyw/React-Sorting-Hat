import React from 'react';

const Results = props => {
    return (
        <div>
            <h1>You belong in {props.houseInfo.house}</h1>
            <img src={props.houseInfo.image} alt='House Crest' />
            <p>{props.houseInfo.quote}</p>
            <p>{props.houseInfo.qualities}</p>
            <p>{props.houseInfo.wizards}</p>

        </div>
    )

}

export default Results;