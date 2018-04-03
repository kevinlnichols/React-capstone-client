import React from 'react';
import PropTypes from 'prop-types';

import './back-button.css';

export class BackButton extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <button
                className="back-button back-button-icon"
                onClick={this.context.router.history.goBack}>
                Back
            </button>
        )
    }
}

export default (BackButton);