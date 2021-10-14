import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Student } from './student.schema';

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  avater: string;

  // 这里通过保存对应id的方式, 由前端调用接口获取teacher信息组合数据
  @Prop()
  teacher: string;

  //直接利用mongodb做联表查询, 由后台组合接口
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'student' }] })
  students: Student[];
}

export type LessonDocument = Lesson & Document;
export const LessonSchema = SchemaFactory.createForClass(Lesson);
