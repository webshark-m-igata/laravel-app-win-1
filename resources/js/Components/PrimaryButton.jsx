import { Button } from 'primereact/button';

export default function PrimaryButton({
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
            severity="primary"
        >
            {children}
        </Button>
    );
}
