import React from 'react'

function Image(props) {
    return (
        <div>
            <img className = "nice_image" src={props.imgUrl} alt="React"/>
        </div>
    )
}

export default Image