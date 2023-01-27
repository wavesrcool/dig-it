# @dig-it/api

The Dig-it! API provides a server class instance for GraphQL and REST endpoints. It handles encoding and decoding of parameters, authentication via JSON web token and sessions, and allows querys and persistence to the database through a connection exported from [@dig-it/models](https://github.com/wavesrcool/dig-it/tree/main/packages/models).

The API provide a standard interface for use -

- `.start()` A static public function that starts the server and returns an API instance when connected.
- `.connection` A getter that provides an instance of the database connection.

## Installation & Instantiation

Installation -

```
npm install --save @dig-it/api
```

Instantiation -

```javascript
import Api from "@dig-it/api";

const api = new Api();
api.start().then(() => console.log(`[dig-it]: Api. Started.`));
```

## Examples

GraphQL: Query All Digs -

```
curl -L -X POST 'https://api.dig-it.earth' \
-H 'Content-Type: application/json' \
--data-raw '{"query":"query DigItGraph0000($figure: DigItGraphFigures0000!) {\n  DigItGraph0000(figure: $figure) {\n    pass\n    message\n    timestamp\n    hash\n    data {\n      notes\n      results {\n        key\n        created\n        updated\n        picture\n        pictureDate\n        description\n        neighborhood\n        value\n        money\n        place {\n          key\n          created\n          updated\n          line\n          city\n          region\n          country\n          geo {\n            key\n            created\n            updated\n            gh2\n            gh9\n            lat\n            lng\n          }\n        }\n      }\n    }\n  }\n}\n","variables":{"figure":{"locale":"en"}}}'
```
