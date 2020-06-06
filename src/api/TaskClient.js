import axios from "axios";

class TaskClient {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  instantiatingAxios() {
    this.instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JSON.parse(localStorage.getItem("access"))}`;
  }

  //   read
  getTasks() {
    return new Promise((resolve, reject) => {
      this.instanciatingAxios();
      this.instance
        .get(`/tasks`)
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
      this.instanciatingAxios();
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

  // read
  filterTasks(filterObj) {
    return new Promise((resolve, reject) => {
      this.instanciatingAxios();
      const questionMark = ["?"];
      const queryParams = Object.keys(filterObj)
        .map((filterKey) => {
          if (filterKey === "labels") {
            const filterLabel = filterObj[filterKey]
              .map((singleLabel) => `labels[]=${singleLabel}`)
              .join("&");
            return filterLabel;
          }
          return `${filterKey}=${filterObj[filterKey]}`;
        })
        .join("&");

      const queryString = [...questionMark, queryParams].join("");

      this.instance
        .get(`/tasks/${queryString}`)
        .then((response) => resolve(response.data))
        .catch((err) => {
          console.log(err.response);
          if (err.response.data) {
            if (Array.isArray(err.response.data.message)) {
              reject(err.response.data.message[0]);
              return;
            } else if (err.response.data.message) {
              reject(err.response.data.message);
              return;
            }
          }
        });
    });
  }

  // create

  addTask({ title, description, status, label, priority, due_date }) {
    return new Promise((resolve, reject) => {
      this.instanciatingAxios();
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

  // update

  updateTask(id, { title, description, status, label, priority, due_date }) {
    return new Promise((resolve, reject) => {
      this.instanciatingAxios();
      if (!id || !title) {
        reject("please fill important fields");
        return;
      }

      this.instance
        .put(`/tasks/${id}`, {
          title,
          description,
          status,
          label,
          priority,
          due_date,
        })
        .then((response) => {
          if (response.status === 200) {
            resolve("updated the Task");
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.data) {
            if (Array.isArray(err.response.data.message)) {
              reject(err.response.data.message[0]);
              return;
            } else if (err.response.data.message) {
              reject(err.response.data.message);
              return;
            }
          }
        });
    });
  }

  // delete

  deleteTaskById(id) {
    return new Promise((resolve, reject) => {
      this.instanciatingAxios();
      if (!id) {
        reject("Please give a id");
        return;
      }

      this.instance
        .delete(`tasks/${id}`)
        .then((response) => {
          resolve("task Deleted!");
        })
        .catch((err) => {
          reject(err.response);
          console.log(err.response);
        });
    });
  }
}

export const taskClient = new TaskClient();

export default TaskClient;
