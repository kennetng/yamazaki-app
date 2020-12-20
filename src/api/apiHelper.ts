import fetch from 'isomorphic-unfetch'

export const fetcher = (path: string, options?: RequestInit) =>
  fetch(path, options).then((res) => res.json())
