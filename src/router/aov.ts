import { hitCoda, Result } from '../utils'

export default async function aov(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=1031547&voucherPricePoint.price=11100&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=AOV&shopLang=id_ID&voucherTypeId=1&gvtId=32`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Garena: AOV (Arena Of Valor)',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
