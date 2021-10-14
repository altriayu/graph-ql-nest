import * as mongoose from 'mongoose';

export class CreateStudentDto {
  name: string;
  avater: string;
  lessons?: mongoose.Schema.Types.ObjectId[];
}

export class ReqCreateStudentDto {
  name: string;
  avater: string;
  lessons?: string[];
}
