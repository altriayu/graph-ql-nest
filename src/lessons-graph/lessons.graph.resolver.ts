import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { LessonGraphService } from './lessons.graph.service';
import { LessonGuard } from './lessons.guard';

@Resolver('Lesson')
export class LessonGraphResolver {
  constructor(private readonly lessonService: LessonGraphService) {}
  @Query('lessons')
  @UseGuards(LessonGuard)
  async getAllLessons() {
    const lessonList = await this.lessonService.getLessonList();
    return lessonList;
  }

  @Query('lesson')
  async getLesson(@Args('id') id: string) {
    const lesson = await this.lessonService.getOneLessonById(id);
    return lesson;
  }
}
