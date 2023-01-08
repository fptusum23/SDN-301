import * as mongoose from "mongoose"
import { config } from "../config";
export type BaseModel = mongoose.Document & {
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
};

export const baseSchema = new mongoose.Schema({
  createdAt: { type: Date},
  updatedAt: { type: Date},
  deletedAt: { type: Date },
})


export type Model = mongoose.Model<any, {}, {}, any>
export type DocumentQuery = mongoose.Query<any, any>
