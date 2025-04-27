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

export class Assignments<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AssignmentsList
   * @request GET:/assignments
   */
  assignmentsList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name AssignmentsCreate
   * @request POST:/assignments
   */
  assignmentsCreate = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @name AssignmentsDelete
   * @request DELETE:/assignments
   */
  assignmentsDelete = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @name AssignmentsDetail
   * @request GET:/assignments/{assignmentId}
   */
  assignmentsDetail = (assignmentId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments/${assignmentId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name AssignmentsUpdate
   * @request PUT:/assignments/{assignmentId}
   */
  assignmentsUpdate = (assignmentId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments/${assignmentId}`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @name AssignmentsDelete2
   * @request DELETE:/assignments/{assignmentId}
   * @originalName assignmentsDelete
   * @duplicate
   */
  assignmentsDelete2 = (assignmentId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/assignments/${assignmentId}`,
      method: "DELETE",
      ...params,
    });
}
