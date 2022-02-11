import { useDispatch } from 'react-redux';
import { Tiles } from "../Components/tiles";
import { submitWoodCart, submitFurnitureCart } from "../Redux/features/checkout-slice";


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
        return panelData.map(
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