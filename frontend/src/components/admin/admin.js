import React from 'react';
import './admin.css';
import { Link } from 'react-router-dom';
import { firestore, storage } from '../services/firebase';

export class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openWood : false,
            openFurniture : false,
            
        }
        this.handleWoodClose = this.handleWoodClose.bind(this);
        this.handleFurnitureClose = this.handleFurnitureClose.bind(this);
    }
    
    handleWoodClose(){
        this.setState({openWood: !this.state.openWood});
        
    }
    handleFurnitureClose(){
        this.setState({openFurniture: !this.state.openFurniture});
    }
    
    render(){
        return(
            <div >
                <body className= "admin">
                    <div id="upperB">
                        <Link to={'/admin/addwood'}><button className="adminB" id="w-adminB" 
                                onClick={()=>{this.setState({openWood: !this.state.openWood})}}>Wood</button></Link>
                    </div>
                    
                    <div id="lowerB">
                        <Link to={'/admin/addfurniture'}><button className="adminB" id="f-adminB" 
                                onClick={()=>{this.setState({openFurniture: !this.state.openFurniture})}}>Furniture</button></Link>
                    </div>

                    <div id="lowerB">
                        <button id="footer-adminB" 
                                onClick={function(){alert("Remove")}}>Remove Product</button>
                    </div>

                    <p id="adminHeader" >Welcome Admin</p>
                    
                </body>
            </div>
        )
    }
}

export class NewFurniture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            furnitureName:'',
            furnitureType:'',
            furnitureDimensions: '',
            furnitureQuantity: '',
            furniturePrices: '',
            furnitureImage: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const key = Math.random() * 1000;
        const {furnitureName,furnitureType,furnitureDimensions,furnitureImage,furnitureQuantity,furniturePrices} = this.state;
        const furnitureUpdate = firestore.collection('Items').doc('furnitureItems')
                                         .collection(furnitureType).doc(furnitureName);
        const furnitureSnapshot = await furnitureUpdate.get();
        if(furnitureSnapshot.exists){
            furnitureUpdate.update({
                Key : key,
                Name: furnitureName,
                Type: furnitureType,
                Dimensions: furnitureDimensions,
                Quantity: parseInt(furnitureQuantity),
                unitPrice: parseInt(furniturePrices)
            })
        }
        if(!furnitureSnapshot.exists){
            furnitureUpdate.set({
                Key : key,
                Name: furnitureName,
                Type: furnitureType,
                Dimensions: furnitureDimensions,
                Quantity: parseInt(furnitureQuantity),
                unitPrice: parseInt(furniturePrices)
            })
        }
        storage.ref('furnitureImages').child(furnitureName+furnitureDimensions)
                .put(furnitureImage, {contentType: 'image/jpg'})
        
        this.setState({
            furnitureName:'',
            furnitureType:'',
            furnitureDimensions: '',
            furnitureQuantity: '',
            furniturePrices: '',
            furnitureImage:null
        })

        
    }
    render(){
        return(
            <body className='admin'>
               <form className='woodDialog' onSubmit={this.handleSubmit}>
                   <div className='adminForm'>
                   <p>Name</p>
                    <select value={this.state.furnitureName} onChange={(event)=>this.setState({furnitureName: event.target.value})}>
                       <option></option>
                       <option>Wawa-Door</option>
                       <option>Odum-Door</option>
                       <option>Walnut-Door</option>
                    </select>
                   <p>Type</p>
                    <select value={this.state.furnitureType} onChange={(event)=>this.setState({furnitureType: event.target.value})}>
                       <option></option>
                       <option>Single Panel</option>
                       <option>Double Panel</option>
                    </select>
                   <p>Dimensions</p>
                    <select value={this.state.furnitureDimensions} onChange={(event)=>this.setState({furnitureDimensions: event.target.value})}>
                       <option></option>
                       <option>20x12</option>
                       <option>20x15</option>
                       <option>30x10</option>
                    </select>
                   <p>Quantity</p>
                    <input className='popInput' type='number' value={this.state.furnitureQuantity}
                            onChange={(event)=>this.setState({furnitureQuantity: event.target.value})}/>
                   <p>Unit Price</p>
                    <input className='popInput' type='number' value={this.state.furniturePrices}
                            onChange={(event)=>this.setState({furniturePrices: event.target.value})}/>
                   <p>Upload Image</p>
                    <input className='popInput' type='file' 
                            onChange={(event)=>{
                                const img = event.target.files[0];
                                this.setState({
                                    furnitureImage: img
                                })
                            }}/>
                   <button id='popsubmitB'type='submit'>Submit</button>
                   </div>
               </form>
            </body>
        )
    }
}

