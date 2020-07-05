import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({ name, value }) => (
  <>
    {name} : {name === 'positive feedback' ? value + '%' : value}
  </>
);
StatisticsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticsItem;
