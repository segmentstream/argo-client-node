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
    IoK8sApiBatchV1JobCondition,
} from './';

/**
 * JobStatus represents the current state of a Job.
 * @export
 * @interface IoK8sApiBatchV1JobStatus
 */
export interface IoK8sApiBatchV1JobStatus {
    /**
     * The number of actively running pods.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    active?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    completionTime?: Date;
    /**
     * The latest available observations of an object\'s current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     * @type {Array<IoK8sApiBatchV1JobCondition>}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    conditions?: Array<IoK8sApiBatchV1JobCondition>;
    /**
     * The number of pods which reached phase Failed.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    failed?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    startTime?: Date;
    /**
     * The number of pods which reached phase Succeeded.
     * @type {number}
     * @memberof IoK8sApiBatchV1JobStatus
     */
    succeeded?: number;
}
