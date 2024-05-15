import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './css/footter.module.scss';

function renderFooterSection(props) {
  return (
    <section className={styles.footerSection}>
      <img className={styles.line} src={'/assets/e5cf535774c1b85b14d4e3fbb99d5281.svg'} alt="alt text" />

      <div className={styles.footerNavbar}>
        <h3 className={styles.title}>
          Umbrella Corporation
        </h3>
        <h3 className={styles.subtitle}>
          Page
        </h3>
        <h3 className={styles.subtitle}>
          Page
        </h3>
        <h3 className={styles.subtitle}>
          Page
        </h3>
      </div>
    </section>
  );
}

renderFooterSection.propTypes = {};

export default renderFooterSection;
