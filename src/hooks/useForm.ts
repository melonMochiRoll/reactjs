import { useCallback, useState } from "react";

const useForm = <T>(initialValue: T) => {
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
    });
  }, [errors]);

  return [values, errors, onChangeValues, setErrors, onChangeErrors] as [
    T,
    T,
    typeof onChangeValues,
    typeof setErrors,
    typeof onChangeErrors,
  ];
}

export default useForm;