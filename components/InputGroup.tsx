import React from "react";

type PropsType = {
  inputType: string;
  name: string;
  id: string;
  placeholder?: string;
  labelText: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = ({
  inputType,
  name,
  id,
  placeholder,
  labelText,
  value,
  onChange,
}: PropsType) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={inputType}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default InputGroup;
