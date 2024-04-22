export default function DisplayMeanCentroidInfo(centroid) {
  const sidebarInfoContainer = document.getElementById('centroid-info');
  const { x, y } = centroid;
  const centroidInfo = `Centroid: (${x}, ${y}, score: ${centroid.score})`;

  const listItem = document.createElement('p');
  listItem.textContent = centroidInfo;
  sidebarInfoContainer.appendChild(listItem);
}