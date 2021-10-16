import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from 'src/schemas/lesson.schema';
import { LessonGraphService } from './lessons.graph.service';
import { LessonGraphResolver } from './lessons.graph.resolver';
import { TeacherGraphModule } from 'src/teachers-graph/teachers.graph.module';
import { StudentGraphModule } from 'src/students-graph/students.graph.module';
import { LessonTeacherResolver } from './lesson-teacher.resolver';
import { TeacherGraphService } from 'src/teachers-graph/teachers.graph.service';
import { LessonStudentResolver } from './lesson-student.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'lesson',
        schema: LessonSchema,
      },
    ]),
    forwardRef(() => TeacherGraphModule),
    forwardRef(() => StudentGraphModule),
  ],
  exports: [LessonGraphService],
  providers: [
    LessonGraphService,
    LessonGraphResolver,
    LessonTeacherResolver,
    LessonStudentResolver,
  ],
})
export class LessonGraphModule {}
