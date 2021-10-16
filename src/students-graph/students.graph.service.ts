import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { StudentDocument, Student } from 'src/schemas/Student.schema';

@Injectable()
export class StudentGraphService {
  constructor(
    @InjectModel('student') private StudentModel: Model<StudentDocument>,
  ) {}
  async getStudentList(): Promise<Student[]> {
    try {
      const StudentList = await this.StudentModel.find().exec();
      return StudentList;
    } catch (e) {
      return e;
    }
  }
  async getOneStudentById(id: string): Promise<Student> {
    try {
      const Student = await this.StudentModel.findById(id).exec();
      return Student;
    } catch (e) {
      return e;
    }
  }
  async getManyStudentsById(ids: ObjectId[]): Promise<Student[]> {
    const students = await this.StudentModel.find({ _id: { $in: ids } }).exec();
    return students;
  }
}
