import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout every time useEffect is re-called, ie as value change
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
