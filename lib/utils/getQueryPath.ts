export function getQueryPath(params: { [key: string]: string | string[] | undefined; }): string {
  const query = Object.entries(params)
    //временно фильтруем по конкретным параметрам
    .filter(([key, value]) => (key === 'speciality' || key === 'location') && value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');

  return query ? `?${query}` : '';
}
