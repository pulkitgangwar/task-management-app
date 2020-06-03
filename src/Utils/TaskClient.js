import axios from "axios";

class TaskClient {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JSON.parse(localStorage.getItem("access"))}`;
  }

  //   read
  getTasks() {
    return new Promise((resolve, reject) => {
      this.instance
        .get("/tasks")
        .then((data) => {
          resolve(data.data);
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

  // read
  getTaskById(id) {
    return new Promise((resolve, reject) => {
      this.instance
        .get(`/tasks/${id}`)
        .then((data) => {
          resolve(data.data);
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

  // create

  addTask({ title, description, status, label, priority, due_date }) {
    return new Promise((resolve, reject) => {
      if (!title || !status || !label || !priority) {
        reject("Please fill out all the important fields");
        return;
      }

      this.instance
        .post(`/tasks`, {
          title,
          description,
          status,
          label,
          priority,
          due_date,
        })
        .then((response) => {
          resolve(response.data);
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

export const taskClient = new TaskClient();

export default TaskClient;
