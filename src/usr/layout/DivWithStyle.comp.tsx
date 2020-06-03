import React from 'react';
import PropTypes from 'prop-types';
import { DivWithStyleProps, DivWithStyleTypes } from './DivWithStyle.props';

/**
 * StyledDiv is used in case when the theme styles are not enough.
 * It is recommended to use it for complex layouts mostly.
 */
class DivWithStyle extends React.Component<DivWithStyleProps, any> {

    static propTypes: PropTypes.InferProps<DivWithStyleProps>;
    static defaultProps: PropTypes.InferProps<DivWithStyleProps>;

    render() {
        const { children, style } = this.props;
        return (
            <div style={style}>
                {children}
            </div>
        );
    }
}

DivWithStyle.propTypes = DivWithStyleTypes;

DivWithStyle.defaultProps = {
    style: {
        display: 'flex',
    },
    children: [<span/>],
};

export default DivWithStyle;
