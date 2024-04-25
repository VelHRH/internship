import { TextField } from "@mui/material";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn<any>;
  error?: string;
  inputType?: string;
  autofocus?: boolean;
}

const Input: FC<InputProps> = ({
  inputType,
  autofocus,
  label,
  register,
  error,
}) => {
  return (
    <TextField
      {...register}
      label={label}
      type={inputType}
      autoFocus={autofocus}
      error={error ? true : false}
      helperText={<>{error}</>}
      fullWidth
    />
  );
};

export default Input;
