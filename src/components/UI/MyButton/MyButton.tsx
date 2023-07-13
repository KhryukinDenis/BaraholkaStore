import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import classes from './MyButton.module.scss'
import cn from 'classnames';

export enum ButtonVariants {
    GO_TO_BUCKET = "GO_TO_BUCKET",
    BACK = "BACK",
    NF = "NF",
    DELETE = "DELETE",
    CHECKED = "CHECKED",
    DEFAULT = "DEFAULT",
}

const styleByButtonVariant = {
    [ButtonVariants.GO_TO_BUCKET]: classes.bucket_btn,
    [ButtonVariants.BACK]: classes.back_btn,
    [ButtonVariants.NF]: classes.nf_btn,
    [ButtonVariants.DELETE]: classes.delete_btn,
    [ButtonVariants.CHECKED]: classes.checked_btn,
    [ButtonVariants.DEFAULT]: classes.default_btn,
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: ButtonVariants;
}

const MyButton = (props: IProps) => {
    const { children} = props;
    return (
        <button
            {...props}
            className={cn(styleByButtonVariant[props.variant || ButtonVariants.DEFAULT])}
        >
            {children}
        </button>
    );
};

export default MyButton;