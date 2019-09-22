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
    IoK8sApiAppsV1ReplicaSet,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
} from './';

/**
 * ReplicaSetList is a collection of ReplicaSets.
 * @export
 * @interface IoK8sApiAppsV1ReplicaSetList
 */
export interface IoK8sApiAppsV1ReplicaSetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetList
     */
    apiVersion?: string;
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     * @type {Array<IoK8sApiAppsV1ReplicaSet>}
     * @memberof IoK8sApiAppsV1ReplicaSetList
     */
    items: Array<IoK8sApiAppsV1ReplicaSet>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSetList
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAppsV1ReplicaSetList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
