import React from 'react';

import './back-button.css';

export class BackButton extends React.Component {
    static contextTypes = {
        router: () => true
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