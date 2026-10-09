import { connectDB } from "@/lib/mongodb";
import { Recipe } from "@/models/Recipe";

export async function POST(request: Request) {
  console.log("API ROUTE REACHED");
  try {
    const data = await request.json();

    await connectDB();

    const newRecipe = await Recipe.create({
      name: data.name,
      email: data.email,
      recipe: data.recipe,
    });

    console.log("Saved recipe:", newRecipe);

    return Response.json({
      message: "Recipe saved successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);

    return Response.json(
      {
        message: "Failed to save recipe",
      },
      {
        status: 500,
      }
    );
  }
}