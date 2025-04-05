import { Button } from 'primereact/button';

export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            className={className}
            disabled={disabled}
            severity="danger"
        >
            {children}
        </Button>
    );
}
