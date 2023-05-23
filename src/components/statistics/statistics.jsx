import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {/* <h2 className={css.title}>{title}</h2> */}
    {title && <h1 className={css.title}>{title}</h1>}
    <ul className={css.stat_list}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
