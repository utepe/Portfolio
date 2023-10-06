export const getJsonData = async <T>(path: string): Promise<T> => {
  return fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};
