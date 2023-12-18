const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getPatronById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const updatePatron = (patron) => {
  return fetch(`${_apiUrl}/${patron.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patron)
  })
}