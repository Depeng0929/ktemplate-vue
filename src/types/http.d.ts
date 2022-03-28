declare namespace API {

  export interface AppHttpResponse<T = unknown> {
    code: number
    msg: string
    data: T
  }

  export interface AppList<T = unknown> {
    page: {
      pageNum: number
      pageSize: number
      total: number
    }
    data: T[]
  }
}
