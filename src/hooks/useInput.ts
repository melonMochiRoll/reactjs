import { useCallback, useState } from 'react';

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [
    T,
    typeof handler,
    typeof setValue,
  ];
};

export default useInput;