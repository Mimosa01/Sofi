const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_URL_05 = process.env.NEXT_PUBLIC_API_URL_05!;

type FetcherOptions = {
  revalidate?: number | false;
};

export async function fetcher<T = unknown>(
  version: 6 | 5, // Временно
  endpoint: string,
  init?: RequestInit,
  options?: FetcherOptions
): Promise<T> {
  const url = version === 6 ? `${API_URL}${endpoint}` : `${API_URL_05}${endpoint}`;

  const fetchOptions: RequestInit = {
    method: init?.method || 'GET',
    ...init,
    ...(init?.method === 'GET' && options?.revalidate !== undefined
      ? { next: { revalidate: options.revalidate } }
      : {}),
  };

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}
