const GetPerson = <Response>(): Promise<Response> => {
  return fetch('https://api.publicapis.org/random')
    .then((response) => response.json())
    .then((data) => data.entries[0].Category)
}

export default GetPerson
