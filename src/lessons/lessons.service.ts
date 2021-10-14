import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonDto } from 'src/dto/lesson/create-lesson.dto';
import { Lesson, LessonDocument } from 'src/schemas/lesson.schema';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel('lesson') private LessonModel: Model<LessonDocument>,
  ) {}
  async getLessonList(): Promise<Lesson[]> {
    try {
      const lessonList = await this.LessonModel.find()
        .populate('students')
        .exec();
      return lessonList;
    } catch (e) {
      return e;
    }
  }
  async getOneLessonById(id: string): Promise<Lesson> {
    try {
      const lesson = await this.LessonModel.findById(id)
        .populate('students')
        .exec();
      return lesson;
    } catch (e) {
      return e;
    }
  }
  async addLesson(lessonInfo: CreateLessonDto): Promise<Lesson> {
    try {
      const res = await this.LessonModel.create(lessonInfo);
      return res;
    } catch (e) {
      return e;
    }
  }
}
