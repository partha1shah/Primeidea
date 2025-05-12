import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

async function handleRevalidation(secret) {
  if (secret !== process.env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath("/")
  revalidatePath("/blogs")
  revalidatePath("/careers")

  return NextResponse.json({ revalidated: true, now: Date.now() })
}

export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret')
  return handleRevalidation(secret)
}

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret')
  return handleRevalidation(secret)
}