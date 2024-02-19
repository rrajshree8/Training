//12 FEB

import React, { Component, createContext, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const ThemeContext = createContext('light');


const App = () => (
  <Router>
    <ThemeContext.Provider value="dark">
      <div>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
          <li>
            <Link to="/lazy">Lazy Loaded Component</Link>
          </li>
        </ul>
        <Route path="/user/:id" component={UserProfile} />
        <Route path="/lazy" render={() => (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        )} />
      </div>
    </ThemeContext.Provider>
  </Router>
);


const UserProfile = ({ match }) => {
  return <h2>User ID: {match.params.id}</h2>;
};


const Toolbar = () => {
  const theme = React.useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
};

export default App;
