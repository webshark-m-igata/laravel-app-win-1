import { Button } from 'primereact/button';

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            type={type}
            className={className}
            disabled={disabled}
            severity="secondary"
        >
            {children}
        </Button>
    );
}
