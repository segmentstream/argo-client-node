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
    IoK8sApiAutoscalingV2beta2MetricIdentifier,
    IoK8sApiAutoscalingV2beta2MetricTarget,
} from './';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 * @export
 * @interface IoK8sApiAutoscalingV2beta2PodsMetricSource
 */
export interface IoK8sApiAutoscalingV2beta2PodsMetricSource {
    /**
     * @type {IoK8sApiAutoscalingV2beta2MetricIdentifier}
     * @memberof IoK8sApiAutoscalingV2beta2PodsMetricSource
     */
    metric: IoK8sApiAutoscalingV2beta2MetricIdentifier;
    /**
     * @type {IoK8sApiAutoscalingV2beta2MetricTarget}
     * @memberof IoK8sApiAutoscalingV2beta2PodsMetricSource
     */
    target: IoK8sApiAutoscalingV2beta2MetricTarget;
}
