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

import {
  AddStudentRequest,
  BulkDeleteBody,
  Error,
  LinkStudentRequest,
  Student,
  StudentWithDeepRelations,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Students<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Students
   * @name GetStudents
   * @summary Get all Students
   * @request GET:/students
   */
  getStudents = (params: RequestParams = {}) =>
    this.request<
      {
        students?: any[];
      },
      Error
    >({
      path: `/students`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Students
   * @name AddStudent
   * @summary Add a new Student
   * @request POST:/students
   */
  addStudent = (data: AddStudentRequest, params: RequestParams = {}) =>
    this.request<StudentWithDeepRelations, Error>({
      path: `/students`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Students
   * @name DeleteStudents
   * @summary Delete multiple Students
   * @request DELETE:/students
   */
  deleteStudents = (data: BulkDeleteBody, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/students`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Students
   * @name GetStudent
   * @summary Get a specific Student by ID
   * @request GET:/students/{studentId}
   */
  getStudent = (studentId: string, params: RequestParams = {}) =>
    this.request<
      {
        students?: array;
      },
      Error
    >({
      path: `/students/${studentId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Students
   * @name EditStudent
   * @summary Update a specific Student
   * @request PUT:/students/{studentId}
   */
  editStudent = (
    studentId: string,
    data: {
      updatedStudent: Student;
      link?: LinkStudentRequest;
    },
    params: RequestParams = {},
  ) =>
    this.request<StudentWithDeepRelations, Error>({
      path: `/students/${studentId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Students
   * @name DeleteStudent
   * @summary Delete a specific Student
   * @request DELETE:/students/{studentId}
   */
  deleteStudent = (studentId: string, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/students/${studentId}`,
      method: "DELETE",
      ...params,
    });
}
