
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    lessons(): Nullable<Nullable<Lesson>[]> | Promise<Nullable<Nullable<Lesson>[]>>;
    lesson(id: string): Nullable<Lesson> | Promise<Nullable<Lesson>>;
    students(): Nullable<Nullable<Student>[]> | Promise<Nullable<Nullable<Student>[]>>;
    student(id: string): Nullable<Student> | Promise<Nullable<Student>>;
    teachers(): Nullable<Nullable<Teacher>[]> | Promise<Nullable<Nullable<Teacher>[]>>;
    teacher(id: string): Nullable<Teacher> | Promise<Nullable<Teacher>>;
}

export interface Student {
    id: string;
    name: string;
    avater?: Nullable<string>;
    lessons?: Nullable<Nullable<Lesson>[]>;
}

export interface Teacher {
    id: string;
    name: string;
    avater?: Nullable<string>;
    lessons?: Nullable<Nullable<Lesson>[]>;
}

export interface Lesson {
    id: string;
    name: string;
    avater?: Nullable<string>;
    desc?: Nullable<string>;
    teacher: Teacher;
    students?: Nullable<Nullable<Student>[]>;
}

type Nullable<T> = T | null;
