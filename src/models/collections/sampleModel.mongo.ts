import * as mongoose from "mongoose"
import { BaseModel, baseSchema } from '../base'

const Schema = mongoose.Schema

export type SampleModel = BaseModel & {
  string: string,
  number: number,

}

const sampleSchema = new Schema({
  string: { type: String },
  number: { type: Number },
  ...baseSchema.obj,
})

sampleSchema.pre('find', function () {
  this.where({ isDeleted: { $ne: undefined } });
});

sampleSchema.pre('findOne', function () {
  this.where({ isDeleted: { $ne: undefined } });
});
sampleSchema.pre('save', async function (this, next) {
  this['createdAt'] = Date.now();
  this['updatedAt'] = Date.now();
  next();
});
sampleSchema.pre('update', async function (this, next) {
  this['updatedAt'] = Date.now();
  await this.update()
  next();
});

export let Sample = mongoose.model('Sample', sampleSchema)
