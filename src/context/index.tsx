import React, { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch, useEffect } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface IFavorites{
  id: string;
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

  useEffect(() => {
    const loadFilmsStorage = async() => {
      const films = await AsyncStorage.getItem('@storage_films');
      if(films){
        setFavorites(JSON.parse(films));
      }
    };
    loadFilmsStorage();
  },[])

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