/**
 * Calculates the weighted mean vertex of a graphset.
 *
 * @param {p5} p5 - The p5 instance.
 * @param {Object} graphset - The graphset containing vertices and edges.
 * @returns {Object} - An object containing the x and y coordinates of the mean vertex,
 *                     the score, and the mean vertex object.
 */
import Vertex2D from "../models/vertex_2d";

export default function FindWeightedMeanVertex(p5, graphset) {
  let sumX = 0;
  let sumY = 0;
  let sumWeight = 0;
  let meanVertex = new Vertex2D(p5, 0, 0, p5.color('cyan'));

  for (let vertex of graphset.vertices) {
    let vertexWeight = 0;
    for (let edge of graphset.edges) {
      edge.source = meanVertex;
      if (edge.target === vertex) {
        vertexWeight += edge.weight;
      }
    }
    sumX += vertex.x * vertexWeight;
    sumY += vertex.y * vertexWeight;
    sumWeight += vertexWeight;
  }

  const meanAvgX = Math.round(sumX / sumWeight);
  const meanAvgY = Math.round(sumY / sumWeight);

  let totalDistance = 0;
  for (let vertex of graphset.vertices) {
    totalDistance += p5.dist(vertex.x, vertex.y, meanAvgX, meanAvgY);
  }

  const meanScore = Math.floor(totalDistance / graphset.vertices.length);
  meanVertex.x = meanAvgX;
  meanVertex.y = meanAvgY;
  meanVertex.draw();

  return {
    x: meanAvgX,
    y: meanAvgY,
    score: meanScore,
    vertex: meanVertex
  };
}