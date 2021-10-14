import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonsModule } from './lessons/lessons.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LessonsModule,
    TeachersModule,
    StudentsModule,
    MongooseModule.forRoot(
      'mongodb://altriayu:pendragon@localhost:27017/altriaTest?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
