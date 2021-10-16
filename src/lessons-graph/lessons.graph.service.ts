import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { LessonDocument, Lesson } from 'src/schemas/lesson.schema';

@Injectable()
export class LessonGraphService {
  constructor(
    @InjectModel('lesson') private LessonModel: Model<LessonDocument>,
  ) {}
  async getLessonList(): Promise<Lesson[]> {
    try {
      const lessonList = await this.LessonModel.find().exec();
      return lessonList;
    } catch (e) {
      return e;
    }
  }
  async getOneLessonById(id: string): Promise<Lesson> {
    try {
      const lesson = await this.LessonModel.findById(id).exec();
      return lesson;
    } catch (e) {
      return e;
    }
  }
  async getManyLessonsById(ids: ObjectId[]): Promise<Lesson[]> {
    const students = await this.LessonModel.find({ _id: { $in: ids } }).exec();
    return students;
  }
}
