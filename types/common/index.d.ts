import { animes } from '../animes'
import { mangas } from '../mangas'

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

export declare interface RelationItem {
  relation: string
  relation_russian: string
  anime: animes.index.responseItem | null
  manga: mangas.index.responseItem | null
}
