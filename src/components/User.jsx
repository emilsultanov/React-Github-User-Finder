import React from 'react';
import { Card, Followers } from './index'


export default function User() {
   return (
      <section className='section padding-top-3'>
         <div className='wrapper_container'>
            <div className={ 'row' }>
               <div className="col-lg-6">
                  <Card/>
               </div>
               <div className="col-lg-6">
                  <Followers/>
               </div>
            </div>
         </div>
      </section>
   )
}


