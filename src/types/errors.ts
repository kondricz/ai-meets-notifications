export const validationError = (message?: string) => ({
  error: true,
  reason: "ValidationError",
  message,
});

export const serverError = (message?: string) => ({
    error: true,
    reason: "ServerError",
    message
})