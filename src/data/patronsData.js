const _apiUrl = "/api/patrons";

export const getPatrons = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getPatronById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}