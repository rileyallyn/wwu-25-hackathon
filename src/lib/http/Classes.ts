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

export class Classes<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name ClassesList
   * @request GET:/classes
   */
  classesList = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name ClassesCreate
   * @request POST:/classes
   */
  classesCreate = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @name ClassesDelete
   * @request DELETE:/classes
   */
  classesDelete = (params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @name ClassesDetail
   * @request GET:/classes/{classId}
   */
  classesDetail = (classId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes/${classId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @name ClassesUpdate
   * @request PUT:/classes/{classId}
   */
  classesUpdate = (classId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes/${classId}`,
      method: "PUT",
      ...params,
    });
  /**
   * No description
   *
   * @name ClassesDelete2
   * @request DELETE:/classes/{classId}
   * @originalName classesDelete
   * @duplicate
   */
  classesDelete2 = (classId: string, params: RequestParams = {}) =>
    this.request<any, any>({
      path: `/classes/${classId}`,
      method: "DELETE",
      ...params,
    });
}
