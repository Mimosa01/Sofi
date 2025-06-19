const API_URL = process.env.NEXT_PUBLIC_API_URL!;

type FetcherOptions = {
  revalidate?: number | false;
};

export async function fetcher<T = unknown>(
  endpoint: string,
  init?: RequestInit,
  options?: FetcherOptions
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

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
