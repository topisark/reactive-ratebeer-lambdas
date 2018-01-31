const corsHeaders = {
  'Access-Control-Allow-Origin': '*'
};

export const successResponse = (data) => ({
  headers: corsHeaders,
  statusCode: 200,
  body: JSON.stringify({
    data
  })
});

export const errorResponse = (error) => ({
  headers: corsHeaders,
  statusCode: error && error.statusCode || 500,
  body: JSON.stringify({
    error
  })
});
