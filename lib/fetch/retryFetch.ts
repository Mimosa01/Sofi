export async function retryFetch<T>(
  fn: () => Promise<T>,
  retries: number = 3
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt + 1} failed:`, err);
    }
  }

  throw lastError;
}
