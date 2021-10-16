import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonGraphModule } from 'src/lessons-graph/lessons.graph.module';
import { TeacherSchema } from 'src/schemas/teacher.schema';
import { TeacherLessonResolver } from './teacher-lesson.resolver';
import { TeacherGraphResolver } from './teachers.graph.resolver';
import { TeacherGraphService } from './teachers.graph.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'teacher',
        schema: TeacherSchema,
      },
    ]),
    forwardRef(() => LessonGraphModule),
  ],
  providers: [TeacherGraphService, TeacherGraphResolver, TeacherLessonResolver],
  exports: [TeacherGraphService],
})
export class TeacherGraphModule {}
