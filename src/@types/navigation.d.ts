// interface interface MovieParams{
//   id: string;
//   title
// }

import { IFilms } from "../pages/Home";


export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined;
      movie: undefined;
      favorites: undefined;
    }
  }
}