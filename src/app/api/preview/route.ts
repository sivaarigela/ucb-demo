import { draftMode } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  (await draftMode()).enable();
  return NextResponse.redirect('http://localhost:3000'); // or your actual blog page
}
