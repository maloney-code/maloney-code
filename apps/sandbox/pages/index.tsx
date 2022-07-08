import styles from './index.module.scss';
import  classNames from 'classnames';
export function Index() {

  return (
    <div className={classNames([styles.page])}>
      <h1>
        sandbox 👋
      </h1>
    </div>
  );
}

export default Index;
