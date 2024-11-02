import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && <label className="block mb-1" htmlFor={id}></label>}
            <input
                type={type}
                className={` text-black ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input;