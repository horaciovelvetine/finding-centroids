import { VERTEX_RADIUS } from "../constants";

/**
 * Represents a vertex in a graph.
 */
class Vertex2D {
  /**
   * Creates a new instance of the Vertex class.
   * @param {p5} p5 - The p5.js instance.
   * @param {number} x - The x-coordinate of the vertex.
   * @param {number} y - The y-coordinate of the vertex.
   */
  constructor(p5, x, y, color) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  /**
   * Draws the vertex on the canvas.
   */
  draw() {
    const { x, y, p5, color } = this;
    if (color) {
      p5.fill(color);
    } else {
      p5.fill(200, 170, 50, 255)
    }
    p5.ellipse(x, y, VERTEX_RADIUS, VERTEX_RADIUS);
  }
}

export default Vertex2D;