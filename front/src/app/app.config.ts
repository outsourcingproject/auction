let requestHost;
if ('production' === ENV) {
  requestHost = '';
} else {
  requestHost = "http://localhost:8360";
}
export const REQUEST_HOST = requestHost;
