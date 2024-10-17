"use client";
import { useState } from "react";
import sendContactForm from "@/app/lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // setState((prev) => ({
    //   ...prev,
    // }));

    await sendContactForm(values);
    setState(initState);
    toast.success("Message sent!", { position: "top-right" });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-2xl mb-1">
            Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="off"
            min={3}
            max={50}
            className="text-zinc-900 bg-zinc-200 mb-4 p-2 text-2xl"
            value={values.name}
            onChange={handleChange}
          />
          <div className="w-full flex flex-col">
            <label htmlFor="email" className="text-2xl mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              min={5}
              max={75}
              className="text-zinc-900 bg-zinc-200 mb-4 p-2 text-2xl"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="message" className="text-2xl mb-1">
              Message*
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              required
              minLength={10}
              maxLength={500}
              className="text-zinc-900 bg-zinc-200 mb-8 p-2 text-2xl"
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="font-semibold text-zinc-900 bg-zinc-200 w-fit px-2 py-1 hover:opacity-70 transition-opacity duration-150 text-xl cursor-pointer"
            type="submit"
            // disabled={!values.name || !values.email || !values.message}
          >
            Send Message
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
