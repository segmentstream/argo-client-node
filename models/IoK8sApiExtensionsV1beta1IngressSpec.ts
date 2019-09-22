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
    IoK8sApiExtensionsV1beta1IngressBackend,
    IoK8sApiExtensionsV1beta1IngressRule,
    IoK8sApiExtensionsV1beta1IngressTLS,
} from './';

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 * @export
 * @interface IoK8sApiExtensionsV1beta1IngressSpec
 */
export interface IoK8sApiExtensionsV1beta1IngressSpec {
    /**
     * @type {IoK8sApiExtensionsV1beta1IngressBackend}
     * @memberof IoK8sApiExtensionsV1beta1IngressSpec
     */
    backend?: IoK8sApiExtensionsV1beta1IngressBackend;
    /**
     * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     * @type {Array<IoK8sApiExtensionsV1beta1IngressRule>}
     * @memberof IoK8sApiExtensionsV1beta1IngressSpec
     */
    rules?: Array<IoK8sApiExtensionsV1beta1IngressRule>;
    /**
     * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     * @type {Array<IoK8sApiExtensionsV1beta1IngressTLS>}
     * @memberof IoK8sApiExtensionsV1beta1IngressSpec
     */
    tls?: Array<IoK8sApiExtensionsV1beta1IngressTLS>;
}
