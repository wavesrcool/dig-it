# @dig-it/models

Database model definitions for persistence to PostgreSQL. Typescript class decorators are used to instantiate the models as well as create GraphQL schema objects. The module provides CRUD functions on models allowing for consistent coding and organized database queries.

## Overview

The database models  -

- [Dig](src/dig/) Represents information on a dig request
- [Email](src/email/) Represents a unique email address
- [Geo](src/geo/) Represents a geolocation
- [Place](src/place/) Represents readable information on a geolocation