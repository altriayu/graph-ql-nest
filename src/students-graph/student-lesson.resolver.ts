import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Student } from 'src/graphql';
import { LessonGraphService } from 'src/lessons-graph/lessons.graph.service';

@Resolver('Student')
export class StudentLessonResolver {
  constructor(private readonly lessonGraphService: LessonGraphService) {}
  @ResolveField()
  async lessons(
    @Parent() student: { _doc: Student & { lessons: ObjectId[] } },
  ) {
    return this.lessonGraphService.getManyLessonsById(student._doc.lessons);
  }
}
