import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react"

interface IFavorites{
  title: string;
}

interface IContext {
  favorites: IFavorites[];
  setFavorites: Dispatch<SetStateAction<IFavorites[]>>
}

interface IContextProvider {
  children: ReactNode;
}

const Context = createContext({} as IContext);

const ContextProvider = ({ children } : IContextProvider) => {

  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  return (
    <Context.Provider value={{favorites, setFavorites}}>
      {children}
    </Context.Provider>
  )
}

const useContextApp = () => {
  const context = useContext(Context);
  return context;
}

export { ContextProvider, useContextApp };