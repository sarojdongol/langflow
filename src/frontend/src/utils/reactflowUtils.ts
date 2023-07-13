import _ from "lodash";
import { Connection, ReactFlowInstance } from "reactflow";
import { APITemplateType } from "../types/api";
import { FlowType } from "../types/flow";
import { cleanEdgesType } from "../types/utils/reactflowUtils";

export function cleanEdges({
  flow: { edges, nodes },
  updateEdge,
}: cleanEdgesType) {
  let newEdges = _.cloneDeep(edges);
  edges.forEach((edge) => {
    // check if the source and target node still exists
    const sourceNode = nodes.find((node) => node.id === edge.source);
    const targetNode = nodes.find((node) => node.id === edge.target);
    if (!sourceNode || !targetNode) {
      newEdges = newEdges.filter((e) => e.id !== edge.id);
    }
    // check if the source and target handle still exists
    if (sourceNode && targetNode) {
      const sourceHandle = edge.sourceHandle; //right
      const targetHandle = edge.targetHandle; //left
      if (targetHandle) {
        const field = targetHandle.split("|")[1];
        const id =
          (targetNode.data.node.template[field]?.input_types?.join(";") ??
            targetNode.data.node.template[field]?.type) +
          "|" +
          field +
          "|" +
          targetNode.data.id;
        if (id !== targetHandle) {
          newEdges = newEdges.filter((e) => e.id !== edge.id);
        }
      }
      if (sourceHandle) {
        const id = [
          sourceNode.data.type,
          sourceNode.data.id,
          ...sourceNode.data.node.base_classes,
        ].join("|");
        if (id !== sourceHandle) {
          newEdges = newEdges.filter((e) => e.id !== edge.id);
        }
      }
    }
  });
  updateEdge(newEdges);
}

export function isValidConnection(
  { source, target, sourceHandle, targetHandle }: Connection,
  reactFlowInstance: ReactFlowInstance
) {
  if (
    targetHandle
      .split("|")[0]
      .split(";")
      .some((n) => n === sourceHandle.split("|")[0]) ||
    sourceHandle
      .split("|")
      .slice(2)
      .some((t) =>
        targetHandle
          .split("|")[0]
          .split(";")
          .some((n) => n === t)
      ) ||
    targetHandle.split("|")[0] === "str"
  ) {
    let targetNode = reactFlowInstance?.getNode(target)?.data?.node;
    if (!targetNode) {
      if (
        !reactFlowInstance
          .getEdges()
          .find((e) => e.targetHandle === targetHandle)
      ) {
        return true;
      }
    } else if (
      (!targetNode.template[targetHandle.split("|")[1]].list &&
        !reactFlowInstance
          .getEdges()
          .find((e) => e.targetHandle === targetHandle)) ||
      targetNode.template[targetHandle.split("|")[1]].list
    ) {
      return true;
    }
  }
  return false;
}

export function removeApiKeys(flow: FlowType): FlowType {
  let cleanFLow = _.cloneDeep(flow);
  cleanFLow.data.nodes.forEach((node) => {
    for (const key in node.data.node.template) {
      if (node.data.node.template[key].password) {
        node.data.node.template[key].value = "";
      }
    }
  });
  return cleanFLow;
}

export function updateTemplate(
  reference: APITemplateType,
  objectToUpdate: APITemplateType
): APITemplateType {
  let clonedObject: APITemplateType = _.cloneDeep(reference);

  // Loop through each key in the reference object
  for (const key in clonedObject) {
    // If the key is not in the object to update, add it
    if (objectToUpdate[key] && objectToUpdate[key].value) {
      clonedObject[key].value = objectToUpdate[key].value;
    }
    if (
      objectToUpdate[key] &&
      objectToUpdate[key].advanced !== null &&
      objectToUpdate[key].advanced !== undefined
    ) {
      clonedObject[key].advanced = objectToUpdate[key].advanced;
    }
  }
  return clonedObject;
}