import './style/style.css'
import p5 from 'p5'
import { findingCentroids } from './finding_centroids'

// Instantiate a p5 instance, passing in sketch function to be called
new p5(findingCentroids, document.getElementById('finding-centroids-container'));

