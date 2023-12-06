import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const Navigate = useNavigate();
  const [CartId, setCart] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    console.log("Data updated:", Data);
    // Perform actions that depend on the updated data
  }, [Data]); 


  const addId = (id) => {
    setCart(id);
    console.log(id,"id");
  }

  const FetchData = (info) => {
    setData(info.data);
    console.log(info.data,"info");
  }

  return (
    <CartContext.Provider
      value={{
        CartId,
        addId,
        FetchData,
        Data
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
