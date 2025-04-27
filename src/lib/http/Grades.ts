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

import { HttpClient, RequestParams } from "./http-client";

export class Grades<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GradesList
   * @request GET:/grades
   */
  gradesList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name GradesCreate
   * @request POST:/grades
   */
  gradesCreate = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @name GradesDelete
   * @request DELETE:/grades
   */
  gradesDelete = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @name GradesDetail
   * @request GET:/grades/{gradeId}
   */
  gradesDetail = (gradeId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades/${gradeId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name GradesUpdate
   * @request PUT:/grades/{gradeId}
   */
  gradesUpdate = (gradeId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades/${gradeId}`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @name GradesDelete2
   * @request DELETE:/grades/{gradeId}
   * @originalName gradesDelete
   * @duplicate
   */
  gradesDelete2 = (gradeId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/grades/${gradeId}`,
      method: "DELETE",
      ...params,
    });
}
