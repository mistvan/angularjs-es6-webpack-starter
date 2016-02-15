import template from './song-list.html';
import controller from './song-list.controller';
import './song-list.styl';

let songListComponent = {
  bindings: {
    songs: '='
  },
  transclude: true,
  template,
  controller
};

export default songListComponent;
