import { Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface SearchProps {
  value: string;
  onSearch: (query: string) => void;
}

export function Search({ value, onSearch }: SearchProps) {
  const [focused, setFocused] = useState(false);

  const handleClear = () => {
    onSearch('');
  };

  return (
    <div
      className={cn(
        'relative flex items-center transition-all',
        focused ? 'w-64' : 'w-48'
      )}
    >
      <SearchIcon className="absolute left-3 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={value}
        placeholder="Search updates..."
        className={cn(
          'w-full py-2 pl-10 pr-8 text-sm',
          'bg-white dark:bg-gray-800',
          'border border-gray-200 dark:border-gray-700',
          'rounded-lg transition-all',
          'focus:outline-none focus:ring-2',
          'focus:ring-primary dark:focus:ring-opacity-50'
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onSearch(e.target.value)}
      />
      {value && (
        <button
          onClick={handleClear}
          className={cn(
            'absolute right-2 p-1 rounded-full',
            'text-gray-400 hover:text-gray-600',
            'dark:text-gray-500 dark:hover:text-gray-300',
            'focus:outline-none'
          )}
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}