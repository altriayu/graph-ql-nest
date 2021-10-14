import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsService } from './lessons.service';
import { LessonSchema } from 'src/schemas/lesson.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'lesson',
        schema: LessonSchema,
      },
    ]),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}
