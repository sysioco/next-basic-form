"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormDataSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters." }),
});

type Inputs = z.infer<typeof FormDataSchema>;

export default function ReactHookForm() {
  const [data, setData] = useState<Inputs>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    setData(data);
  };

  console.log(watch("name", "message")); // watch input value by passing the name of it

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <input placeholder="message" {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}

        <input type="submit" />
      </form>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}
