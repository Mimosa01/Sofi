'use client';

import { useEffect, useState } from 'react';

type AuthResponse = {
  userId: string;
  email: string;
};

export function useAuth() {
  const [user, setUser] = useState<AuthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/me', {
          credentials: 'include',
        });

        if (!res.ok) {
          if (res.status === 401) {
            setUser(null);
            setError(null);
          } else {
            const errorText = await res.text();
            throw new Error(`Ошибка: ${res.status} ${errorText}`);
          }
        } else {
          const data: AuthResponse = await res.json();
          setUser(data);
          setError(null);
        }
      } catch (e) {
        setError((e as Error).message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { user, loading, error };
}
