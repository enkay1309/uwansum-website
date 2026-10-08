export async function POST(request: Request) {
  const data = await request.json();

  console.log("Received:", data);

  return Response.json({
    message: "Recipe received successfully!",
  });
}