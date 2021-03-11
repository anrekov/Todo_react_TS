import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

// React.FC === React.FunctionComponent
const App: React.FC = () => {
  
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={TodosPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
