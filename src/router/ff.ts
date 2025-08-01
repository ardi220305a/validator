import { hitCoda, Result } from '../utils'

export default async function pb(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=8050&voucherPricePoint.price=1000&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=FREEFIRE&shopLang=id_ID`
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

