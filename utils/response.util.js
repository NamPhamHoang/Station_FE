export const response = (res) => {
  return {
    success: (payload) =>
      res.json({
        isError: false,
        payload,
      }),
    error: (errorCode, payload) =>
      res.status(errorCode).json({
        isError: true,
        payload,
      }),
  };
};