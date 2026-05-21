#!/usr/bin/env bash
set -euo pipefail

modo="${1:-all}"

run_install() {
  npm ci >/dev/null
  echo "CORRECTO"
}

run_tests() {
  npm test -- --runInBand --silent >/dev/null
  echo "CORRECTO"
}

case "$modo" in
  install)
    run_install
    ;;
  tests)
    run_tests
    ;;
  all)
    run_install >/dev/null
    run_tests
    ;;
  *)
    echo "Subcomando no valido: $modo" >&2
    echo "Usar: install | tests | all" >&2
    exit 1
    ;;
esac
