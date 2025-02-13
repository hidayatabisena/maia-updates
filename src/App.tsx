import React, { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { Search } from './components/Search';
import { Sidebar } from './components/Sidebar';
import { Rocket } from 'lucide-react';
import { useThemeStore } from './store/theme';
import { cn } from './lib/utils';
import { getAllReleaseNotes } from './lib/content';

const releases = getAllReleaseNotes();

function App() {
  const { theme } = useThemeStore();
  const [selectedRelease, setSelectedRelease] = useState(releases[0]?.id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReleases = releases.filter(
    (release) =>
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentRelease = releases.find((r) => r.id === selectedRelease);

  return (
    <div className={theme}>
      <div className={cn(
        'min-h-screen bg-white dark:bg-gray-900',
        'text-gray-900 dark:text-gray-100'
      )}>
        {/* Header */}
        <header className={cn(
          'h-16 border-b border-gray-200 dark:border-gray-700',
          'bg-white dark:bg-gray-900'
        )}>
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Rocket className="w-6 h-6 text-primary dark:text-white" />
              <h1 className="text-xl font-bold">MAIA Release Notes</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search value={searchQuery} onSearch={setSearchQuery} />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex h-[calc(100vh-4rem)]">
          <Sidebar
            releases={filteredReleases}
            selectedRelease={selectedRelease}
            onSelectRelease={setSelectedRelease}
          />
          
          <main className="flex-1 overflow-auto p-8">
            {currentRelease && (
              <div className="max-w-3xl mx-auto">
                <div className="mb-8 space-y-6">
                  {currentRelease.content.split('\n\n').map((block, index) => {
                    if (block.startsWith('![')) {
                      const match = block.match(/!\[(.*?)\]\((.*?)\)/);
                      if (match) {
                        return (
                          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                            <img
                              src={match[2]}
                              alt={match[1]}
                              className="w-full h-auto"
                            />
                          </div>
                        );
                      }
                    }
                    
                    if (block.startsWith('##')) {
                      const title = block.replace('##', '').trim();
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8">
                          {title}
                        </h2>
                      );
                    }
                    
                    if (block.startsWith('-')) {
                      return (
                        <ul key={index} className="list-disc pl-6 space-y-2">
                          {block.split('\n').map((item, i) => (
                            <li key={i}>{item.replace('-', '').trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    
                    return <p key={index}>{block}</p>;
                  })}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;