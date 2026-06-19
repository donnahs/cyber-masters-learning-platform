#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
node --check app.logic.js
node --check app.ui.js
node test.js
node materials_test.js
rm -f ../cyber-masters-learning-platform.zip
zip -qr ../cyber-masters-learning-platform.zip . -x '*/.DS_Store'
python3 - <<'PY'
from pathlib import Path
p=Path('../cyber-masters-learning-platform.zip')
assert p.exists() and p.stat().st_size > 5000
print(f'cyber_platform_package_ok {p.resolve()} {p.stat().st_size} bytes')
PY
