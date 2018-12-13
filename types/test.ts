import { animes } from './animes'
import { Shikimori } from '../src/Shikimori.class'

const client = new Shikimori()

async function name() {
  const params: animes.index.request = {}
  const { data } = await client.get<animes.index.response>('animes', {
    params,
  })
}
