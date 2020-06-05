import React, {ReactNode} from 'react';
import { Typography as AntTypography }  from 'antd';
import pickWithValues from "usr/a_lib/utils/pickWithValues";
import { TypographyProps, TypographyTypes } from './Typography.props';

/**
 * Typography.
 *
 * Basic text writing, including headings, body text, lists, and more.
 *
 * When To Use#
 *
 * When need to display a title or paragraph contents in Articles/Blogs/Notes.
 *
 * When you need copyable/editable/ellipsis texts.
 *
 */

const Typography = (props: TypographyProps): JSX.Element => {
    const {
        code,
        copyable,
        delete: deleteProps,
        disabled,
        editable,
        ellipsis,
        href,
        target,
        level,
        mark,
        keyboard,
        underline,
        strong,
        type,
        text,
        variant,
    } = props;

    const {Paragraph: AntParagraph, Text: AntText, Title: AntTitle, Link: AntLink} = AntTypography;
    const [stateText, setStateText] = React.useState<any>(text);

    const handleTypographyChange = (text: string) => {
        setStateText(text);
        if (props.onChange) {
            props.onChange(text);
        }
    };

    let component: JSX.Element;
    let editableObject: any;
    if (editable) {
        editableObject = {};
        editableObject.editable = true;
        editableObject.onChange = handleTypographyChange;
    }

    switch (variant) {
        case 'paragraph':
            const paragraphProps = pickWithValues({code,
                copyable,
                delete: deleteProps,
                disabled,
                editable: editableObject,
                ellipsis,
                mark,
                keyboard,
                underline,
                strong,
                type});
            component = (
                <AntParagraph
                    {...paragraphProps}
                >
                    {stateText}
                </AntParagraph>
            );
            break;
        case 'title':
            const titleProps = pickWithValues({code,
                copyable,
                delete: deleteProps,
                disabled,
                editable: editableObject,
                ellipsis,
                level: parseInt(level ? level : '1'),
                mark,
                keyboard,
                underline,
                type});
            component = (
                <AntTitle
                    {...titleProps}
                >
                    {stateText}
                </AntTitle>
            );
            break;
        case 'link':
            const linkProps = pickWithValues({code,
                copyable,
                delete: deleteProps,
                disabled,
                editable: editableObject,
                ellipsis,
                href,
                target: target ? target : '_self',
                mark,
                keyboard,
                underline,
                strong,
                type});
            component = (
                <AntLink
                    {...linkProps}
                >
                    {stateText}
                </AntLink>
            );
            break;
        default:
            const textProps = pickWithValues({code,
                copyable,
                delete: deleteProps,
                disabled,
                editable: editableObject,
                ellipsis,
                mark,
                keyboard,
                underline,
                strong,
                type});
            component = (
                <AntText
                    {...textProps}
                >
                    {stateText}
                </AntText>
            );
            break;
    }

    return component;
};

Typography.propTypes = TypographyTypes;

Typography.defaultProps = {
    variant: 'text',
    level: '1',
};

export default Typography;
