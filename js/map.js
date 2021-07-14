ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.838196, 98.298813],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: 'Point',
      coordinates: [7.838196, 98.298813],
    },
  });

  myMap.geoObjects.add(myGeoObject);
}
