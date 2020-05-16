import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ navigate }) => {
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <></>;
};

NotFoundPage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default NotFoundPage;
