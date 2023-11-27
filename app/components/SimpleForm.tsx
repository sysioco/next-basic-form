"use client";

import { FormEvent, useState } from "react";

export default function SimpleForm() {
  const [data, setData] = useState();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData);

    const data = await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(formDataObject),
    })
      .then((res) => res.json())
      .catch((e) => console.error(e));

    setData(data);
    form.reset();
  };

  return (
    <section className="flex gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-1/2">
        <input
          type="text"
          className="rounded-lg border border-black p-3"
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          className="rounded-lg border border-black p-3"
          name="message"
          placeholder="Message"
          required
        />
        <button className="rounded-lg bg-black py-2 text-white">Sibmut</button>

        <div className="flex-1 rounded-lg bg-cyan-600 p-8 text-white">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </form>
    </section>
  );
}
