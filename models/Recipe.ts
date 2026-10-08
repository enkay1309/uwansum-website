import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    recipe: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);