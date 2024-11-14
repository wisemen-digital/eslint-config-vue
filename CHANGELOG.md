## [0.2.3] (2024-11-14)
- **Fix typescript:** Typescript to true in factory.

## [0.2.2] (2024-11-12)
- **Max depth:** Added rule to enforce max depth of 3.
- **No nested turnary:** Added rule to enforce no nested ternary, which I hope doesn't happen already.


## [0.2.1] (2024-11-12)
- **Type rules:** Removed type rules, it has performance issues with large projects.
- **Packages:** Updated packages to latest versions.
- **Consistent function scoping** Added rule to enforce consistent function scoping.


## [0.2.0] (2024-09-05)
- **Updated packages:** Updated packages to latest versions.
- **Ordening:** Added sorting for unions.
- **Ordening:** Don't ignore casing for sorting. Example: A, B, a, b instead of A, a, B, b.
- **Type rules:** Reenabled type rules.
- **Function scoping:** Added function scoping rule.
- **Consistent chaining:** Added consistent chaining rule.
- **Cypress removed:** Removed cypress rules.
- **Putout removed:** Removed unnecessary putout rules.
- **Vitest:** Added vitest rules.


## [0.1.3] (2024-06-13)
- **Tailwind:** Allow classes starting with `custom-` in tailwind.


## [0.1.2] (2024-06-12)
- **Ordening:** Removed ordening from objects named `variants`, as it is of functional significance in style libraries like cva.
- **Ordening:** Moved name before unknown in object ordering.
- **Imports:** Disabled rule that requires file extensions in imports it is a doesn't work with .'s in the file name.


## [0.1.1] (2024-05-31)
- **Ordening:** Added ordering rules for routes declaration

## [0.1.0] (2024-05-13)
- **Upgrade:** Upgraded to eslint 9.3 and updated dependencies.
- **Tailwind:** Added eslint-tailwind flat config support.
- **Chore:** Removed unused eslint-import dependency.

## [0.0.18] (2024-05-13)
- **Imports:** Added rule that requires file extensions in imports
- **Parens:** Added rule that requires parens around arrow function arguments

## [0.0.17] (2024-05-01)
- **Ordening:** Added uuid ordering and better date matching
- **Fix:** Disabled putout rule that was causing problem's


## [0.0.16] (2024-05-01)
- **Refactor:** Split rules in different files
- **Fix:** Readded return type


## [0.0.15] (2024-04-30)
- **Imports:** Require absolute imports for anything about 1 depth

## [0.0.12] (2024-04-10)

### Features
- **9.0 upgrade:** Upgraded to eslint 9.0.
- **I18n:** Vue-i18n to flat config.

## [0.0.11] (2024-04-09)

### Features
- **Sorting:** Better object, interface and type sorting.
- **Spacing:** Moved some spacing rules from putout to default style linting.

### Improvements
- **Grouping:** Grouped rules a bit better with flatconfig.
