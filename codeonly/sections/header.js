import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './css/header.module.scss';

function renderHeaderSection(props) {
  return (
    <section className={styles.headerSection}>
      <div className={styles.headerNavbar}>
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

        <div className={styles.contentBox}>
          <h5 className={styles.highlightButton}>
            Button
          </h5>
        </div>
      </div>
    </section>
  );
}

renderHeaderSection.propTypes = {};

export default renderHeaderSection;
