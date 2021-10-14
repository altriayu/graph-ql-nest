import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from 'src/schemas/teacher.schema';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel('teacher')
    private readonly TeacherModel: Model<TeacherDocument>,
  ) {}
  async getTeacherList(): Promise<Teacher[]> {
    try {
      const teacherList = await this.TeacherModel.find()
        .populate('lessons')
        .exec();
      return teacherList;
    } catch (e) {
      return e;
    }
  }
  async getOneTeacherById(id: string): Promise<Teacher> {
    try {
      const teacher = await this.TeacherModel.findById(id)
        .populate('lessons')
        .exec();
      return teacher;
    } catch (e) {
      return e;
    }
  }
}
