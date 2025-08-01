
import { hitCoda, Result } from '../utills'

export default async function pubg(id: number): Promise<Result> {
  const body = `category_id=59c0f241-e81b-482d-a7c4-43458d34fa1b&user.userId=${id}`
  const data = await hitCoda(body)
  if (data.data) {
    return {
      statusCode: 201,
      game: 'PUBG',
      id,
      name: data.data
    }
  }
  else {
    return {
      statusCode: 404,
      message: 'Not found'
    }
  }
}

