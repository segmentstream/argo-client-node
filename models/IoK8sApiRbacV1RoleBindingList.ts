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
    IoK8sApiRbacV1RoleBinding,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
} from './';

/**
 * RoleBindingList is a collection of RoleBindings
 * @export
 * @interface IoK8sApiRbacV1RoleBindingList
 */
export interface IoK8sApiRbacV1RoleBindingList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1RoleBindingList
     */
    apiVersion?: string;
    /**
     * Items is a list of RoleBindings
     * @type {Array<IoK8sApiRbacV1RoleBinding>}
     * @memberof IoK8sApiRbacV1RoleBindingList
     */
    items: Array<IoK8sApiRbacV1RoleBinding>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1RoleBindingList
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiRbacV1RoleBindingList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
