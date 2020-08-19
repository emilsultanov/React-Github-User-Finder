import React, { useContext } from 'react';
import axios from 'axios'
import { MdSearch } from 'react-icons/md';
import { GithubContext } from "../context/store.github";






export default function SerachBar() {
   const [ user, setUser ] = React.useState( '' );
   const { set_user, set_followers } = useContext( GithubContext )

   const handleSubmit = async ( e ) => {
      e.preventDefault();
      if ( user ) {

         try {
            const response = await axios.get( `https://api.github.com/users/${ user }` )
            const followers = await axios.get( response.data.followers_url );

            set_user( response.data )
            set_followers( followers.data )
         }
         catch ( e ) {
            console.log( e )
         }
      }
   };
   return (
      <section className='section padding-top-3'>
         <div className={'wrapper_container'}>
            <form onSubmit={ handleSubmit } className={ 'search-form' }>
               <div className='search-form__row'>
                  <MdSearch className={'serach-icon'}/>
                  <input
                     type='text'
                     className={ 'serach-form__input' }
                     placeholder='enter github user'
                     value={ user }
                     onChange={ ( e ) => setUser( e.target.value ) }
                  />
                  <button type='submit'>search</button>
               </div>
            </form>
         </div>

      </section>
   )
}

