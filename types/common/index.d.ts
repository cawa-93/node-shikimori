export declare interface PaginatedRequest {
  page?: number,
  limit?: number,
}

export declare interface Poster {
  original: string
  preview: string
  x96: string
  x48: string
}


export declare interface Genre {
  id: number,
  name: string,
  russian: string,
  kind: "anime" | "manga"
}

export declare interface AnimeGenre {
  kind: "anime"
}

export declare interface MangaGenre {
  kind: "manga"
}