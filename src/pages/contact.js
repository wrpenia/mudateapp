import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { useForm } from "react-hook-form";

function Contact() {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")} />
      <input {...register("LasttName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
export default Contact;