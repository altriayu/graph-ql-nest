import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './lesson/lesson.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LessonModule,
    TeacherModule,
    StudentModule,
    MongooseModule.forRoot(
      'mongodb://altriayu:pendragon@localhost:27017/?authSource=admin&authMechanism=SCRAM-SHA-256&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
