import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'src/schemas/student.schema';
import { StudentLessonResolver } from './student-lesson.resolver';
import { StudentGraphResolver } from './students.graph.resolver';
import { StudentGraphService } from './students.graph.service';
// import { LessonGraphModule } from '../lessons-graph/lessons.graph.module';
import { LessonGraphModule } from '../lessons-graph/lessons.graph.module';

@Module({
  imports: [
    forwardRef(() => LessonGraphModule),
    MongooseModule.forFeature([
      {
        name: 'student',
        schema: StudentSchema,
      },
    ]),
  ],
  exports: [StudentGraphService],
  providers: [StudentGraphService, StudentGraphResolver, StudentLessonResolver],
})
export class StudentGraphModule {}
