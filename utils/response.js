const sendErrorResponse = (res, err) => {
  let statusCode = err.statusCode;
  let message = err.message;

  return res.status(statusCode).json({
    status: false,
    message: message,
  });
};

const sendResponse = (res, data, statusCode) => {
  return res.status(statusCode).json({
    status: true,
    data: data,
  });
};

export default { sendErrorResponse, sendResponse };
