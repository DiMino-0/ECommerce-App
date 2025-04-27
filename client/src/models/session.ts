import * as myFetch from '../models/myFetch'

export function api<T>(action: string): Promise<T> {
  return myFetch.api<T>(action)
}
