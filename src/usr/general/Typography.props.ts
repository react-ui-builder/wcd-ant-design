import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface TypographyProps {
    code?: boolean;
    copyable?: boolean;
    delete?: boolean;
    disabled?: boolean;
    editable?: boolean;
    ellipsis?: boolean;
    href?: string;
    target?: '_blank' | '_self' | '_parent';
    level?: '1' | '2' | '3' | '4';
    mark?: boolean;
    keyboard?: boolean;
    underline?: boolean;
    strong?: boolean;
    text?: string;
    type?: 'secondary' | 'warning' | 'danger';
    variant?: 'text' | 'title' | 'paragraph' | 'link';
    onChange?: (text: string) => void;

}

export const TypographyTypes: PropTypes.InferProps<TypographyProps> = {
    /**
     * Code style
     */
    code: PropTypes.bool,
    /**
     * Config copy.
     */
    copyable: PropTypes.bool,
    /**
     * Delete line style
     */
    delete: PropTypes.bool,
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Editable. Can control edit state
     */
    editable: PropTypes.bool,
    /**
     * Display ellipsis when text overflows. Should set width when ellipsis needed
     */
    ellipsis: PropTypes.bool,
    /**
     * href for link. Is used onlu for variant: "link"
     */
    href: PropTypes.string,
    /**
     * Target for link
     */
    target: PropTypes.oneOf(['_blank', '_self', '_parent']),
    /**
     * Set content importance. Match with h1, h2, h3, h4. Only fro variant: "title"
     */
    level: PropTypes.oneOf(['1', '2', '3', '4']),
    /**
     * Marked style
     */
    mark: PropTypes.bool,
    /**
     * Keyboard style
     */
    keyboard: PropTypes.bool,
    /**
     * underline style
     */
    underline: PropTypes.bool,
    /**
     * Bold style
     */
    strong: PropTypes.bool,
    /**
     * Content type
     */
    type: PropTypes.oneOf(['secondary', 'warning', 'danger']),
    /**
     * Text. Text to be shown
     */
    text: PropTypes.string,
    /**
     * Typography type: Title, Text, Paragraph or Link
     */
    variant: PropTypes.oneOf(['title', 'text', 'paragraph', 'link']),
    /**
     * Trigger when user edits the content (text: string) => void
     */
    onChange: PropTypes.func,
};
