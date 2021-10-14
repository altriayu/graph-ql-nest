import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Lesson } from './lesson.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  avater: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'lesson' }] })
  lessons: Lesson[];
}

export type StudentDocument = Document & Student;
export const StudentSchema = SchemaFactory.createForClass(Student);
