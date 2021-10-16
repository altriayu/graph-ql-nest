import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Teacher } from 'src/graphql';
import { LessonGraphService } from 'src/lessons-graph/lessons.graph.service';

@Resolver('Teacher')
export class TeacherLessonResolver {
  constructor(private readonly lessonGraphService: LessonGraphService) {}
  @ResolveField()
  async lessons(
    @Parent() teacher: { _doc: Teacher & { lessons: ObjectId[] } },
  ) {
    return this.lessonGraphService.getManyLessonsById(teacher._doc.lessons);
  }
}
