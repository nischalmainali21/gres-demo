import React from "react";
import { LoginFormValues } from "@/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PropsType = {
  inputType: string;
  name: keyof LoginFormValues;
  id: string;
  placeholder?: string;
  labelText: string;
  register: UseFormRegister<LoginFormValues>;
  errors: FieldErrors<LoginFormValues>;
};

const InputGroup = ({
  inputType,
  name,
  id,
  placeholder,
  labelText,
  register,
  errors,
}: PropsType) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 ">
        {labelText}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={inputType}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-myColor-300 placeholder:text-myColor-400 focus:ring-2 focus:ring-inset focus:ring-myColor-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          {...register(name, {
            required: { value: true, message: `${name} is required` },
          })}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-xs text-myColor-700">{`${labelText} is required`}</p>
      )}
    </div>
  );
};

export default InputGroup;
