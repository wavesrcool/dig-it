# Dig-it!

A website for people interested in turning their lawns into food gardens.

## Overview

The repo is split up into a number of packages -

- [dig-it-web](apps/webs/) The https://www.dig-it.earth web client
- [@dig-it/api](packages/api/) An http server with GraphQL and REST endpoints
- [@dig-it/dev](packages/dev/) A collection of cli tools and build scripts used across repo packages
- [@dig-it/env](packages/env/) A typed Node environment instance used across repo packages
- [@dig-it/library](packages/library/) A collection of common functions, types, and references used across frontend and backend repo packages
- [@dig-it/models](packages/models/) The definitions for database models and PostgreSQL connection instance
- [@dig-it/roots](packages/roots/) A collection of JSON sources that are used across repo packages
