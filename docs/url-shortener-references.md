# URL shortener references

These references were moved from browser bookmarks so they stay with this project.

## TypeScript, Express and MongoDB tutorial

- [Creating a URL Shortener with TypeScript + Express.js + MongoDB](https://batuhanyenidunya.medium.com/creating-a-url-shortener-with-typescript-express-js-mongodb-565c9bb842f2)
- Author: Batuhan Yenidünya.
- Published: January 24, 2021.
- [Companion source repository](https://github.com/batuhanyndny/qnt-short-urls).

Useful for comparing URL validation, slug generation, uniqueness and MongoDB persistence. Treat its package versions and setup instructions as historical examples; consult current official documentation before applying them. The article and its code have not been copied into this repository.

## Valerio's TypeScript and PostgreSQL implementation

- [Upstream repository](https://github.com/valerio/url-shortener-ts).
- [Archived commit](https://github.com/valerio/url-shortener-ts/tree/8dfa974a7179ed56d83843adca6a826b0ce9a65f): `8dfa974a7179ed56d83843adca6a826b0ce9a65f` (May 13, 2018).
- [Local source archive](../references/valerio-url-shortener-ts-8dfa974.zip): complete snapshot of the 26 source files, including the original MIT license.
- [Original license](../references/valerio-url-shortener-ts.LICENSE.txt).
- ZIP SHA-256: `7971418894cc09335e92094b8ddd0efbe605b63972c0f86fece26c5a3e7a8448`.

This implementation uses PostgreSQL and Sequelize rather than MongoDB. It is useful for studying routing, persistence, redirect handling and endpoint tests.

The ZIP is an archival reference, not part of this application's source, dependencies or build. No dependencies from it have been installed or executed, and this change does not establish compatibility with current Node.js or database versions. Extract it into a separate directory if you want to inspect it; review and update its 2018 dependencies before running it.

The snapshot preserves Valerio Pipolo's MIT copyright and license. The rest of this repository does not inherit that license merely because the archive is stored here.

## Current official documentation

- [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Express documentation](https://expressjs.com/)
- [MongoDB documentation](https://www.mongodb.com/docs/)
- [PostgreSQL documentation](https://www.postgresql.org/docs/)

Reference archive reviewed on November 5, 2026.
