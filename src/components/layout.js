import React from 'react';
import PropTypes from 'prop-types';

const LayoutComponent = ({ children }) => <div>{children}</div>;

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
