import { SHOW_MEAN_VERTEX_CONNECTING_LINE, SHOW_STRENGTH_RADIUS } from "../constants";

class Graphset2D {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  draw() {
    for (let edge of this.edges) {
      if (SHOW_STRENGTH_RADIUS) {
        edge.drawStrengthRadius();
      }
    }

    for (let edge of this.edges) {
      if (SHOW_MEAN_VERTEX_CONNECTING_LINE) {
        edge.drawMeanVertexConnectingLine();
      }
    }

    for (let vertex of this.vertices) {
      vertex.draw();
    }
  }
}

export default Graphset2D;