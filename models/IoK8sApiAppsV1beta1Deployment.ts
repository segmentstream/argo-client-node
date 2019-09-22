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
    IoK8sApiAppsV1beta1DeploymentSpec,
    IoK8sApiAppsV1beta1DeploymentStatus,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 * @export
 * @interface IoK8sApiAppsV1beta1Deployment
 */
export interface IoK8sApiAppsV1beta1Deployment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1Deployment
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1Deployment
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1beta1Deployment
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiAppsV1beta1DeploymentSpec}
     * @memberof IoK8sApiAppsV1beta1Deployment
     */
    spec?: IoK8sApiAppsV1beta1DeploymentSpec;
    /**
     * @type {IoK8sApiAppsV1beta1DeploymentStatus}
     * @memberof IoK8sApiAppsV1beta1Deployment
     */
    status?: IoK8sApiAppsV1beta1DeploymentStatus;
}
