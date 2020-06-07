import client from "./client";

/**
 * Fetches Task that match provided filters
 * @param {*} filters Filters Object
 * @returns Promise
 */
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

/**
 * Fetches a single task using ID
 * @param {*} id Task's ID
 * @returns Promise
 */
async function getTaskById(id) {
  return client(`/tasks/${id}`, { method: "GET", secure: true });
}

/**
 * Adds a new task
 * @param {*} {
 *   title,
 *   description,
 *   status,
 *   label,
 *   priority,
 *   due_date,
 * } Task Object
 * @returns Promise
 */
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

/**
 * Updates a task using ID
 * @param {*} id
 * @param {*} { title, description, status, label, priority, due_date } Task Object
 * @returns Promise
 */
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

/**
 * Deletes a Task using ID
 * @param {*} id Task's ID
 * @returns Promise
 */
async function deleteTaskById(id) {
  return client(`/tasks/${id}`, { method: "DELETE", secure: true });
}

export { getTasks, getTaskById, addTask, updateTaskById, deleteTaskById };
