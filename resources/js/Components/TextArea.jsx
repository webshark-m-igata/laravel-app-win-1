import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';

export default forwardRef(function TextArea(
    { className = '', isFocused = false, rows = 4, ...props },
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
        <InputTextarea
            {...props}
            className={className}
            rows={rows}
            ref={localRef}
        />
    );
});