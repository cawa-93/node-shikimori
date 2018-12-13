## Example usage with types

```js
import {animes} from './types/animes'
import { Shikimori } from './lib/Shikimori.class'

const client = new Shikimori()

const params: animes.index.request = {}
const { data } = await client.get<animes.index.response>('animes', {params})

```