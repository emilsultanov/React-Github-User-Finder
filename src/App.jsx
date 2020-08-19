import React from 'react';
import './styles/main.css'
import { Dashboard } from './pages/index'
import { GithubProvider } from './context/store.github'


function App() {
   return (
      <GithubProvider>
         <div className={ 'app' }>
            <Dashboard/>
         </div>
      </GithubProvider>
   );
}

export default App;
