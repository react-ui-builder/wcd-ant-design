import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface ButtonProps {
    disabled?: boolean;
    ghost?: boolean;
    href?: string;
    htmlType?: string;
    icon?: ReactNode;
    shape?: '' | 'circle' | 'round';
    size?: 'small' | 'medium' | 'large';
    target?: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'link';
    fullWidth?: boolean;
    label?: string;
    loading?: boolean;
    onClick: () => void;
}

export const ButtonTypes: PropTypes.InferProps<ButtonProps> = {
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * make background transparent and invert text and border colors
     */
    ghost: PropTypes.bool,
    /**
     * redirect url of link button
     */
    href: PropTypes.string,
    /**
     * set the original html type of button
     */
    htmlType: PropTypes.string,
    /**
     * set the icon component of button
     */
    icon: PropTypes.node,
    /**
     * set the loading status of button
     */
    loading: PropTypes.bool,
    /**
     * can be set to circle, round or omitted
     */
    shape: PropTypes.oneOf(['', 'circle', 'round']),
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * same as target attribute of a, works when href is specified
     */
    target: PropTypes.string,
    /**
     * can be set to 'primary' 'ghost' 'dashed' 'danger' 'link' text or omitted (meaning default)
     */
    type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'danger', 'link']),
    /**
     * If true, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * Button label text
     */
    label: PropTypes.string,
    /*
     * Triggered when the user click on the button.
     * Signature: `() => void;`
     *
     */
    onClick: PropTypes.func,
};
