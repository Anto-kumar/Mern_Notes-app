import React,{useState} from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

function PasswordInput({value, onChange, placeholder}) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => {
        setIsVisible(!isVisible);
    }

return (
    <div className='relative mb-3'>
        <input
            type={isVisible ? "text" : "password"}
            id="password"
            name="password"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='input-box pr-10 w-full'
        />


        {isVisible ? (
            <FaRegEye
                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                onClick={toggleIsVisible}
            />
        ) : (
            <FaRegEyeSlash
                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                onClick={toggleIsVisible}
            />
        )}
    </div>
)
}

export default PasswordInput