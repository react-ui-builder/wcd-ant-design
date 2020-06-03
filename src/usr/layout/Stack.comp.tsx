import React from 'react';
import PropTypes from 'prop-types';
import { StackProps, StackTypes } from './Stack.props';

const styles: any = () => ({
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
});

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
            'row': null,
            'column': null,
        };
    }

    render(): JSX.Element {
        const { direction, spacing, justifyContent, justifyItems, cells } = this.props;
        const contentList: JSX.Element[] = [];
        let styleCell: any = {display: 'flex'};
        let styleLastCell: any = {display: 'flex'};
        if (direction === 'row') {
            styleCell.marginBottom = (parseInt(spacing as string) * 5) + "px";
        } else {
            styleCell.marginRight = (parseInt(spacing as string) * 5) + "px";
        };

        if (justifyContent) {
            styleCell.justifyContent = justifyContent;
            styleLastCell.justifyContent = justifyContent;
        }
        if (justifyItems) {
            styleCell.justifyItems = justifyItems;
            styleLastCell.justifyItems = justifyItems;
        }
        if (cells && cells.length > 0) {
            for (let i = 0; i < cells.length; i++) {
                contentList.push(
                    <div
                        key={`cell${i}`}
                        style={i === cells?.length - 1 ? styleLastCell : styleCell}
                    >
                        {cells[i]}
                    </div>
                );
            }
        }

        let style: any = {};
        if (direction === 'row') {
            style.display = 'block';
        } else {
            style.display = 'flex';
            style.flexDirection = 'row';
        }

        return (
            <div
                className={this.classByDirection[direction!]}
                style={style}
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
