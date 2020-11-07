/**
 * Example in CLI for testing:
 * aito search '{
    "from": "restaurants",
    "where": {
      "name": "carnitas_mata" 
     }
  }'
 */
export interface AitoRequest {
  /** table-name */
  from: string
  where: {[key: string]: number | string}
  predict?: string
}

export interface AitoResponse {
  offset: number,
  total: number,
  hits: any[]
}