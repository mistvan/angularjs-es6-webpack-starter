function SongResource($resource, API_URL) {
  "ngInject";
  let apiUrl = `${API_URL}?rest_route=/wp/v2/song/:id`;

  return $resource(apiUrl, {id: '@id'});
}

export default SongResource;
