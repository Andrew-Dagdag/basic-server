import type { INotes } from "./notes"

export type ResponseData = {
  statusCode?: number,
  data?: INotes | string
}
