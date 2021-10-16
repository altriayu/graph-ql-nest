import { Args, Query, Resolver } from '@nestjs/graphql';
import { TeacherGraphService } from './teachers.graph.service';

@Resolver('Teacher')
export class TeacherGraphResolver {
  constructor(private readonly teacherService: TeacherGraphService) {}
  @Query('teachers')
  async getAllTeachers() {
    const lessonList = await this.teacherService.getTeacherList();
    return lessonList;
  }

  @Query('teacher')
  async getTeacher(@Args('id') id: string) {
    const lesson = await this.teacherService.getOneTeacherById(id);
    return lesson;
  }
}
