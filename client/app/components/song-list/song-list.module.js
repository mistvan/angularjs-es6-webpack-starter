import angular from 'angular';
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import dalSongModule from './../../common/dal/song/dal.song.module';
import songListComponent from './song-list.component';

let songListModule = angular.module('songList', [
    uiRouter,
    dalSongModule.name
  ])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('song-list', {
        url: '/',
        template: '<song-list songs="songListResolveCtrl.songs"></song-list>',
        resolve: {
          songs: (Song) => {
            "ngInject";
            return Song.query().$promise;
          }
        },
        controller: function(songs) {
          "ngInject";
          this.songs = songs;
        },
        controllerAs: 'songListResolveCtrl'
      });
  })

  .component('songList', songListComponent);

export default songListModule;
