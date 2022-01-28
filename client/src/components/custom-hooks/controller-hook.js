import { addToFurnitureCart, clearCart, deleteFurnitureItem } from "../../redux/features/furniture-slice";
import { addToWoodCart, clearWoodCart, deleteItem } from "../../redux/features/wood-slice";
import { useDispatch } from 'react-redux';
import { Tiles } from "../tiles";
import Cart from "../cart";
import { submitWoodCart ,submitFurnitureCart } from "../../redux/features/checkout-slice";


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
                                   handleSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(addToWoodCart(item));
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
                            type={item.type}
                            delete={(e) => {
                                e.preventDefault();
                                dispatch(deleteItem(item.id))
                            }}
                            />
        )
    }
    const submitCart = (cartData) => {
        dispatch(submitWoodCart(cartData));
        setTimeout(() => {
            dispatch(clearWoodCart())
        }, 1000);
    }
    return { mapWood, mapCartItems, submitCart }
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
                                    handleSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(addToFurnitureCart(item));
                                    }}/>)
    }
    const mapCartItems = (cartData) => {
        return cartData.map(
            (item) => <Cart key={item.id}
                            product={item.name}
                            price={item.price}
                            stock={item.quantity}
                            quantities={item.quantity}
                            type={item.type}
                            delete={(e) => {
                                e.preventDefault();
                                dispatch(deleteFurnitureItem(item.id));
                            }}
                            />
        )
    }
    const submitCart = (cartData) => {
        dispatch(submitFurnitureCart(cartData));
        setTimeout(() => {
            dispatch(clearCart())
        }, 1000);
    }
    return { mapFurniture, mapCartItems, submitCart }
};