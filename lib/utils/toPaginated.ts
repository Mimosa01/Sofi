export function toPaginated (page: number, limit: number) {
  return `skip=${limit * (page-1)}&limit=${limit}`
}