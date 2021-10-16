import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeacherDocument, Teacher } from 'src/schemas/teacher.schema';

@Injectable()
export class TeacherGraphService {
  constructor(
    @InjectModel('teacher') private TeacherModel: Model<TeacherDocument>,
  ) {}
  async getTeacherList(): Promise<Teacher[]> {
    try {
      const teacherList = await this.TeacherModel.find().exec();
      return teacherList;
    } catch (e) {
      return e;
    }
  }
  async getOneTeacherById(id: string): Promise<Teacher> {
    try {
      const teacher = await this.TeacherModel.findById(id).exec();
      return teacher;
    } catch (e) {
      return e;
    }
  }
}
