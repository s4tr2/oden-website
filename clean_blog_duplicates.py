#!/usr/bin/env python3
"""
Clean duplicate URL references and incomplete sources from blog posts.

This script:
1. Removes duplicate inline citations like: *Source: [text](url)* ([domain](url))
2. Removes incomplete sources without URLs like: *Source: text without url.*
"""

import os
import re
from pathlib import Path


def clean_blog_file(filepath):
    """Clean duplicate URLs and incomplete sources from a single blog file."""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original_content = content

    # Pattern 1: Remove duplicate inline citation after *Source: [text](url)*
    # Matches: *Source: [text](url)* ([domain](url))
    # Keeps: *Source: [text](url)*
    pattern1 = r"(\*Source: [^\*]+\*) \([^\]]+\]\([^\)]+\)\)"
    content = re.sub(pattern1, r"\1", content)

    # Pattern 2: Remove incomplete sources without URLs
    # Matches: *Source: text without url.*
    pattern2 = r"\*Source: [^*\[]*\.\* "
    content = re.sub(pattern2, "", content)

    # Check if any changes were made
    if content != original_content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False


def main():
    """Process all blog markdown files."""
    blog_dir = Path("src/data/blog")

    if not blog_dir.exists():
        print(f"Error: Blog directory '{blog_dir}' not found")
        return

    # Find all markdown files
    md_files = sorted(blog_dir.glob("*.md"))

    if not md_files:
        print("No markdown files found in blog directory")
        return

    print(f"Found {len(md_files)} blog files to process\n")

    modified_count = 0
    modified_files = []

    for md_file in md_files:
        if clean_blog_file(md_file):
            modified_count += 1
            modified_files.append(md_file.name)
            print(f"✓ Cleaned: {md_file.name}")
        else:
            print(f"  Skipped: {md_file.name} (no changes needed)")

    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Total files processed: {len(md_files)}")
    print(f"  Files modified: {modified_count}")
    print(f"  Files unchanged: {len(md_files) - modified_count}")

    if modified_files:
        print(f"\nModified files:")
        for filename in modified_files:
            print(f"  - {filename}")


if __name__ == "__main__":
    main()
