import { BaseMessageError } from "./base";

export const validationError = (message?: string): BaseMessageError => ({
  error: true,
  reason: "ValidationError",
  message,
});

export const serverError = (message?: string): BaseMessageError => ({
    error: true,
    reason: "ServerError",
    message
})