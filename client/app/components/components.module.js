import angular from 'angular';
import User from './user/user.module';
import UserList from './user-list/user-list.module';
import SongList from './song-list/song-list.module';

let componentModule = angular.module('app.components', [
  User.name,
  UserList.name,
  SongList.name
]);

export default componentModule;
