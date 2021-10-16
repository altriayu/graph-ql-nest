import { Args, Query, Resolver } from '@nestjs/graphql';
import { StudentGraphService } from './students.graph.service';

@Resolver('Lesson')
export class StudentGraphResolver {
  constructor(private readonly studentService: StudentGraphService) {}
  @Query('students')
  async getAllStudents() {
    const lessonList = await this.studentService.getStudentList();
    return lessonList;
  }

  @Query('student')
  async getStudent(@Args('id') id: string) {
    const lesson = await this.studentService.getOneStudentById(id);
    return lesson;
  }
}
