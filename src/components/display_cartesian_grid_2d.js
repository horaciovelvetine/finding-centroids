/**
 * Displays a Cartesian grid in a 2D canvas.
 * @param {p5} p5 - The p5 instance.
 */
import { GRID_SPACING } from '../constants';

export default function DisplayCartesianGrid(p5) {
  const gridColor = p5.color(255, 255, 255, 90); // light gray
  p5.strokeWeight(1);
  p5.stroke(gridColor);

  // Draw horizontal lines
  for (let x = (-p5.width / 2) + (GRID_SPACING / 2); x <= p5.width / 2; x += GRID_SPACING) {
    const xOff = x + (GRID_SPACING / 2); // Offset by half the grid spacing hack aligns the grid with the axis
    p5.line(xOff, -p5.height / 2, xOff, p5.height / 2);
  }

  // Draw vertical lines
  for (let y = (-p5.height / 2) + (GRID_SPACING / 2); y <= p5.height / 2; y += GRID_SPACING) {
    const yOff = y + (GRID_SPACING / 2); // Offset by half the grid spacing hack aligns the grid with the axis
    p5.line(-p5.width / 2, yOff, p5.width / 2, yOff);
  }
}