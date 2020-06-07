import client from "./client";

// Fetch All Tasks
async function getTasks(filters) {
  const filterParams = Object.keys(filters).reduce((queryString, filterKey) => {
    if (!filters[filterKey] || filters[filterKey].length === 0)
      return queryString;
    if (filterKey === "labels") {
      const labelsQuery = filters[filterKey]
        .map((singleLabel) => `labels[]=${singleLabel}`)
        .join("&");
      return `${queryString}&${labelsQuery}`;
    }
    if (filters[filterKey] instanceof Date) {
      return `${queryString}&${filterKey}=${filters[filterKey].toISOString()}`;
    }
    return `${queryString}&${filterKey}=${filters[filterKey]}`;
  }, "");
  return client(`/tasks?${filterParams}`, { method: "GET", secure: true });
}

// Fetch Task By Id
async function getTaskById(id) {
  return client(`/tasks/${id}`, { method: "GET", secure: true });
}

// Create a new Task
async function addTask({
  title,
  description,
  status,
  label,
  priority,
  due_date,
}) {
  return client("/tasks", {
    method: "POST",
    data: {
      title,
      description,
      status,
      label,
      priority,
      due_date,
    },
    secure: true,
  });
}

// Updates an existing Task
async function updateTaskById(
  id,
  { title, description, status, label, priority, due_date }
) {
  return client(`/tasks/${id}`, {
    method: "PUT",
    data: {
      title,
      description,
      status,
      label,
      priority,
      due_date,
    },
    secure: true,
  });
}

// Deletes a task
async function deleteTaskById(id) {
  return client(`/tasks/${id}`, { method: "DELETE", secure: true });
}

export { getTasks, getTaskById, addTask, updateTaskById, deleteTaskById };
