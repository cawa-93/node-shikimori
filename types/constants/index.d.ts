export declare namespace constants {

  /** @see https://shikimori.org/api/doc/1.0/constants/anime */
  namespace anime {
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

    interface response {
      kind: kind[],
      status: status[]
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/constants/manga */
  namespace manga {

    type kind = "manga" | "manhwa" | "manhua" | "novel" | "one_shot" | "doujin"

    type status = 'anons' | 'ongoing' | 'released'

    interface response {
      kind: kind[],
      status: status[]
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/constants/user_rate */
  namespace user_rate {
    type status = 'planned' | 'watching' | 'rewatching' | 'completed' | 'on_hold' | 'dropped'

    interface response {
      status: status[]
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/constants/club */
  namespace club {

    type join_policy = "free" | "admin_invite" | "owner_invite"
    type comment_policy = "free" | "members"
    type image_upload_policy = "members" | "admins"

    interface response {
      join_policy: join_policy[]
      comment_policy: comment_policy[]
      image_upload_policy: image_upload_policy[]
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/constants/smileys */
  namespace smileys {
    /**
     * TODO: Write smileys method
     */
  }
}