export default (url) => {

  const headers = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      credentials: 'same-origin',
    },
  };

  return fetch(url, headers).then(response => {
     return response.json();
  }).catch((error, statusCode) => {
    console.log(error);
    console.log(statusCode);
  });
}