"use client";

import { useState } from "react";
import { Card, Input, FormControl, FormLabel, Stack, Button, Textarea, FormHelperText } from "@mui/joy";
import "./contact-form.css";

const hasValue = (s: string | undefined) => {
  if (!s) {
    return "This is required";
  }
};

const validateEmail = (e: string | undefined) => {
  return hasValue(e);
};

const validateMessage = (m: string | undefined) => {
  return hasValue(m);
};

export default function ContactForm() {
  const [displayErrors, setDisplayErrors] = useState<{ email?: string, message?: string }>({});
  const clearErrors = () => setDisplayErrors({});

  return <div className="contact-form">
    <h2>Let's build something together.</h2>
    <Card>
      <form onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")?.toString();
        const message = formData.get("message")?.toString();
        const emailError = validateEmail(email);
        const messageError = validateMessage(message);
        if (emailError || messageError) {
          setDisplayErrors({ email: emailError, message: messageError });
          return;
        }

        alert(`Sent to ${email}:\n${message}`);
      }}>
        <Stack spacing={2}>
          <FormControl error={!!displayErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter your email" type="email" name="email" onChange={clearErrors} />
            {displayErrors.email && <FormHelperText>{displayErrors.email}</FormHelperText>}
          </FormControl>
          <FormControl error={!!displayErrors.message}>
            <FormLabel>Message</FormLabel>
            <Textarea className="message-input" placeholder="Enter your message" name="message" onChange={clearErrors} />
            {displayErrors.email && <FormHelperText>{displayErrors.email}</FormHelperText>}
          </FormControl>
          <Button className="submit-button" type="submit" variant="soft">Send</Button>
        </Stack>
      </form>
    </Card>
  </div>;
}
