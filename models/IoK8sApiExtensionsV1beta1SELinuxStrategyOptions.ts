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
    IoK8sApiCoreV1SELinuxOptions,
} from './';

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use SELinuxStrategyOptions from policy API Group instead.
 * @export
 * @interface IoK8sApiExtensionsV1beta1SELinuxStrategyOptions
 */
export interface IoK8sApiExtensionsV1beta1SELinuxStrategyOptions {
    /**
     * rule is the strategy that will dictate the allowable labels that may be set.
     * @type {string}
     * @memberof IoK8sApiExtensionsV1beta1SELinuxStrategyOptions
     */
    rule: string;
    /**
     * @type {IoK8sApiCoreV1SELinuxOptions}
     * @memberof IoK8sApiExtensionsV1beta1SELinuxStrategyOptions
     */
    seLinuxOptions?: IoK8sApiCoreV1SELinuxOptions;
}
