import React, { useContext } from 'react';
import { MdBusiness, MdLink, MdLocationOn } from 'react-icons/md';
import { GithubContext } from "../context/store.github";


export default function Card() {
   const { user } = useContext( GithubContext )
   const {
      avatar_url,
      html_url,
      name,
      company,
      blog,
      bio,
      location,
      login
   } = user;
   return (
      <article className={ 'user-card' }>
         <div className={ 'user-card__label' }>user</div>
         <div className={ 'user-card__content' }>
            <header className={ 'user-card__header' }>
               <img src={ avatar_url } alt={ name } className={ 'user-card__img' }/>
               <div className={ 'user-card__name-block' }>
                  <h4 className={ 'user-card__name' }>{ name }</h4>
                  <p className={ 'user-card__username' }>@{ login }</p>
               </div>
               <a href={ html_url } className={ 'user-card__follow-btn' }>follow</a>
            </header>
            <p className='user-card__bio'>{ bio }</p>
            <div className="user-card__links">
               <p className={ 'user-card__company' }>
                  <MdBusiness></MdBusiness> { company }
               </p>
               <p className={ 'user-card__location' }>
                  <MdLocationOn></MdLocationOn> { location }
               </p>
               <a href={ blog } className={ 'user-card__blog' }>
                  <MdLink></MdLink>
                  { blog }
               </a>
            </div>
         </div>
      </article>
   )
}

