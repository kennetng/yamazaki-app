import fetch from 'isomorphic-unfetch'

// eslint-disable-next-line no-undef
export const fetcher = (path: string, options?: RequestInit) =>
  fetch(path, options).then((res) => res.json())
