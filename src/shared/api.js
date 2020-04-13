import fetch from 'isomorphic-fetch'

export function fetchEmployes (language = 'all') {
  const encodedURI = encodeURI(`http://dummy.restapiexample.com/api/v1/employees`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .catch((error) => {
      console.warn(error)
      return null
    });
}