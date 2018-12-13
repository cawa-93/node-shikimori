## Example usage with types

```js
import * as types from './types'
import { Shikimori } from './lib/Shikimori.class'

const client = new Shikimori()

const params: types.animes.index.request = {}
const { data } = await client.get<types.animes.index.response>('animes', {params})

```