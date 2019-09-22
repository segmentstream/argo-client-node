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
    IoK8sApiCoreV1DaemonEndpoint,
} from './';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 * @export
 * @interface IoK8sApiCoreV1NodeDaemonEndpoints
 */
export interface IoK8sApiCoreV1NodeDaemonEndpoints {
    /**
     * @type {IoK8sApiCoreV1DaemonEndpoint}
     * @memberof IoK8sApiCoreV1NodeDaemonEndpoints
     */
    kubeletEndpoint?: IoK8sApiCoreV1DaemonEndpoint;
}
