import * as mongoose from "mongoose"
import { config } from "../config";
export type BaseModel = mongoose.Document & {
  createAt: Date,
  status: string,
  updateAt: Date,
};

export type Model = mongoose.Model<any, {}, {}, any>
export type DocumentQuery = mongoose.Query<any, any>
