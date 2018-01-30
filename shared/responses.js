export const successResponse = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  };
};

export const errorResponse = (error) => {
  return {
    statusCode: error.status || 500,
    body: JSON.stringify({
      error
    })
  };
};