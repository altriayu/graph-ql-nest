import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('student') private StudentModel: Model<StudentDocument>,
  ) {}
  async getStudentList(): Promise<Student[]> {
    try {
      const lessonList = await this.StudentModel.find()
        .populate('lessons')
        .exec();
      return lessonList;
    } catch (e) {
      return e;
    }
  }
  async getOneStudentById(id: string): Promise<Student> {
    try {
      const lesson = await this.StudentModel.findById(id)
        .populate('lessons')
        .exec();
      return lesson;
    } catch (e) {
      return e;
    }
  }
  async addStudent(studentInfo): Promise<Student> {
    try {
      const res = await this.StudentModel.create(studentInfo);
      return res;
    } catch (e) {
      return e;
    }
  }
}
