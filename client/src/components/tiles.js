import React from 'react';
import '../styles/tiles/tiles.css';


export const Tiles = (props) => {
    return(
        <div id = 'tiles'>
            <div id= 'img-texts'>
                <div id='imgCon'>
                    <img src={props.image} alt = ''/>
                </div>
                <div id='tile-texts'>
                    <h3 className='tile-texts prod-text' id='product'>{props.productName}</h3>
                    <p className='tile-texts' id='type'><strong>Type:</strong> {props.type}</p>
                    <p className='tile-texts' id='measure'><strong>Dimensions:</strong> {props.dimensions}</p>
                    <p className='tile-texts' id='price'><strong>Unit Price:</strong> GHS {props.unitPrice}</p>
                </div>
            </div>
            <button id='addToCart' onClick={props.handleSubmit}>Add To Cart</button>
        </div>
    )
}
