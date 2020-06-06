import axios from "axios";

function getToken() {
  let accessToken = window.localStorage.getItem("access");

  if (!accessToken) throw new Error("User is not logged in");

  return accessToken;
}

const client = async (
  endpoint,
  { data = null, method = "GET", secure = true },
  customHeaders = {}
) => {
  const config = {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 60000,
    withCredentials: true,
    url: endpoint,
    method,
    headers: customHeaders,
  };

  if (data) config.data = data;

  if (secure) {
    config.headers.authorization = `Bearer ${getToken()}`;
  }

  return axios.request(config);
};

export default client;
