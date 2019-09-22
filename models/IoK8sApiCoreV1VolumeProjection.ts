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
    IoK8sApiCoreV1ConfigMapProjection,
    IoK8sApiCoreV1DownwardAPIProjection,
    IoK8sApiCoreV1SecretProjection,
    IoK8sApiCoreV1ServiceAccountTokenProjection,
} from './';

/**
 * Projection that may be projected along with other supported volume types
 * @export
 * @interface IoK8sApiCoreV1VolumeProjection
 */
export interface IoK8sApiCoreV1VolumeProjection {
    /**
     * @type {IoK8sApiCoreV1ConfigMapProjection}
     * @memberof IoK8sApiCoreV1VolumeProjection
     */
    configMap?: IoK8sApiCoreV1ConfigMapProjection;
    /**
     * @type {IoK8sApiCoreV1DownwardAPIProjection}
     * @memberof IoK8sApiCoreV1VolumeProjection
     */
    downwardAPI?: IoK8sApiCoreV1DownwardAPIProjection;
    /**
     * @type {IoK8sApiCoreV1SecretProjection}
     * @memberof IoK8sApiCoreV1VolumeProjection
     */
    secret?: IoK8sApiCoreV1SecretProjection;
    /**
     * @type {IoK8sApiCoreV1ServiceAccountTokenProjection}
     * @memberof IoK8sApiCoreV1VolumeProjection
     */
    serviceAccountToken?: IoK8sApiCoreV1ServiceAccountTokenProjection;
}
