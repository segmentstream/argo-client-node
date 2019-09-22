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
    IoK8sApiRbacV1beta1RoleRef,
    IoK8sApiRbacV1beta1Subject,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 * @export
 * @interface IoK8sApiRbacV1beta1RoleBinding
 */
export interface IoK8sApiRbacV1beta1RoleBinding {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1RoleBinding
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiRbacV1beta1RoleBinding
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiRbacV1beta1RoleBinding
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiRbacV1beta1RoleRef}
     * @memberof IoK8sApiRbacV1beta1RoleBinding
     */
    roleRef: IoK8sApiRbacV1beta1RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     * @type {Array<IoK8sApiRbacV1beta1Subject>}
     * @memberof IoK8sApiRbacV1beta1RoleBinding
     */
    subjects?: Array<IoK8sApiRbacV1beta1Subject>;
}
