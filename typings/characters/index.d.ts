import { Poster } from '../common'
import { people } from '../people'
import { animes } from '../animes'
import { mangas } from '../mangas'

export declare namespace characters {

  /** @see https://shikimori.org/api/doc/1.0/characters/search */
  namespace search {
    interface request {
      search: string
    }

    interface responseItem {
      id: number
      name: string
      russian: string
      image: Poster
      url: string
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/characters/show */
  namespace show {
    interface response extends search.responseItem {
      altname: string | null,
      japanese: string | null,
      description: string | null,
      description_html: string,
      description_source: string | null,
      favoured: boolean,
      thread_id: number,
      topic_id: number,
      updated_at: string,
      seyu: people.search.responseItem[]
      animes: animes.index.responseItem[]
      mangas: mangas.index.responseItem[]
    }
  }
}
