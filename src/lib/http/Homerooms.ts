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
  AddHomeroomRequest,
  BulkDeleteBody,
  ClassGradeOption,
  Error,
  HomeroomWithRelations,
  Student,
  Teacher,
  UpdateHomeroomRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Homerooms<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Homerooms
   * @name GetHomerooms
   * @summary Get all Homerooms
   * @request GET:/homerooms
   */
  getHomerooms = (params: RequestParams = {}) =>
    this.request<
      {
        homerooms?: HomeroomWithRelations[];
        classGradeOptions?: ClassGradeOption[];
        teachers?: Teacher[];
        students?: Student[];
      },
      Error
    >({
      path: `/homerooms`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Homerooms
   * @name AddHomeroom
   * @summary Add a new Homeroom
   * @request POST:/homerooms
   */
  addHomeroom = (data: AddHomeroomRequest, params: RequestParams = {}) =>
    this.request<HomeroomWithRelations, Error>({
      path: `/homerooms`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes homerooms based on a list of IDs provided in the request body.
   *
   * @tags Homerooms
   * @name DeleteHomerooms
   * @summary Delete multiple Homerooms
   * @request DELETE:/homerooms
   */
  deleteHomerooms = (data: BulkDeleteBody, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/homerooms`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Homerooms
   * @name GetHomeroom
   * @summary Get a specific Homeroom by ID
   * @request GET:/homerooms/{homeroomId}
   */
  getHomeroom = (homeroomId: string, params: RequestParams = {}) =>
    this.request<
      {
        homerooms?: HomeroomWithRelations[];
        teachers?: Teacher[];
        students?: Student[];
      },
      Error
    >({
      path: `/homerooms/${homeroomId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Homerooms
   * @name EditHomeroom
   * @summary Update a specific Homeroom
   * @request PUT:/homerooms/{homeroomId}
   */
  editHomeroom = (
    homeroomId: string,
    data: UpdateHomeroomRequest,
    params: RequestParams = {},
  ) =>
    this.request<HomeroomWithRelations, Error>({
      path: `/homerooms/${homeroomId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Homerooms
   * @name DeleteHomeroom
   * @summary Delete a specific Homeroom
   * @request DELETE:/homerooms/{homeroomId}
   */
  deleteHomeroom = (homeroomId: string, params: RequestParams = {}) =>
    this.request<void, Error>({
      path: `/homerooms/${homeroomId}`,
      method: "DELETE",
      ...params,
    });
}
