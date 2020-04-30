import React from 'react';
import { Router,Route } from 'react-router-dom';
import history from './history';

import StreamCreate from './stream/StreamCreate';
import StreamDelete from './stream/StreamDelete';
import StreamEdit from './stream/StreamEdit';
import StreamList from './stream/StreamList';
import StreamShow from './stream/StreamShow';

import Header from './components/Header';

function App() {
  return(
    <div>
      <Router history={history}>
        <div>
          <Header/>
          <div className="ui container">
              <Route path='/' exact component={StreamList}/>
              <Route path='/stream/new' exact component={StreamCreate}/>
              <Route path='/stream/edit/:id' exact component={StreamEdit}/>
              <Route path='/stream/delete/:id' exact component={StreamDelete}/>
              <Route path='/stream/show/:id' exact component={StreamShow}/>
              <Route path='/stream/list' exact component={StreamList}/>
          </div>
        </div>
      </Router>
    </div>
  );
}

// he used switches

export default App;
