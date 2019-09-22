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
    IoK8sApiAutoscalingV1ScaleSpec,
    IoK8sApiAutoscalingV1ScaleStatus,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface IoK8sApiAutoscalingV1Scale
 */
export interface IoK8sApiAutoscalingV1Scale {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiAutoscalingV1ScaleSpec}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    spec?: IoK8sApiAutoscalingV1ScaleSpec;
    /**
     * @type {IoK8sApiAutoscalingV1ScaleStatus}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    status?: IoK8sApiAutoscalingV1ScaleStatus;
}
