/**
 * Minimal markdown renderer for Oliversys blog articles.
 * Handles the exact subset used in content/articles/:
 *   - ## headings (h2), ### (h3)
 *   - Fenced code blocks (```...```)
 *   - **bold** inline
 *   - `inline code`
 *   - blank-line-separated paragraphs
 *
 * No dependency on an external markdown library — keeps the bundle small
 * and avoids adding a new direct dependency to the static site.
 */
import type { ReactNode } from "react";

function renderInline(text: string): ReactNode {
  // Parse **bold** and `code` inline
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export function renderMarkdown(body: string): ReactNode[] {
  const lines = body.split("\n");
  const nodes: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.trimStart().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // consume closing ```
      nodes.push(
        <pre key={key++} className="blog-code-block" data-lang={lang || undefined}>
          <code>{codeLines.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    // H2
    if (line.startsWith("## ")) {
      nodes.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>);
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      nodes.push(<h3 key={key++}>{renderInline(line.slice(4))}</h3>);
      i++;
      continue;
    }

    // H1 (skip — the page title renders H1 above the body)
    if (line.startsWith("# ")) {
      i++;
      continue;
    }

    // Blank line — separator, skip
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph — collect consecutive non-blank, non-heading lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].trimStart().startsWith("```")
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      nodes.push(<p key={key++}>{renderInline(paraLines.join(" "))}</p>);
    }
  }

  return nodes;
}
