import { hitCoda, Result } from '../utills'

export default async function pb(invoice_data: any, invoice_product: string, payment_method: string, use_point: boolean, voucher_code: string | null): Promise<Result> {
  const body = `user_id=${invoice_data.user_id}&whatsapp=${invoice_data.whatsapp}&nickname=${invoice_data.nickname}&invoice_product=${invoice_product}&payment_method=${payment_method}&use_point=${use_point}&voucher_code=${voucher_code ?? ''}`

  const data = await hitCoda(body)
  
  if (data.nickname) {
    return {
      success: true,
      message: 'success',
      game: 'POINT_BLANK',
      id: invoice_data.user_id,
      name: data.nickname
    }
  } else {
    return {
      success: false,
      message: 'Not found'
    }
  }
}
