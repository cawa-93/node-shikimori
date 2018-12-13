import { PaginatedRequest } from "../common";

export declare namespace user_rates {


  type status = "planned" | "watching" | "rewatching" | "completed" | "on_hold" | "dropped"

  type target_type  = "Anime" | "Manga"


  /** @see https://shikimori.org/api/doc/2.0/user_rates/index */
  namespace index {
    interface request extends PaginatedRequest {
      user_id: number,
      target_id: number,
      target_type: target_type,
      status: status
    }

    type response = show.response[]
  }



  /** @see https://shikimori.org/api/doc/2.0/user_rates/show */
  namespace show {

    interface response {
      id: number,
      user_id: number,
      target_id: number,
      target_type: target_type,
      score: number,
      status: status,
      rewatches: number,
      episodes: number,
      volumes: number,
      chapters: number,
      text: string | null,
      text_html: string | null,
      created_at: string,
      updated_at: string
    }
  }
}
