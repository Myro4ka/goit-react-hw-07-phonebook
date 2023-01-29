import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h1 className={ css.title}>{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
