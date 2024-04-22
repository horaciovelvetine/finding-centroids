import { TOTAL_GRAPHSET_VERTICES } from "../constants";
import Edge2D from "../models/edge_2d";
import Vertex2D from "../models/vertex_2d";
import GetRandom2DCoordinates from "./get_random_2d_coordinates";

/**
 * Creates a simple graph set of randomly generated vertices and edges.
 * @param {p5} p5 - The p5 instance.
 * @returns {Object} - An object containing the vertices and edges of the graph set.
 */
export default function CreateSimpleGraphset(p5) {
  let vertices = [];
  let edges = [];

  for (let i = 0; i < TOTAL_GRAPHSET_VERTICES; i++) {
    const { x, y } = GetRandom2DCoordinates();
    vertices.push(new Vertex2D(p5, x, y));
  }

  for (let vertex of vertices) {
    const relatedEdge = new Edge2D(p5, null, vertex, Math.floor(p5.random(1, 30)));
    edges.push(relatedEdge);
  }
  return { vertices, edges }
}