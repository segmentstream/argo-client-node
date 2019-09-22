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
    IoK8sApiCoreV1ContainerStatus,
    IoK8sApiCoreV1PodCondition,
    IoK8sApiCoreV1PodIP,
} from './';

/**
 * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
 * @export
 * @interface IoK8sApiCoreV1PodStatus
 */
export interface IoK8sApiCoreV1PodStatus {
    /**
     * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
     * @type {Array<IoK8sApiCoreV1PodCondition>}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    conditions?: Array<IoK8sApiCoreV1PodCondition>;
    /**
     * The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
     * @type {Array<IoK8sApiCoreV1ContainerStatus>}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    containerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
    /**
     * Status for any ephemeral containers that have run in this pod. This field is alpha-level and is only populated by servers that enable the EphemeralContainers feature.
     * @type {Array<IoK8sApiCoreV1ContainerStatus>}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    ephemeralContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
    /**
     * IP address of the host to which the pod is assigned. Empty if not yet scheduled.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    hostIP?: string;
    /**
     * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
     * @type {Array<IoK8sApiCoreV1ContainerStatus>}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    initContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
    /**
     * A human readable message indicating details about why the pod is in this condition.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    message?: string;
    /**
     * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    nominatedNodeName?: string;
    /**
     * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod\'s status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    phase?: string;
    /**
     * IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    podIP?: string;
    /**
     * podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
     * @type {Array<IoK8sApiCoreV1PodIP>}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    podIPs?: Array<IoK8sApiCoreV1PodIP>;
    /**
     * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    qosClass?: string;
    /**
     * A brief CamelCase message indicating details about why the pod is in this state. e.g. \'Evicted\'
     * @type {string}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    reason?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {Date}
     * @memberof IoK8sApiCoreV1PodStatus
     */
    startTime?: Date;
}
