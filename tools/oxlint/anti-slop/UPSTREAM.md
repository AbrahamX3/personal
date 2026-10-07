# Vendored anti-slop Oxlint plugin

Source repository: **unknown** — the install skill bundle does not publish an upstream repository
or revision, so no source commit is claimed. The files were copied verbatim from the installer's
pristine asset snapshot.

## Pristine snapshot

- Snapshot: `~/.agents/skills/install-anti-slop/assets/anti-slop/` (skill `install-anti-slop`).
- Entry point `index.ts` SHA-256: `41082FBD4489E3E05DDA5F6E74EB22C0C77F336E8F6A964F42C7193A0E4C03FF`.
- 38 files copied, byte-for-byte identical to the snapshot (verified by hash); no local edits.

## Installed paths

- Plugin entry point: `tools/oxlint/anti-slop/index.ts`
- Generic rules: `tools/oxlint/anti-slop/rules/**`
- Shared helpers: `tools/oxlint/anti-slop/shared/**`
- Vendored Stylistic rule (with its own `UPSTREAM.md` and `LICENSE`):
  `tools/oxlint/anti-slop/vendor/eslint-stylistic/**`
- Optional Effect plugin (present in the snapshot but **not registered**): `tools/oxlint/anti-slop/effect/**`

## Dependency and configuration

- `@oxlint/plugins` pinned exactly to `1.87.0` in `devDependencies`, matching the installed
  `oxlint` version.
- Registered in `.oxlintrc.json` under `jsPlugins` as `{ "name": "anti-slop", ... }`, with all
  generic rules set to `"error"` plus native `oxc/no-accumulating-spread`.
- The vendored plugin and agent-tooling directories are ignored in `.oxlintrc.json`
  (`ignorePatterns`) and `.oxfmtrc.json` (`ignorePatterns`) so they are neither linted nor
  reformatted.
- The Effect plugin is intentionally not enabled: the project has no direct `effect` dependency.

## Local adaptations

None. The copied plugin is unmodified. Rule-level adaptations for the vendored
`padding-line-between-statements` code are documented in
`tools/oxlint/anti-slop/vendor/eslint-stylistic/UPSTREAM.md`.
