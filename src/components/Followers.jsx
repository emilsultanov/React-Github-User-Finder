import React, { useContext } from 'react';
import { GithubContext } from "../context/store.github";


export default function Followers() {
   const { followers } = useContext( GithubContext )
   return (
      <>
         <article className={ 'followers-card' }>
            <div className={ 'followers-card__label' }>followers</div>
            <div className={ 'followers-card__content' }>
               { followers.map( ( follower, index ) => {
                  const { avatar_url: img, html_url, login } = follower;
                  return (
                     <article key={ index } className={ 'follower' }>
                        <img src={ img } alt={ login } className={ 'follower__img' }/>
                        <div className={ 'follower__name-block' }>
                           <h4 className={ 'follower__name' }>{ login }</h4>
                           <a href={ html_url } className={ 'follower__url' }>{ html_url }</a>
                        </div>
                     </article>
                  );
               } ) }
            </div>
         </article>
      </>
   )
}




