'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

export function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set('q', query);
      } else {
        params.delete('q');
      }
      router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, pathname, router, searchParams]);

  return (
    <div className="relative">
      <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for movies, TV shows..."
        className="w-full pl-12 h-12 text-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
