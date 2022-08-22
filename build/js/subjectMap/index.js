function init() {
  var myMap = new ymaps.Map("map", {
    center: [50.595414, 36.587277],
    zoom: 8,
    type: null,
    controls: [],
  });

  fetch("/source/js/subjectMap/GeoJSON/admin_level_6.geojson")
    .then((response) => {

      return response.json();
    })
    .then((ResponseJSON) => {

      draw_subject(ResponseJSON.features, myMap);
    });
}

function draw_subject(ResponseJSON, myMap) {

  ResponseJSON.forEach((element) => {

    if (element["properties"]["addr:region"] === document.title) {
      var array_polygon = element["geometry"]["coordinates"][0];
      console.log(array_polygon);
      array_polygon.forEach((element) => {
        element.forEach((elem) => {
          let t = elem[0];
          elem[0] = elem[1];
          elem[1] = t;
        });
      });
      var polygon = new ymaps.Polygon(element["geometry"]["coordinates"][0], {
        hintContent: element["name"],
      });
      myMap.geoObjects.add(polygon);
      myMap.setBounds(myMap.geoObjects.getBounds());
      myMap.setZoom(myMap.getZoom() - 0.4);

    }

    console.log('тест');

  });

}

window.onload = () => {
  ymaps.ready(init);
};
