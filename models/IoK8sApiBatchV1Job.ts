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

import {
    IoK8sApiBatchV1JobSpec,
    IoK8sApiBatchV1JobStatus,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * Job represents the configuration of a single job.
 * @export
 * @interface IoK8sApiBatchV1Job
 */
export interface IoK8sApiBatchV1Job {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiBatchV1Job
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiBatchV1Job
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiBatchV1Job
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiBatchV1JobSpec}
     * @memberof IoK8sApiBatchV1Job
     */
    spec?: IoK8sApiBatchV1JobSpec;
    /**
     * @type {IoK8sApiBatchV1JobStatus}
     * @memberof IoK8sApiBatchV1Job
     */
    status?: IoK8sApiBatchV1JobStatus;
}
