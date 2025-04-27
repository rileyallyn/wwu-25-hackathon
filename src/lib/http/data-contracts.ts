/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Homeroom {
  /** @format uuid */
  id?: string;
  /** @example "Room 101" */
  name: string;
  /** @example "9th Grade" */
  grade: string;
}

export interface Teacher {
  /** @format uuid */
  id?: string;
  /** @example "Jane Doe" */
  name: string;
}

export interface Student {
  /** @format uuid */
  id?: string;
  /** @example "John Smith" */
  name: string;
}

export interface Class {
  /** @format uuid */
  id?: string;
  /** @example "Algebra I" */
  name: string;
  /** @example "Math" */
  description?: string;
}

export interface Assignment {
  /** @format uuid */
  id?: string;
  /** @example "Chapter 1 Homework" */
  name: string;
  /** @example "Complete all problems in section 1.1" */
  description?: string;
  /** @example 100 */
  max_points: number;
  /** @example "CCSS.Math.Content.HSA-REI.B.4" */
  standard?: string;
}

export interface Grade {
  /** @format uuid */
  id?: string;
  /** @example 85.5 */
  score: objectObject;
  /** @example ["B"] */
  standard_score?: objectObject;
  /** @example "Great job!" */
  comments?: string;
}

export interface ClassGradeOption {
  /** @format uuid */
  id?: string;
  /** @example "Freshman" */
  name: string;
  /** @example "Freshman" */
  value: string;
}

/** Homeroom data for creation (ID is excluded/ignored). */
export type NewHomeroom = Homeroom & {
  id?: any;
};

/** Homeroom data for update (ID is excluded/ignored). */
export type UpdateHomeroom = NewHomeroom;

export interface LinkTeachersRequest {
  /** Optional array of Teacher IDs to link. */
  teachers?: string[];
}

export interface AddHomeroomRequest {
  /** Homeroom data for creation (ID is excluded/ignored). */
  newHomeroom: NewHomeroom;
  link?: LinkTeachersRequest;
}

export interface UpdateHomeroomRequest {
  /** Homeroom data for update (ID is excluded/ignored). */
  updatedHomeroom: UpdateHomeroom;
  link?: LinkTeachersRequest;
}

export type NewTeacher = Teacher & {
  id?: any;
};

export type UpdateTeacher = NewTeacher;

export interface LinkClassesHomeroomsRequest {
  classes?: string[];
  homerooms?: string[];
}

export interface AddTeacherRequest {
  newTeacher: NewTeacher;
  link?: LinkClassesHomeroomsRequest;
}

export interface UpdateTeacherRequest {
  updatedTeacher: UpdateTeacher;
  link?: LinkClassesHomeroomsRequest;
}

export type NewStudent = Student & {
  id?: any;
};

export interface LinkStudentRequest {
  /** @format uuid */
  homeroom?: string;
  classes?: string[];
  assignments?: string[];
}

export interface AddStudentRequest {
  newStudent: NewStudent;
  link?: LinkStudentRequest;
}

export type UpdateClass = Class & {
  id?: any;
};

export interface LinkUnlinkClassRequest {
  assignments?: string[];
  students?: string[];
}

export interface EditClassRequest {
  updatedClass: UpdateClass;
  link?: LinkUnlinkClassRequest;
  unlink?: LinkUnlinkClassRequest;
}

export type HomeroomWithRelations = Homeroom & {
  teachers?: Teacher[];
  students?: Student[];
};

export type TeacherWithRelations = Teacher & {
  classes?: Class[];
  homerooms?: Homeroom[];
};

export type StudentWithDeepRelations = Student & {
  homeroom?: Homeroom & {
    teachers?: Teacher[];
  };
  classes?: (Class & {
    assignments?: (Assignment & {
      grades?: Grade[];
    })[];
    teachers?: Teacher[];
  })[];
  assignments?: (Assignment & {
    grades?: Grade[];
  })[];
  grades?: Grade[];
};

export type ClassWithRelations = Class & {
  assignments?: Assignment[];
  students?: Student[];
};

export type AssignmentWithRelations = Assignment & {
  grades?: Grade[];
  students?: (Student & {
    grades?: Grade[];
  })[];
  class?: Class & {
    teachers?: Teacher[];
  };
};

export type GradeWithRelations = Grade & {
  student?: Student & {
    homeroom?: Homeroom;
  };
  assignment?: Assignment & {
    class?: Class;
  };
};

export interface Error {
  /** A description of the error. */
  error: string;
  /** Optional additional error details. */
  details?: any;
}

/**
 * An array of resource IDs to delete.
 * @example ["f47ac10b-58cc-4372-a567-0e02b2c3d479","f47ac10b-58cc-4372-a567-0e02b2c3d480"]
 */
export type BulkDeleteBody = string[];
