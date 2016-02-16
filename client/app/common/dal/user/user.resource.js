function UserResource($resource, USER_API_URL) {
  "ngInject";
  let apiUrl = `${USER_API_URL}/friends/:id`;

  return $resource(apiUrl, {id: '@id'});
}

export default UserResource;
