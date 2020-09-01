import React, { Component } from 'react';
const AVAILABLE = "Available";
const OUT_OF_STOCK = "Out of stock";

export class ViewItem extends Component {
    constructor(props){
        super(props);
        this.state={ 
            item:{},
            editPriceEnabled:false,
            editAvailabilityEnabled:false,
            availability:"",
            price:0
        }
    }

    componentDidMount(){
        let menuItem = this.props.location.state;
        this.setState({
            item:menuItem,
            availability:menuItem.availability === OUT_OF_STOCK ? false : true,
            price:menuItem.price
            
        });
    }

    handleEditAvailability=()=>{
        this.setState({editAvailabilityEnabled:true});
    }

    handleEditPrice=()=>{
        this.setState({editPriceEnabled:true});
    }

    onChangeAvailablitity =  (e) =>{
        let isAvailable = e.target.value;
        this.setState({availability:isAvailable})
    }

    onChangePrice = (e) =>{
       let safeSearchTypeValue = e.target.value;
       this.setState({price:parseInt(safeSearchTypeValue)});
    }

    handleSave = () =>{
        let isAvailable = this.state.availability === OUT_OF_STOCK ? false : true;
        let newPrice = this.state.price;
        this.setState({ item: { ...this.state.item, price:newPrice, available:isAvailable,}, editAvailabilityEnabled:false, editPriceEnabled:false});
    }

    handleCancel = () =>{
        this.setState({editPriceEnabled:false,
            editAvailabilityEnabled:false})
    }
    
    render() {
        let  item = this.state.item;
        let imageAltText = item.name+" image";
        return (
            <div className="view-item">
                <div id="nav-bar-button" onClick={() =>{this.props.history.push('/')}}> &lt; Back to Dashboard</div>
                <div id="content">
                    <img src={item.imageUrl} alt={imageAltText} />
                    <div id="view-item-details">
                        <p><strong>Item Name: </strong>{item.name}</p>
                        <p><strong>Description: </strong>{item.description}</p>
                        <p><strong>Item Category: </strong>{item.category}</p>
                        <p><strong>Item Id: </strong>{item.itemId}</p>

                        {this.state.editAvailabilityEnabled 
                        ? <span><p><strong>Availability: </strong></p>
                            <select className="availability-selector" name="availability" id="availability" onChange={e=>{this.onChangeAvailablitity(e)}}  >
                            <option value="none" selected disabled hidden> 
                                Select an Option 
                            </option> 
                                <option value="Available" >Available</option>
                                <option value="Out of stock" >Out of Stock</option>
                            </select></span>
                        : <p><strong>Availability: </strong><span data-test="available" >{item.available ? AVAILABLE: OUT_OF_STOCK}</span> <span title="Edit Availability" className="edit-pen" onClick={this.handleEditAvailability}>&#9998;</span></p>
                        }

                        {this.state.editPriceEnabled 
                        ? <span>
                            <p><strong>Item Price: </strong></p>
                            <input className="price-text" type="text" name="price" value={this.state.price} onChange={e => this.onChangePrice(e)}></input>
                        </span>
                        : <p><strong>Item Price: </strong> &#8377;<span data-test="price" >{item.price}</span> <span title="Edit Price" className="edit-pen" onClick={this.handleEditPrice}>&#9998;</span></p>
                        }
                        
                        <p><strong>Tax: </strong> &#8377;{item.tax}</p>
                        {this.state.editAvailabilityEnabled || this.state.editPriceEnabled 
                        ? <div>
                            <button id="save-button" onClick={this.handleSave}>Save</button>
                            <button id="cancel-button" onClick={this.handleCancel}>Cancel</button>
                          </div>:""
                        }
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewItem;
