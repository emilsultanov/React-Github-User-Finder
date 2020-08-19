import React, { useContext } from 'react';
import { GithubContext } from "../context/store.github";
import { Info, SerachBar, User } from "../components/index";


export default function Dashboard() {
   const { user } = useContext( GithubContext )

   if ( user ) {
      return (
         <main>
            <SerachBar/>
            <Info/>
            <User/>
         </main>
      )
   }
   return (
      <main>
         <SerachBar/>
      </main>
   )
}



