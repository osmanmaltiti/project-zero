import { useDispatch } from 'react-redux';
import { Tiles } from "../Components/tiles";
import { submitWoodCart, submitFurnitureCart } from "../Redux/features/checkout-slice";
import { CheckoutCard } from '../Pages/checkoutPage';
import { removeWoodItem, removeFurnitureItem, increaseQuantity, decreaseQuantity } from '../Redux/features/checkout-slice';

//WOOD PAGE FUNCTIONS
export const useWood = () => {
    const dispatch = useDispatch();
    const mapWood = (panelData) => {
       return panelData?.map(
           (item, index) => <Tiles key={index} 
                                   productName={item.name} 
                                   unitPrice={item.price}
                                   type={item.type} 
                                   dimensions={item.dimensions}
                                   handleSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(submitWoodCart(item));
                                   }}
                            />);
    }
    
    return { mapWood }
};

//FURNITURE PAGE FUNCTIONS
export const useFurniture = () => {
    const dispatch = useDispatch();
    const mapFurniture = (panelData) => {
        return panelData?.map(
            (item, index) => <Tiles key={index} 
                                    productName={item.name}
                                    unitPrice={item.price}
                                    type={item.type}
                                    dimensions={item.dimensions}
                                    handleSubmit={(e) => {
                                        e.preventDefault();
                                        dispatch(submitFurnitureCart(item));
                                    }}/>)
    }
    return { mapFurniture }
};

//CHECKOUT PAGE FUNCTIONS
export const useCheckout = () => {
    const dispatch = useDispatch();
    const mapWood = (woodItems) => {
        return woodItems?.sort((a, b) => (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0)
        .map(item => <CheckoutCard
            key = {item.id}
            stock = {item.stock}
            product = {item.name}
            type = {item.type}
            removeItem = { () => {
                dispatch(removeWoodItem(item.id))
                }
            }
            increment = { () => dispatch(
                increaseQuantity({
                    id: item.id, 
                    type: 'wood'
                })) 
            }
            decrement = { () => dispatch(
                decreaseQuantity({
                    id: item.id, 
                    type: 'wood'
                })) 
            }
            quantity = { item.quantity }
            amount = { item.amount }
            />)
    };
    const mapFurniture = (furnitureItems) => {
        return furnitureItems?.sort((a, b) => (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0)
        .map(item => <CheckoutCard
                key = {item.id}
                stock = {item.stock}
                product = {item.name}
                type = {item.type}
                removeItem = { () => {
                    dispatch(removeFurnitureItem(item.id))
                }}
                increment = { () => dispatch(
                    increaseQuantity({
                        id: item.id, 
                        type: 'furniture'
                    })) 
                }
                decrement = { () => dispatch(
                    decreaseQuantity({
                        id: item.id, 
                        type: 'furniture'
                    })) 
                }
                quantity = { item.quantity }
                amount = { item.amount }
                />)
    };
    return { mapWood, mapFurniture }
}