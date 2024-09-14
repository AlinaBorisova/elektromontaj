if (document.querySelector(".contacts") !== null) {
  ymaps.ready(init);
  function init() {
    var contacts = new ymaps.Map("contacts__map", {
      center: [55.323206889031134, 86.07530268382811],
      zoom: 15,
    });

    contacts.controls.remove("geolocationControl"); // удаляем геолокацию
    contacts.controls.remove("searchControl"); // удаляем поиск
    contacts.controls.remove("trafficControl"); // удаляем контроль трафика
    contacts.controls.remove("typeSelector"); // удаляем тип
    contacts.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    // contacts.controls.remove('zoomControl'); // удаляем контрол зуммирования
    contacts.controls.remove("rulerControl"); // удаляем контрол правил
    contacts.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    myPlacemark = new ymaps.Placemark(
      [55.323206889031134, 86.07530268382811],
      {
        balloonContentBody: "<div class='balloonContentBody'>Кемерово</div>",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../../img/map-icon.png",
        iconImageSize: [45, 60],
        iconImageOffset: [0, 0],
        balloonOffset: [30,90],
        hideIconOnBalloonOpen: false,
      }
    );
    contacts.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();
  }
}
