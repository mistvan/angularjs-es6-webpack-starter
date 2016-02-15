import angular from 'angular';
import SongResource from './song.resource';

let dalSongModule = angular.module('dal.song', [])

  .factory('Song', SongResource)
  .constant('API_URL', 'http://mistvan.spolocenstvomajak.sk');

export default dalSongModule;
