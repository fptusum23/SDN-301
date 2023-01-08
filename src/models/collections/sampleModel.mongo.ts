import * as mongoose from "mongoose"
import { BaseModel } from '../base'

const Schema = mongoose.Schema

export type SampleModel = BaseModel & {
  string: string,
  number: number,

}

const sampleSchema = new Schema({
  string: { type: String },
  number: { type: Number }
})

export let Sample = mongoose.model('Sample', sampleSchema)
