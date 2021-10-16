import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Lesson } from 'src/graphql';
import { StudentGraphService } from 'src/students-graph/students.graph.service';

@Resolver('Lesson')
export class LessonStudentResolver {
  constructor(private readonly studentGraphService: StudentGraphService) {}

  @ResolveField()
  async students(
    @Parent() lesson: { _doc: Lesson & { students: ObjectId[] } },
  ) {
    return this.studentGraphService.getManyStudentsById(lesson._doc.students);
  }
}
