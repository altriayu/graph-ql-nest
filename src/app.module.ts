import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { LessonGraphModule } from './lessons-graph/lessons.graph.module';
import { TeacherGraphModule } from './teachers-graph/teachers.graph.module';
import { StudentGraphModule } from './students-graph/students.graph.module';

@Module({
  imports: [
    LessonsModule,
    LessonGraphModule,
    TeachersModule,
    TeacherGraphModule,
    StudentsModule,
    StudentGraphModule,
    MongooseModule.forRoot(
      'mongodb://altriayu:pendragon@localhost:27017/altriaTest?authSource=admin',
    ),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
