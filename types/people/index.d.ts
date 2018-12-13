import { Poster } from '../common'

export declare namespace people {
  namespace search {
    interface responseItem {
      id: number
      name: string
      russian: string
      image: Poster
      url: string
    }

    type response = responseItem[]
  }
}
