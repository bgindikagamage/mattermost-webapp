// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

export default class SystemPermissionGate extends React.PureComponent {
    static defaultProps = {
        invert: false,
    }

    static propTypes = {

        /**
         * Has permission
         */
        hasPermission: PropTypes.bool.isRequired,

        /**
         * Invert the permission (used for else)
         */
        invert: PropTypes.bool.isRequired,

        /**
         * Content protected by the permissions gate
         */
        children: PropTypes.node.isRequired,
    };

    render() {
        if (this.props.hasPermission && !this.props.invert) {
            return this.props.children;
        }
        if (!this.props.hasPermission && this.props.invert) {
            return this.props.children;
        }
        return null;
    }
}
