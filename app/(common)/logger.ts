import { sendMail } from "../(actions)/send-mail";

export const Log = (message: string, isError?: boolean) => {
  sendMail({
    email: "bzlister@gmail.com",
    message,
    subject: isError ? "Application encountered error" : "Log",
  });
};
