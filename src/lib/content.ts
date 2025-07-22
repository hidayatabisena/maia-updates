import type { ReleaseNote } from '../types';

// Import all markdown files recursively from subfolders
const modules = import.meta.glob('/content/**/*.md', { eager: true, query: '?raw', import: 'default' });

function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return null;
  
  const [, frontmatter, body] = match;
  const data: Record<string, string> = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      data[key.trim()] = values.join(':').trim();
    }
  });
  
  return { data, content: body.trim() };
}

export function getAllReleaseNotes(): ReleaseNote[] {
  const releaseNotes = Object.entries(modules).map(([path, content]) => {
    const parsed = parseFrontmatter(content as string);
    if (!parsed) throw new Error(`Invalid frontmatter in ${path}`);
    
    // Extract filename from nested path to maintain original ID format
    const filename = path.split('/').pop() || '';
    
    return {
      id: filename.replace('.md', ''),
      title: parsed.data.title,
      date: new Date(parsed.data.date),
      content: parsed.content
    };
  });
  
  return releaseNotes.sort((a, b) => b.date.getTime() - a.date.getTime());
}