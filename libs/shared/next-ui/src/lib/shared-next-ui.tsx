import { Route, Link } from 'react-router-dom';

import styles from './shared-next-ui.module.scss';

/* eslint-disable-next-line */
export interface SharedNextUiProps {}

export function SharedNextUi(props: SharedNextUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedNextUi!</h1>

      <ul>
        <li>
          <Link to="/">shared-next-ui root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the shared-next-ui root route.</div>}
      />
    </div>
  );
}

export default SharedNextUi;
