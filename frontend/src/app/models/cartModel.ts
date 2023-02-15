export class Cart {
    id?: number 
    valor?: number
    qtde?: number
    nome?: string 
    destinoId: number | undefined
    data: string = ""
    totais?: number
}