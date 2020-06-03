import axios from "axios";

class AuthClient {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
    });
  }

  register(name, email, password) {
    return new Promise((resolve, reject) => {
      if (!name || !email || !password) {
        reject("all fields are compulsory to fill");
        return;
      }

      this.instance
        .post("/register", {
          name,
          email,
          password,
        })
        .then((response) => {
          if (response.status === 201) {
            resolve("Account Created");
            return;
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (Array.isArray(err.response.data.message)) {
            reject(err.response.data.message[0]);
            return;
          } else if (err.response.data.message) {
            reject(err.response.data.message);
            return;
          }
        });
    });
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      if (!email || !password) {
        reject("all fields are compulsory to fill");
        return;
      }

      this.instance
        .post("/register", {
          email,
          password,
        })
        .then((response) => {
          resolve(response.data.access_token);
        })
        .catch((err) => {
          console.log(err.response);
          if (Array.isArray(err.response.data.message)) {
            reject(err.response.data.message[0]);
            return;
          } else if (err.response.data.message) {
            reject(err.response.data.message);
            return;
          }
        });
    });
  }
}

export default AuthClient;
