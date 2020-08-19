import React, { useContext } from 'react';
import { GithubContext } from "../context/store.github";
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';


export default function UserInfo() {
   const { user } = useContext( GithubContext )
   const { public_repos, followers, following, public_gists } = user
   const items = [
      {
         id: 1,
         icon: <GoRepo className='icon'/>,
         label: 'repos',
         value: public_repos,
         color: 'pink',
      },
      {
         id: 2,
         icon: <FiUsers className='icon'/>,
         label: 'followers',
         value: followers,
         color: 'green',
      },
      {
         id: 3,
         icon: <FiUserPlus className='icon'/>,
         label: 'following',
         value: following,
         color: 'purple',
      },
      {
         id: 4,
         icon: <GoGist className='icon'/>,
         label: 'gists',
         value: public_gists,
         color: 'yellow',
      },
   ];
   return (
      <section className='section padding-top-3'>
         <div className="wrapper_container">
            <div className="row">
               { items.map( ( item ) => {
                  return <Item key={ item.id } { ...item }></Item>;
               } ) }
            </div>
         </div>
      </section>
   )
}


const Item = ( { icon, label, value, color } ) => {
   return (
      <div className={' col-xs-12 col-sm-6 col-lg-3'}>
         <article className='info-item'>
            <span className={ color }>{ icon }</span>
            <div>
               <h3 className={'info-item__title'}>{ value }</h3>
               <p className={'info-item__label'}>{ label }</p>
            </div>
         </article>
      </div>
   );
};

