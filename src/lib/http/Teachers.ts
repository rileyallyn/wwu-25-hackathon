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
  AddTeacherRequest,
  BulkDeleteBody,
  Error,
  TeacherWithRelations,
  UpdateTeacherRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Teachers<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Teachers
   * @name GetTeachers
   * @summary Get all Teachers
   * @request GET:/teachers
   */
  getTeachers = (params: RequestParams = {}) =>
    this.request<
      {
        teachers?: TeacherWithRelations[];
      },
      Error
    >({
      path: `/teachers`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teachers
   * @name AddTeacher
   * @summary Add a new Teacher
   * @request POST:/teachers
   */
  addTeacher = (data: AddTeacherRequest, params: RequestParams = {}) =>
    this.request<TeacherWithRelations, Error>({
      path: `/teachers`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teachers
   * @name DeleteTeachers
   * @summary Delete multiple Teachers
   * @request DELETE:/teachers
   */
  deleteTeachers = (data: BulkDeleteBody, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/teachers`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Teachers
   * @name GetTeacher
   * @summary Get a specific Teacher by ID
   * @request GET:/teachers/{teacherId}
   */
  getTeacher = (teacherId: string, params: RequestParams = {}) =>
    this.request<
      {
        teachers?: TeacherWithRelations[];
      },
      Error
    >({
      path: `/teachers/${teacherId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teachers
   * @name EditTeacher
   * @summary Update a specific Teacher
   * @request PUT:/teachers/{teacherId}
   */
  editTeacher = (
    teacherId: string,
    data: UpdateTeacherRequest,
    params: RequestParams = {},
  ) =>
    this.request<TeacherWithRelations, Error>({
      path: `/teachers/${teacherId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Teachers
   * @name DeleteTeacher
   * @summary Delete a specific Teacher
   * @request DELETE:/teachers/{teacherId}
   */
  deleteTeacher = (teacherId: string, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/teachers/${teacherId}`,
      method: "DELETE",
      ...params,
    });
}
