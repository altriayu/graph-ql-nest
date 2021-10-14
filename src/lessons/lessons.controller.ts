import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  CreateLessonDto,
  ReqCreateLessonDto,
} from 'src/dto/lesson/create-lesson.dto';
import { LessonsService } from './lessons.service';
import * as mongoose from 'mongoose';

@Controller('lesson')
export class LessonsController {
  constructor(private readonly lessonService: LessonsService) {}
  @Get('/:id')
  async GetLesson(@Param('id') id: string) {
    try {
      let res;
      if (id) {
        res = await this.lessonService.getOneLessonById(id);
      } else {
        res = await this.lessonService.getLessonList();
      }
      return res;
    } catch (e) {
      return { code: 'error' };
    }
  }
  @Get('/')
  async GetAllLesson() {
    try {
      const res = await this.lessonService.getLessonList();
      return res;
    } catch (e) {
      return { code: 'error' };
    }
  }
  @Post('/add')
  async AddLesson(@Body() body: ReqCreateLessonDto) {
    try {
      const lessonInfo: CreateLessonDto = {
        name: body.name,
        teacher: body.teacher,
        desc: body.desc,
        avater: body.avater,
        students: body.students.map((item) => {
          return new mongoose.Schema.Types.ObjectId(item);
        }),
      };
      const res = await this.lessonService.addLesson(lessonInfo);
      return res;
    } catch (e) {
      return e;
    }
  }
}
