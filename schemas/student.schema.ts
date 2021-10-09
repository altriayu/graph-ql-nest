import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Lesson } from './lesson.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Student {
  @Prop({ required: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  avater: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }] })
  lessons: Lesson[];
}

export type StudentDocument = Document & Student;
