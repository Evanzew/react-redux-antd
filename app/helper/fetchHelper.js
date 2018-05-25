import fetch from 'isomorphic-fetch';
// import $ from 'jquery';

export default async function fetchRequest(url, method, data) {
  const fetchOptions = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'csrf-token': document.getElementById('csrf').value
    },
    body: JSON.stringify(data),
    credentials: 'same-origin'
  };

  let response = await fetch(url, fetchOptions);
  if (response.status >= 200 && response.status < 300) {
    let json = await response.json();
    return json;
  } else {
    throw response.statusText;
  }
}
