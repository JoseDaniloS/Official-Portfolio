import { forwardRef } from "react";

const Input = forwardRef(function Input(
    { label, name, type = "text", placeholder, error, ...rest },
    ref
) {
    return (
        <div className="relative w-full">
            <input
                id={name}
                name={name}
                type={type}
                ref={ref}
                placeholder=" "
                className={`peer w-full text-lightMode-text border-lightMode-border placeholder-transparent border ${error
                    ? "border-neon-red"
                    : "border-[#9999]"} rounded-lg px-4 pt-5 pb-2 focus:outline-none transition`}
                {...rest}
            />
            <label
                htmlFor={name}
                className={`absolute left-4 
                    bg-[#080808]
                  peer-focus:text-brand-text peer-placeholder-shown:text-brand-muted px-1 -top-2.5 text-sm transition-all 
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base  text-brand-muted
                peer-focus:-top-2.5 peer-focus:text-sm`}
            >
                {label}
            </label>
            {error
                ? <p className="text-xs text-neon-red mt-1 px-1">
                        {error}
                    </p>
                : placeholder &&
                    <p className="text-xs text-lightMode-muted mt-1 px-1">
                        {placeholder}
                    </p>}
        </div>
    );
});

export default Input;
