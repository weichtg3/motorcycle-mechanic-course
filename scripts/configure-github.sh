#!/usr/bin/env bash
set -euo pipefail
if [ $# -lt 1 ]; then echo "Usage: $0 <github-username-or-org> [repo-name]"; exit 1; fi
USER="$1"
REPO="${2:-motorcycle-mechanic-course}"
python3 - "$USER" "$REPO" <<'PY2'
from pathlib import Path
import sys
p=Path("docusaurus.config.js")
s=p.read_text()
s=s.replace("YOUR-GITHUB-USERNAME",sys.argv[1])
s=s.replace("projectName: 'motorcycle-mechanic-course'",f"projectName: '{sys.argv[2]}'")
s=s.replace("baseUrl: '/motorcycle-mechanic-course/'",f"baseUrl: '/{sys.argv[2]}/'")
p.write_text(s)
print(f"Configured GitHub Pages for {sys.argv[1]}/{sys.argv[2]}")
PY2
