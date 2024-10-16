"use client";
import { useState } from "react";
import sendContactForm from "@/app/lib/api";

const initValues = {
  name: "",
  email: "",
  message: "",
};
const initState = { values: initValues };

export default function ContactForm() {
  const [state, setState] = useState(initState);
  const { values } = state;

  function handleChange({ target }) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values);
    setState(initState);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="font-medium text-2xl mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          autoComplete="off"
          min={3}
          max={35}
          className="text-zinc-900 bg-zinc-200 mb-4 p-1 text-xl font-semibold"
          value={values.name}
          onChange={handleChange}
        />
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="font-medium text-2xl mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            min={5}
            max={50}
            autoComplete="off"
            className="text-zinc-900 bg-zinc-200 mb-4 p-1 text-xl font-semibold"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="message" className="font-medium text-2xl mb-1">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            id="messafe"
            required
            minLength={10}
            maxLength={200}
            className="text-zinc-900 bg-zinc-200 mb-4 p-1 text-xl font-semibold"
            value={values.message}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-zinc-200 mt-2 text-zinc-900 w-fit px-2 py-1 hover:opacity-70 transition-opacity duration-150 text-xl font-semibold cursor-pointer"
          type="submit"
          disabled={!values.name || !values.email || !values.message}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
