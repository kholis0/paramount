import { forwardRef, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { Input } from 'postcss';

Input.propTypes = {
    type: propTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
    className: propTypes.string,
    variant: propTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: propTypes.string,
    required: propTypes.bool,
    isFocused: propTypes.bool,
    handleChange: propTypes.func,
    placeholder: propTypes.string,
    isError: propTypes.bool,
};

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, defaultValue, className, variant = "primary", autoComplete, required, isFocused, handleChange, isError, placeholder },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
});
