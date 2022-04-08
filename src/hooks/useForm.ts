import { useCallback, useState } from "react";

export interface useFormType {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

type onChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => void;
type onChangeErrors = (name: string, error: string) => void;
type ReturnTypes = [useFormType, useFormType, onChangeValues, onChangeErrors];
const useForm = (initialValue: useFormType): ReturnTypes => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(initialValue);

  const onChangeValues = useCallback((e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }, [values]);

  const onChangeErrors = useCallback((name: string, error: string) => {
    setErrors({
      ...errors,
      [name]: error,
    })
  }, [errors]);

  return [values, errors, onChangeValues, onChangeErrors]
}

export default useForm;