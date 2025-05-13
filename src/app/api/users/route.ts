import { NextRequest, NextResponse } from 'next/server';

// 🔧 In-memory mock data store (resets every time the function re-runs)
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Handle GET (list users) and POST (add user)
export async function GET() {
  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    const newUser = {
      id: users.length + 1,
      name,
    };

    users.push(newUser);

    return NextResponse.json({ message: 'User added', user: newUser });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
  }
}
