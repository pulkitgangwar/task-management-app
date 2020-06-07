import client from "./client";

/**
 * Fetches Task that match provided filters
 * @param {object} filters Filters Object
 * @returns Promise
 */
async function getTasks(filters) {
  // Reduce filter properties to generate queryString
  const filterParams = Object.keys(filters).reduce((queryString, filterKey) => {
    // Filter is not applied
    if (!filters[filterKey] || filters[filterKey].length === 0)
      return queryString;
    // Label Filter should be an array
    if (filterKey === "labels") {
      const labelsQuery = filters[filterKey]
        .map((singleLabel) => `labels[]=${singleLabel}`)
        .join("&");
      return `${queryString}&${labelsQuery}`;
    }
    // Date filters have to be converted to ISOString
    if (filters[filterKey] instanceof Date) {
      return `${queryString}&${filterKey}=${filters[filterKey].toISOString()}`;
    }
    return `${queryString}&${filterKey}=${filters[filterKey]}`;
  }, "");
  return client(`/tasks?${filterParams}`, { method: "GET", secure: true });
}

/**
 * Fetches a single task using ID
 * @param {string|number} id Task's ID
 * @returns Promise
 */
async function getTaskById(id) {
  return client(`/tasks/${id}`, { method: "GET", secure: true });
}

/**
 * Adds a new task
 * @param {object} {
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
 * @param {string|number} id
 * @param {object} { title, description, status, label, priority, due_date } Task Object
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
 * @param {string|number} id Task's ID
 * @returns Promise
 */
async function deleteTaskById(id) {
  return client(`/tasks/${id}`, { method: "DELETE", secure: true });
}

export { getTasks, getTaskById, addTask, updateTaskById, deleteTaskById };
