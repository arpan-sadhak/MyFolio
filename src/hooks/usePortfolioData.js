import { useEffect, useState } from 'react';
import { LOCAL_DATA } from '../data/portfolioData';

/**
 * Central place the whole site pulls its content from.
 *
 * Right now it resolves instantly with LOCAL_DATA. When the backend is
 * ready, replace the body of loadData() below with something like:
 *
 *   const res = await fetch('/api/portfolio');
 *   if (!res.ok) throw new Error('Failed to load portfolio data');
 *   return await res.json();
 *
 * Every component reads from the `data` this hook returns, so nothing
 * else in the app needs to change.
 */
export function usePortfolioData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        // --- swap point for a real backend ---
        await new Promise((resolve) => setTimeout(resolve, 150));
        const result = LOCAL_DATA;
        // --------------------------------------

        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