export class NewWood extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            woodName:'',
            woodType:'',
            woodQuantity: '',
            woodPrices: '',
            woodDimensions: '',
            woodImage:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event => {
        event.preventDefault();
        var key = Math.floor(Math.random() * 1000);
        const {woodName, woodType, woodQuantity, woodPrices, woodDimensions,woodImage} = this.state;
        const woodUpdate = firestore.collection('Items').doc('woodItems')
                                    .collection(woodType).doc(woodName);
        const woodSnapshot = await woodUpdate.get();
            if(woodSnapshot.exists){
                try{
                    await woodUpdate.update({
                        Key : key,
                        Name: woodName,
                        Type: woodType,
                        dimensions: woodDimensions,
                        quantity: parseInt(woodQuantity),
                        unitPrice: parseInt(woodPrices),
                    })
                }
                catch(error){
                    alert('Could not update', error.message);
                    }
                }
            if(!woodSnapshot.exists){
                try{
                    await woodUpdate.set({
                        Key : key,
                        Name: woodName,
                        Type: woodType,
                        dimensions: woodDimensions,
                        quantity: parseInt(woodQuantity),
                        unitPrice: parseInt(woodPrices)
                    })
                }
                catch(error){
                    alert('Could not set', error.message);
                    }
                }
                this.setState({
                    woodName:'',
                    woodType:'',
                    woodQuantity: '',
                    woodPrices: '',
                    woodDimensions: '',
                    woodImage:null
                })
                storage.ref('woodImages').child(woodName+woodDimensions).put(woodImage, {contentType: 'image/jpg'});
    }
    render(){
        return(
            <body className='admin'>
               <form className='woodDialog' onSubmit={this.handleSubmit}>
                   <div className='adminForm'>
                   <p>Name</p>
                    <input className='popInput' type='text' value={this.state.woodName} 
                            onChange={(event)=>this.setState({woodName: event.target.value})}/>
                   <p>Type</p>
                    <select value={this.state.woodType} 
                            onChange={(event)=>this.setState({woodType: event.target.value})}>
                       <option></option>
                       <option>Beam</option>
                       <option>Board</option>
                       <option>Pole</option>
                    </select>
                   <p>Dimensions</p>
                    <select value={this.state.woodDimensions} 
                            onChange={(event)=>this.setState({woodDimensions: event.target.value})}>
                       <option></option>
                       <option>2x2</option>
                       <option>2x8</option>
                       <option>3x3</option>
                       <option>5x8</option>
                    </select>
                   <p>Quantity</p>
                    <input className='popInput' type='number' value={this.state.woodQuantity}
                            onChange={(event)=>this.setState({woodQuantity: event.target.value})}/>
                   <p>Unit Price</p>
                    <input className='popInput' type='number' value={this.state.woodPrices}
                            onChange={(event)=>this.setState({woodPrices: event.target.value})}/>
                   <p>Upload Image</p>
                    <input className='popInput' type='file'
                            onChange={(event)=>{
                                const img = event.target.files[0];
                                this.setState({
                                    woodImage: img
                                })
                                console.log(this.state.woodImage)
                            }}/>
                   <button id='popsubmitB'type='submit'>Submit</button>
                   <button id='popsubmitB'type='submit'>Submit</button>
                   </div>
               </form>
            </body>
        )
    }
}

