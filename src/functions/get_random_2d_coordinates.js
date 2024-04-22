/**
 * Generates random 2D coordinates within the sketch area.
 * @returns {Object} An object containing the randomly generated x and y coordinates.
 */
import { SKETCH_HEIGHT, SKETCH_WIDTH } from "../constants";

export default function GetRandom2DCoordinates() {
  const x = Math.floor(Math.random() * SKETCH_WIDTH) - SKETCH_WIDTH / 2;
  const y = Math.floor(Math.random() * SKETCH_HEIGHT) - SKETCH_HEIGHT / 2;
  return { x, y };
}