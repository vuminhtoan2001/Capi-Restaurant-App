import react, { createContext, useContext, useState, useEffect } from "react";
import { getData } from "~/AsyncStorage";

const StoreProvider = react.createContext();
function StoreContext({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getData("userToken").then((value) => setIsLogin(value));
  });

  console.log("user token-->", isLogin);
  //   return null;
  return (
    <StoreProvider.Provider value={{ isLogin, setIsLogin }}>{children}</StoreProvider.Provider>
  );
}

export const useGetContext = () => {
  return (context = useContext(StoreProvider));
};

export default StoreContext;
