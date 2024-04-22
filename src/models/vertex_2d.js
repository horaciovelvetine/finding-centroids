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
  draw(i) {
    const { x, y, p5, color } = this;
    if (color) {
      p5.fill(color);
    } else {
      p5.fill(200, 170, 50, 255);
    }
    p5.ellipse(x, y, VERTEX_RADIUS, VERTEX_RADIUS);
    p5.fill(255);
    p5.textSize(20);

    const labelOffset = VERTEX_RADIUS * 2;
    let labelX = x + labelOffset;
    let labelY = y;

    // Adjust labelX if it would be drawn offscreen
    if (labelX + p5.textWidth(i) > p5.width) {
      labelX = p5.width - p5.textWidth(i);
    }

    // Adjust labelY if it would be drawn offscreen
    if (labelY + 20 > p5.height) { // Assuming 20 is the text size
      labelY = p5.height - 20;
    }

    p5.text(i, labelX, labelY);
  }

}

export default Vertex2D;