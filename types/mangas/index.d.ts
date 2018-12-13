import { PaginatedRequest, Poster, MangaGenre, RelationItem } from "../common"
import { user_rates } from "../user_rates"
import { publishers } from "../publishers"
import { characters } from "../characters"
import { people } from "../people"

export declare namespace mangas {

  /** @see https://shikimori.org/api/doc/1.0/mangas/index */
  namespace index {

    type order = "id" | "ranked" | "kind" | "popularity" | "name" | "aired_on" | "volumes" | "chapters" | "status" | "random"

    type kind = "manga" | "manhwa" | "manhua" | "novel" | "one_shot" | "doujin"

    type status = 'anons' | 'ongoing' | 'released'

    interface request extends PaginatedRequest {
      order?: order
      kind?: kind
      status?: status
      season?: string
      score?: number
      genre?: number[]
      publisher?: number[]
      franchise?: number[]
      censored?: boolean
      mylist?: user_rates.status
      ids?: number[]
      exclude_ids?: number[]
      search?: string
    }

    interface responseItem {
      id: number
      name: string
      russian: string | null
      image: Poster
      url: string
      kind: kind
      status: status
      volumes: number
      chapters: number
      aired_on: string | null
      released_on: string | null
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/mangas/show */
  namespace show {
    interface RateScoreItem {
      name: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
      value: number
    }

    type RateStatusNames =
      | 'Запланировано'
      | 'Читаю'
      | 'Прочитано'
      | 'Отложено'
      | 'Брошено'

    interface RateStatusItem {
      name: RateStatusNames
      value: number
    }

    interface mangaUserRate extends user_rates.show.response {
      target_type: 'Manga'
    }

    interface response extends index.responseItem {
      english: string[] | [null]
      japanese: string[] | [null]
      synonyms: string[]
      score: string
      description: string | null
      description_html: string
      description_source: string | null
      franchise: number | null
      favoured: boolean
      anons: boolean
      ongoing: boolean
      thread_id: number
      topic_id: number
      myanimelist_id: number
      rates_scores_stats: RateScoreItem[]
      rates_statuses_stats: RateStatusItem[]
      genres: MangaGenre[]
      publishers: publishers.index.responseItem[]
      user_rate: mangaUserRate | null
    }
  }


  /** @see https://shikimori.org/api/doc/1.0/mangas/roles */
  namespace roles {
    interface responseItem {
      roles: string[]
      roles_russian: string[]
      character: characters.search.responseItem | null
      person: people.search.responseItem | null
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/mangas/similar  */
  namespace similar {
    type response = index.responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/mangas/related  */
  namespace related {
    interface responseItem extends RelationItem {
      anime: null
      manga: index.responseItem
    }

    type response = responseItem[]
  }
}