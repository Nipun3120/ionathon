const IS_PROD = false;
export const BASE_URL = IS_PROD
  ? "" // production url
  : "http://localhost:8000/fetch-data";
