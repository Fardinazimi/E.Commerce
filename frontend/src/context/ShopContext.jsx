import { createContext } from "react";
import { products } from "../assets/assets";

// Create the ShopContext
export const ShopContext = createContext({
    products: [],       // Default empty array for products
    currency: "$",      // Default currency
    delivery_fee: 10    // Default delivery fee
});

// ShopContextProvider component to provide values to child components
const ShopContextProvider = ({ children }) => {
    const currency = "$";
    const delivery_fee = 10;

    const value = {
        products, currency, delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
