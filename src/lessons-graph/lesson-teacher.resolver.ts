import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Lesson } from 'src/graphql';
import { TeacherGraphService } from 'src/teachers-graph/teachers.graph.service';

@Resolver('Lesson')
export class LessonTeacherResolver {
  constructor(private readonly teacherService: TeacherGraphService) {}

  @ResolveField()
  async teacher(@Parent() lesson: { _doc: Lesson & { teacherId: string } }) {
    return this.teacherService.getOneTeacherById(lesson._doc.teacherId);
  }
}
