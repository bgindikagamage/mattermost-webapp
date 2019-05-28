// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

export default class Suggestion extends React.PureComponent {
    static get propTypes() {
        return {
            term: PropTypes.string.isRequired,
            matchedPretext: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        };
    }

    static baseProps = {
        role: 'button',
        tabIndex: 0,
    };

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(this.props.term, this.props.matchedPretext);
    }
}
