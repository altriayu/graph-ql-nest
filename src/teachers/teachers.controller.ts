import { Controller, Get, Param } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  @Get('/:id')
  async GetTeacher(@Param('id') id: string) {
    try {
      const teacher = await this.teachersService.getOneTeacherById(id);
      return teacher;
    } catch (e) {
      return e;
    }
  }
  @Get('/')
  async GetAllTeacher() {
    try {
      const res = await this.teachersService.getTeacherList();
      return res;
    } catch (e) {
      return e;
    }
  }
}
