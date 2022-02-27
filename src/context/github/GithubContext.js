import { createContext,useReducer} from "react";
import githubReducer from "./GithubReducer";
import { searchUsers } from "./GithubActions";
const GithubContext=createContext()


export const GithubProvider=({children})=>{
   const initialState={
       users:[],
       repos:[],
       user:{},
       loading: false,
   }

   const[state,dispatch]=useReducer(githubReducer,initialState)

return <GithubContext.Provider value={{
   ...state,
   dispatch,
    
}}>
    {children}
</GithubContext.Provider>
}

export default GithubContext