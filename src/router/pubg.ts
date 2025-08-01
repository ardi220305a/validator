
import { hitCoda, Result } from '../utills'

export default async function pb(id: number): Promise<Result> {
  const body = `category_id=59c0f241-e81b-482d-a7c4-43458d34fa1b&user.userId=${id}`
  const data = await hitCoda(body)
  if (data.confirmationFields.roles[0].role) {
    return {
      success: true,
      game: 'Free Fire',
      id,
      name: data.confirmationFields.roles[0].role
    }
  }
  else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}

