import * as mongoose from 'mongoose';

export class CreateLessonDto {
  name: string;
  desc: string;
  avater: string;
  teacher: string;
  students?: mongoose.Schema.Types.ObjectId[];
}

export class ReqCreateLessonDto {
  name: string;
  desc: string;
  avater: string;
  teacher: string;
  students?: string[];
}
