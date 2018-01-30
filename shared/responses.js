const corsHeaders = {
  "Access-Control-Allow-Origin" : "*"
};

export const successResponse = (data) => {
  return {
    headers: corsHeaders,
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  };
};

export const errorResponse = (error) => {
  return {
    headers: corsHeaders,
    statusCode: error.status || 500,
    body: JSON.stringify({
      error
    })
  };
};
