// tslint:disable
/**
 * Argo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    IoArgoprojWorkflowV1alpha1ValueFrom,
} from './';

/**
 * Parameter indicate a passed string parameter to a service template with an optional default value
 * @export
 * @interface IoArgoprojWorkflowV1alpha1Parameter
 */
export interface IoArgoprojWorkflowV1alpha1Parameter {
    /**
     * Default is the default value to use for an input parameter if a value was not supplied
     * @type {string}
     * @memberof IoArgoprojWorkflowV1alpha1Parameter
     */
    _default?: string;
    /**
     * GlobalName exports an output parameter to the global scope, making it available as \'{{workflow.outputs.parameters.XXXX}} and in workflow.status.outputs.parameters
     * @type {string}
     * @memberof IoArgoprojWorkflowV1alpha1Parameter
     */
    globalName?: string;
    /**
     * Name is the parameter name
     * @type {string}
     * @memberof IoArgoprojWorkflowV1alpha1Parameter
     */
    name: string;
    /**
     * Value is the literal value to use for the parameter. If specified in the context of an input parameter, the value takes precedence over any passed values
     * @type {string}
     * @memberof IoArgoprojWorkflowV1alpha1Parameter
     */
    value?: string;
    /**
     * @type {IoArgoprojWorkflowV1alpha1ValueFrom}
     * @memberof IoArgoprojWorkflowV1alpha1Parameter
     */
    valueFrom?: IoArgoprojWorkflowV1alpha1ValueFrom;
}
