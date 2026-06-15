"use client";

// Coloque em: components/widgets/GitHubWidget.tsx
// Uso: <GitHubWidget username="brendamedeiros" />
// Instale se necessário: npm i lucide-react (provavelmente já tem com shadcn)

import { useEffect, useState } from "react";
import { GitFork, Star, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  pushed_at: string;
}

const LANG_COLORS: Record<string, string> = {
  Java: "#b07219",
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

interface GitHubWidgetProps {
  username?: string;
  maxRepos?: number;
}

export function GitHubWidget({
  username = "brendamedeiros",
  maxRepos = 4,
}: GitHubWidgetProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=10&type=public`
    )
      .then((r) => r.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, maxRepos));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username, maxRepos]);

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {/* GitHub SVG icon inline para não depender de lib de ícones */}
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-white/60 fill-current"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            GitHub
          </span>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-violet-400 transition-colors"
          aria-label="Ver perfil no GitHub"
        >
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Content */}
      {loading && (
        <div className="flex flex-col gap-2 animate-pulse">
          {Array.from({ length: maxRepos }).map((_, i) => (
            <div key={i} className="h-8 rounded-md bg-white/5" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-xs text-white/30 mt-2">
          Não foi possível carregar os repositórios.
        </p>
      )}

      {!loading && !error && (
        <ul className="flex flex-col gap-1.5">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {/* Bolinha de linguagem */}
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: repo.language
                        ? (LANG_COLORS[repo.language] ?? "#888")
                        : "#555",
                    }}
                  />
                  <span className="text-xs text-white/70 truncate group-hover:text-white transition-colors font-mono">
                    {repo.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {repo.language && (
                    <span className="text-[10px] text-white/30">
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-0.5 text-[10px] text-white/30">
                      <Star size={9} />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
