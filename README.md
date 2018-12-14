## Example usage with types

```js
import { Shikimori, types } from 'typescript-shikimori'

const client = new Shikimori()

async function main () {
  const params: types.animes.index.request = {}
  const { data } = await client.get<types.animes.index.response>('animes', { params })
}

```

## Example usage with types alias

```js
import { Shikimori, types } from 'typescript-shikimori'

// create aliases
import requestType = types.animes.index.request
import responseType = types.animes.index.response

const client = new Shikimori()

async function main() {
  const params: requestType = {}
  const { data } = await client.get<responseType>('animes', { params })
}

```
