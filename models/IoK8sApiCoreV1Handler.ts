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
    IoK8sApiCoreV1ExecAction,
    IoK8sApiCoreV1HTTPGetAction,
    IoK8sApiCoreV1TCPSocketAction,
} from './';

/**
 * Handler defines a specific action that should be taken
 * @export
 * @interface IoK8sApiCoreV1Handler
 */
export interface IoK8sApiCoreV1Handler {
    /**
     * @type {IoK8sApiCoreV1ExecAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    exec?: IoK8sApiCoreV1ExecAction;
    /**
     * @type {IoK8sApiCoreV1HTTPGetAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    httpGet?: IoK8sApiCoreV1HTTPGetAction;
    /**
     * @type {IoK8sApiCoreV1TCPSocketAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}
