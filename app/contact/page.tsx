import ContactForm from "../_components/contactForm";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-4 ">
      <h1 className="text-xl mb-16 text-center">
        For bookings and other inquiries please fill out the form below
      </h1>
      <ContactForm />
    </div>
  );
}
