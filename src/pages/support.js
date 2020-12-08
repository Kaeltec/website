import React, { useEffect } from 'react';

import Layout from '@app/components/Layout';
import Loader from '@app/components/Loader';

const SupportPage = () => {
  useEffect(() => {
    window.location.replace('https://discord.gg/C3NP4gECRx');
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexGrow: '1',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader />
      </div>
    </Layout>
  );
};

export default SupportPage;
