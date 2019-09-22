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
    IoK8sApiCoordinationV1beta1LeaseSpec,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * Lease defines a lease concept.
 * @export
 * @interface IoK8sApiCoordinationV1beta1Lease
 */
export interface IoK8sApiCoordinationV1beta1Lease {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoordinationV1beta1Lease
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoordinationV1beta1Lease
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoordinationV1beta1Lease
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiCoordinationV1beta1LeaseSpec}
     * @memberof IoK8sApiCoordinationV1beta1Lease
     */
    spec?: IoK8sApiCoordinationV1beta1LeaseSpec;
}
