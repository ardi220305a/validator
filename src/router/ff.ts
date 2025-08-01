import { hitCoda, Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=1032429&voucherPricePoint.price=1110&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=FREEFIRE&shopLang=id_ID`
  
  const data = await hitCoda(body)

  if (data.errorCode && data.errorCode !== '') {
    return {
      success: false,
      game: 'Garena Free Fire',
      id,
      name: '',
      message: data.errorMsg || 'User ID tidak ditemukan'
    }
  }

  return {
    success: true,
    game: 'Garena Free Fire',
    id,
    name: data.confirmationFields?.roles?.[0]?.role || ''
  }
}
