import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import { useState } from 'react';

export default function Checkbox({ className = '', checked, onChange, ...props }) {
    // PrimeReactのCheckboxはcontrolledコンポーネントなので、stateを管理する必要がある
    const [checkedState, setCheckedState] = useState(checked || false);

    const handleChange = (e) => {
        setCheckedState(e.checked);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <PrimeCheckbox
            {...props}
            checked={checked !== undefined ? checked : checkedState}
            onChange={handleChange}
            className={className}
        />
    );
}
