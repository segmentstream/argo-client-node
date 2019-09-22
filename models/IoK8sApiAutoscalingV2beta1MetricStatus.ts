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
    IoK8sApiAutoscalingV2beta1ExternalMetricStatus,
    IoK8sApiAutoscalingV2beta1ObjectMetricStatus,
    IoK8sApiAutoscalingV2beta1PodsMetricStatus,
    IoK8sApiAutoscalingV2beta1ResourceMetricStatus,
} from './';

/**
 * MetricStatus describes the last-read state of a single metric.
 * @export
 * @interface IoK8sApiAutoscalingV2beta1MetricStatus
 */
export interface IoK8sApiAutoscalingV2beta1MetricStatus {
    /**
     * @type {IoK8sApiAutoscalingV2beta1ExternalMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    external?: IoK8sApiAutoscalingV2beta1ExternalMetricStatus;
    /**
     * @type {IoK8sApiAutoscalingV2beta1ObjectMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    object?: IoK8sApiAutoscalingV2beta1ObjectMetricStatus;
    /**
     * @type {IoK8sApiAutoscalingV2beta1PodsMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    pods?: IoK8sApiAutoscalingV2beta1PodsMetricStatus;
    /**
     * @type {IoK8sApiAutoscalingV2beta1ResourceMetricStatus}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    resource?: IoK8sApiAutoscalingV2beta1ResourceMetricStatus;
    /**
     * type is the type of metric source.  It will be one of \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object.
     * @type {string}
     * @memberof IoK8sApiAutoscalingV2beta1MetricStatus
     */
    type: string;
}
