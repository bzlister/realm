import { FormEvent, useState } from "react";
import { useForm } from "./form.hook";

const hasValue = (s: string) => {
  if (!s) {
    return "This is required";
  }
};

const validateEmail = (e: string) => {
  return hasValue(e);
};

const validateMessage = (m: string) => {
  return hasValue(m);
};

export default function ContactForm() {
  const [email, emailError, setEmail] = useForm(validateEmail);
  const [message, messageError, setMessage] = useForm(validateMessage);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (emailError || messageError) {
      return;
    }

    alert(`Send to: ${email}\n{message}`);

    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
