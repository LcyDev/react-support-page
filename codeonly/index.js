import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderHeaderSection from './sections/header.js';
import renderContentSection from './sections/content.js';
import renderFooterSection from './sections/footer.js';

import styles from './css/index.module.scss';

function Support(props) {
    return (
        <main className={cn(styles.mainSection, props.className, 'support')}>
            {renderHeaderSection(props)}
            {renderContentSection(props)}
            {renderFooterSection(props)}
        </main>
    );
}

Support.propTypes = {
    className: PropTypes.string,
    btn_text: PropTypes.string.isRequired
};

export default Support;