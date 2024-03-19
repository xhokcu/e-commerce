// interface IFetchDataProps {
//   url: string;
//   //   data: object;
// }

// async function fetchData({ url, data = {} }: IFetchDataProps) {
//   const response = await fetch(url, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       Authorization: 'mCMDwgqr',
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     // body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json();
// }

// const data = fetchData(
//   'https://www.rijksmuseum.nl/api/nl/collection?key=[api-key]&involvedMaker=Rembrandt+van+Rijn',
//   //   {},
// );

interface IFecthDataProps {
  url: string;
}

export async function fetchData(url: string) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
