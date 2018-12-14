import { PaginatedRequest, Poster, AnimeGenre, RelationItem } from '../common'
import { studios } from '../studios'
import { user_rates } from '../user_rates'
import { characters } from '../characters'
import { people } from '../people'
import { videos } from '../videos'

export declare namespace animes {

  /** 
   * GET /animes
   * @description List animes
   * @see https://shikimori.org/api/doc/1.0/animes/index
   */
  namespace index {
    type order =
      | 'id'
      | 'ranked'
      | 'kind'
      | 'popularity'
      | 'name'
      | 'aired_on'
      | 'episodes'
      | 'status'
      | 'random'

    type kind =
      | 'tv'
      | 'movie'
      | 'ova'
      | 'ona'
      | 'special'
      | 'music'
      | 'tv_13'
      | 'tv_24'
      | 'tv_48'

    type status = 'anons' | 'ongoing' | 'released'

    type duration = 'S' | 'D' | 'F'

    type rating = 'none' | 'g' | 'pg' | 'r' | 'r_plus' | 'rx'

    interface request extends PaginatedRequest {
      order?: order
      kind?: kind
      status?: status
      season?: string
      score?: number
      duration?: duration
      rating?: rating
      genre?: number[]
      studio?: number[]
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
      episodes: number
      episodes_aired: number
      aired_on: string | null
      released_on: string | null
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/show  */
  namespace show {
    interface RateScoreItem {
      name: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
      value: number
    }

    type RateStatusNames =
      | 'Запланировано'
      | 'Смотрю'
      | 'Просмотрено'
      | 'Отложено'
      | 'Брошено'

    interface RateStatusItem {
      name: RateStatusNames
      value: number
    }

    interface animeUserRate extends user_rates.show.response {
      target_type: 'Anime'
    }

    interface response extends index.responseItem {
      rating: index.rating
      english: string[] | [null]
      japanese: string[] | [null]
      synonyms: string[]
      duration: number
      score: string
      description: string | null
      description_html: string
      description_source: string | null
      franchise: string
      favoured: boolean
      anons: boolean
      ongoing: boolean
      thread_id: number
      topic_id: number
      myanimelist_id: number
      rates_scores_stats: RateScoreItem[]
      rates_statuses_stats: RateStatusItem[]
      updated_at: string | null
      next_episode_at: string | null
      genres: AnimeGenre[]
      studios: studios.responseItem[]
      videos: videos.index.response
      screenshots: screenshots.response
      user_rate: animeUserRate | null
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/roles  */
  namespace roles {
    interface responseItem {
      roles: string[]
      roles_russian: string[]
      character: characters.search.responseItem | null
      person: people.search.responseItem | null
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/similar  */
  namespace similar {
    type response = index.responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/related  */
  namespace related {
    interface responseItem extends RelationItem {
      anime: index.responseItem
      manga: null
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/screenshots */
  namespace screenshots {
    interface responseItem {
      original: string
      preview: string
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/franchise */
  namespace franchise {
    namespace index {
      interface link {
        source_id: number
        target_id: number
        source: number
        target: number
        weight: number
        relation: string
      }

      interface node {
        id: number
        date: number
        name: string
        image_url: string
        url: string
        year: number | null
        kind: string
        weight: number
      }

      interface responseItem {
        links: link[]
        nodes: node[]
        current_id: number
      }

      type response = responseItem[]
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/animes/external_links */
  namespace external_links {
    interface responseItem {
      id: number
      kind: string
      url: string
      source: string
      entry_id: number
      entry_type: 'Anime'
      created_at: string
      updated_at: string
      imported_at: string | null
    }
  }
}
