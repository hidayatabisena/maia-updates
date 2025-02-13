import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ThemeToggle } from './components/ThemeToggle';
import { Search } from './components/Search';
import { Sidebar } from './components/Sidebar';
import { Rocket } from 'lucide-react';
import { useThemeStore } from './store/theme';
import { cn } from './lib/utils';
import { getAllReleaseNotes } from './lib/content';

const releases = getAllReleaseNotes();

function CodeBlock({ children, className }: { children: string, className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <CopyToClipboard text={children} onCopy={handleCopy}>
        <button className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </CopyToClipboard>
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

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
              <button
                onClick={() => setSelectedRelease(releases[0]?.id)}
                className="flex items-center space-x-4 hover:opacity-75 transition-opacity"
              >
                <Rocket className="w-6 h-6 text-primary dark:text-white" />
                <h1 className="text-xl font-bold">MAIA Release Notes</h1>
              </button>
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
                <div className="mb-8 space-y-6 prose dark:prose-invert">
                  <ReactMarkdown
                    components={{
                      code: ({ node, className, children, ...props }: { node?: any, className?: string, children?: React.ReactNode }) => {
                        const isInline = className?.includes('inline');
                        if (isInline) {
                          return <code className={className} {...props}>{children}</code>;
                        }
                        return (
                          <CodeBlock className={className}>
                            {String(children).replace(/\n$/, '')}
                          </CodeBlock>
                        );
                      }
                    }}
                  >
                    {currentRelease.content}
                  </ReactMarkdown>
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