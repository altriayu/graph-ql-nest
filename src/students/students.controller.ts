import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ReqCreateStudentDto,
  CreateStudentDto,
} from 'src/dto/student/create-lesson.dto';
import { StudentsService } from './students.service';
import * as mongoose from 'mongoose';

@Controller('student')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}
  @Get('/:id')
  async getStudentById(@Param('id') id: string) {
    try {
      const res = await this.studentService.getOneStudentById(id);
      return res;
    } catch (e) {
      return { code: 'error' };
    }
  }
  @Get('/')
  async GetAllStudenbt() {
    try {
      const res = await this.studentService.getStudentList();
      console.log(res);
      return res;
    } catch (e) {
      return { code: 'error' };
    }
  }
  @Post('/add')
  async AddStudent(@Body() body: ReqCreateStudentDto) {
    try {
      const studentInfo: CreateStudentDto = {
        name: body.name,
        avater: body.avater,
        lessons: body.lessons.map((item) => {
          return new mongoose.Schema.Types.ObjectId(item);
        }),
      };
      const res = await this.studentService.addStudent(studentInfo);
      return res;
    } catch (e) {
      return e;
    }
  }
}
