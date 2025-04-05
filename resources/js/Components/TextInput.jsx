import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { InputText } from 'primereact/inputtext';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <InputText
            {...props}
            type={type}
            className={className}
            ref={localRef}
        />
    );
});
