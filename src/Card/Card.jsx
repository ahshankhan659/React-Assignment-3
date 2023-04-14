import React from 'react'

function Card(props) {
    return (
        <>
        <div className="card-template">
            <div class="card ">
                <img src={props.imgSrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.info}</p>
                    <a href="#" class="btn btn-dark ">{props.btns}</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card