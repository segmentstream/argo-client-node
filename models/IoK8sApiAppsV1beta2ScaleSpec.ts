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
 * ScaleSpec describes the attributes of a scale subresource
 * @export
 * @interface IoK8sApiAppsV1beta2ScaleSpec
 */
export interface IoK8sApiAppsV1beta2ScaleSpec {
    /**
     * desired number of instances for the scaled object.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2ScaleSpec
     */
    replicas?: number;
}
