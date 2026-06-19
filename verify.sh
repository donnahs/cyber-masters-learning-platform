#!/usr/bin/env bash
set -e
url=http://127.0.0.1:8920/
code=$(curl -s -o /tmp/cyber-masters-learning-platform.html -w '%{http_code}' $url || true)
bytes=$(wc -c < /tmp/cyber-masters-learning-platform.html 2>/dev/null || echo 0)
echo "$code $url bytes=$bytes"
test "$code" = "200"
