import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { LoginFormValues } from "@/types";

type FormValidationReturnType = {
  register: UseFormRegister<LoginFormValues>;
  handleSubmit: (
    onSubmit: SubmitHandler<LoginFormValues>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<LoginFormValues>;
};

const useFormValidation = (): FormValidationReturnType => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  return {
    register,
    handleSubmit: (onSubmit: SubmitHandler<LoginFormValues>) =>
      handleSubmit(onSubmit),
    errors,
  };
};

export default useFormValidation;
