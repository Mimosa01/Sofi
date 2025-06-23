const API_URL = process.env.NEXT_PUBLIC_API_URL!;

type FetcherOptions = {
  revalidate?: number | false;
};

type ExtendedRequestInit = RequestInit & {
  next?: { revalidate?: number | false };
};

export async function fetcher<T = unknown>(
  endpoint: string,
  init?: RequestInit,
  options?: FetcherOptions
): Promise<T> {
  const fetchOptions: ExtendedRequestInit = {
    method: init?.method || 'GET',
    ...init,
  };

  if (fetchOptions.method === 'GET' && options?.revalidate !== undefined) {
    fetchOptions.next = { revalidate: options.revalidate };
  }

  const res = await fetch(`${API_URL}${endpoint}`, fetchOptions);

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(errorData?.message || res.statusText);
  }

  return res.json();
}
