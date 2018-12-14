export declare namespace videos {
  type kind = "pv" | "op" | "ed" | "other"

  type hosting = "youtube" | "vk" | "ok" | "coub" | "rutube" | "vimeo" | "sibnet" | "yandex" | "streamable" | "smotret_anime" | "myvi"

  /** @see https://shikimori.org/api/doc/1.0/videos/index */
  namespace index {
    interface responseItem {
      id: number,
      url: string,
      image_url: string,
      player_url: string,
      name: string | null,
      kind: kind,
      hosting: hosting
    }

    type response = responseItem[]
  }

  /** @see https://shikimori.org/api/doc/1.0/videos/create */
  namespace create {
    interface request {
      video: {
        kind: kind
        name: string
        url: hosting,
      }
    }
  }

  /** @see https://shikimori.org/api/doc/1.0/videos/destroy */
  namespace destroy { }
}