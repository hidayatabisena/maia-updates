import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

interface Release {
  id: string;
  date: Date;
  title: string;
}

interface SidebarProps {
  releases: Release[];
  selectedRelease: string;
  onSelectRelease: (id: string) => void;
}

export function Sidebar({ releases, selectedRelease, onSelectRelease }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const releasesByYear = releases.reduce((acc, release) => {
    const year = release.date.getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(release);
    return acc;
  }, {} as Record<number, Release[]>);

  return (
    <div className="w-64 h-full border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center space-x-2',
            'text-gray-600 dark:text-gray-300',
            'hover:text-gray-900 dark:hover:text-white'
          )}
        >
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          <span className="font-medium">Release History</span>
        </button>
      </div>

      {isOpen && (
        <div className="px-4 pb-4">
          {Object.entries(releasesByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, yearReleases]) => (
              <div key={year} className="mb-4">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {year}
                </h3>
                <ul className="space-y-1">
                  {yearReleases.map((release) => (
                    <li key={release.id}>
                      <button
                        onClick={() => onSelectRelease(release.id)}
                        className={cn(
                          'w-full text-left px-2 py-1 rounded-lg text-sm',
                          'transition-colors',
                          selectedRelease === release.id
                            ? 'bg-[#30336b] text-white'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        )}
                      >
                        <div className="font-medium">{release.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {format(release.date, 'MMMM d, yyyy')}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}