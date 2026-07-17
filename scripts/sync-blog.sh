#!/usr/bin/env bash
# sync-blog.sh — copy articles from the DD repo into the site's blog collection.
#
# Usage:
#   pnpm sync-blog
#   ./scripts/sync-blog.sh
#
# Source: ../tech-due-diligence-report/content/articles/ (sibling repo)
# Dest:   client/src/content/blog/
#
# Behaviour:
#   - Adds or overwrites MDs that exist in source but not in dest (or differ).
#   - Deletes MDs in dest that no longer exist in source.
#   - Prints: N added / N updated / N deleted / N unchanged
#   - Exits non-zero if the source path is not present (CI guard).
#
# Idempotent: running twice with no upstream change produces "0 added / 0 updated /
# 0 deleted / N unchanged".

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

# Allow override via env var (useful in CI where sibling-repo clone path differs)
SOURCE_DIR="${BLOG_SOURCE_DIR:-${REPO_ROOT}/../tech-due-diligence-report/content/articles}"
DEST_DIR="${REPO_ROOT}/client/src/content/blog"

# ── guard: source must exist ────────────────────────────────────────────────
if [[ ! -d "${SOURCE_DIR}" ]]; then
  echo "ERROR: source directory not found: ${SOURCE_DIR}" >&2
  echo "Set BLOG_SOURCE_DIR env var if the DD repo lives elsewhere." >&2
  exit 1
fi

mkdir -p "${DEST_DIR}"

added=0
updated=0
deleted=0
unchanged=0

# ── copy: add / update ───────────────────────────────────────────────────────
while IFS= read -r -d '' src_file; do
  filename="$(basename "${src_file}")"
  dest_file="${DEST_DIR}/${filename}"

  if [[ ! -f "${dest_file}" ]]; then
    cp "${src_file}" "${dest_file}"
    echo "  added:   ${filename}"
    ((added++))
  elif ! cmp -s "${src_file}" "${dest_file}"; then
    cp "${src_file}" "${dest_file}"
    echo "  updated: ${filename}"
    ((updated++))
  else
    ((unchanged++))
  fi
done < <(find "${SOURCE_DIR}" -maxdepth 1 -name "*.md" -print0 | sort -z)

# ── prune: delete MDs in dest that no longer exist in source ─────────────────
while IFS= read -r -d '' dest_file; do
  filename="$(basename "${dest_file}")"
  src_file="${SOURCE_DIR}/${filename}"
  if [[ ! -f "${src_file}" ]]; then
    rm "${dest_file}"
    echo "  deleted: ${filename}"
    ((deleted++))
  fi
done < <(find "${DEST_DIR}" -maxdepth 1 -name "*.md" -print0 | sort -z)

# ── summary ──────────────────────────────────────────────────────────────────
echo ""
echo "sync-blog: ${added} added / ${updated} updated / ${deleted} deleted / ${unchanged} unchanged"
