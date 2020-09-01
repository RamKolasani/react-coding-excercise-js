import React from 'react';
import { Link } from 'react-router-dom';

const DisplayMenuItems = (props) =>{
    let imageAltText = props.item.name+" image";
    let item = props.item;

    return (
        <Link to={{pathname:'/view-item/'+item.itemId,state:item}} >
        <div className="display-items" >
                <img className="item-image" src={props.item.imageUrl} alt={imageAltText} />
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <ul>
                    <li><p><strong>Description: </strong>{item.description}</p></li>
                    <li><p><strong>Category: </strong>{item.category}</p></li>
                    <li><p><strong>Item Id: </strong>{item.itemId}</p></li>
                    <li><p><strong>Availability: </strong>{item.available ? "Available": "Out of stock"}</p></li>
                </ul>
                <p className="price"><strong>Price: &#8377;{item.price} | Tax: &#8377;{item.tax}</strong></p>
            </div>
        </div>
        </Link>
        )

}

export default DisplayMenuItems;