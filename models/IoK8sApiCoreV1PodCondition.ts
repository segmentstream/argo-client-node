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
 * PodCondition contains details for the current condition of this pod.
 * @export
 * @interface IoK8sApiCoreV1PodCondition
 */
export interface IoK8sApiCoreV1PodCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    lastProbeTime?: Date;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    lastTransitionTime?: Date;
    /**
     * Human-readable message indicating details about last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    message?: string;
    /**
     * Unique, one-word, CamelCase reason for the condition\'s last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    reason?: string;
    /**
     * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    status: string;
    /**
     * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {string}
     * @memberof IoK8sApiCoreV1PodCondition
     */
    type: string;
}
