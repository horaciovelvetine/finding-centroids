import { VERTEX_RADIUS } from "../constants";

/**
 * Represents a vertex in a graph.
 */
class Vertex {
  /**
   * Creates a new instance of the Vertex class.
   * @param {p5} p5 - The p5.js instance.
   * @param {number} x - The x-coordinate of the vertex.
   * @param {number} y - The y-coordinate of the vertex.
   */
  constructor(p5, x, y) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
  }

  /**
   * Draws the vertex on the canvas.
   */
  draw() {
    this.p5.fill(255, 0, 0);
    this.p5.ellipse(this.x, this.y, VERTEX_RADIUS, VERTEX_RADIUS);
  }
}

export default Vertex;