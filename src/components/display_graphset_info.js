/**
 * Displays the information of a graphset in the sidebar.
 * @param {Object} graphset - The graphset object containing vertices and edges.
 */
export default function DisplayGraphsetInfo(graphset) {
  const sidebarInfoContainer = document.getElementById('graphset-info-list');
  const { vertices, edges } = graphset;
  const graphInfo = vertices.map((vertex, i) => {
    const { x, y } = vertex;
    const edge = edges.find((e) => e.target === vertex);
    const weight = edge ? edge.weight : '';
    return `Vertex ` + (i + 1) + `: (${x}, ${y}, weight: ${weight})`;
  });

  graphInfo.forEach((info) => {
    const listItem = document.createElement('li');
    listItem.textContent = info;
    sidebarInfoContainer.appendChild(listItem);
  });
}