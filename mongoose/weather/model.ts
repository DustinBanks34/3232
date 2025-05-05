// Mongoose Weather Model Bridges front-end to back end code
import mongoose, { model } from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

export default mongoose.models.Weather ||
    model<WeatherInterface>("Weather", WeatherSchema);