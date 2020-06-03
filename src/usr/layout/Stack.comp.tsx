import React from 'react';
import PropTypes from 'prop-types';
import { StackProps, StackTypes } from './Stack.props';
import * as _ from "lodash";

const stylesGrid = {
    gridWithRow: {
        width: '100%',
        display: 'grid',
        gridAutoFlow: 'column',
    },
    gridWithColumn: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(auto-fill, minmax(10px, 1fr) )',
    },
};

/**
 * A simple CSS grid wrapper that can be used to arrange the sections in two directions
 * * horizontal layout - `row`
 * * vertical direction - `column`
 */
class Stack extends React.Component<StackProps, any> {

    static propTypes: PropTypes.InferProps<StackProps>;
    static defaultProps: PropTypes.InferProps<StackProps>;
    classByDirection: any;

    constructor(props: StackProps) {
        super(props);
        const { classes } = this.props;
        this.classByDirection = {
            'row': stylesGrid.gridWithRow,
            'column': stylesGrid.gridWithColumn,
        };
    }

    render(): JSX.Element {
        const { direction, spacing, justifyContent, justifyItems, cells } = this.props;
        const contentList: JSX.Element[] = [];

        if (cells && cells.length > 0) {
            for (let i = 0; i < cells.length; i++) {
                contentList.push(
                    <div
                        key={`cell${i}`}
                    >
                        {cells[i]}
                    </div>
                );
            }
        }

        let style: any = { gridGap: `${parseInt(spacing as string) * 8}px` };
        if (justifyContent) {
            style.justifyContent = justifyContent;
        }
        if (justifyItems) {
            style.justifyItems = justifyItems;
        }
        return (
            <div
                style={_.assign({}, style, this.classByDirection[direction!])}
            >
                {contentList}
            </div>
        );
    }
}

Stack.propTypes = StackTypes;

Stack.defaultProps = {
    spacing: '1',
    direction: 'column',
    cells: [
        <span/>,
        <span/>,
        <span/>
    ]
};

export default Stack;
