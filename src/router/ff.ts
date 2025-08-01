import { hitCoda, Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  // Kirim user.zoneId kosong (FF memang tidak butuh server)
  const body = `voucherPricePoint.id=1032429&voucherPricePoint.price=1110&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=FREEFIRE&shopLang=id_ID`
  
  const data = await hitCoda(body)

  // Handle kalau data kosong atau ada error dari Codashop
  if (!data || (data.errorCode && data.errorCode !== '')) {
    return {
      success: false,
      game: 'Garena Free Fire',
      id,
      name: '',
      message: data?.errorMsg || 'User ID tidak ditemukan'
    }
  }

  // Ambil nickname dari roles
  const nickname = data?.confirmationFields?.roles?.[0]?.role || ''

  return {
    success: nickname !== '',
    game: 'Garena Free Fire',
    id,
    name: nickname,
    message: nickname !== '' ? 'OK' : 'Nickname tidak ditemukan'
  }
}
