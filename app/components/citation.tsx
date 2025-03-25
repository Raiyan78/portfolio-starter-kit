// components/Citation.tsx
import React from "react";

type CitationProps = {
  bibtex: string;
};

export default function Citation({ bibtex }: CitationProps) {
  return (
    <div className="mt-8 rounded-xl border border-neutral-300 p-4 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900">
      <h3 className="font-semibold text-lg mb-2">Citation</h3>
      <pre className="whitespace-pre-wrap text-sm text-neutral-800 dark:text-neutral-200">
        {bibtex}
      </pre>
    </div>
  );
}
