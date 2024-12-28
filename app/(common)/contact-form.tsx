"use client";

import { useState } from "react";
import { Card, Input, FormControl, FormLabel, Stack, Button, Textarea, FormHelperText } from "@mui/joy";
import { sendMail } from "@/app/(actions)/send-mail";
import "./contact-form.css";

const hasValue = (s: string | undefined) => {
  if (!s) {
    return "This is required";
  }
};

const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (e: string | undefined) => {
  let err = hasValue(e);
  err ||= e?.match(EmailRegex) ? undefined : "This does not appear to be a valid email address. Please try again.";
  err ||= e === "bzlister@gmail.com" ? "bzlister@gmail.com is MY email address. Please enter YOUR email address." : undefined;

  return err;
};

const validateMessage = (m: string | undefined) => {
  return hasValue(m);
};

export default function ContactForm() {
  const [displayErrors, setDisplayErrors] = useState<{ email?: string, message?: string }>({});
  const clearErrors = () => setDisplayErrors({});
  const [buttonState, setButtonState] = useState<'default'|'loading'|'success'>('default');

  return <Card className="contact-form">
      <form onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")?.toString()?.toLowerCase()?.trim();
        const message = formData.get("message")?.toString()?.trim();
        const emailError = validateEmail(email);
        const messageError = validateMessage(message);
        if (emailError || messageError) {
          setDisplayErrors({ email: emailError, message: messageError });
          return;
        }

        const response = await sendMail({ email: email!, subject: "New mail from personal website", text: message! });
        if (response?.messageId) {
          setButtonState('success');
        } else {
          setDisplayErrors({ email: "Failed to send message. This could be my fault, or it could be that you mistyped your email address."});
          setButtonState('default');
        }
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
            {displayErrors.message && <FormHelperText>{displayErrors.message}</FormHelperText>}
          </FormControl>
          <Button
            className="submit-button"
            type="submit"
            variant="soft"
            color={buttonState === 'success' ? 'success' : 'primary'}
            loading={buttonState === 'loading'}
            disabled={buttonState !== 'default'}>
              {buttonState === 'success' ? "Sent" : "Send"}
          </Button>
        </Stack>
      </form>
    </Card>;
}
