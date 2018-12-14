export declare namespace genres {
  namespace index {
    interface responseItem {
      id: number,
      name: string,
      russian: string,
      kind: 'anime' | 'manga'
    }

    type response = responseItem[]
  }
}