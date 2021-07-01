const baseUrl = "https://sheetdb.io/api/v1/1mmprsdgv1p6m";

export async function getAllTasks() {
  const response = await fetch(baseUrl + "?limit=20");
  const data = await response.json();
  return data;
}

export function postTask(task) {
  const taskString = JSON.stringify({ data: task });
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: taskString,
  });
}

export function putTask(value, task) {
  const taskString = JSON.stringify({ data: task });
  const fullUrl = baseUrl + "/name/" + value;
  return fetch(fullUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: taskString,
  });
}

export function deleteTask(value) {
  const fullUrl = baseUrl + "/name/" + value;
  return fetch(fullUrl, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}