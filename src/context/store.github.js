import React, { createContext, useReducer } from 'react';
import githubReducer from "./reducer.github";


const initialState = {
   user: null,
   followers: []
};

const GithubContext = createContext( initialState );
const { Provider } = GithubContext;


function GithubProvider( { children } ) {
   const [ state, dispatch ] = useReducer( githubReducer, initialState );


   const set_user = ( user ) => {
      dispatch( {
         type: 'set_user',
         payload: {
            user
         }
      } )
   }

   const set_followers = ( followers ) => {
      dispatch( {
         type: 'set_followers',
         payload: {
            followers
         }
      } )
   }

   const remove_user = () => {
      dispatch( {
         type: 'remove_user'
      } )
   }

   return <Provider
      value={ {
         user: state.user,
         followers: state.followers,
         set_user,
         set_followers,
         remove_user
      } }>{ children }</Provider>
}

export { GithubContext, GithubProvider }




