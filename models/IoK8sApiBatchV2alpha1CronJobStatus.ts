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
    IoK8sApiCoreV1ObjectReference,
} from './';

/**
 * CronJobStatus represents the current state of a cron job.
 * @export
 * @interface IoK8sApiBatchV2alpha1CronJobStatus
 */
export interface IoK8sApiBatchV2alpha1CronJobStatus {
    /**
     * A list of pointers to currently running jobs.
     * @type {Array<IoK8sApiCoreV1ObjectReference>}
     * @memberof IoK8sApiBatchV2alpha1CronJobStatus
     */
    active?: Array<IoK8sApiCoreV1ObjectReference>;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiBatchV2alpha1CronJobStatus
     */
    lastScheduleTime?: Date;
}
