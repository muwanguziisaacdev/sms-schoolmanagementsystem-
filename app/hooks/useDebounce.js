// hooks/useDebounce.js
import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(handler); // cleanup on value change
  }, [value, delay]);

  return debounced;
}



// import { useDebounce } from './hooks/useDebounce';

// const searchTerm = useDebounce(search, 300); // 300ms delay

// useEffect(() => {
//   const params = new URLSearchParams({
//     search: searchTerm,
//     sortBy,
//     order,
//     page: String(meta.page),
//     size: String(meta.size),
//   });
//   fetch(`/api/students?${params}`)
//     .then(r => r.json())
//     .then(json => {
//       setStudents(json.data);
//       setMeta(json.meta);
//     });
// }, [searchTerm, sortBy, order, meta.page, meta.size]);
