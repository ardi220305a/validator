import { hitCoda, Result } from '../utills'

export default async function pubg(invoice_data: any, invoice_product: string, payment_method: string, use_point: boolean, voucher_code: string | null): Promise<Result> {
  // Buat body form-urlencoded sesuai payload
  const body = `user_id=${invoice_data.user_id}&whatsapp=${invoice_data.whatsapp}&nickname=${invoice_data.nickname}&invoice_product=${invoice_product}&payment_method=${payment_method}&use_point=${use_point}&voucher_code=${voucher_code ?? ''}`

  // Hit API
  const response = await hitCoda(body)

  // Pastikan response ada sesuai struktur
  if (response && response.message === 'success' && response.data?.nickname) {
    return {
      success: true,
      message: response.message,
      game: response.data.category_code,
      id: invoice_data.user_id,
      name: response.data.nickname
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}
