import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ navigate }) => {
  navigate('/');

  return <></>;
};

NotFoundPage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default NotFoundPage;
