import {  useState } from "react";

export default function useForm(submitHanlder,initialValue) {
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

    submitHanlder(values)
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}
