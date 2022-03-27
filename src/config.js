const IS_PROD = false;
const BASE_URL = IS_PROD
  ? ""                             // production url
  : "http://localhost:8000";

export { BASE_URL };