import { SHOW_MEAN_VERTEX_CONNECTING_LINE, SHOW_STRENGTH_RADIUS } from "../constants";

class Graphset2D {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  draw() {
    const { vertices, edges } = this;

    edges.forEach((edge, i) => {
      if (SHOW_MEAN_VERTEX_CONNECTING_LINE) {
        edge.drawMeanVertexConnectingLine();
      }
      if (SHOW_STRENGTH_RADIUS) {
        edge.drawStrengthRadius();
      }
    })

    vertices.forEach((vertex, i) => {
      vertex.draw(i + 1);
    });
  }
}

export default Graphset2D;