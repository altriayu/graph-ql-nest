import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Student } from './student.schema';
import { Teacher } from './teacher.schema';

@Schema()
export class Lesson {
  @Prop({ required: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  avater: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }] })
  teacher: Teacher;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
  students: Student[];
}

export type LessonDocument = Document & Lesson;
