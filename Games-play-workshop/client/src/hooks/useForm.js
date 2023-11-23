import { useEffect, useState } from "react";

export default function useForm(initialValue) {
  const [values, setFormValue] = useState(initialValue);
    
//   useEffect(() => {
//     setFormValue(initialValue);
//   }, [initialValue]);

  const onChange = (e) => {
    setFormValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
