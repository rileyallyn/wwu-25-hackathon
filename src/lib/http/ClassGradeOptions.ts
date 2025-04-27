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

import { ClassGradeOption, Error } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ClassGradeOptions<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags ClassGradeOptions
   * @name GetClassGradeOptions
   * @summary Get all Class Grade Options
   * @request GET:/classGradeOptions
   */
  getClassGradeOptions = (params: RequestParams = {}) =>
    this.request<
      {
        classGradeOptions?: ClassGradeOption[];
      },
      Error
    >({
      path: `/classGradeOptions`,
      method: "GET",
      format: "json",
      ...params,
    });
}
