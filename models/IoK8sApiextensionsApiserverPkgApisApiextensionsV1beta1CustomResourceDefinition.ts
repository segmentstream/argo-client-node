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
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec,
    IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>. Deprecated in v1.16, planned for removal in v1.19. Use apiextensions.k8s.io/v1 CustomResourceDefinition instead.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
     */
    spec: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionSpec;
    /**
     * @type {IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus}
     * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinition
     */
    status?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionStatus;
}
