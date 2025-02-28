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
  const [expandedMonths, setExpandedMonths] = useState<Record<string, boolean>>({});

  const releasesByYearAndMonth = releases.reduce((acc, release) => {
    const year = release.date.getFullYear();
    const month = release.date.getMonth();
    
    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(release);
    return acc;
  }, {} as Record<number, Record<number, Release[]>>);

  const toggleMonth = (yearMonth: string) => {
    setExpandedMonths(prev => ({
      ...prev,
      [yearMonth]: !prev[yearMonth]
    }));
  };

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
          {Object.entries(releasesByYearAndMonth)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, months]) => (
              <div key={year} className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {year}
                </h3>
                <div className="space-y-2">
                  {Object.entries(months)
                    .sort(([a], [b]) => Number(b) - Number(a))
                    .map(([month, monthReleases]) => {
                      const yearMonth = `${year}-${month}`;
                      const isExpanded = expandedMonths[yearMonth] ?? true;
                      
                      return (
                        <div key={month} className="pl-2">
                          <button
                            onClick={() => toggleMonth(yearMonth)}
                            className={cn(
                              'flex items-center space-x-2 w-full text-left mb-1',
                              'text-sm font-semibold text-gray-600 dark:text-gray-300',
                              'hover:text-gray-900 dark:hover:text-white'
                            )}
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-3 h-3" />
                            ) : (
                              <ChevronRight className="w-3 h-3" />
                            )}
                            <span>{format(new Date(Number(year), Number(month)), 'MMMM')}</span>
                          </button>
                          
                          {isExpanded && (
                            <ul className="space-y-1 pl-5">
                              {monthReleases.map((release) => (
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
                                    <div className={cn(
                                      "font-medium",
                                      selectedRelease === release.id
                                        ? ''
                                        : 'opacity-75'
                                    )}>{release.title}</div>
                                    <div className={cn(
                                      'text-xs',
                                      selectedRelease === release.id
                                        ? 'text-white'
                                        : 'text-gray-500 dark:text-gray-400'
                                    )}>
                                      {format(release.date, 'MMMM d, yyyy')}
                                    </div>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}