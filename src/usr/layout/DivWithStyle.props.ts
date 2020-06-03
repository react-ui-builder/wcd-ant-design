import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface DivWithStyleProps {
    style?: any;
    children: ReactNode[];
}

export const DivWithStyleTypes: PropTypes.InferProps<DivWithStyleProps> = {
    /**
     * Inline styles of the component. The object is used as a style property of the div component.
     */
    style: PropTypes.object,
    /**
     *  An array of the placeholders for child components.
     *  Increase array size to put more items.
     */
    children: PropTypes.arrayOf(PropTypes.element),
};
