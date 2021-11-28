import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>Welcome to my-react-app!</h1>
      </header>
      <main>
        <h2>Resources &amp; Tools</h2>
      </main>
        <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
