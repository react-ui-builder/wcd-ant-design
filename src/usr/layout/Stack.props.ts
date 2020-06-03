import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface StackProps {
    classes?: any;
    direction?: 'row' | 'column';
    spacing?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
    justifyContent?: '' | 'flex-start' | 'center' | 'flex-end';
    justifyItems?: '' | 'center' | 'stretch' | 'start' | 'end';
    cells?: ReactNode[];
}

export const StackTypes: PropTypes.InferProps<StackProps> = {
    // Defines the direction layout of the cells in the grid
    direction: PropTypes.oneOf([
        'row', 'column'
    ]),
    /**
     * Defines the space between the cells.
     */
    spacing: PropTypes.oneOf([
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]),
    // Defines the justify-content style property. It is applied for all screen sizes.
    justifyContent: PropTypes.oneOf([
        '', 'flex-start', 'center', 'flex-end'
    ]),
    // Defines the justify-items style property. It is applied for all screen sizes.
    justifyItems: PropTypes.oneOf([
        '', 'center', 'stretch', 'start', 'end'
    ]),
    /**
     * Contents of the cells.
     */
    cells: PropTypes.arrayOf(PropTypes.element),
};