import { PaginatedRequest, Poster, AnimeGenre } from "../common";
import { studios } from "../studios";
import { user_rates } from "../user_rates";

export declare namespace animes {



  /** @see https://shikimori.org/api/doc/1.0/animes/index  */
  namespace index {

    type order = "id" | "ranked" | "kind" | "popularity" | "name" | "aired_on" | "episodes" | "status" | "random"
    
    type kind = "tv" | "movie" | "ova" | "ona" | "special" | "music" | "tv_13" | "tv_24" | "tv_48"

    type status = "anons" | "ongoing" | "released"

    type duration = "S" | "D" | "F"

    type rating = "none" | "g" | "pg" | "r" | "r_plus" | "rx"

    interface request extends PaginatedRequest {
      order?: order
      kind?: kind
      status?: status
      season?: string
      score?: number,
      duration?: duration,
      rating?: rating,
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
      name: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
      value: number
    }

    type RateStatusNames = "Запланировано" | "Смотрю" | "Просмотрено" | "Отложено" | "Брошено"

    interface RateStatusItem {
      name: RateStatusNames,
      value: number
    }

    /**
     * TODO: Rewrite `kind` property as Enum type
     * kind property must be Enum. But allowed values are unknown;
     */
    interface Video {
      id: number,
      url: string,
      image_url: string,
      player_url: string,
      name: string,
      kind: string,
      hosting: string
    }

    interface Screenshot {
      original: string
      preview: string
    }

    interface animeUserRate extends user_rates.show.response {
      target_type: "Anime"
    }

    interface response extends index.responseItem {
      rating: index.rating,
      english: string[] | [null]
      japanese: string[] | [null]
      synonyms: string[]
      duration: number
      score: string
      description: string | null
      description_html: string
      description_source: string | null
      franchise: string
      favoured: boolean,
      anons: boolean,
      ongoing: boolean,
      thread_id: number,
      topic_id: number,
      myanimelist_id: number,
      rates_scores_stats: RateScoreItem[],
      rates_statuses_stats: RateStatusItem[],
      updated_at: string | null,
      next_episode_at: string | null,
      genres: AnimeGenre[],
      studios: studios.responseItem[],
      videos: Video[],
      screenshots: Screenshot[],
      user_rate: animeUserRate | null
    }

  }
}