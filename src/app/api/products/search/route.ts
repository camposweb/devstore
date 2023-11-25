import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

interface DataParams {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params }: DataParams) {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const { searchParams } = req.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
