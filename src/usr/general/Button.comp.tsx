import React, {ReactNode} from 'react';
import { Button as AntButton }  from 'antd';
import pickWithValues from "usr/a_lib/utils/pickWithValues";
import { ButtonProps, ButtonTypes } from './Button.props';

/**
 * Button. To trigger an operation.
 *
 * When To Use#
 * A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
 *
 * Ant Design provides 4 types of button.
 *
 * Primary button: indicate the main action, one primary button at most in one section.
 *
 * Default button: indicate a series of actions without priority.
 *
 * Dashed button: used for adding action commonly.
 *
 * Text button: used for the most secondary action.
 *
 * Link button: used for external links.
 *
 */

const Button = (props: ButtonProps): JSX.Element => {
    const {
        disabled,
        ghost,
        href,
        htmlType,
        icon,
        shape,
        size,
        target,
        type,
        fullWidth,
        label,
        loading,
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (props.onClick) {
            props.onClick();
        }
    };

    const buttonProps = pickWithValues({disabled, ghost, href, htmlType, icon, shape, size, target, type,
        block: fullWidth, label, loading});

    return (
        <AntButton
            {...buttonProps}
            onClick={handleButtonClick}
        >
            {label}
        </AntButton>
    );
};

Button.propTypes = ButtonTypes;

Button.defaultProps = {
    label: 'Button',
    type: 'primary',
};

export default Button;
