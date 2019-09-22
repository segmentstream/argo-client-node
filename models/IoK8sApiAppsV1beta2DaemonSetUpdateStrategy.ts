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
    IoK8sApiAppsV1beta2RollingUpdateDaemonSet,
} from './';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 * @export
 * @interface IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
 */
export interface IoK8sApiAppsV1beta2DaemonSetUpdateStrategy {
    /**
     * @type {IoK8sApiAppsV1beta2RollingUpdateDaemonSet}
     * @memberof IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1beta2RollingUpdateDaemonSet;
    /**
     * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is RollingUpdate.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
     */
    type?: string;
}
