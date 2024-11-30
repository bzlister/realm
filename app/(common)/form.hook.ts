import { useState } from "react";

export const useForm = (validate: (newValue: string) => string | undefined): [string, string | undefined, (newValue: string) => void] => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const setFormValue = (newValue: string) => {
    setValue(newValue);
    setError(validate(newValue));
  };

  return [value, error, setFormValue];
};
