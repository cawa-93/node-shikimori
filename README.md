## Example usage with types

```js
import * as types from './'
import { Shikimori } from '../src/Shikimori.class'

const client = new Shikimori()

async function main () {
  const params: types.animes.index.request = {}
  const { data } = await client.get<types.animes.index.response>('animes', { params })
}

```

## Example usage with types alias

```js
import * as types from './'
import { Shikimori } from '../src/Shikimori.class'

// create aliases
import requestType = types.animes.index.request
import responseType = types.animes.index.response

const client = new Shikimori()

async function main() {
  const params: requestType = {}
  const { data } = await client.get<responseType>('animes', { params })
}

```
