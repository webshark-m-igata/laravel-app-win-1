import { forwardRef, useEffect, useImperativeHandle, useRef, Children, isValidElement, cloneElement } from 'react';
import { Dropdown } from 'primereact/dropdown';

export default forwardRef(function SelectInput(
    { className = '', isFocused = false, children, value, onChange, ...props },
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

    // 子要素からoptionsを生成
    const options = [];
    Children.forEach(children, child => {
        if (isValidElement(child) && child.type === 'option') {
            options.push({
                label: child.props.children,
                value: child.props.value
            });
        }
    });

    return (
        <Dropdown
            {...props}
            value={value}
            options={options}
            onChange={onChange}
            className={className}
            ref={localRef}
            panelStyle={{ width: 'auto', minWidth: '100%'}}
            inputStyle={{ width: 'auto' }}
            optionLabel="label"
            placeholder={props.placeholder || "選択してください"}
            filter
            filterPlaceholder="検索..."
            virtualScrollerOptions={{ itemSize: 38 }}
        />
    );
});