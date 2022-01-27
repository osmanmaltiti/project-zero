import { Tiles } from "../tiles";
import Cart from "../cart";
import { useDispatch } from 'react-redux';
import { addToWoodCart } from "../../redux/features/wood-slice";
import { addToFurnitureCart } from "../../redux/features/furniture-slice";


//WOOD PAGE FUNCTIONS
export const useWood = () => {
    const dispatch = useDispatch();
    const mapWood = (panelData) => {
       return panelData.map(
           (item, index) => <Tiles key={index} 
                                   productName={item.name} 
                                   unitPrice={item.price}
                                   type={item.type} 
                                   dimensions={item.dimensions}
                                   handleSubmit={() => {
                                        dispatch(addToWoodCart(item))
                                   }}
                            />);
    }
    const mapCartItems = (cartData) => {
        return cartData.map(
            (item) => <Cart key={item.id}
                            product={item.name}
                            price={item.price}
                            stock={item.quantity}
                            quantities={item.quantity}
                            />
        )
    }
    return { mapWood, mapCartItems }
};

//FURNITURE PAGE FUNCTIONS
export const useFurniture = () => {
    const dispatch = useDispatch();
    const mapFurniture = (panelData) => {
        return panelData.map(
            (item, index) => <Tiles key={index} 
                                    productName={item.name}
                                    unitPrice={item.price}
                                    type={item.type}
                                    dimensions={item.dimensions}
                                    handleSubmit={() => {
                                        dispatch(addToFurnitureCart(item))
                                    }}/>)
    }
    const mapCartItems = (cartData) => {
        return cartData.map(
            (item) => <Cart key={item.id}
                            product={item.name}
                            price={item.price}
                            stock={item.quantity}
                            quantities={item.quantity}
                            />
        )
    }
    return { mapFurniture, mapCartItems }
};