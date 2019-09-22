// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.17.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 * @export
 * @interface IoK8sApiCoreV1ObjectFieldSelector
 */
export interface IoK8sApiCoreV1ObjectFieldSelector {
    /**
     * Version of the schema the FieldPath is written in terms of, defaults to \"v1\".
     * @type {string}
     * @memberof IoK8sApiCoreV1ObjectFieldSelector
     */
    apiVersion?: string;
    /**
     * Path of the field to select in the specified API version.
     * @type {string}
     * @memberof IoK8sApiCoreV1ObjectFieldSelector
     */
    fieldPath: string;
}
