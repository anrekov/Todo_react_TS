import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-size: 1rem;
`;

// React.FC === React.FunctionComponent
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <AppWrapper>
        <Switch>
          <Route exact path='/' component={TodosPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export default App;
