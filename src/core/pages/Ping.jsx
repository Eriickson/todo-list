import React from "react";
import { useForm } from "react-hook-form";

const Ping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Recibido");
    console.log(data);
  }
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="border"
        {...register("hola", {
          minLength: { message: "Mínimo 5 caracteres", value: 5 },
        })}
      />
    </form>
  );
};

export default Ping;
