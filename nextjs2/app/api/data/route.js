export const dynamic = 'force-static';

export async function GET(request) {
const data = {
    id: 1,
    title: 'First Post',
    body: 'This is the first post',
    userId: 1
  };

  return new Response(JSON.stringify(data));
}

export async function POST(request) {

  return new Response(request.body);
}
