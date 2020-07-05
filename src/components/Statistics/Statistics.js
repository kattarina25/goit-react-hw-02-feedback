import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

const Statistics = ({ statistics }) => (
  <ul className={styles.list}>
    {statistics.map((statisticItem, index) => (
      <li className={styles.item} key={index}>
        <StatisticsItem name={statisticItem[0]} value={statisticItem[1]} />
      </li>
    ))}
  </ul>
);
Statistics.props = {
  statistics: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default Statistics;
