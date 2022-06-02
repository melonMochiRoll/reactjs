import { useCallback, useState } from 'react';

const useSwitch = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [value, handler, setValue] as [
    boolean,
    typeof handler,
    typeof setValue,
  ];
};

export default useSwitch;