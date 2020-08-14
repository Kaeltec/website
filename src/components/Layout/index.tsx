import React from 'react';

// import Header from '../Header';

import styles from './styles.styl';

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <div id="app-mount" className={styles['app-mount']}>
      <div id="app-root" className={styles.root}>
        {/* <Header /> */}

        <div id="app-content" className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
