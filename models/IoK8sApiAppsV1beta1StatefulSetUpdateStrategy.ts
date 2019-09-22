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
    IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy,
} from './';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 * @export
 * @interface IoK8sApiAppsV1beta1StatefulSetUpdateStrategy
 */
export interface IoK8sApiAppsV1beta1StatefulSetUpdateStrategy {
    /**
     * @type {IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy}
     * @memberof IoK8sApiAppsV1beta1StatefulSetUpdateStrategy
     */
    rollingUpdate?: IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy;
    /**
     * Type indicates the type of the StatefulSetUpdateStrategy.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1StatefulSetUpdateStrategy
     */
    type?: string;
}
