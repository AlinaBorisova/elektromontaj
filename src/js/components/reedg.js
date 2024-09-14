// if (null !== document.querySelector(".form-appointment")) {
//   function e(e) {
//     switch (e) {
//       case "Gorohovaya":
//       case "Vyborgskoe":
//         return void (document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
//     }
//   }
//   !(function () {
//     let t = document.querySelectorAll(".appointment-select__option")[0];
//     for (let s of (t.classList.add("appointment-select__option--selected"),
//       (t.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = t.textContent),
//       t.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed"),
//       t.closest(".appointment-select").classList.add("appointment-select--changed"),
//       e(t.dataset.name),
//       document.querySelectorAll(".appointment-select__wrapper")))
//       s.addEventListener("click", function () {
//         s.classList.contains("select--disabled") || this.querySelector(".appointment-select").classList.toggle("appointment-select--open");
//       });
//     for (let a of document.querySelectorAll(".appointment-select__option"))
//       a.addEventListener("click", function () {
//         this.classList.contains("appointment-select__option--selected") ||
//         (e(a.dataset.name),
//         this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected") &&
//         this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected").classList.remove("appointment-select__option--selected"),
//           this.classList.add("appointment-select__option--selected"),
//           (this.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = this.textContent),
//           this.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed"),
//           this.closest(".appointment-select").classList.add("appointment-select--changed"));
//       });
//     window.addEventListener("click", function (e) {
//       for (let t of document.querySelectorAll(".appointment-select")) t.contains(e.target) || t.classList.remove("appointment-select--open");
//     });
//   })();
//   let t = { Адрес: "Gorohovaya", Форма: "Получить прайс-лист" };
//   document.querySelector(".appointment-social-select-options").addEventListener("click", function (e) {
//     t["Адрес"] = e.target.dataset.name;
//   }),
//     document.addEventListener("DOMContentLoaded", function () {
//       document.querySelector(".appointment-form__btn").addEventListener("click", function (e) {
//         if ((e.preventDefault(), 16 !== document.querySelector(".appointment-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".appointment-semifinal-phone").value), !t["Контакт"])))
//           return void document.querySelector(".appointment-semifinal-phone").focus();
//         let s = new FormData();
//         s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
//         let a = new XMLHttpRequest();
//         a.open("POST", "send-form.php", !0),
//           (a.onreadystatechange = function () {
//             4 === a.readyState && 200 === a.status && window.location.replace("https://krasotaclinic.ru/thanks/");
//           }),
//           a.send(s);
//       });
//     });
// }
// },
if (document.querySelector(".form-appointment") !== null) {
  function onSocialSelect(social) {
    switch (social) {
      case "Gorohovaya":
        document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg";
        return;
      case "Vyborgskoe":
        document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg";
        return;
    }
  }

  (function () {
    const firstOption = document.querySelectorAll(".appointment-select__option")[0];
    firstOption.classList.add("appointment-select__option--selected");
    firstOption.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = firstOption.textContent;
    firstOption.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed");
    firstOption.closest(".appointment-select").classList.add("appointment-select--changed");
    onSocialSelect(firstOption.dataset.name);

    for (const dropdown of document.querySelectorAll(".appointment-select__wrapper")) {
      dropdown.addEventListener("click", function () {
        if (!dropdown.classList.contains("select--disabled")) {
          this.querySelector(".appointment-select").classList.toggle("appointment-select--open");
        }
      });
    }

    for (const option of document.querySelectorAll(".appointment-select__option")) {
      option.addEventListener("click", function () {
        if (!this.classList.contains("appointment-select__option--selected")) {
          onSocialSelect(option.dataset.name);
          if (this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected")) {
            this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected").classList.remove("appointment-select__option--selected");
          }
          this.classList.add("appointment-select__option--selected");
          this.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = this.textContent;
          this.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed");
          this.closest(".appointment-select").classList.add("appointment-select--changed");
        }
      });
    }

    window.addEventListener("click", function (e) {
      for (const select of document.querySelectorAll(".appointment-select")) {
        if (!select.contains(e.target)) {
          select.classList.remove("appointment-select--open");
        }
      }
    });
  })();

  const priceFormData = {};
  priceFormData["Адрес"] = "Gorohovaya";
  priceFormData["Форма"] = "Получить прайс-лист";

  document.querySelector(".appointment-social-select-options").addEventListener("click", function (e) {
    priceFormData["Адрес"] = e.target.dataset.name;
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".appointment-form__btn").addEventListener("click", function (e) {

      e.preventDefault();
      let phone = document.querySelector(".appointment-semifinal-phone").value;
      if(phone.length < 16) {
        document.querySelector(".appointment-semifinal-phone").focus();
        return;
      }

      priceFormData["Контакт"] = priceFormData["Адрес"] ===
        document.querySelector(".appointment-semifinal-phone").value;

      if (!priceFormData["Контакт"]) {
        document.querySelector(".appointment-semifinal-phone").focus();
        return;
      }

      const formData = new FormData();
      formData.append("Адрес", priceFormData["Адрес"]);
      formData.append("Контакт", priceFormData["Контакт"]);
      formData.append("Форма", priceFormData["Форма"]);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "send-form.php", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            window.location.replace("https://krasotaclinic.ru/thanks/");
          } else {
            // Обработка ошибки
          }
        }
      };
      xhr.send(formData);
    });
  });
}

(() => {
  var e = {
      392() {
        null !== document.querySelector(".contacts") &&
        ymaps.ready(function () {
          let e = [59.942647, 30.353894];
          var t = new ymaps.Map("сontactsMap", { center: e, zoom: 11 }),
            s = new ymaps.Map("сontactsMap3", { center: e, zoom: 11 }),
            i = new ymaps.Map("сontactsMap4", { center: e, zoom: 11 }),
            a = new ymaps.Map("сontactsMap5", { center: e, zoom: 11 });
          (placemark13 = new ymaps.Placemark(
            [59.926693, 30.324357],
            { balloonContentBody: "Клиника на Гороховая ул.53" },
            { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
          )),
            (placemark14 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark23 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark24 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark33 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker-active.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark34 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark43 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark44 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker-active.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark53 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark54 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            t.controls.remove("geolocationControl"),
            t.controls.remove("searchControl"),
            t.controls.remove("trafficControl"),
            t.controls.remove("typeSelector"),
            t.controls.remove("fullscreenControl"),
            t.controls.remove("rulerControl"),
            t.behaviors.disable(["scrollZoom"]),
            s.controls.remove("geolocationControl"),
            s.controls.remove("searchControl"),
            s.controls.remove("trafficControl"),
            s.controls.remove("typeSelector"),
            s.controls.remove("fullscreenControl"),
            s.controls.remove("rulerControl"),
            s.behaviors.disable(["scrollZoom"]),
            i.controls.remove("geolocationControl"),
            i.controls.remove("searchControl"),
            i.controls.remove("trafficControl"),
            i.controls.remove("typeSelector"),
            i.controls.remove("fullscreenControl"),
            i.controls.remove("rulerControl"),
            i.behaviors.disable(["scrollZoom"]),
            a.controls.remove("geolocationControl"),
            a.controls.remove("searchControl"),
            a.controls.remove("trafficControl"),
            a.controls.remove("typeSelector"),
            a.controls.remove("fullscreenControl"),
            a.controls.remove("rulerControl"),
            a.behaviors.disable(["scrollZoom"]),
            t.geoObjects.add(placemark13),
            t.geoObjects.add(placemark14),
            s.geoObjects.add(placemark33),
            s.geoObjects.add(placemark34),
            i.geoObjects.add(placemark43),
            i.geoObjects.add(placemark44),
            a.geoObjects.add(placemark53),
            a.geoObjects.add(placemark54);
        });
      },
      367() {
        let e = document.querySelectorAll(".accordion button");
        function t() {
          let t = this.getAttribute("aria-expanded");
          for (i = 0; i < e.length; i++) e[i].setAttribute("aria-expanded", "false");
          "false" == t && this.setAttribute("aria-expanded", "true");
        }
        e.forEach((e) => e.addEventListener("click", t));
      },
      396() {
        if (document.querySelector(".form-appointment") !== null) {
          function onSocialSelect(social) {
            switch (social) {
              case "Gorohovaya":
                document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg";
                return;
              case "Vyborgskoe":
                document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg";
                return;
              case "Moskovskij":
                document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg";
            }
          }

          (function () {
            const firstOption = document.querySelectorAll(".appointment-select__option")[0];
            firstOption.classList.add("appointment-select__option--selected");
            firstOption.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = firstOption.textContent;
            firstOption.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed");
            firstOption.closest(".appointment-select").classList.add("appointment-select--changed");
            onSocialSelect(firstOption.dataset.name);

            for (const dropdown of document.querySelectorAll(".appointment-select__wrapper")) {
              dropdown.addEventListener("click", function () {
                if (!dropdown.classList.contains("select--disabled")) {
                  this.querySelector(".appointment-select").classList.toggle("appointment-select--open");
                }
              });
            }

            for (const option of document.querySelectorAll(".appointment-select__option")) {
              option.addEventListener("click", function () {
                if (!this.classList.contains("appointment-select__option--selected")) {
                  onSocialSelect(option.dataset.name);
                  if (this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected")) {
                    this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected").classList.remove("appointment-select__option--selected");
                  }
                  this.classList.add("appointment-select__option--selected");
                  this.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = this.textContent;
                  this.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed");
                  this.closest(".appointment-select").classList.add("appointment-select--changed");
                }
              });
            }

            window.addEventListener("click", function (e) {
              for (const select of document.querySelectorAll(".appointment-select")) {
                if (!select.contains(e.target)) {
                  select.classList.remove("appointment-select--open");
                }
              }
            });
          })();

          const priceFormData = {};
          priceFormData["Адрес"] = "Gorohovaya";
          priceFormData["Форма"] = "Получить прайс-лист";

          document.querySelector(".appointment-social-select-options").addEventListener("click", function (e) {
            priceFormData["Адрес"] = e.target.dataset.name;
          });

          document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".appointment-form__btn").addEventListener("click", function (e) {

              e.preventDefault();
              let phone = document.querySelector(".appointment-semifinal-phone").value;
              if(phone.length < 16) {
                document.querySelector(".appointment-semifinal-phone").focus();
                return;
              }

              priceFormData["Контакт"] = priceFormData["Адрес"] ===
                document.querySelector(".appointment-semifinal-phone").value;

              if (!priceFormData["Контакт"]) {
                document.querySelector(".appointment-semifinal-phone").focus();
                return;
              }

              const formData = new FormData();
              formData.append("Адрес", priceFormData["Адрес"]);
              formData.append("Контакт", priceFormData["Контакт"]);
              formData.append("Форма", priceFormData["Форма"]);
              const xhr = new XMLHttpRequest();
              xhr.open("POST", "send-form.php", true);
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    window.location.replace("https://krasotaclinic.ru/thanks/");
                  } else {
                    // Обработка ошибки
                  }
                }
              };
              xhr.send(formData);
            });
          });
        }
      },
      204() {
        if (null !== document.querySelector(".form-consultation-specialist")) {
          let e = { Форма: "Консультация" };
          document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".consultation-specialist-form__btn").addEventListener("click", function (t) {
              if (
                (t.preventDefault(),
                16 !== document.querySelector(".consultation-specialist-semifinal-phone").value.length || ((e["Контакт"] = document.querySelector(".consultation-specialist-semifinal-phone").value), !e["Контакт"]))
              )
                return void document.querySelector(".consultation-specialist-semifinal-phone").focus();
              let s = new FormData();
              s.append("Контакт", e["Контакт"]), s.append("Форма", e["Форма"]);
              let i = new XMLHttpRequest();
              i.open("POST", "send-form.php", !0),
                (i.onreadystatechange = function () {
                  4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                }),
                i.send(s);
            });
          });
        }
      },
      195() {
        if (null !== document.querySelector(".form-consultation")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".consultation-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".consultation-select__option")[0];
            for (let s of (t.classList.add("consultation-select__option--selected"),
              (t.closest(".consultation-select").querySelector(".consultation-select__placeholder").textContent = t.textContent),
              t.closest(".consultation-select").querySelector(".consultation-select__placeholder").classList.add("consultation-select--changed"),
              t.closest(".consultation-select").classList.add("consultation-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".consultation-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".consultation-select").classList.toggle("consultation-select--open");
              });
            for (let t of document.querySelectorAll(".consultation-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("consultation-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".consultation-select__option.consultation-select__option--selected") &&
                this.parentNode.querySelector(".consultation-select__option.consultation-select__option--selected").classList.remove("consultation-select__option--selected"),
                  this.classList.add("consultation-select__option--selected"),
                  (this.closest(".consultation-select").querySelector(".consultation-select__placeholder").textContent = this.textContent),
                  this.closest(".consultation-select").querySelector(".consultation-select__placeholder").classList.add("consultation-select--changed"),
                  this.closest(".consultation-select").classList.add("consultation-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".consultation-select")) t.contains(e.target) || t.classList.remove("consultation-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Получить консультацию" };
          document.querySelector(".consultation-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".consultation-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".consultation-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".consultation-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".consultation-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      964() {
        if (null !== document.querySelector(".hero")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".hero-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".hero-select__option")[0];
            for (let s of (t.classList.add("hero-select__option--selected"),
              (t.closest(".hero-select").querySelector(".hero-select__placeholder").textContent = t.textContent),
              t.closest(".hero-select").querySelector(".hero-select__placeholder").classList.add("hero-select--changed"),
              t.closest(".hero-select").classList.add("hero-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".hero-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".hero-select").classList.toggle("hero-select--open");
              });
            for (let t of document.querySelectorAll(".hero-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("hero-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".hero-select__option.hero-select__option--selected") &&
                this.parentNode.querySelector(".hero-select__option.hero-select__option--selected").classList.remove("hero-select__option--selected"),
                  this.classList.add("hero-select__option--selected"),
                  (this.closest(".hero-select").querySelector(".hero-select__placeholder").textContent = this.textContent),
                  this.closest(".hero-select").querySelector(".hero-select__placeholder").classList.add("hero-select--changed"),
                  this.closest(".hero-select").classList.add("hero-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".hero-select")) t.contains(e.target) || t.classList.remove("hero-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Акции" };
          document.querySelector(".hero-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".hero-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".hero-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".hero-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".hero-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      983() {
        if (null !== document.querySelector(".modal-promotions")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".promotions-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".promotions-select__option")[0];
            for (let s of (t.classList.add("promotions-select__option--selected"),
              (t.closest(".promotions-select").querySelector(".promotions-select__placeholder").textContent = t.textContent),
              t.closest(".promotions-select").querySelector(".promotions-select__placeholder").classList.add("promotions-select--changed"),
              t.closest(".promotions-select").classList.add("promotions-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".promotions-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".promotions-select").classList.toggle("promotions-select--open");
              });
            for (let t of document.querySelectorAll(".promotions-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("promotions-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".promotions-select__option.promotions-select__option--selected") &&
                this.parentNode.querySelector(".promotions-select__option.promotions-select__option--selected").classList.remove("promotions-select__option--selected"),
                  this.classList.add("promotions-select__option--selected"),
                  (this.closest(".promotions-select").querySelector(".promotions-select__placeholder").textContent = this.textContent),
                  this.closest(".promotions-select").querySelector(".promotions-select__placeholder").classList.add("promotions-select--changed"),
                  this.closest(".promotions-select").classList.add("promotions-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".promotions-select")) t.contains(e.target) || t.classList.remove("promotions-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Акции" };
          document.querySelector(".promotions-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".promotions-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".promotions-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".promotions-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".promotions-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      478() {
        var e;
        if (null !== document.querySelector(".promotions")) {
          let t = document.querySelectorAll(".promotions__item-date span"),
            s = `${((e = new Date().getFullYear()), new Date(e, 2, 0).getDate())} ${(function () {
              return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date()).toLocaleString("ru", { month: "long", day: "numeric" }).split(" ")[1];
            })()}`;
          t.forEach((e) => {
            e.append(s);
          });
        }
      },
      429() {
        null !== document.querySelector(".modal") &&
        (function () {
          let e = document.querySelector("#modal-backdrop");
          function t(t) {
            t.classList.remove("show"), e.classList.add("hidden"), (document.body.style.overflowY = "scroll");
          }
          document.addEventListener("click", function (s) {
            let i = s.target.closest(".js-modal");
            if (i) {
              let t = i.dataset.modal;
              document.querySelector(t).classList.add("show"), e.classList.remove("hidden"), (document.body.style.overflow = "hidden");
            }
            let a = s.target.closest(".modal-close");
            a && (s.preventDefault(), t(a.closest(".modal"))), s.target.matches("#modal-backdrop") && t(document.querySelector(".modal.show"));
          });
        })();
      },
      115() {
        let e = document.querySelectorAll(".products__card");
        e &&
        e.forEach((e) => {
          let t = e,
            s = t.querySelectorAll(".image-switch__item"),
            i = t.querySelector(".image-pagination");
          s.length > 1 &&
          s.forEach((e, s) => {
            e.setAttribute("data-index", s),
              (i.innerHTML += `<li class="image-pagination__item ${0 == s ? "image-pagination__item--active" : ""}" data-index="${s}"></li>`),
              e.addEventListener("mouseenter", (e) => {
                t.querySelectorAll(".image-pagination__item").forEach((e) => {
                  e.classList.remove("image-pagination__item--active");
                }),
                  t.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add("image-pagination__item--active");
              }),
              e.addEventListener("mouseleave", (e) => {
                t.querySelectorAll(".image-pagination__item").forEach((e) => {
                  e.classList.remove("image-pagination__item--active");
                }),
                  t.querySelector('.image-pagination__item[data-index="0"]').classList.add("image-pagination__item--active");
              });
          });
        });
      },
      851() {
        if (null !== document.querySelector(".show-more-ready")) {
          let e = document.querySelector(".show-more-ready"),
            t = document.querySelectorAll(".ready-projects__list-card").length,
            s = 6;
          e.addEventListener("click", () => {
            s += 3;
            let i = Array.from(document.querySelector(".ready-projects__list").children).slice(0, s);
            i.forEach((e) => e.classList.add("is-visible-ready")), i.length === t && (e.style.display = "none");
          });
        }
        if (null !== document.querySelector(".show-more")) {
          let e = document.querySelector(".show-more"),
            t = document.querySelectorAll(".reviews__card").length,
            s = 6;
          e.addEventListener("click", () => {
            s += 6;
            let i = Array.from(document.querySelector(".reviews__list").children).slice(0, s);
            i.forEach((e) => e.classList.add("is-visible")), i.length === t && (e.style.display = "none");
          });
        }
      },
      881() {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && (e.target.classList.add("element-show"), e.target.classList.add("element-show-2"));
              });
            },
            { threshold: [0.5] }
          ),
          t = document.querySelectorAll(".element-animation"),
          s = document.querySelectorAll(".element-animation-2");
        for (let s of t) e.observe(s);
        setTimeout(() => {
          for (let t of s) e.observe(t);
        }, 600);
      },
      158() {
        if (null !== document.querySelector(".specialists")) {
          function e(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".specialists-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".specialists-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".specialists-tabs-list__btn").forEach(function (t) {
            t.addEventListener("click", e);
          });
        }
        if (null !== document.querySelector(".price")) {
          function t(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".price-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".price-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".price-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", t);
          });
        }
        if (null !== document.querySelector(".reviews")) {
          function s(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".reviews-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".reviews-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".reviews-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", s);
          });
        }
        if (null !== document.querySelector(".contacts")) {
          function i(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".contacts-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".contacts-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".contacts-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", i);
          });
        }
      },
      122() {
        if (null !== document.querySelector(".form__circle-time")) {
          let e = new Date().toLocaleDateString();
          document.querySelectorAll(".form__circle-time").forEach((t) => {
            t.textContent = e.toString();
          });
        }
      },
      640() {
        null !== document.querySelector(".lead") &&
        (() => {
          let e = document.querySelector(".js-timer");
          if (!e) return;
          let t = e.cloneNode(!0),
            s = { m: parseInt(t.querySelector("i").innerHTML), s: parseInt(t.querySelector("span").innerHTML) },
            i = !0,
            a = () => {
              if (0 === s.s) {
                if (0 === s.m) return (i = !1), void (e.innerHTML = "Время вышло");
                (s.m = s.m - 1), (s.s = 59);
              } else s.s = s.s - 1;
              (e.innerHTML = `${s.m} мин ${s.s} сек`), setTimeout(a, 1e3);
            };
          setTimeout(a, 1e3);
        })();
      },
      906() {
        if (null !== document.querySelector(".expertpop")) {
          let e = document.querySelector(".js-foowidget");
          document.addEventListener("click", (t) => {
            t.target.closest(".js-open-foowidget") && e.classList.add("is-visible"), t.target.closest(".js-close-foowidget") && e.classList.remove("is-visible");
          });
        }
      },
      598() {
        function e(e) {
          var t = !0,
            s = !1,
            i = null,
            a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
          function n(e) {
            return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList);
          }
          function r(e) {
            e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));
          }
          function o(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", u),
              document.addEventListener("mousedown", u),
              document.addEventListener("mouseup", u),
              document.addEventListener("pointermove", u),
              document.addEventListener("pointerdown", u),
              document.addEventListener("pointerup", u),
              document.addEventListener("touchmove", u),
              document.addEventListener("touchstart", u),
              document.addEventListener("touchend", u);
          }
          function u(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
            ((t = !1),
              document.removeEventListener("mousemove", u),
              document.removeEventListener("mousedown", u),
              document.removeEventListener("mouseup", u),
              document.removeEventListener("pointermove", u),
              document.removeEventListener("pointerdown", u),
              document.removeEventListener("pointerup", u),
              document.removeEventListener("touchmove", u),
              document.removeEventListener("touchstart", u),
              document.removeEventListener("touchend", u));
          }
          document.addEventListener(
            "keydown",
            function (s) {
              s.metaKey || s.altKey || s.ctrlKey || (n(e.activeElement) && r(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", o, !0),
            document.addEventListener("pointerdown", o, !0),
            document.addEventListener("touchstart", o, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (s && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var s, i, o;
                n(e.target) && (t || ((i = (s = e.target).type), ("INPUT" === (o = s.tagName) && a[i] && !s.readOnly) || ("TEXTAREA" === o && !s.readOnly) || s.isContentEditable)) && r(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                n(e.target) &&
                (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) &&
                ((s = !0),
                  window.clearTimeout(i),
                  (i = window.setTimeout(function () {
                    s = !1;
                  }, 100)),
                (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var n = (t[i] = { exports: {} });
    return e[i](n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    s(598);
    let e = { windowEl: window, documentEl: document, htmlEl: document.documentElement, bodyEl: document.body },
      t = () => {
        let t = document?.querySelectorAll(".fixed-block"),
          s = (document.body, parseInt(e.bodyEl.dataset.position, 10));
        t.forEach((e) => {
          e.style.paddingRight = "0px";
        }),
          (e.bodyEl.style.paddingRight = "0px"),
          (e.bodyEl.style.top = "auto"),
          e.bodyEl.classList.remove("dis-scroll"),
          window.scroll({ top: s, left: 0 }),
          e.bodyEl.removeAttribute("data-position"),
          (e.htmlEl.style.scrollBehavior = "smooth");
      };
    function i(e) {
      return "string" == typeof e || e instanceof String;
    }
    function a(e) {
      return "object" == typeof e && null != e && "Object" === e?.constructor?.name;
    }
    function n(e, t) {
      return Array.isArray(t)
        ? n(e, (e, s) => t.includes(s))
        : Object.entries(e).reduce((e, s) => {
          let [i, a] = s;
          return t(a, i) && (e[i] = a), e;
        }, {});
    }
    !(function () {
      let s = document?.querySelector("[data-burger]"),
        i = document?.querySelector("[data-menu]"),
        a = document?.querySelectorAll("[data-menu-item]"),
        n = document?.querySelector("[data-menu-overlay]");
      s?.addEventListener("click", (a) => {
        s?.classList.toggle("burger--active"),
          i?.classList.toggle("menu--active"),
          i?.classList.contains("menu--active")
            ? (s?.setAttribute("aria-expanded", "true"),
              s?.setAttribute("aria-label", "Закрыть меню"),
              (() => {
                let t = document?.querySelectorAll(".fixed-block"),
                  s = window.scrollY,
                  i = window.innerWidth - e.bodyEl.offsetWidth + "px";
                (e.htmlEl.style.scrollBehavior = "none"),
                  t.forEach((e) => {
                    e.style.paddingRight = i;
                  }),
                  (e.bodyEl.style.paddingRight = i),
                  e.bodyEl.classList.add("dis-scroll"),
                  (e.bodyEl.dataset.position = s),
                  (e.bodyEl.style.top = `-${s}px`);
              })())
            : (s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), t());
      }),
        n?.addEventListener("click", () => {
          s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), s.classList.remove("burger--active"), i.classList.remove("menu--active"), t();
        }),
        a?.forEach((e) => {
          e.addEventListener("click", () => {
            s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), s.classList.remove("burger--active"), i.classList.remove("menu--active"), t();
          });
        });
    })(),
      Fancybox.bind(),
      s(881);
    let r = "NONE",
      o = "LEFT",
      l = "FORCE_LEFT",
      u = "RIGHT",
      h = "FORCE_RIGHT";
    function c(e) {
      return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
    }
    function d(e, t) {
      if (t === e) return !0;
      let s,
        i = Array.isArray(t),
        a = Array.isArray(e);
      if (i && a) {
        if (t.length != e.length) return !1;
        for (s = 0; s < t.length; s++) if (!d(t[s], e[s])) return !1;
        return !0;
      }
      if (i != a) return !1;
      if (t && e && "object" == typeof t && "object" == typeof e) {
        let i = t instanceof Date,
          a = e instanceof Date;
        if (i && a) return t.getTime() == e.getTime();
        if (i != a) return !1;
        let n = t instanceof RegExp,
          r = e instanceof RegExp;
        if (n && r) return t.toString() == e.toString();
        if (n != r) return !1;
        let o = Object.keys(t);
        for (s = 0; s < o.length; s++) if (!Object.prototype.hasOwnProperty.call(e, o[s])) return !1;
        for (s = 0; s < o.length; s++) if (!d(e[o[s]], t[o[s]])) return !1;
        return !0;
      }
      return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString();
    }
    class p {
      constructor(e) {
        for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); ) --this.oldSelection.start;
        for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); ) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
      }
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      get removedCount() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
      }
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      get removeDirection() {
        return !this.removedCount || this.insertedCount ? r : (this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos) || this.oldSelection.end !== this.oldSelection.start ? o : u;
      }
    }
    function m(e, t) {
      return new m.InputMask(e, t);
    }
    function g(e) {
      if (null == e) throw Error("mask property should be defined");
      return e instanceof RegExp
        ? m.MaskedRegExp
        : i(e)
          ? m.MaskedPattern
          : e === Date
            ? m.MaskedDate
            : e === Number
              ? m.MaskedNumber
              : Array.isArray(e) || e === Array
                ? m.MaskedDynamic
                : m.Masked && e.prototype instanceof m.Masked
                  ? e
                  : m.Masked && e instanceof m.Masked
                    ? e.constructor
                    : e instanceof Function
                      ? m.MaskedFunction
                      : (console.warn("Mask not found for mask", e), m.Masked);
    }
    function f(e) {
      if (!e) throw Error("Options in not defined");
      if (m.Masked) {
        if (e.prototype instanceof m.Masked) return { mask: e };
        let { mask: t, ...s } = e instanceof m.Masked ? { mask: e } : a(e) && e.mask instanceof m.Masked ? e : {};
        if (t) {
          let e = t.mask;
          return { ...n(t, (e, t) => !t.startsWith("_")), mask: t.constructor, _mask: e, ...s };
        }
      }
      return a(e) ? { ...e } : { mask: e };
    }
    function k(e) {
      if (m.Masked && e instanceof m.Masked) return e;
      let t = f(e),
        s = g(t.mask);
      if (!s) throw Error(`Masked class is not found for provided mask ${t.mask}, appropriate module needs to be imported manually before creating mask.`);
      return t.mask === s && delete t.mask, t._mask && ((t.mask = t._mask), delete t._mask), new s(t);
    }
    m.createMask = k;
    class _ {
      get selectionStart() {
        let e;
        try {
          e = this._unsafeSelectionStart;
        } catch {}
        return null != e ? e : this.value.length;
      }
      get selectionEnd() {
        let e;
        try {
          e = this._unsafeSelectionEnd;
        } catch {}
        return null != e ? e : this.value.length;
      }
      select(e, t) {
        if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd))
          try {
            this._unsafeSelect(e, t);
          } catch {}
      }
      get isActive() {
        return !1;
      }
    }
    m.MaskElement = _;
    class v extends _ {
      constructor(e) {
        super(),
          (this.input = e),
          (this._onKeydown = this._onKeydown.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onBeforeinput = this._onBeforeinput.bind(this)),
          (this._onCompositionEnd = this._onCompositionEnd.bind(this));
      }
      get rootElement() {
        return this.input.getRootNode?.() ?? document;
      }
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
      bindEvents(e) {
        this.input.addEventListener("keydown", this._onKeydown),
          this.input.addEventListener("input", this._onInput),
          this.input.addEventListener("beforeinput", this._onBeforeinput),
          this.input.addEventListener("compositionend", this._onCompositionEnd),
          this.input.addEventListener("drop", e.drop),
          this.input.addEventListener("click", e.click),
          this.input.addEventListener("focus", e.focus),
          this.input.addEventListener("blur", e.commit),
          (this._handlers = e);
      }
      _onKeydown(e) {
        return this._handlers.redo && ((90 === e.keyCode && e.shiftKey && (e.metaKey || e.ctrlKey)) || (89 === e.keyCode && e.ctrlKey))
          ? (e.preventDefault(), this._handlers.redo(e))
          : this._handlers.undo && 90 === e.keyCode && (e.metaKey || e.ctrlKey)
            ? (e.preventDefault(), this._handlers.undo(e))
            : void (e.isComposing || this._handlers.selectionChange(e));
      }
      _onBeforeinput(e) {
        return "historyUndo" === e.inputType && this._handlers.undo ? (e.preventDefault(), this._handlers.undo(e)) : "historyRedo" === e.inputType && this._handlers.redo ? (e.preventDefault(), this._handlers.redo(e)) : void 0;
      }
      _onCompositionEnd(e) {
        this._handlers.input(e);
      }
      _onInput(e) {
        e.isComposing || this._handlers.input(e);
      }
      unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown),
          this.input.removeEventListener("input", this._onInput),
          this.input.removeEventListener("beforeinput", this._onBeforeinput),
          this.input.removeEventListener("compositionend", this._onCompositionEnd),
          this.input.removeEventListener("drop", this._handlers.drop),
          this.input.removeEventListener("click", this._handlers.click),
          this.input.removeEventListener("focus", this._handlers.focus),
          this.input.removeEventListener("blur", this._handlers.commit),
          (this._handlers = {});
      }
    }
    m.HTMLMaskElement = v;
    class y extends v {
      constructor(e) {
        super(e), (this.input = e);
      }
      get _unsafeSelectionStart() {
        return null != this.input.selectionStart ? this.input.selectionStart : this.value.length;
      }
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
      _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t);
      }
      get value() {
        return this.input.value;
      }
      set value(e) {
        this.input.value = e;
      }
    }
    m.HTMLMaskElement = v;
    class E extends v {
      get _unsafeSelectionStart() {
        let e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s < i ? s : i;
      }
      get _unsafeSelectionEnd() {
        let e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s > i ? s : i;
      }
      _unsafeSelect(e, t) {
        if (!this.rootElement.createRange) return;
        let s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, e), s.setEnd(this.input.lastChild || this.input, t);
        let i = this.rootElement,
          a = i.getSelection && i.getSelection();
        a && (a.removeAllRanges(), a.addRange(s));
      }
      get value() {
        return this.input.textContent || "";
      }
      set value(e) {
        this.input.textContent = e;
      }
    }
    m.HTMLContenteditableMaskElement = E;
    class S {
      static MAX_LENGTH = 100;
      states = [];
      currentIndex = 0;
      get currentState() {
        return this.states[this.currentIndex];
      }
      get isEmpty() {
        return 0 === this.states.length;
      }
      push(e) {
        this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > S.MAX_LENGTH && this.states.shift(), (this.currentIndex = this.states.length - 1);
      }
      go(e) {
        return (this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1)), this.currentState;
      }
      undo() {
        return this.go(-1);
      }
      redo() {
        return this.go(1);
      }
      clear() {
        (this.states.length = 0), (this.currentIndex = 0);
      }
    }
    m.InputMask = class {
      constructor(e, t) {
        (this.el = e instanceof _ ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new E(e) : new y(e)),
          (this.masked = k(t)),
          (this._listeners = {}),
          (this._value = ""),
          (this._unmaskedValue = ""),
          (this._rawInputValue = ""),
          (this.history = new S()),
          (this._saveSelection = this._saveSelection.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onChange = this._onChange.bind(this)),
          (this._onDrop = this._onDrop.bind(this)),
          (this._onFocus = this._onFocus.bind(this)),
          (this._onClick = this._onClick.bind(this)),
          (this._onUndo = this._onUndo.bind(this)),
          (this._onRedo = this._onRedo.bind(this)),
          (this.alignCursor = this.alignCursor.bind(this)),
          (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
          this._bindEvents(),
          this.updateValue(),
          this._onChange();
      }
      maskEquals(e) {
        return null == e || this.masked?.maskEquals(e);
      }
      get mask() {
        return this.masked.mask;
      }
      set mask(e) {
        if (this.maskEquals(e)) return;
        if (!(e instanceof m.Masked) && this.masked.constructor === g(e)) return void this.masked.updateOptions({ mask: e });
        let t = e instanceof m.Masked ? e : k({ mask: e });
        (t.unmaskedValue = this.masked.unmaskedValue), (this.masked = t);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.value !== e && ((this.masked.value = e), this.updateControl("auto"));
      }
      get unmaskedValue() {
        return this._unmaskedValue;
      }
      set unmaskedValue(e) {
        this.unmaskedValue !== e && ((this.masked.unmaskedValue = e), this.updateControl("auto"));
      }
      get rawInputValue() {
        return this._rawInputValue;
      }
      set rawInputValue(e) {
        this.rawInputValue !== e && ((this.masked.rawInputValue = e), this.updateControl(), this.alignCursor());
      }
      get typedValue() {
        return this.masked.typedValue;
      }
      set typedValue(e) {
        this.masked.typedValueEquals(e) || ((this.masked.typedValue = e), this.updateControl("auto"));
      }
      get displayValue() {
        return this.masked.displayValue;
      }
      _bindEvents() {
        this.el.bindEvents({ selectionChange: this._saveSelection, input: this._onInput, drop: this._onDrop, click: this._onClick, focus: this._onFocus, commit: this._onChange, undo: this._onUndo, redo: this._onRedo });
      }
      _unbindEvents() {
        this.el && this.el.unbindEvents();
      }
      _fireEvent(e, t) {
        let s = this._listeners[e];
        s && s.forEach((e) => e(t));
      }
      get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      }
      set cursorPos(e) {
        this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
      }
      _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),
          (this._selection = { start: this.selectionStart, end: this.cursorPos });
      }
      updateValue() {
        (this.masked.value = this.el.value), (this._value = this.masked.value);
      }
      updateControl(e) {
        let t = this.masked.unmaskedValue,
          s = this.masked.value,
          i = this.masked.rawInputValue,
          a = this.displayValue,
          n = this.unmaskedValue !== t || this.value !== s || this._rawInputValue !== i;
        (this._unmaskedValue = t),
          (this._value = s),
          (this._rawInputValue = i),
        this.el.value !== a && (this.el.value = a),
          "auto" === e ? this.alignCursor() : null != e && (this.cursorPos = e),
        n && this._fireChangeEvents(),
        !this._historyChanging && (n || this.history.isEmpty) && this.history.push({ unmaskedValue: t, selection: { start: this.selectionStart, end: this.cursorPos } });
      }
      updateOptions(e) {
        let { mask: t, ...s } = e,
          i = !this.maskEquals(t),
          a = this.masked.optionsIsChanged(s);
        i && (this.mask = t), a && this.masked.updateOptions(s), (i || a) && this.updateControl();
      }
      updateCursor(e) {
        null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
      }
      _delayUpdateCursor(e) {
        this._abortUpdateCursor(),
          (this._changingCursorPos = e),
          (this._cursorChanging = setTimeout(() => {
            this.el && ((this.cursorPos = this._changingCursorPos), this._abortUpdateCursor());
          }, 10));
      }
      _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
      }
      _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
      }
      alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, o));
      }
      alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor();
      }
      on(e, t) {
        return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
      }
      off(e, t) {
        if (!this._listeners[e]) return this;
        if (!t) return delete this._listeners[e], this;
        let s = this._listeners[e].indexOf(t);
        return s >= 0 && this._listeners[e].splice(s, 1), this;
      }
      _onInput(e) {
        (this._inputEvent = e), this._abortUpdateCursor();
        let t = new p({ value: this.el.value, cursorPos: this.cursorPos, oldValue: this.displayValue, oldSelection: this._selection }),
          s = this.masked.rawInputValue,
          i = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, { input: !0, raw: !0 }).offset,
          a = s === this.masked.rawInputValue ? t.removeDirection : r,
          n = this.masked.nearestInputPos(t.startChangePos + i, a);
        a !== r && (n = this.masked.nearestInputPos(n, r)), this.updateControl(n), delete this._inputEvent;
      }
      _onChange() {
        this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
      }
      _onDrop(e) {
        e.preventDefault(), e.stopPropagation();
      }
      _onFocus(e) {
        this.alignCursorFriendly();
      }
      _onClick(e) {
        this.alignCursorFriendly();
      }
      _onUndo() {
        this._applyHistoryState(this.history.undo());
      }
      _onRedo() {
        this._applyHistoryState(this.history.redo());
      }
      _applyHistoryState(e) {
        e && ((this._historyChanging = !0), (this.unmaskedValue = e.unmaskedValue), this.el.select(e.selection.start, e.selection.end), this._saveSelection(), (this._historyChanging = !1));
      }
      destroy() {
        this._unbindEvents(), (this._listeners.length = 0), delete this.el;
      }
    };
    class A {
      static normalize(e) {
        return Array.isArray(e) ? e : [e, new A()];
      }
      constructor(e) {
        Object.assign(this, { inserted: "", rawInserted: "", skip: !1, tailShift: 0 }, e);
      }
      aggregate(e) {
        return (this.rawInserted += e.rawInserted), (this.skip = this.skip || e.skip), (this.inserted += e.inserted), (this.tailShift += e.tailShift), this;
      }
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    m.ChangeDetails = A;
    class C {
      constructor(e, t, s) {
        void 0 === e && (e = ""), void 0 === t && (t = 0), (this.value = e), (this.from = t), (this.stop = s);
      }
      toString() {
        return this.value;
      }
      extend(e) {
        this.value += String(e);
      }
      appendTo(e) {
        return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
      }
      get state() {
        return { value: this.value, from: this.from, stop: this.stop };
      }
      set state(e) {
        Object.assign(this, e);
      }
      unshift(e) {
        if (!this.value.length || (null != e && this.from >= e)) return "";
        let t = this.value[0];
        return (this.value = this.value.slice(1)), t;
      }
      shift() {
        if (!this.value.length) return "";
        let e = this.value[this.value.length - 1];
        return (this.value = this.value.slice(0, -1)), e;
      }
    }
    class b {
      static DEFAULTS = { skipInvalid: !0 };
      static EMPTY_VALUES = [void 0, null, ""];
      constructor(e) {
        (this._value = ""), this._update({ ...b.DEFAULTS, ...e }), (this._initialized = !0);
      }
      updateOptions(e) {
        this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e));
      }
      _update(e) {
        Object.assign(this, e);
      }
      get state() {
        return { _value: this.value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        this._value = e._value;
      }
      reset() {
        this._value = "";
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.resolve(e, { input: !0 });
      }
      resolve(e, t) {
        void 0 === t && (t = { input: !0 }), this.reset(), this.append(e, t, ""), this.doCommit();
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(e) {
        this.resolve(e, {});
      }
      get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
      }
      set typedValue(e) {
        this.format ? (this.value = this.format(e, this)) : (this.unmaskedValue = String(e));
      }
      get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, { raw: !0 });
      }
      set rawInputValue(e) {
        this.resolve(e, { raw: !0 });
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return this.isComplete;
      }
      nearestInputPos(e, t) {
        return e;
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), this.displayValue.slice(e, t);
      }
      extractTail(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), new C(this.extractInput(e, t), e);
      }
      appendTail(e) {
        return i(e) && (e = new C(String(e))), e.appendTo(this);
      }
      _appendCharRaw(e, t) {
        return e ? ((this._value += e), new A({ inserted: e, rawInserted: e })) : new A();
      }
      _appendChar(e, t, s) {
        void 0 === t && (t = {});
        let i,
          a = this.state;
        if ((([e, i] = this.doPrepareChar(e, t)), e && (i = i.aggregate(this._appendCharRaw(e, t))), i.inserted)) {
          let e,
            n = !1 !== this.doValidate(t);
          if (n && null != s) {
            let t = this.state;
            if (!0 === this.overwrite) {
              e = s.state;
              for (let e = 0; e < i.rawInserted.length; ++e) s.unshift(this.displayValue.length - i.tailShift);
            }
            let a = this.appendTail(s);
            if (!(((n = a.rawInserted.length === s.toString().length) && a.inserted) || "shift" !== this.overwrite)) {
              (this.state = t), (e = s.state);
              for (let e = 0; e < i.rawInserted.length; ++e) s.shift();
              n = (a = this.appendTail(s)).rawInserted.length === s.toString().length;
            }
            n && a.inserted && (this.state = t);
          }
          n || ((i = new A()), (this.state = a), s && e && (s.state = e));
        }
        return i;
      }
      _appendPlaceholder() {
        return new A();
      }
      _appendEager() {
        return new A();
      }
      append(e, t, s) {
        if (!i(e)) throw Error("value should be string");
        let a,
          n = i(s) ? new C(String(s)) : s;
        t?.tail && (t._beforeTailState = this.state), ([e, a] = this.doPrepare(e, t));
        for (let s = 0; s < e.length; ++s) {
          let i = this._appendChar(e[s], t, n);
          if (!i.rawInserted && !this.doSkipInvalid(e[s], t, n)) break;
          a.aggregate(i);
        }
        return (!0 === this.eager || "append" === this.eager) && t?.input && e && a.aggregate(this._appendEager()), null != n && (a.tailShift += this.appendTail(n).tailShift), a;
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), (this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t)), new A();
      }
      withValueRefresh(e) {
        if (this._refreshing || !this._initialized) return e();
        this._refreshing = !0;
        let t = this.rawInputValue,
          s = this.value,
          i = e();
        return (this.rawInputValue = t), this.value && this.value !== s && 0 === s.indexOf(this.value) && (this.append(s.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
      }
      runIsolated(e) {
        if (this._isolated || !this._initialized) return e(this);
        this._isolated = !0;
        let t = this.state,
          s = e(this);
        return (this.state = t), delete this._isolated, s;
      }
      doSkipInvalid(e, t, s) {
        return Boolean(this.skipInvalid);
      }
      doPrepare(e, t) {
        return void 0 === t && (t = {}), A.normalize(this.prepare ? this.prepare(e, this, t) : e);
      }
      doPrepareChar(e, t) {
        return void 0 === t && (t = {}), A.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
      }
      doValidate(e) {
        return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
      }
      doCommit() {
        this.commit && this.commit(this.value, this);
      }
      splice(e, t, s, i, a) {
        void 0 === i && (i = r), void 0 === a && (a = { input: !0 });
        let n,
          c = e + t,
          d = this.extractTail(c),
          p = !0 === this.eager || "remove" === this.eager;
        p &&
        ((i = (function (e) {
          switch (e) {
            case o:
              return l;
            case u:
              return h;
            default:
              return e;
          }
        })(i)),
          (n = this.extractInput(0, c, { raw: !0 })));
        let m = e,
          g = new A();
        if ((i !== r && ((m = this.nearestInputPos(e, t > 1 && 0 !== e && !p ? r : i)), (g.tailShift = m - e)), g.aggregate(this.remove(m)), p && i !== r && n === this.rawInputValue))
          if (i === l) {
            let e;
            for (; n === this.rawInputValue && (e = this.displayValue.length); ) g.aggregate(new A({ tailShift: -1 })).aggregate(this.remove(e - 1));
          } else i === h && d.unshift();
        return g.aggregate(this.append(s, a, d));
      }
      maskEquals(e) {
        return this.mask === e;
      }
      optionsIsChanged(e) {
        return !d(this, e);
      }
      typedValueEquals(e) {
        let t = this.typedValue;
        return e === t || (b.EMPTY_VALUES.includes(e) && b.EMPTY_VALUES.includes(t)) || (!!this.format && this.format(e, this) === this.format(this.typedValue, this));
      }
    }
    m.Masked = b;
    class F {
      constructor(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0), (this.chunks = e), (this.from = t);
      }
      toString() {
        return this.chunks.map(String).join("");
      }
      extend(e) {
        if (!String(e)) return;
        e = i(e) ? new C(String(e)) : e;
        let t = this.chunks[this.chunks.length - 1],
          s = t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
        if (e instanceof C) s ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof F) {
          if (null == e.stop) {
            let t;
            for (; e.chunks.length && null == e.chunks[0].stop; ) (t = e.chunks.shift()), (t.from += e.from), this.extend(t);
          }
          e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
        }
      }
      appendTo(e) {
        if (!(e instanceof m.MaskedPattern)) return new C(this.toString()).appendTo(e);
        let t = new A();
        for (let s = 0; s < this.chunks.length && !t.skip; ++s) {
          let i,
            a = this.chunks[s],
            n = e._mapPosToBlock(e.displayValue.length),
            r = a.stop;
          if (null != r && (!n || n.index <= r)) {
            if (a instanceof F || e._stops.indexOf(r) >= 0) {
              let s = e._appendPlaceholder(r);
              t.aggregate(s);
            }
            i = a instanceof F && e._blocks[r];
          }
          if (i) {
            let s = i.appendTail(a);
            (s.skip = !1), t.aggregate(s), (e._value += s.inserted);
            let n = a.toString().slice(s.rawInserted.length);
            n && t.aggregate(e.append(n, { tail: !0 }));
          } else t.aggregate(e.append(a.toString(), { tail: !0 }));
        }
        return t;
      }
      get state() {
        return { chunks: this.chunks.map((e) => e.state), from: this.from, stop: this.stop, blockIndex: this.blockIndex };
      }
      set state(e) {
        let { chunks: t, ...s } = e;
        Object.assign(this, s),
          (this.chunks = t.map((e) => {
            let t = "chunks" in e ? new F() : new C();
            return (t.state = e), t;
          }));
      }
      unshift(e) {
        if (!this.chunks.length || (null != e && this.from >= e)) return "";
        let t = null != e ? e - this.from : e,
          s = 0;
        for (; s < this.chunks.length; ) {
          let e = this.chunks[s],
            i = e.unshift(t);
          if (e.toString()) {
            if (!i) break;
            ++s;
          } else this.chunks.splice(s, 1);
          if (i) return i;
        }
        return "";
      }
      shift() {
        if (!this.chunks.length) return "";
        let e = this.chunks.length - 1;
        for (; 0 <= e; ) {
          let t = this.chunks[e],
            s = t.shift();
          if (t.toString()) {
            if (!s) break;
            --e;
          } else this.chunks.splice(e, 1);
          if (s) return s;
        }
        return "";
      }
    }
    class x {
      constructor(e, t) {
        (this.masked = e), (this._log = []);
        let { offset: s, index: i } = e._mapPosToBlock(t) || (t < 0 ? { index: 0, offset: 0 } : { index: this.masked._blocks.length, offset: 0 });
        (this.offset = s), (this.index = i), (this.ok = !1);
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return { index: this.index, offset: this.offset, ok: this.ok };
      }
      set state(e) {
        Object.assign(this, e);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        let e = this._log.pop();
        return e && (this.state = e), e;
      }
      bindBlock() {
        this.block || (this.index < 0 && ((this.index = 0), (this.offset = 0)), this.index >= this.masked._blocks.length && ((this.index = this.masked._blocks.length - 1), (this.offset = this.block.displayValue.length)));
      }
      _pushLeft(e) {
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = this.block?.displayValue.length || 0) if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      _pushRight(e) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (!this.block.isFixed && this.block.value) return (this.offset = this.block.nearestInputPos(this.offset, l)), 0 !== this.offset || void 0;
        });
      }
      pushLeftBeforeInput() {
        return this._pushLeft(() => {
          if (!this.block.isFixed) return (this.offset = this.block.nearestInputPos(this.offset, o)), !0;
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value))) return (this.offset = this.block.nearestInputPos(this.offset, o)), !0;
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (!this.block.isFixed && this.block.value) return (this.offset = this.block.nearestInputPos(this.offset, h)), this.offset !== this.block.value.length || void 0;
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (!this.block.isFixed) return (this.offset = this.block.nearestInputPos(this.offset, r)), !0;
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value))) return (this.offset = this.block.nearestInputPos(this.offset, r)), !0;
        });
      }
    }
    class w {
      constructor(e) {
        Object.assign(this, e), (this._value = ""), (this.isFixed = !0);
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
      }
      get rawInputValue() {
        return this._isRawInput ? this.value : "";
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        (this._isRawInput = !1), (this._value = "");
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), (this._value = this._value.slice(0, e) + this._value.slice(t)), this._value || (this._isRawInput = !1), new A();
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = r);
        let s = this._value.length;
        switch (t) {
          case o:
          case l:
            return 0;
          default:
            return s;
        }
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), this._isRawInput ? t - e : 0;
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), void 0 === s && (s = {}), (s.raw && this._isRawInput && this._value.slice(e, t)) || "";
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(e, t) {
        void 0 === t && (t = {});
        let s = new A();
        if (this.isFilled) return s;
        let i = !0 === this.eager || "append" === this.eager,
          a = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !i) && !t.tail;
        return a && (s.rawInserted = this.char), (this._value = s.inserted = this.char), (this._isRawInput = a && (t.raw || t.input)), s;
      }
      _appendEager() {
        return this._appendChar(this.char, { tail: !0 });
      }
      _appendPlaceholder() {
        let e = new A();
        return this.isFilled || (this._value = e.inserted = this.char), e;
      }
      extractTail() {
        return new C("");
      }
      appendTail(e) {
        return i(e) && (e = new C(String(e))), e.appendTo(this);
      }
      append(e, t, s) {
        let i = this._appendChar(e[0], t);
        return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
      }
      doCommit() {}
      get state() {
        return { _value: this._value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        (this._value = e._value), (this._isRawInput = Boolean(e._rawInputValue));
      }
    }
    class L {
      static DEFAULT_DEFINITIONS = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./,
      };
      constructor(e) {
        let { parent: t, isOptional: s, placeholderChar: i, displayChar: a, lazy: n, eager: r, ...o } = e;
        (this.masked = k(o)), Object.assign(this, { parent: t, isOptional: s, placeholderChar: i, displayChar: a, lazy: n, eager: r });
      }
      reset() {
        (this.isFilled = !1), this.masked.reset();
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), 0 === e && t >= 1 ? ((this.isFilled = !1), this.masked.remove(e, t)) : new A();
      }
      get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get rawInputValue() {
        return this.masked.rawInputValue;
      }
      get displayValue() {
        return (this.masked.value && this.displayChar) || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(e, t) {
        if ((void 0 === t && (t = {}), this.isFilled)) return new A();
        let s = this.masked.state,
          i = this.masked._appendChar(e, this.currentMaskFlags(t));
        return (
          i.inserted && !1 === this.doValidate(t) && ((i.inserted = i.rawInserted = ""), (this.masked.state = s)),
          i.inserted || this.isOptional || this.lazy || t.input || (i.inserted = this.placeholderChar),
            (i.skip = !i.inserted && !this.isOptional),
            (this.isFilled = Boolean(i.inserted)),
            i
        );
      }
      append(e, t, s) {
        return this.masked.append(e, this.currentMaskFlags(t), s);
      }
      _appendPlaceholder() {
        let e = new A();
        return this.isFilled || this.isOptional || ((this.isFilled = !0), (e.inserted = this.placeholderChar)), e;
      }
      _appendEager() {
        return new A();
      }
      extractTail(e, t) {
        return this.masked.extractTail(e, t);
      }
      appendTail(e) {
        return this.masked.appendTail(e);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.masked.extractInput(e, t, s);
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = r);
        let s = this.value.length,
          i = Math.min(Math.max(e, 0), s);
        switch (t) {
          case o:
          case l:
            return this.isComplete ? i : 0;
          case u:
          case h:
            return this.isComplete ? i : s;
          default:
            return i;
        }
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.value.slice(e, t).length;
      }
      doValidate(e) {
        return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)));
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return { _value: this.value, _rawInputValue: this.rawInputValue, masked: this.masked.state, isFilled: this.isFilled };
      }
      set state(e) {
        (this.masked.state = e.masked), (this.isFilled = e.isFilled);
      }
      currentMaskFlags(e) {
        return { ...e, _beforeTailState: e?._beforeTailState?.masked || e?._beforeTailState };
      }
    }
    m.MaskedRegExp = class extends b {
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let t = e.mask;
        t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
      }
    };
    class B extends b {
      static DEFAULTS = { lazy: !0, placeholderChar: "_" };
      static STOP_CHAR = "`";
      static ESCAPE_CHAR = "\\";
      static InputDefinition = L;
      static FixedDefinition = w;
      constructor(e) {
        super({ ...B.DEFAULTS, ...e, definitions: Object.assign({}, L.DEFAULT_DEFINITIONS, e?.definitions) });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        (e.definitions = Object.assign({}, this.definitions, e.definitions)), super._update(e), this._rebuildMask();
      }
      _rebuildMask() {
        let e = this.definitions;
        (this._blocks = []), (this.exposeBlock = void 0), (this._stops = []), (this._maskedBlocks = {});
        let t = this.mask;
        if (!t || !e) return;
        let s = !1,
          i = !1;
        for (let a = 0; a < t.length; ++a) {
          if (this.blocks) {
            let e = t.slice(a),
              s = Object.keys(this.blocks).filter((t) => 0 === e.indexOf(t));
            s.sort((e, t) => t.length - e.length);
            let i = s[0];
            if (i) {
              let { expose: e, repeat: t, ...s } = f(this.blocks[i]),
                n = { lazy: this.lazy, eager: this.eager, placeholderChar: this.placeholderChar, displayChar: this.displayChar, overwrite: this.overwrite, ...s, repeat: t, parent: this },
                r = null != t ? new m.RepeatBlock(n) : k(n);
              r && (this._blocks.push(r), e && (this.exposeBlock = r), this._maskedBlocks[i] || (this._maskedBlocks[i] = []), this._maskedBlocks[i].push(this._blocks.length - 1)), (a += i.length - 1);
              continue;
            }
          }
          let n = t[a],
            r = n in e;
          if (n === B.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if ("{" === n || "}" === n) {
            s = !s;
            continue;
          }
          if ("[" === n || "]" === n) {
            i = !i;
            continue;
          }
          if (n === B.ESCAPE_CHAR) {
            if (!(n = t[++a])) break;
            r = !1;
          }
          let o = r
            ? new L({ isOptional: i, lazy: this.lazy, eager: this.eager, placeholderChar: this.placeholderChar, displayChar: this.displayChar, ...f(e[n]), parent: this })
            : new w({ char: n, eager: this.eager, isUnmasking: s });
          this._blocks.push(o);
        }
      }
      get state() {
        return { ...super.state, _blocks: this._blocks.map((e) => e.state) };
      }
      set state(e) {
        if (!e) return void this.reset();
        let { _blocks: t, ...s } = e;
        this._blocks.forEach((e, s) => (e.state = t[s])), (super.state = s);
      }
      reset() {
        super.reset(), this._blocks.forEach((e) => e.reset());
      }
      get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e) => e.isComplete);
      }
      get isFilled() {
        return this._blocks.every((e) => e.isFilled);
      }
      get isFixed() {
        return this._blocks.every((e) => e.isFixed);
      }
      get isOptional() {
        return this._blocks.every((e) => e.isOptional);
      }
      doCommit() {
        this._blocks.forEach((e) => e.doCommit()), super.doCommit();
      }
      get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, t) => e + t.unmaskedValue, "");
      }
      set unmaskedValue(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.unmaskedValue = e), this.appendTail(t), this.doCommit();
        } else super.unmaskedValue = e;
      }
      get value() {
        return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((e, t) => e + t.value, "");
      }
      set value(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.value = e), this.appendTail(t), this.doCommit();
        } else super.value = e;
      }
      get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
      }
      set typedValue(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.typedValue = e), this.appendTail(t), this.doCommit();
        } else super.typedValue = e;
      }
      get displayValue() {
        return this._blocks.reduce((e, t) => e + t.displayValue, "");
      }
      appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        let e = new A(),
          t = this._mapPosToBlock(this.displayValue.length)?.index;
        if (null == t) return e;
        this._blocks[t].isFilled && ++t;
        for (let s = t; s < this._blocks.length; ++s) {
          let t = this._blocks[s]._appendEager();
          if (!t.inserted) break;
          e.aggregate(t);
        }
        return e;
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        let s = this._mapPosToBlock(this.displayValue.length),
          i = new A();
        if (!s) return i;
        for (let a, n = s.index; (a = this._blocks[n]); ++n) {
          let s = a._appendChar(e, { ...t, _beforeTailState: t._beforeTailState?._blocks?.[n] });
          if ((i.aggregate(s), s.skip || s.rawInserted)) break;
        }
        return i;
      }
      extractTail(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = new F();
        return (
          e === t ||
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            let n = e.extractTail(i, a);
            (n.stop = this._findStopBefore(t)), (n.from = this._blockStartPos(t)), n instanceof F && (n.blockIndex = t), s.extend(n);
          }),
            s
        );
      }
      extractInput(e, t, s) {
        if ((void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), void 0 === s && (s = {}), e === t)) return "";
        let i = "";
        return (
          this._forEachBlocksInRange(e, t, (e, t, a, n) => {
            i += e.extractInput(a, n, s);
          }),
            i
        );
      }
      _findStopBefore(e) {
        let t;
        for (let s = 0; s < this._stops.length; ++s) {
          let i = this._stops[s];
          if (!(i <= e)) break;
          t = i;
        }
        return t;
      }
      _appendPlaceholder(e) {
        let t = new A();
        if (this.lazy && null == e) return t;
        let s = this._mapPosToBlock(this.displayValue.length);
        if (!s) return t;
        let i = s.index,
          a = null != e ? e : this._blocks.length;
        return (
          this._blocks.slice(i, a).forEach((s) => {
            if (!s.lazy || null != e) {
              let e = s._appendPlaceholder(s._blocks?.length);
              (this._value += e.inserted), t.aggregate(e);
            }
          }),
            t
        );
      }
      _mapPosToBlock(e) {
        let t = "";
        for (let s = 0; s < this._blocks.length; ++s) {
          let i = this._blocks[s],
            a = t.length;
          if (e <= (t += i.displayValue).length) return { index: s, offset: e - a };
        }
      }
      _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce((e, t) => e + t.displayValue.length, 0);
      }
      _forEachBlocksInRange(e, t, s) {
        void 0 === t && (t = this.displayValue.length);
        let i = this._mapPosToBlock(e);
        if (i) {
          let e = this._mapPosToBlock(t),
            a = e && i.index === e.index,
            n = i.offset,
            r = e && a ? e.offset : this._blocks[i.index].displayValue.length;
          if ((s(this._blocks[i.index], i.index, n, r), e && !a)) {
            for (let t = i.index + 1; t < e.index; ++t) s(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
            s(this._blocks[e.index], e.index, 0, e.offset);
          }
        }
      }
      remove(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = super.remove(e, t);
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            s.aggregate(e.remove(i, a));
          }),
            s
        );
      }
      nearestInputPos(e, t) {
        if ((void 0 === t && (t = r), !this._blocks.length)) return 0;
        let s = new x(this, e);
        if (t === r) return s.pushRightBeforeInput() ? s.pos : (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.displayValue.length);
        if (t === o || t === l) {
          if (t === o) {
            if ((s.pushRightBeforeFilled(), s.ok && s.pos === e)) return e;
            s.popState();
          }
          if ((s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), t === o)) {
            if ((s.pushRightBeforeInput(), s.pushRightBeforeRequired(), (s.ok && s.pos <= e) || (s.popState(), s.ok && s.pos <= e))) return s.pos;
            s.popState();
          }
          return s.ok ? s.pos : t === l ? 0 : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
        }
        return t === u || t === h
          ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : t === h ? this.displayValue.length : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : this.nearestInputPos(e, o))))
          : e;
      }
      totalInputPositions(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = 0;
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            s += e.totalInputPositions(i, a);
          }),
            s
        );
      }
      maskedBlock(e) {
        return this.maskedBlocks(e)[0];
      }
      maskedBlocks(e) {
        let t = this._maskedBlocks[e];
        return t ? t.map((e) => this._blocks[e]) : [];
      }
    }
    m.MaskedPattern = B;
    class D extends B {
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      constructor(e) {
        super(e);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let { to: t = this.to || 0, from: s = this.from || 0, maxLength: i = this.maxLength || 0, autofix: a = this.autofix, ...n } = e;
        (this.to = t), (this.from = s), (this.maxLength = Math.max(String(t).length, i)), (this.autofix = a);
        let r = String(this.from).padStart(this.maxLength, "0"),
          o = String(this.to).padStart(this.maxLength, "0"),
          l = 0;
        for (; l < o.length && o[l] === r[l]; ) ++l;
        (n.mask = o.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l)), super._update(n);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(e) {
        let t = "",
          s = "",
          [, i, a] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return a && ((t = "0".repeat(i.length) + a), (s = "9".repeat(i.length) + a)), [(t = t.padEnd(this.maxLength, "0")), (s = s.padEnd(this.maxLength, "9"))];
      }
      doPrepareChar(e, t) {
        let s;
        if ((void 0 === t && (t = {}), ([e, s] = super.doPrepareChar(e.replace(/\D/g, ""), t)), !this.autofix || !e)) return (s.skip = !this.isComplete), [e, s];
        let i = String(this.from).padStart(this.maxLength, "0"),
          a = String(this.to).padStart(this.maxLength, "0"),
          n = this.value + e;
        if (n.length > this.maxLength) return ["", s];
        let [r, o] = this.boundaries(n);
        return Number(o) < this.from ? [i[n.length - 1], s] : Number(r) > this.to ? ("pad" === this.autofix && n.length < this.maxLength ? ["", s.aggregate(this.append(i[n.length - 1] + e, t))] : [a[n.length - 1], s]) : [e, s];
      }
      doValidate(e) {
        let t = this.value;
        if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
        let [s, i] = this.boundaries(t);
        return this.from <= Number(i) && Number(s) <= this.to && super.doValidate(e);
      }
    }
    m.MaskedRange = D;
    class I extends B {
      static GET_DEFAULT_BLOCKS = () => ({ d: { mask: D, from: 1, to: 31, maxLength: 2 }, m: { mask: D, from: 1, to: 12, maxLength: 2 }, Y: { mask: D, from: 1900, to: 9999 } });
      static DEFAULTS = {
        mask: Date,
        pattern: "d{.}`m{.}`Y",
        format: (e, t) => (e ? [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".") : ""),
        parse(e, t) {
          let [s, i, a] = e.split(".").map(Number);
          return new Date(a, i - 1, s);
        },
      };
      static extractPatternOptions(e) {
        let { mask: t, pattern: s, ...a } = e;
        return { ...a, mask: i(t) ? t : s };
      }
      constructor(e) {
        super(I.extractPatternOptions({ ...I.DEFAULTS, ...e }));
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let { mask: t, pattern: s, blocks: a, ...n } = { ...I.DEFAULTS, ...e },
          r = Object.assign({}, I.GET_DEFAULT_BLOCKS());
        e.min && (r.Y.from = e.min.getFullYear()),
        e.max && (r.Y.to = e.max.getFullYear()),
        e.min && e.max && r.Y.from === r.Y.to && ((r.m.from = e.min.getMonth() + 1), (r.m.to = e.max.getMonth() + 1), r.m.from === r.m.to && ((r.d.from = e.min.getDate()), (r.d.to = e.max.getDate()))),
          Object.assign(r, this.blocks, a),
          Object.keys(r).forEach((t) => {
            let s = r[t];
            !("autofix" in s) && "autofix" in e && (s.autofix = e.autofix);
          }),
          super._update({ ...n, mask: i(t) ? t : s, blocks: r });
      }
      doValidate(e) {
        let t = this.date;
        return super.doValidate(e) && (!this.isComplete || (this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max)));
      }
      isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0;
      }
      get date() {
        return this.typedValue;
      }
      set date(e) {
        this.typedValue = e;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(e) {
        super.typedValue = e;
      }
      maskEquals(e) {
        return e === Date || super.maskEquals(e);
      }
      optionsIsChanged(e) {
        return super.optionsIsChanged(I.extractPatternOptions(e));
      }
    }
    m.MaskedDate = I;
    class M extends b {
      static DEFAULTS;
      constructor(e) {
        super({ ...M.DEFAULTS, ...e }), (this.currentMask = void 0);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e),
        "mask" in e &&
        ((this.exposeMask = void 0),
          (this.compiledMasks = Array.isArray(e.mask)
            ? e.mask.map((e) => {
              let { expose: t, ...s } = f(e),
                i = k({ overwrite: this._overwrite, eager: this._eager, skipInvalid: this._skipInvalid, ...s });
              return t && (this.exposeMask = i), i;
            })
            : []));
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        let s = this._applyDispatch(e, t);
        return this.currentMask && s.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), s;
      }
      _applyDispatch(e, t, s) {
        void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === s && (s = "");
        let i = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
          a = this.rawInputValue,
          n = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : a,
          r = a.slice(n.length),
          o = this.currentMask,
          l = new A(),
          u = o?.state;
        if (((this.currentMask = this.doDispatch(e, { ...t }, s)), this.currentMask))
          if (this.currentMask !== o) {
            if ((this.currentMask.reset(), n)) {
              let e = this.currentMask.append(n, { raw: !0 });
              l.tailShift = e.inserted.length - i.length;
            }
            r && (l.tailShift += this.currentMask.append(r, { raw: !0, tail: !0 }).tailShift);
          } else u && (this.currentMask.state = u);
        return l;
      }
      _appendPlaceholder() {
        let e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
      }
      _appendEager() {
        let e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
      }
      appendTail(e) {
        let t = new A();
        return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e));
      }
      currentMaskFlags(e) {
        return { ...e, _beforeTailState: (e._beforeTailState?.currentMaskRef === this.currentMask && e._beforeTailState?.currentMask) || e._beforeTailState };
      }
      doDispatch(e, t, s) {
        return void 0 === t && (t = {}), void 0 === s && (s = ""), this.dispatch(e, this, t, s);
      }
      doValidate(e) {
        return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)));
      }
      doPrepare(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepare(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepare(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepareChar(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepareChar(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      reset() {
        this.currentMask?.reset(), this.compiledMasks.forEach((e) => e.reset());
      }
      get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
      }
      set value(e) {
        this.exposeMask ? ((this.exposeMask.value = e), (this.currentMask = this.exposeMask), this._applyDispatch()) : (super.value = e);
      }
      get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
      }
      set unmaskedValue(e) {
        this.exposeMask ? ((this.exposeMask.unmaskedValue = e), (this.currentMask = this.exposeMask), this._applyDispatch()) : (super.unmaskedValue = e);
      }
      get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
      }
      set typedValue(e) {
        if (this.exposeMask) return (this.exposeMask.typedValue = e), (this.currentMask = this.exposeMask), void this._applyDispatch();
        let t = String(e);
        this.currentMask && ((this.currentMask.typedValue = e), (t = this.currentMask.unmaskedValue)), (this.unmaskedValue = t);
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
      }
      get isComplete() {
        return Boolean(this.currentMask?.isComplete);
      }
      get isFilled() {
        return Boolean(this.currentMask?.isFilled);
      }
      remove(e, t) {
        let s = new A();
        return this.currentMask && s.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), s;
      }
      get state() {
        return { ...super.state, _rawInputValue: this.rawInputValue, compiledMasks: this.compiledMasks.map((e) => e.state), currentMaskRef: this.currentMask, currentMask: this.currentMask?.state };
      }
      set state(e) {
        let { compiledMasks: t, currentMaskRef: s, currentMask: i, ...a } = e;
        t && this.compiledMasks.forEach((e, s) => (e.state = t[s])), null != s && ((this.currentMask = s), (this.currentMask.state = i)), (super.state = a);
      }
      extractInput(e, t, s) {
        return this.currentMask ? this.currentMask.extractInput(e, t, s) : "";
      }
      extractTail(e, t) {
        return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
      }
      doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit();
      }
      nearestInputPos(e, t) {
        return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
      }
      set overwrite(e) {
        this._overwrite = e;
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
      }
      set eager(e) {
        this._eager = e;
      }
      get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
      }
      set skipInvalid(e) {
        this._skipInvalid = e;
      }
      maskEquals(e) {
        return Array.isArray(e)
          ? this.compiledMasks.every((t, s) => {
            if (!e[s]) return;
            let { mask: i, ...a } = e[s];
            return d(t, a) && t.maskEquals(i);
          })
          : super.maskEquals(e);
      }
      typedValueEquals(e) {
        return Boolean(this.currentMask?.typedValueEquals(e));
      }
    }
    (M.DEFAULTS = {
      dispatch(e, t, s, i) {
        if (!t.compiledMasks.length) return;
        let a = t.rawInputValue,
          n = t.compiledMasks.map((n, r) => {
            let o = t.currentMask === n,
              u = o ? n.displayValue.length : n.nearestInputPos(n.displayValue.length, l);
            return (
              n.rawInputValue !== a ? (n.reset(), n.append(a, { raw: !0 })) : o || n.remove(u),
                n.append(e, t.currentMaskFlags(s)),
                n.appendTail(i),
                { index: r, weight: n.rawInputValue.length, totalInputPositions: n.totalInputPositions(0, Math.max(u, n.nearestInputPos(n.displayValue.length, l))) }
            );
          });
        return n.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[n[0].index];
      },
    }),
      (m.MaskedDynamic = M),
      (m.MaskedEnum = class extends B {
        constructor(e) {
          super(e);
        }
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          let { enum: t, ...s } = e;
          if (t) {
            let e = t.map((e) => e.length),
              i = Math.min(...e),
              a = Math.max(...e) - i;
            (s.mask = "*".repeat(i)), a && (s.mask += "[" + "*".repeat(a) + "]"), (this.enum = t);
          }
          super._update(s);
        }
        doValidate(e) {
          return this.enum.some((e) => 0 === e.indexOf(this.unmaskedValue)) && super.doValidate(e);
        }
      }),
      (m.MaskedFunction = class extends b {
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          super._update({ ...e, validate: e.mask });
        }
      });
    class V extends b {
      static UNMASKED_RADIX = ".";
      static EMPTY_VALUES = [...b.EMPTY_VALUES, 0];
      static DEFAULTS = {
        mask: Number,
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [V.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: (e) => e.toLocaleString("en-US", { useGrouping: !1, maximumFractionDigits: 20 }),
      };
      constructor(e) {
        super({ ...V.DEFAULTS, ...e });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e), this._updateRegExps();
      }
      _updateRegExps() {
        let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          t = (this.scale ? `(${c(this.radix)}\\d{0,${this.scale}})?` : "") + "$";
        (this._numberRegExp = RegExp(e + "\\d*" + t)), (this._mapToRadixRegExp = RegExp(`[${this.mapToRadix.map(c).join("")}]`, "g")), (this._thousandsSeparatorRegExp = RegExp(c(this.thousandsSeparator), "g"));
      }
      _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, "");
      }
      _insertThousandsSeparators(e) {
        let t = e.split(this.radix);
        return (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)), t.join(this.radix);
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && ((t.input && t.raw) || (!t.input && !t.raw)) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
        return e && !s && (i.skip = !0), !s || this.allowPositive || this.value || "-" === s || i.aggregate(this._appendChar("-")), [s, i];
      }
      _separatorsCount(e, t) {
        void 0 === t && (t = !1);
        let s = 0;
        for (let i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++s, t && (e += this.thousandsSeparator.length));
        return s;
      }
      _separatorsCountFromSlice(e) {
        return void 0 === e && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), ([e, t] = this._adjustRangeWithSeparators(e, t)), this._removeThousandsSeparators(super.extractInput(e, t, s));
      }
      _appendCharRaw(e, t) {
        if ((void 0 === t && (t = {}), !this.thousandsSeparator)) return super._appendCharRaw(e, t);
        let s = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          i = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        let a = super._appendCharRaw(e, t);
        this._value = this._insertThousandsSeparators(this._value);
        let n = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          r = this._separatorsCountFromSlice(n);
        return (a.tailShift += (r - i) * this.thousandsSeparator.length), (a.skip = !a.rawInserted && e === this.thousandsSeparator), a;
      }
      _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
          let t = e - this.thousandsSeparator.length + 1,
            s = this.value.indexOf(this.thousandsSeparator, t);
          if (s <= e) return s;
        }
        return -1;
      }
      _adjustRangeWithSeparators(e, t) {
        let s = this._findSeparatorAround(e);
        s >= 0 && (e = s);
        let i = this._findSeparatorAround(t);
        return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t];
      }
      remove(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), ([e, t] = this._adjustRangeWithSeparators(e, t));
        let s = this.value.slice(0, e),
          i = this.value.slice(t),
          a = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
        let n = this._separatorsCountFromSlice(s);
        return new A({ tailShift: (n - a) * this.thousandsSeparator.length });
      }
      nearestInputPos(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
          case r:
          case o:
          case l: {
            let s = this._findSeparatorAround(e - 1);
            if (s >= 0) {
              let i = s + this.thousandsSeparator.length;
              if (e < i || this.value.length <= i || t === l) return s;
            }
            break;
          }
          case u:
          case h: {
            let t = this._findSeparatorAround(e);
            if (t >= 0) return t + this.thousandsSeparator.length;
          }
        }
        return e;
      }
      doValidate(e) {
        let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (t) {
          let e = this.number;
          t = t && !isNaN(e) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
        }
        return t && super.doValidate(e);
      }
      doCommit() {
        if (this.value) {
          let e = this.number,
            t = e;
          null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
          let s = this.value;
          this.normalizeZeros && (s = this._normalizeZeros(s)), this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)), (this._value = s);
        }
        super.doCommit();
      }
      _normalizeZeros(e) {
        let t = this._removeThousandsSeparators(e).split(this.radix);
        return (
          (t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, s, i) => t + i)),
          e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
          t.length > 1 && ((t[1] = t[1].replace(/0*$/, "")), t[1].length || (t.length = 1)),
            this._insertThousandsSeparators(t.join(this.radix))
        );
      }
      _padFractionalZeros(e) {
        if (!e) return e;
        let t = e.split(this.radix);
        return t.length < 2 && t.push(""), (t[1] = t[1].padEnd(this.scale, "0")), t.join(this.radix);
      }
      doSkipInvalid(e, t, s) {
        void 0 === t && (t = {});
        let i = 0 === this.scale && e !== this.thousandsSeparator && (e === this.radix || e === V.UNMASKED_RADIX || this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, s) && !i;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, V.UNMASKED_RADIX);
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get typedValue() {
        return this.parse(this.unmaskedValue, this);
      }
      set typedValue(e) {
        this.rawInputValue = this.format(e, this).replace(V.UNMASKED_RADIX, this.radix);
      }
      get number() {
        return this.typedValue;
      }
      set number(e) {
        this.typedValue = e;
      }
      get allowNegative() {
        return (null != this.min && this.min < 0) || (null != this.max && this.max < 0);
      }
      get allowPositive() {
        return (null != this.min && this.min > 0) || (null != this.max && this.max > 0);
      }
      typedValueEquals(e) {
        return (super.typedValueEquals(e) || (V.EMPTY_VALUES.includes(e) && V.EMPTY_VALUES.includes(this.typedValue))) && !(0 === e && "" === this.value);
      }
    }
    m.MaskedNumber = V;
    let T = { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" };
    function q(e, t, s) {
      void 0 === t && (t = T.MASKED), void 0 === s && (s = T.MASKED);
      let i = k(e);
      return (e) => i.runIsolated((i) => ((i[t] = e), i[s]));
    }
    (m.PIPE_TYPE = T),
      (m.createPipe = q),
      (m.pipe = function (e, t, s, i) {
        return q(t, s, i)(e);
      }),
      (m.RepeatBlock = class extends B {
        get repeatFrom() {
          return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) ?? 0;
        }
        get repeatTo() {
          return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? 1 / 0;
        }
        constructor(e) {
          super(e);
        }
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          let { repeat: t, ...s } = f(e);
          this._blockOpts = Object.assign({}, this._blockOpts, s);
          let i = k(this._blockOpts);
          (this.repeat = t ?? i.repeat ?? this.repeat ?? 1 / 0),
            super._update({
              mask: "m".repeat(Math.max((this.repeatTo === 1 / 0 && this._blocks?.length) || 0, this.repeatFrom)),
              blocks: { m: i },
              eager: i.eager,
              overwrite: i.overwrite,
              skipInvalid: i.skipInvalid,
              lazy: i.lazy,
              placeholderChar: i.placeholderChar,
              displayChar: i.displayChar,
            });
        }
        _allocateBlock(e) {
          return e < this._blocks.length
            ? this._blocks[e]
            : this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo
              ? (this._blocks.push(k(this._blockOpts)), (this.mask += "m"), this._blocks[this._blocks.length - 1])
              : void 0;
        }
        _appendCharRaw(e, t) {
          void 0 === t && (t = {});
          let s = new A();
          for (let i, a, n = this._mapPosToBlock(this.displayValue.length)?.index ?? Math.max(this._blocks.length - 1, 0); (i = this._blocks[n] ?? (a = !a && this._allocateBlock(n))); ++n) {
            let r = i._appendChar(e, { ...t, _beforeTailState: t._beforeTailState?._blocks?.[n] });
            if (r.skip && a) {
              this._blocks.pop(), (this.mask = this.mask.slice(1));
              break;
            }
            if ((s.aggregate(r), r.skip || r.rawInserted)) break;
          }
          return s;
        }
        _trimEmptyTail(e, t) {
          void 0 === e && (e = 0);
          let s,
            i = Math.max(this._mapPosToBlock(e)?.index || 0, this.repeatFrom, 0);
          null != t && (s = this._mapPosToBlock(t)?.index), null == s && (s = this._blocks.length - 1);
          let a = 0;
          for (let e = s; i <= e && !this._blocks[e].unmaskedValue; --e, ++a);
          a && (this._blocks.splice(s - a + 1, a), (this.mask = this.mask.slice(a)));
        }
        reset() {
          super.reset(), this._trimEmptyTail();
        }
        remove(e, t) {
          void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
          let s = super.remove(e, t);
          return this._trimEmptyTail(e, t), s;
        }
        totalInputPositions(e, t) {
          return void 0 === e && (e = 0), null == t && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(e, t);
        }
        get state() {
          return super.state;
        }
        set state(e) {
          (this._blocks.length = e._blocks.length), (this.mask = this.mask.slice(0, this._blocks.length)), (super.state = e);
        }
      });
    try {
      globalThis.IMask = m;
    } catch {}
    document.querySelectorAll('input[type="tel"]').forEach((e) => {
      m(e, { mask: "+{7}(000)000-00-00" });
    }),
      s(122),
      s(158),
      s(478),
      s(964),
      s(195),
      s(396),
      s(204),
      s(983),
      s(851),
      s(115),
      s(392),
      s(429),
      s(367),
      s(906),
      s(640);
  })();
})();




(() => {
  var e = {
      392: () => {
        null !== document.querySelector(".contacts") &&
        ymaps.ready(function () {
          const e = [59.942647, 30.353894];
          var s = new ymaps.Map("сontactsMap3", { center: e, zoom: 11 }),   // gor
            i = new ymaps.Map("сontactsMap4", { center: e, zoom: 11 }),   // vyb
            a = new ymaps.Map("сontactsMap5", { center: e, zoom: 11 });  // mos
            (placemark33 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker-active.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark34 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark35 = new ymaps.Placemark(
              [59.888343, 30.321411],
              { balloonContentBody: "Клиника на Московском пр. 130ж" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark43 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark44 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker-active.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark45 = new ymaps.Placemark(
              [59.888343, 30.321411],
              { balloonContentBody: "Клиника на Московском пр. 130ж" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark53 = new ymaps.Placemark(
              [59.926693, 30.324357],
              { balloonContentBody: "Клиника на Гороховая ул.53" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark54 = new ymaps.Placemark(
              [60.041516, 30.318994],
              { balloonContentBody: "Клиника на Выборгское ш.5, к.1" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            (placemark55 = new ymaps.Placemark(
              [59.888343, 30.321411],
              { balloonContentBody: "Клиника на Московском пр. 130ж" },
              { iconLayout: "default#image", iconImageHref: "https://krasotaclinic.ru/img/svg/map-marker-active.svg", iconImageSize: [40, 40], iconImageOffset: [-20, -40] }
            )),
            s.controls.remove("geolocationControl"),
            s.controls.remove("searchControl"),
            s.controls.remove("trafficControl"),
            s.controls.remove("typeSelector"),
            s.controls.remove("fullscreenControl"),
            s.controls.remove("rulerControl"),
            s.behaviors.disable(["scrollZoom"]),
            i.controls.remove("geolocationControl"),
            i.controls.remove("searchControl"),
            i.controls.remove("trafficControl"),
            i.controls.remove("typeSelector"),
            i.controls.remove("fullscreenControl"),
            i.controls.remove("rulerControl"),
            i.behaviors.disable(["scrollZoom"]),
            a.controls.remove("geolocationControl"),
            a.controls.remove("searchControl"),
            a.controls.remove("trafficControl"),
            a.controls.remove("typeSelector"),
            a.controls.remove("fullscreenControl"),
            a.controls.remove("rulerControl"),
            a.behaviors.disable(["scrollZoom"]),
            s.geoObjects.add(placemark33),
            s.geoObjects.add(placemark34),
            s.geoObjects.add(placemark35),
            i.geoObjects.add(placemark43),
            i.geoObjects.add(placemark44),
            i.geoObjects.add(placemark45),
            a.geoObjects.add(placemark53),
            a.geoObjects.add(placemark54),
            a.geoObjects.add(placemark55);
        });
      },
      367() {
        let e = document.querySelectorAll(".accordion button");
        function t() {
          let t = this.getAttribute("aria-expanded");
          for (i = 0; i < e.length; i++) e[i].setAttribute("aria-expanded", "false");
          "false" == t && this.setAttribute("aria-expanded", "true");
        }
        e.forEach((e) => e.addEventListener("click", t));
      },
      396() {
        if (null !== document.querySelector(".form-appointment")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".appointment-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".appointment-select__option")[0];
            for (let s of (t.classList.add("appointment-select__option--selected"),
              (t.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = t.textContent),
              t.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed"),
              t.closest(".appointment-select").classList.add("appointment-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".appointment-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".appointment-select").classList.toggle("appointment-select--open");
              });
            for (let t of document.querySelectorAll(".appointment-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("appointment-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected") &&
                this.parentNode.querySelector(".appointment-select__option.appointment-select__option--selected").classList.remove("appointment-select__option--selected"),
                  this.classList.add("appointment-select__option--selected"),
                  (this.closest(".appointment-select").querySelector(".appointment-select__placeholder").textContent = this.textContent),
                  this.closest(".appointment-select").querySelector(".appointment-select__placeholder").classList.add("appointment-select--changed"),
                  this.closest(".appointment-select").classList.add("appointment-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".appointment-select")) t.contains(e.target) || t.classList.remove("appointment-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Получить прайс-лист" };
          document.querySelector(".appointment-social-select-options").addEventListener("click", function (e) {
            t["Адрес"] = e.target.dataset.name;
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".appointment-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".appointment-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".appointment-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".appointment-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      204() {
        if (null !== document.querySelector(".form-consultation-specialist")) {
          let e = { Форма: "Консультация" };
          document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".consultation-specialist-form__btn").addEventListener("click", function (t) {
              if (
                (t.preventDefault(),
                16 !== document.querySelector(".consultation-specialist-semifinal-phone").value.length || ((e["Контакт"] = document.querySelector(".consultation-specialist-semifinal-phone").value), !e["Контакт"]))
              )
                return void document.querySelector(".consultation-specialist-semifinal-phone").focus();
              let s = new FormData();
              s.append("Контакт", e["Контакт"]), s.append("Форма", e["Форма"]);
              let i = new XMLHttpRequest();
              i.open("POST", "send-form.php", !0),
                (i.onreadystatechange = function () {
                  4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                }),
                i.send(s);
            });
          });
        }
      },
      195() {
        if (null !== document.querySelector(".form-consultation")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".consultation-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".consultation-select__option")[0];
            for (let s of (t.classList.add("consultation-select__option--selected"),
              (t.closest(".consultation-select").querySelector(".consultation-select__placeholder").textContent = t.textContent),
              t.closest(".consultation-select").querySelector(".consultation-select__placeholder").classList.add("consultation-select--changed"),
              t.closest(".consultation-select").classList.add("consultation-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".consultation-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".consultation-select").classList.toggle("consultation-select--open");
              });
            for (let t of document.querySelectorAll(".consultation-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("consultation-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".consultation-select__option.consultation-select__option--selected") &&
                this.parentNode.querySelector(".consultation-select__option.consultation-select__option--selected").classList.remove("consultation-select__option--selected"),
                  this.classList.add("consultation-select__option--selected"),
                  (this.closest(".consultation-select").querySelector(".consultation-select__placeholder").textContent = this.textContent),
                  this.closest(".consultation-select").querySelector(".consultation-select__placeholder").classList.add("consultation-select--changed"),
                  this.closest(".consultation-select").classList.add("consultation-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".consultation-select")) t.contains(e.target) || t.classList.remove("consultation-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Получить консультацию" };
          document.querySelector(".consultation-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".consultation-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".consultation-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".consultation-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".consultation-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      964() {
        if (null !== document.querySelector(".hero")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".hero-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".hero-select__option")[0];
            for (let s of (t.classList.add("hero-select__option--selected"),
              (t.closest(".hero-select").querySelector(".hero-select__placeholder").textContent = t.textContent),
              t.closest(".hero-select").querySelector(".hero-select__placeholder").classList.add("hero-select--changed"),
              t.closest(".hero-select").classList.add("hero-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".hero-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".hero-select").classList.toggle("hero-select--open");
              });
            for (let t of document.querySelectorAll(".hero-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("hero-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".hero-select__option.hero-select__option--selected") &&
                this.parentNode.querySelector(".hero-select__option.hero-select__option--selected").classList.remove("hero-select__option--selected"),
                  this.classList.add("hero-select__option--selected"),
                  (this.closest(".hero-select").querySelector(".hero-select__placeholder").textContent = this.textContent),
                  this.closest(".hero-select").querySelector(".hero-select__placeholder").classList.add("hero-select--changed"),
                  this.closest(".hero-select").classList.add("hero-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".hero-select")) t.contains(e.target) || t.classList.remove("hero-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Акции" };
          document.querySelector(".hero-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".hero-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".hero-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".hero-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".hero-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      983() {
        if (null !== document.querySelector(".modal-promotions")) {
          function e(e) {
            switch (e) {
              case "Gorohovaya":
              case "Vyborgskoe":
              case "Moskovskij":
                return void (document.querySelector(".promotions-social-selected-image").src = "https://krasotaclinic.ru/img/svg/map-marker.svg");
            }
          }
          !(function () {
            let t = document.querySelectorAll(".promotions-select__option")[0];
            for (let s of (t.classList.add("promotions-select__option--selected"),
              (t.closest(".promotions-select").querySelector(".promotions-select__placeholder").textContent = t.textContent),
              t.closest(".promotions-select").querySelector(".promotions-select__placeholder").classList.add("promotions-select--changed"),
              t.closest(".promotions-select").classList.add("promotions-select--changed"),
              e(t.dataset.name),
              document.querySelectorAll(".promotions-select__wrapper")))
              s.addEventListener("click", function () {
                s.classList.contains("select--disabled") || this.querySelector(".promotions-select").classList.toggle("promotions-select--open");
              });
            for (let t of document.querySelectorAll(".promotions-select__option"))
              t.addEventListener("click", function () {
                this.classList.contains("promotions-select__option--selected") ||
                (e(t.dataset.name),
                this.parentNode.querySelector(".promotions-select__option.promotions-select__option--selected") &&
                this.parentNode.querySelector(".promotions-select__option.promotions-select__option--selected").classList.remove("promotions-select__option--selected"),
                  this.classList.add("promotions-select__option--selected"),
                  (this.closest(".promotions-select").querySelector(".promotions-select__placeholder").textContent = this.textContent),
                  this.closest(".promotions-select").querySelector(".promotions-select__placeholder").classList.add("promotions-select--changed"),
                  this.closest(".promotions-select").classList.add("promotions-select--changed"));
              });
            window.addEventListener("click", function (e) {
              for (let t of document.querySelectorAll(".promotions-select")) t.contains(e.target) || t.classList.remove("promotions-select--open");
            });
          })();
          let t = { Адрес: "Gorohovaya", Форма: "Акции" };
          document.querySelector(".promotions-social-select-options").addEventListener("click", function (e) {
            (t["Адрес"] = e.target.dataset.name), console.log(t);
          }),
            document.addEventListener("DOMContentLoaded", function () {
              document.querySelector(".promotions-form__btn").addEventListener("click", function (e) {
                if ((e.preventDefault(), 16 !== document.querySelector(".promotions-semifinal-phone").value.length || ((t["Контакт"] = document.querySelector(".promotions-semifinal-phone").value), !t["Контакт"])))
                  return void document.querySelector(".promotions-semifinal-phone").focus();
                let s = new FormData();
                s.append("Адрес", t["Адрес"]), s.append("Контакт", t["Контакт"]), s.append("Форма", t["Форма"]);
                let i = new XMLHttpRequest();
                i.open("POST", "send-form.php", !0),
                  (i.onreadystatechange = function () {
                    4 === i.readyState && 200 === i.status && window.location.replace("https://krasotaclinic.ru/thanks/");
                  }),
                  i.send(s);
              });
            });
        }
      },
      478() {
        var e;
        if (null !== document.querySelector(".promotions")) {
          let t = document.querySelectorAll(".promotions__item-date span"),
            s = `${((e = new Date().getFullYear()), new Date(e, 2, 0).getDate())} ${(function () {
              return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date()).toLocaleString("ru", { month: "long", day: "numeric" }).split(" ")[1];
            })()}`;
          t.forEach((e) => {
            e.append(s);
          });
        }
      },
      429() {
        null !== document.querySelector(".modal") &&
        (function () {
          let e = document.querySelector("#modal-backdrop");
          function t(t) {
            t.classList.remove("show"), e.classList.add("hidden"), (document.body.style.overflowY = "scroll");
          }
          document.addEventListener("click", function (s) {
            let i = s.target.closest(".js-modal");
            if (i) {
              let t = i.dataset.modal;
              document.querySelector(t).classList.add("show"), e.classList.remove("hidden"), (document.body.style.overflow = "hidden");
            }
            let a = s.target.closest(".modal-close");
            a && (s.preventDefault(), t(a.closest(".modal"))), s.target.matches("#modal-backdrop") && t(document.querySelector(".modal.show"));
          });
        })();
      },
      115() {
        let e = document.querySelectorAll(".products__card");
        e &&
        e.forEach((e) => {
          let t = e,
            s = t.querySelectorAll(".image-switch__item"),
            i = t.querySelector(".image-pagination");
          s.length > 1 &&
          s.forEach((e, s) => {
            e.setAttribute("data-index", s),
              (i.innerHTML += `<li class="image-pagination__item ${0 == s ? "image-pagination__item--active" : ""}" data-index="${s}"></li>`),
              e.addEventListener("mouseenter", (e) => {
                t.querySelectorAll(".image-pagination__item").forEach((e) => {
                  e.classList.remove("image-pagination__item--active");
                }),
                  t.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add("image-pagination__item--active");
              }),
              e.addEventListener("mouseleave", (e) => {
                t.querySelectorAll(".image-pagination__item").forEach((e) => {
                  e.classList.remove("image-pagination__item--active");
                }),
                  t.querySelector('.image-pagination__item[data-index="0"]').classList.add("image-pagination__item--active");
              });
          });
        });
      },
      851() {
        if (null !== document.querySelector(".show-more-ready")) {
          let e = document.querySelector(".show-more-ready"),
            t = document.querySelectorAll(".ready-projects__list-card").length,
            s = 6;
          e.addEventListener("click", () => {
            s += 3;
            let i = Array.from(document.querySelector(".ready-projects__list").children).slice(0, s);
            i.forEach((e) => e.classList.add("is-visible-ready")), i.length === t && (e.style.display = "none");
          });
        }
        if (null !== document.querySelector(".show-more")) {
          let e = document.querySelector(".show-more"),
            t = document.querySelectorAll(".reviews__card").length,
            s = 6;
          e.addEventListener("click", () => {
            s += 6;
            let i = Array.from(document.querySelector(".reviews__list").children).slice(0, s);
            i.forEach((e) => e.classList.add("is-visible")), i.length === t && (e.style.display = "none");
          });
        }
      },
      881() {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && (e.target.classList.add("element-show"), e.target.classList.add("element-show-2"));
              });
            },
            { threshold: [0.5] }
          ),
          t = document.querySelectorAll(".element-animation"),
          s = document.querySelectorAll(".element-animation-2");
        for (let s of t) e.observe(s);
        setTimeout(() => {
          for (let t of s) e.observe(t);
        }, 600);
      },
      158() {
        if (null !== document.querySelector(".specialists")) {
          function e(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".specialists-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".specialists-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".specialists-tabs-list__btn").forEach(function (t) {
            t.addEventListener("click", e);
          });
        }
        if (null !== document.querySelector(".price")) {
          function t(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".price-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".price-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".price-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", t);
          });
        }
        if (null !== document.querySelector(".reviews")) {
          function s(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".reviews-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".reviews-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".reviews-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", s);
          });
        }
        if (null !== document.querySelector(".contacts")) {
          function i(e) {
            let t = e.currentTarget.dataset.path;
            document.querySelectorAll(".contacts-tabs-list__btn").forEach(function (e) {
              e.classList.remove("tab-active");
            }),
              document.querySelectorAll(".contacts-tabs-content").forEach(function (e) {
                e.classList.remove("tab-content-active");
              }),
              document.querySelectorAll(`[data-target="${t}"]`).forEach(function (e) {
                e.classList.add("tab-content-active");
              }),
              document.querySelector(`[data-path="${t}"]`).classList.add("tab-active");
          }
          document.querySelectorAll(".contacts-tabs-list__btn").forEach(function (e) {
            e.addEventListener("click", i);
          });
        }
      },
      122() {
        if (null !== document.querySelector(".form__circle-time")) {
          let e = new Date().toLocaleDateString();
          document.querySelectorAll(".form__circle-time").forEach((t) => {
            t.textContent = e.toString();
          });
        }
      },
      640() {
        null !== document.querySelector(".lead") &&
        (() => {
          let e = document.querySelector(".js-timer");
          if (!e) return;
          let t = e.cloneNode(!0),
            s = { m: parseInt(t.querySelector("i").innerHTML), s: parseInt(t.querySelector("span").innerHTML) },
            i = !0,
            a = () => {
              if (0 === s.s) {
                if (0 === s.m) return (i = !1), void (e.innerHTML = "Время вышло");
                (s.m = s.m - 1), (s.s = 59);
              } else s.s = s.s - 1;
              (e.innerHTML = `${s.m} мин ${s.s} сек`), setTimeout(a, 1e3);
            };
          setTimeout(a, 1e3);
        })();
      },
      906() {
        if (null !== document.querySelector(".expertpop")) {
          let e = document.querySelector(".js-foowidget");
          document.addEventListener("click", (t) => {
            t.target.closest(".js-open-foowidget") && e.classList.add("is-visible"), t.target.closest(".js-close-foowidget") && e.classList.remove("is-visible");
          });
        }
      },
      598() {
        function e(e) {
          var t = !0,
            s = !1,
            i = null,
            a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
          function n(e) {
            return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList);
          }
          function r(e) {
            e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""));
          }
          function o(e) {
            t = !1;
          }
          function l() {
            document.addEventListener("mousemove", u),
              document.addEventListener("mousedown", u),
              document.addEventListener("mouseup", u),
              document.addEventListener("pointermove", u),
              document.addEventListener("pointerdown", u),
              document.addEventListener("pointerup", u),
              document.addEventListener("touchmove", u),
              document.addEventListener("touchstart", u),
              document.addEventListener("touchend", u);
          }
          function u(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
            ((t = !1),
              document.removeEventListener("mousemove", u),
              document.removeEventListener("mousedown", u),
              document.removeEventListener("mouseup", u),
              document.removeEventListener("pointermove", u),
              document.removeEventListener("pointerdown", u),
              document.removeEventListener("pointerup", u),
              document.removeEventListener("touchmove", u),
              document.removeEventListener("touchstart", u),
              document.removeEventListener("touchend", u));
          }
          document.addEventListener(
            "keydown",
            function (s) {
              s.metaKey || s.altKey || s.ctrlKey || (n(e.activeElement) && r(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", o, !0),
            document.addEventListener("pointerdown", o, !0),
            document.addEventListener("touchstart", o, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (s && (t = !0), l());
              },
              !0
            ),
            l(),
            e.addEventListener(
              "focus",
              function (e) {
                var s, i, o;
                n(e.target) && (t || ((i = (s = e.target).type), ("INPUT" === (o = s.tagName) && a[i] && !s.readOnly) || ("TEXTAREA" === o && !s.readOnly) || s.isContentEditable)) && r(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                n(e.target) &&
                (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) &&
                ((s = !0),
                  window.clearTimeout(i),
                  (i = window.setTimeout(function () {
                    s = !1;
                  }, 100)),
                (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
    },
    t = {};
  function s(i) {
    var a = t[i];
    if (void 0 !== a) return a.exports;
    var n = (t[i] = { exports: {} });
    return e[i](n, n.exports, s), n.exports;
  }
  (() => {
    "use strict";
    s(598);
    let e = { windowEl: window, documentEl: document, htmlEl: document.documentElement, bodyEl: document.body },
      t = () => {
        let t = document?.querySelectorAll(".fixed-block"),
          s = (document.body, parseInt(e.bodyEl.dataset.position, 10));
        t.forEach((e) => {
          e.style.paddingRight = "0px";
        }),
          (e.bodyEl.style.paddingRight = "0px"),
          (e.bodyEl.style.top = "auto"),
          e.bodyEl.classList.remove("dis-scroll"),
          window.scroll({ top: s, left: 0 }),
          e.bodyEl.removeAttribute("data-position"),
          (e.htmlEl.style.scrollBehavior = "smooth");
      };
    function i(e) {
      return "string" == typeof e || e instanceof String;
    }
    function a(e) {
      return "object" == typeof e && null != e && "Object" === e?.constructor?.name;
    }
    function n(e, t) {
      return Array.isArray(t)
        ? n(e, (e, s) => t.includes(s))
        : Object.entries(e).reduce((e, s) => {
          let [i, a] = s;
          return t(a, i) && (e[i] = a), e;
        }, {});
    }
    !(function () {
      let s = document?.querySelector("[data-burger]"),
        i = document?.querySelector("[data-menu]"),
        a = document?.querySelectorAll("[data-menu-item]"),
        n = document?.querySelector("[data-menu-overlay]");
      s?.addEventListener("click", (a) => {
        s?.classList.toggle("burger--active"),
          i?.classList.toggle("menu--active"),
          i?.classList.contains("menu--active")
            ? (s?.setAttribute("aria-expanded", "true"),
              s?.setAttribute("aria-label", "Закрыть меню"),
              (() => {
                let t = document?.querySelectorAll(".fixed-block"),
                  s = window.scrollY,
                  i = window.innerWidth - e.bodyEl.offsetWidth + "px";
                (e.htmlEl.style.scrollBehavior = "none"),
                  t.forEach((e) => {
                    e.style.paddingRight = i;
                  }),
                  (e.bodyEl.style.paddingRight = i),
                  e.bodyEl.classList.add("dis-scroll"),
                  (e.bodyEl.dataset.position = s),
                  (e.bodyEl.style.top = `-${s}px`);
              })())
            : (s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), t());
      }),
        n?.addEventListener("click", () => {
          s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), s.classList.remove("burger--active"), i.classList.remove("menu--active"), t();
        }),
        a?.forEach((e) => {
          e.addEventListener("click", () => {
            s?.setAttribute("aria-expanded", "false"), s?.setAttribute("aria-label", "Открыть меню"), s.classList.remove("burger--active"), i.classList.remove("menu--active"), t();
          });
        });
    })(),
      Fancybox.bind(),
      s(881);
    let r = "NONE",
      o = "LEFT",
      l = "FORCE_LEFT",
      u = "RIGHT",
      h = "FORCE_RIGHT";
    function c(e) {
      return e.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
    }
    function d(e, t) {
      if (t === e) return !0;
      let s,
        i = Array.isArray(t),
        a = Array.isArray(e);
      if (i && a) {
        if (t.length != e.length) return !1;
        for (s = 0; s < t.length; s++) if (!d(t[s], e[s])) return !1;
        return !0;
      }
      if (i != a) return !1;
      if (t && e && "object" == typeof t && "object" == typeof e) {
        let i = t instanceof Date,
          a = e instanceof Date;
        if (i && a) return t.getTime() == e.getTime();
        if (i != a) return !1;
        let n = t instanceof RegExp,
          r = e instanceof RegExp;
        if (n && r) return t.toString() == e.toString();
        if (n != r) return !1;
        let o = Object.keys(t);
        for (s = 0; s < o.length; s++) if (!Object.prototype.hasOwnProperty.call(e, o[s])) return !1;
        for (s = 0; s < o.length; s++) if (!d(e[o[s]], t[o[s]])) return !1;
        return !0;
      }
      return !(!t || !e || "function" != typeof t || "function" != typeof e) && t.toString() === e.toString();
    }
    class p {
      constructor(e) {
        for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); ) --this.oldSelection.start;
        for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); ) this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
      }
      get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      get insertedCount() {
        return this.cursorPos - this.startChangePos;
      }
      get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      get removedCount() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
      }
      get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      get head() {
        return this.value.substring(0, this.startChangePos);
      }
      get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      get removeDirection() {
        return !this.removedCount || this.insertedCount ? r : (this.oldSelection.end !== this.cursorPos && this.oldSelection.start !== this.cursorPos) || this.oldSelection.end !== this.oldSelection.start ? o : u;
      }
    }
    function m(e, t) {
      return new m.InputMask(e, t);
    }
    function g(e) {
      if (null == e) throw Error("mask property should be defined");
      return e instanceof RegExp
        ? m.MaskedRegExp
        : i(e)
          ? m.MaskedPattern
          : e === Date
            ? m.MaskedDate
            : e === Number
              ? m.MaskedNumber
              : Array.isArray(e) || e === Array
                ? m.MaskedDynamic
                : m.Masked && e.prototype instanceof m.Masked
                  ? e
                  : m.Masked && e instanceof m.Masked
                    ? e.constructor
                    : e instanceof Function
                      ? m.MaskedFunction
                      : (console.warn("Mask not found for mask", e), m.Masked);
    }
    function f(e) {
      if (!e) throw Error("Options in not defined");
      if (m.Masked) {
        if (e.prototype instanceof m.Masked) return { mask: e };
        let { mask: t, ...s } = e instanceof m.Masked ? { mask: e } : a(e) && e.mask instanceof m.Masked ? e : {};
        if (t) {
          let e = t.mask;
          return { ...n(t, (e, t) => !t.startsWith("_")), mask: t.constructor, _mask: e, ...s };
        }
      }
      return a(e) ? { ...e } : { mask: e };
    }
    function k(e) {
      if (m.Masked && e instanceof m.Masked) return e;
      let t = f(e),
        s = g(t.mask);
      if (!s) throw Error(`Masked class is not found for provided mask ${t.mask}, appropriate module needs to be imported manually before creating mask.`);
      return t.mask === s && delete t.mask, t._mask && ((t.mask = t._mask), delete t._mask), new s(t);
    }
    m.createMask = k;
    class _ {
      get selectionStart() {
        let e;
        try {
          e = this._unsafeSelectionStart;
        } catch {}
        return null != e ? e : this.value.length;
      }
      get selectionEnd() {
        let e;
        try {
          e = this._unsafeSelectionEnd;
        } catch {}
        return null != e ? e : this.value.length;
      }
      select(e, t) {
        if (null != e && null != t && (e !== this.selectionStart || t !== this.selectionEnd))
          try {
            this._unsafeSelect(e, t);
          } catch {}
      }
      get isActive() {
        return !1;
      }
    }
    m.MaskElement = _;
    class v extends _ {
      constructor(e) {
        super(),
          (this.input = e),
          (this._onKeydown = this._onKeydown.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onBeforeinput = this._onBeforeinput.bind(this)),
          (this._onCompositionEnd = this._onCompositionEnd.bind(this));
      }
      get rootElement() {
        return this.input.getRootNode?.() ?? document;
      }
      get isActive() {
        return this.input === this.rootElement.activeElement;
      }
      bindEvents(e) {
        this.input.addEventListener("keydown", this._onKeydown),
          this.input.addEventListener("input", this._onInput),
          this.input.addEventListener("beforeinput", this._onBeforeinput),
          this.input.addEventListener("compositionend", this._onCompositionEnd),
          this.input.addEventListener("drop", e.drop),
          this.input.addEventListener("click", e.click),
          this.input.addEventListener("focus", e.focus),
          this.input.addEventListener("blur", e.commit),
          (this._handlers = e);
      }
      _onKeydown(e) {
        return this._handlers.redo && ((90 === e.keyCode && e.shiftKey && (e.metaKey || e.ctrlKey)) || (89 === e.keyCode && e.ctrlKey))
          ? (e.preventDefault(), this._handlers.redo(e))
          : this._handlers.undo && 90 === e.keyCode && (e.metaKey || e.ctrlKey)
            ? (e.preventDefault(), this._handlers.undo(e))
            : void (e.isComposing || this._handlers.selectionChange(e));
      }
      _onBeforeinput(e) {
        return "historyUndo" === e.inputType && this._handlers.undo ? (e.preventDefault(), this._handlers.undo(e)) : "historyRedo" === e.inputType && this._handlers.redo ? (e.preventDefault(), this._handlers.redo(e)) : void 0;
      }
      _onCompositionEnd(e) {
        this._handlers.input(e);
      }
      _onInput(e) {
        e.isComposing || this._handlers.input(e);
      }
      unbindEvents() {
        this.input.removeEventListener("keydown", this._onKeydown),
          this.input.removeEventListener("input", this._onInput),
          this.input.removeEventListener("beforeinput", this._onBeforeinput),
          this.input.removeEventListener("compositionend", this._onCompositionEnd),
          this.input.removeEventListener("drop", this._handlers.drop),
          this.input.removeEventListener("click", this._handlers.click),
          this.input.removeEventListener("focus", this._handlers.focus),
          this.input.removeEventListener("blur", this._handlers.commit),
          (this._handlers = {});
      }
    }
    m.HTMLMaskElement = v;
    class y extends v {
      constructor(e) {
        super(e), (this.input = e);
      }
      get _unsafeSelectionStart() {
        return null != this.input.selectionStart ? this.input.selectionStart : this.value.length;
      }
      get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
      }
      _unsafeSelect(e, t) {
        this.input.setSelectionRange(e, t);
      }
      get value() {
        return this.input.value;
      }
      set value(e) {
        this.input.value = e;
      }
    }
    m.HTMLMaskElement = v;
    class E extends v {
      get _unsafeSelectionStart() {
        let e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s < i ? s : i;
      }
      get _unsafeSelectionEnd() {
        let e = this.rootElement,
          t = e.getSelection && e.getSelection(),
          s = t && t.anchorOffset,
          i = t && t.focusOffset;
        return null == i || null == s || s > i ? s : i;
      }
      _unsafeSelect(e, t) {
        if (!this.rootElement.createRange) return;
        let s = this.rootElement.createRange();
        s.setStart(this.input.firstChild || this.input, e), s.setEnd(this.input.lastChild || this.input, t);
        let i = this.rootElement,
          a = i.getSelection && i.getSelection();
        a && (a.removeAllRanges(), a.addRange(s));
      }
      get value() {
        return this.input.textContent || "";
      }
      set value(e) {
        this.input.textContent = e;
      }
    }
    m.HTMLContenteditableMaskElement = E;
    class S {
      static MAX_LENGTH = 100;
      states = [];
      currentIndex = 0;
      get currentState() {
        return this.states[this.currentIndex];
      }
      get isEmpty() {
        return 0 === this.states.length;
      }
      push(e) {
        this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > S.MAX_LENGTH && this.states.shift(), (this.currentIndex = this.states.length - 1);
      }
      go(e) {
        return (this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1)), this.currentState;
      }
      undo() {
        return this.go(-1);
      }
      redo() {
        return this.go(1);
      }
      clear() {
        (this.states.length = 0), (this.currentIndex = 0);
      }
    }
    m.InputMask = class {
      constructor(e, t) {
        (this.el = e instanceof _ ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new E(e) : new y(e)),
          (this.masked = k(t)),
          (this._listeners = {}),
          (this._value = ""),
          (this._unmaskedValue = ""),
          (this._rawInputValue = ""),
          (this.history = new S()),
          (this._saveSelection = this._saveSelection.bind(this)),
          (this._onInput = this._onInput.bind(this)),
          (this._onChange = this._onChange.bind(this)),
          (this._onDrop = this._onDrop.bind(this)),
          (this._onFocus = this._onFocus.bind(this)),
          (this._onClick = this._onClick.bind(this)),
          (this._onUndo = this._onUndo.bind(this)),
          (this._onRedo = this._onRedo.bind(this)),
          (this.alignCursor = this.alignCursor.bind(this)),
          (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
          this._bindEvents(),
          this.updateValue(),
          this._onChange();
      }
      maskEquals(e) {
        return null == e || this.masked?.maskEquals(e);
      }
      get mask() {
        return this.masked.mask;
      }
      set mask(e) {
        if (this.maskEquals(e)) return;
        if (!(e instanceof m.Masked) && this.masked.constructor === g(e)) return void this.masked.updateOptions({ mask: e });
        let t = e instanceof m.Masked ? e : k({ mask: e });
        (t.unmaskedValue = this.masked.unmaskedValue), (this.masked = t);
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.value !== e && ((this.masked.value = e), this.updateControl("auto"));
      }
      get unmaskedValue() {
        return this._unmaskedValue;
      }
      set unmaskedValue(e) {
        this.unmaskedValue !== e && ((this.masked.unmaskedValue = e), this.updateControl("auto"));
      }
      get rawInputValue() {
        return this._rawInputValue;
      }
      set rawInputValue(e) {
        this.rawInputValue !== e && ((this.masked.rawInputValue = e), this.updateControl(), this.alignCursor());
      }
      get typedValue() {
        return this.masked.typedValue;
      }
      set typedValue(e) {
        this.masked.typedValueEquals(e) || ((this.masked.typedValue = e), this.updateControl("auto"));
      }
      get displayValue() {
        return this.masked.displayValue;
      }
      _bindEvents() {
        this.el.bindEvents({ selectionChange: this._saveSelection, input: this._onInput, drop: this._onDrop, click: this._onClick, focus: this._onFocus, commit: this._onChange, undo: this._onUndo, redo: this._onRedo });
      }
      _unbindEvents() {
        this.el && this.el.unbindEvents();
      }
      _fireEvent(e, t) {
        let s = this._listeners[e];
        s && s.forEach((e) => e(t));
      }
      get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      }
      set cursorPos(e) {
        this.el && this.el.isActive && (this.el.select(e, e), this._saveSelection());
      }
      _saveSelection() {
        this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),
          (this._selection = { start: this.selectionStart, end: this.cursorPos });
      }
      updateValue() {
        (this.masked.value = this.el.value), (this._value = this.masked.value);
      }
      updateControl(e) {
        let t = this.masked.unmaskedValue,
          s = this.masked.value,
          i = this.masked.rawInputValue,
          a = this.displayValue,
          n = this.unmaskedValue !== t || this.value !== s || this._rawInputValue !== i;
        (this._unmaskedValue = t),
          (this._value = s),
          (this._rawInputValue = i),
        this.el.value !== a && (this.el.value = a),
          "auto" === e ? this.alignCursor() : null != e && (this.cursorPos = e),
        n && this._fireChangeEvents(),
        !this._historyChanging && (n || this.history.isEmpty) && this.history.push({ unmaskedValue: t, selection: { start: this.selectionStart, end: this.cursorPos } });
      }
      updateOptions(e) {
        let { mask: t, ...s } = e,
          i = !this.maskEquals(t),
          a = this.masked.optionsIsChanged(s);
        i && (this.mask = t), a && this.masked.updateOptions(s), (i || a) && this.updateControl();
      }
      updateCursor(e) {
        null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
      }
      _delayUpdateCursor(e) {
        this._abortUpdateCursor(),
          (this._changingCursorPos = e),
          (this._cursorChanging = setTimeout(() => {
            this.el && ((this.cursorPos = this._changingCursorPos), this._abortUpdateCursor());
          }, 10));
      }
      _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
      }
      _abortUpdateCursor() {
        this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
      }
      alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, o));
      }
      alignCursorFriendly() {
        this.selectionStart === this.cursorPos && this.alignCursor();
      }
      on(e, t) {
        return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t), this;
      }
      off(e, t) {
        if (!this._listeners[e]) return this;
        if (!t) return delete this._listeners[e], this;
        let s = this._listeners[e].indexOf(t);
        return s >= 0 && this._listeners[e].splice(s, 1), this;
      }
      _onInput(e) {
        (this._inputEvent = e), this._abortUpdateCursor();
        let t = new p({ value: this.el.value, cursorPos: this.cursorPos, oldValue: this.displayValue, oldSelection: this._selection }),
          s = this.masked.rawInputValue,
          i = this.masked.splice(t.startChangePos, t.removed.length, t.inserted, t.removeDirection, { input: !0, raw: !0 }).offset,
          a = s === this.masked.rawInputValue ? t.removeDirection : r,
          n = this.masked.nearestInputPos(t.startChangePos + i, a);
        a !== r && (n = this.masked.nearestInputPos(n, r)), this.updateControl(n), delete this._inputEvent;
      }
      _onChange() {
        this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
      }
      _onDrop(e) {
        e.preventDefault(), e.stopPropagation();
      }
      _onFocus(e) {
        this.alignCursorFriendly();
      }
      _onClick(e) {
        this.alignCursorFriendly();
      }
      _onUndo() {
        this._applyHistoryState(this.history.undo());
      }
      _onRedo() {
        this._applyHistoryState(this.history.redo());
      }
      _applyHistoryState(e) {
        e && ((this._historyChanging = !0), (this.unmaskedValue = e.unmaskedValue), this.el.select(e.selection.start, e.selection.end), this._saveSelection(), (this._historyChanging = !1));
      }
      destroy() {
        this._unbindEvents(), (this._listeners.length = 0), delete this.el;
      }
    };
    class A {
      static normalize(e) {
        return Array.isArray(e) ? e : [e, new A()];
      }
      constructor(e) {
        Object.assign(this, { inserted: "", rawInserted: "", skip: !1, tailShift: 0 }, e);
      }
      aggregate(e) {
        return (this.rawInserted += e.rawInserted), (this.skip = this.skip || e.skip), (this.inserted += e.inserted), (this.tailShift += e.tailShift), this;
      }
      get offset() {
        return this.tailShift + this.inserted.length;
      }
    }
    m.ChangeDetails = A;
    class C {
      constructor(e, t, s) {
        void 0 === e && (e = ""), void 0 === t && (t = 0), (this.value = e), (this.from = t), (this.stop = s);
      }
      toString() {
        return this.value;
      }
      extend(e) {
        this.value += String(e);
      }
      appendTo(e) {
        return e.append(this.toString(), { tail: !0 }).aggregate(e._appendPlaceholder());
      }
      get state() {
        return { value: this.value, from: this.from, stop: this.stop };
      }
      set state(e) {
        Object.assign(this, e);
      }
      unshift(e) {
        if (!this.value.length || (null != e && this.from >= e)) return "";
        let t = this.value[0];
        return (this.value = this.value.slice(1)), t;
      }
      shift() {
        if (!this.value.length) return "";
        let e = this.value[this.value.length - 1];
        return (this.value = this.value.slice(0, -1)), e;
      }
    }
    class b {
      static DEFAULTS = { skipInvalid: !0 };
      static EMPTY_VALUES = [void 0, null, ""];
      constructor(e) {
        (this._value = ""), this._update({ ...b.DEFAULTS, ...e }), (this._initialized = !0);
      }
      updateOptions(e) {
        this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e));
      }
      _update(e) {
        Object.assign(this, e);
      }
      get state() {
        return { _value: this.value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        this._value = e._value;
      }
      reset() {
        this._value = "";
      }
      get value() {
        return this._value;
      }
      set value(e) {
        this.resolve(e, { input: !0 });
      }
      resolve(e, t) {
        void 0 === t && (t = { input: !0 }), this.reset(), this.append(e, t, ""), this.doCommit();
      }
      get unmaskedValue() {
        return this.value;
      }
      set unmaskedValue(e) {
        this.resolve(e, {});
      }
      get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
      }
      set typedValue(e) {
        this.format ? (this.value = this.format(e, this)) : (this.unmaskedValue = String(e));
      }
      get rawInputValue() {
        return this.extractInput(0, this.displayValue.length, { raw: !0 });
      }
      set rawInputValue(e) {
        this.resolve(e, { raw: !0 });
      }
      get displayValue() {
        return this.value;
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return this.isComplete;
      }
      nearestInputPos(e, t) {
        return e;
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), Math.min(this.displayValue.length, t - e);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), this.displayValue.slice(e, t);
      }
      extractTail(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), new C(this.extractInput(e, t), e);
      }
      appendTail(e) {
        return i(e) && (e = new C(String(e))), e.appendTo(this);
      }
      _appendCharRaw(e, t) {
        return e ? ((this._value += e), new A({ inserted: e, rawInserted: e })) : new A();
      }
      _appendChar(e, t, s) {
        void 0 === t && (t = {});
        let i,
          a = this.state;
        if ((([e, i] = this.doPrepareChar(e, t)), e && (i = i.aggregate(this._appendCharRaw(e, t))), i.inserted)) {
          let e,
            n = !1 !== this.doValidate(t);
          if (n && null != s) {
            let t = this.state;
            if (!0 === this.overwrite) {
              e = s.state;
              for (let e = 0; e < i.rawInserted.length; ++e) s.unshift(this.displayValue.length - i.tailShift);
            }
            let a = this.appendTail(s);
            if (!(((n = a.rawInserted.length === s.toString().length) && a.inserted) || "shift" !== this.overwrite)) {
              (this.state = t), (e = s.state);
              for (let e = 0; e < i.rawInserted.length; ++e) s.shift();
              n = (a = this.appendTail(s)).rawInserted.length === s.toString().length;
            }
            n && a.inserted && (this.state = t);
          }
          n || ((i = new A()), (this.state = a), s && e && (s.state = e));
        }
        return i;
      }
      _appendPlaceholder() {
        return new A();
      }
      _appendEager() {
        return new A();
      }
      append(e, t, s) {
        if (!i(e)) throw Error("value should be string");
        let a,
          n = i(s) ? new C(String(s)) : s;
        t?.tail && (t._beforeTailState = this.state), ([e, a] = this.doPrepare(e, t));
        for (let s = 0; s < e.length; ++s) {
          let i = this._appendChar(e[s], t, n);
          if (!i.rawInserted && !this.doSkipInvalid(e[s], t, n)) break;
          a.aggregate(i);
        }
        return (!0 === this.eager || "append" === this.eager) && t?.input && e && a.aggregate(this._appendEager()), null != n && (a.tailShift += this.appendTail(n).tailShift), a;
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), (this._value = this.displayValue.slice(0, e) + this.displayValue.slice(t)), new A();
      }
      withValueRefresh(e) {
        if (this._refreshing || !this._initialized) return e();
        this._refreshing = !0;
        let t = this.rawInputValue,
          s = this.value,
          i = e();
        return (this.rawInputValue = t), this.value && this.value !== s && 0 === s.indexOf(this.value) && (this.append(s.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
      }
      runIsolated(e) {
        if (this._isolated || !this._initialized) return e(this);
        this._isolated = !0;
        let t = this.state,
          s = e(this);
        return (this.state = t), delete this._isolated, s;
      }
      doSkipInvalid(e, t, s) {
        return Boolean(this.skipInvalid);
      }
      doPrepare(e, t) {
        return void 0 === t && (t = {}), A.normalize(this.prepare ? this.prepare(e, this, t) : e);
      }
      doPrepareChar(e, t) {
        return void 0 === t && (t = {}), A.normalize(this.prepareChar ? this.prepareChar(e, this, t) : e);
      }
      doValidate(e) {
        return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
      }
      doCommit() {
        this.commit && this.commit(this.value, this);
      }
      splice(e, t, s, i, a) {
        void 0 === i && (i = r), void 0 === a && (a = { input: !0 });
        let n,
          c = e + t,
          d = this.extractTail(c),
          p = !0 === this.eager || "remove" === this.eager;
        p &&
        ((i = (function (e) {
          switch (e) {
            case o:
              return l;
            case u:
              return h;
            default:
              return e;
          }
        })(i)),
          (n = this.extractInput(0, c, { raw: !0 })));
        let m = e,
          g = new A();
        if ((i !== r && ((m = this.nearestInputPos(e, t > 1 && 0 !== e && !p ? r : i)), (g.tailShift = m - e)), g.aggregate(this.remove(m)), p && i !== r && n === this.rawInputValue))
          if (i === l) {
            let e;
            for (; n === this.rawInputValue && (e = this.displayValue.length); ) g.aggregate(new A({ tailShift: -1 })).aggregate(this.remove(e - 1));
          } else i === h && d.unshift();
        return g.aggregate(this.append(s, a, d));
      }
      maskEquals(e) {
        return this.mask === e;
      }
      optionsIsChanged(e) {
        return !d(this, e);
      }
      typedValueEquals(e) {
        let t = this.typedValue;
        return e === t || (b.EMPTY_VALUES.includes(e) && b.EMPTY_VALUES.includes(t)) || (!!this.format && this.format(e, this) === this.format(this.typedValue, this));
      }
    }
    m.Masked = b;
    class F {
      constructor(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0), (this.chunks = e), (this.from = t);
      }
      toString() {
        return this.chunks.map(String).join("");
      }
      extend(e) {
        if (!String(e)) return;
        e = i(e) ? new C(String(e)) : e;
        let t = this.chunks[this.chunks.length - 1],
          s = t && (t.stop === e.stop || null == e.stop) && e.from === t.from + t.toString().length;
        if (e instanceof C) s ? t.extend(e.toString()) : this.chunks.push(e);
        else if (e instanceof F) {
          if (null == e.stop) {
            let t;
            for (; e.chunks.length && null == e.chunks[0].stop; ) (t = e.chunks.shift()), (t.from += e.from), this.extend(t);
          }
          e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e));
        }
      }
      appendTo(e) {
        if (!(e instanceof m.MaskedPattern)) return new C(this.toString()).appendTo(e);
        let t = new A();
        for (let s = 0; s < this.chunks.length && !t.skip; ++s) {
          let i,
            a = this.chunks[s],
            n = e._mapPosToBlock(e.displayValue.length),
            r = a.stop;
          if (null != r && (!n || n.index <= r)) {
            if (a instanceof F || e._stops.indexOf(r) >= 0) {
              let s = e._appendPlaceholder(r);
              t.aggregate(s);
            }
            i = a instanceof F && e._blocks[r];
          }
          if (i) {
            let s = i.appendTail(a);
            (s.skip = !1), t.aggregate(s), (e._value += s.inserted);
            let n = a.toString().slice(s.rawInserted.length);
            n && t.aggregate(e.append(n, { tail: !0 }));
          } else t.aggregate(e.append(a.toString(), { tail: !0 }));
        }
        return t;
      }
      get state() {
        return { chunks: this.chunks.map((e) => e.state), from: this.from, stop: this.stop, blockIndex: this.blockIndex };
      }
      set state(e) {
        let { chunks: t, ...s } = e;
        Object.assign(this, s),
          (this.chunks = t.map((e) => {
            let t = "chunks" in e ? new F() : new C();
            return (t.state = e), t;
          }));
      }
      unshift(e) {
        if (!this.chunks.length || (null != e && this.from >= e)) return "";
        let t = null != e ? e - this.from : e,
          s = 0;
        for (; s < this.chunks.length; ) {
          let e = this.chunks[s],
            i = e.unshift(t);
          if (e.toString()) {
            if (!i) break;
            ++s;
          } else this.chunks.splice(s, 1);
          if (i) return i;
        }
        return "";
      }
      shift() {
        if (!this.chunks.length) return "";
        let e = this.chunks.length - 1;
        for (; 0 <= e; ) {
          let t = this.chunks[e],
            s = t.shift();
          if (t.toString()) {
            if (!s) break;
            --e;
          } else this.chunks.splice(e, 1);
          if (s) return s;
        }
        return "";
      }
    }
    class x {
      constructor(e, t) {
        (this.masked = e), (this._log = []);
        let { offset: s, index: i } = e._mapPosToBlock(t) || (t < 0 ? { index: 0, offset: 0 } : { index: this.masked._blocks.length, offset: 0 });
        (this.offset = s), (this.index = i), (this.ok = !1);
      }
      get block() {
        return this.masked._blocks[this.index];
      }
      get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
      get state() {
        return { index: this.index, offset: this.offset, ok: this.ok };
      }
      set state(e) {
        Object.assign(this, e);
      }
      pushState() {
        this._log.push(this.state);
      }
      popState() {
        let e = this._log.pop();
        return e && (this.state = e), e;
      }
      bindBlock() {
        this.block || (this.index < 0 && ((this.index = 0), (this.offset = 0)), this.index >= this.masked._blocks.length && ((this.index = this.masked._blocks.length - 1), (this.offset = this.block.displayValue.length)));
      }
      _pushLeft(e) {
        for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = this.block?.displayValue.length || 0) if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      _pushRight(e) {
        for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (e()) return (this.ok = !0);
        return (this.ok = !1);
      }
      pushLeftBeforeFilled() {
        return this._pushLeft(() => {
          if (!this.block.isFixed && this.block.value) return (this.offset = this.block.nearestInputPos(this.offset, l)), 0 !== this.offset || void 0;
        });
      }
      pushLeftBeforeInput() {
        return this._pushLeft(() => {
          if (!this.block.isFixed) return (this.offset = this.block.nearestInputPos(this.offset, o)), !0;
        });
      }
      pushLeftBeforeRequired() {
        return this._pushLeft(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value))) return (this.offset = this.block.nearestInputPos(this.offset, o)), !0;
        });
      }
      pushRightBeforeFilled() {
        return this._pushRight(() => {
          if (!this.block.isFixed && this.block.value) return (this.offset = this.block.nearestInputPos(this.offset, h)), this.offset !== this.block.value.length || void 0;
        });
      }
      pushRightBeforeInput() {
        return this._pushRight(() => {
          if (!this.block.isFixed) return (this.offset = this.block.nearestInputPos(this.offset, r)), !0;
        });
      }
      pushRightBeforeRequired() {
        return this._pushRight(() => {
          if (!(this.block.isFixed || (this.block.isOptional && !this.block.value))) return (this.offset = this.block.nearestInputPos(this.offset, r)), !0;
        });
      }
    }
    class w {
      constructor(e) {
        Object.assign(this, e), (this._value = ""), (this.isFixed = !0);
      }
      get value() {
        return this._value;
      }
      get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
      }
      get rawInputValue() {
        return this._isRawInput ? this.value : "";
      }
      get displayValue() {
        return this.value;
      }
      reset() {
        (this._isRawInput = !1), (this._value = "");
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), (this._value = this._value.slice(0, e) + this._value.slice(t)), this._value || (this._isRawInput = !1), new A();
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = r);
        let s = this._value.length;
        switch (t) {
          case o:
          case l:
            return 0;
          default:
            return s;
        }
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), this._isRawInput ? t - e : 0;
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this._value.length), void 0 === s && (s = {}), (s.raw && this._isRawInput && this._value.slice(e, t)) || "";
      }
      get isComplete() {
        return !0;
      }
      get isFilled() {
        return Boolean(this._value);
      }
      _appendChar(e, t) {
        void 0 === t && (t = {});
        let s = new A();
        if (this.isFilled) return s;
        let i = !0 === this.eager || "append" === this.eager,
          a = this.char === e && (this.isUnmasking || t.input || t.raw) && (!t.raw || !i) && !t.tail;
        return a && (s.rawInserted = this.char), (this._value = s.inserted = this.char), (this._isRawInput = a && (t.raw || t.input)), s;
      }
      _appendEager() {
        return this._appendChar(this.char, { tail: !0 });
      }
      _appendPlaceholder() {
        let e = new A();
        return this.isFilled || (this._value = e.inserted = this.char), e;
      }
      extractTail() {
        return new C("");
      }
      appendTail(e) {
        return i(e) && (e = new C(String(e))), e.appendTo(this);
      }
      append(e, t, s) {
        let i = this._appendChar(e[0], t);
        return null != s && (i.tailShift += this.appendTail(s).tailShift), i;
      }
      doCommit() {}
      get state() {
        return { _value: this._value, _rawInputValue: this.rawInputValue };
      }
      set state(e) {
        (this._value = e._value), (this._isRawInput = Boolean(e._rawInputValue));
      }
    }
    class L {
      static DEFAULT_DEFINITIONS = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./,
      };
      constructor(e) {
        let { parent: t, isOptional: s, placeholderChar: i, displayChar: a, lazy: n, eager: r, ...o } = e;
        (this.masked = k(o)), Object.assign(this, { parent: t, isOptional: s, placeholderChar: i, displayChar: a, lazy: n, eager: r });
      }
      reset() {
        (this.isFilled = !1), this.masked.reset();
      }
      remove(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), 0 === e && t >= 1 ? ((this.isFilled = !1), this.masked.remove(e, t)) : new A();
      }
      get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
      }
      get unmaskedValue() {
        return this.masked.unmaskedValue;
      }
      get rawInputValue() {
        return this.masked.rawInputValue;
      }
      get displayValue() {
        return (this.masked.value && this.displayChar) || this.value;
      }
      get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
      }
      _appendChar(e, t) {
        if ((void 0 === t && (t = {}), this.isFilled)) return new A();
        let s = this.masked.state,
          i = this.masked._appendChar(e, this.currentMaskFlags(t));
        return (
          i.inserted && !1 === this.doValidate(t) && ((i.inserted = i.rawInserted = ""), (this.masked.state = s)),
          i.inserted || this.isOptional || this.lazy || t.input || (i.inserted = this.placeholderChar),
            (i.skip = !i.inserted && !this.isOptional),
            (this.isFilled = Boolean(i.inserted)),
            i
        );
      }
      append(e, t, s) {
        return this.masked.append(e, this.currentMaskFlags(t), s);
      }
      _appendPlaceholder() {
        let e = new A();
        return this.isFilled || this.isOptional || ((this.isFilled = !0), (e.inserted = this.placeholderChar)), e;
      }
      _appendEager() {
        return new A();
      }
      extractTail(e, t) {
        return this.masked.extractTail(e, t);
      }
      appendTail(e) {
        return this.masked.appendTail(e);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.masked.extractInput(e, t, s);
      }
      nearestInputPos(e, t) {
        void 0 === t && (t = r);
        let s = this.value.length,
          i = Math.min(Math.max(e, 0), s);
        switch (t) {
          case o:
          case l:
            return this.isComplete ? i : 0;
          case u:
          case h:
            return this.isComplete ? i : s;
          default:
            return i;
        }
      }
      totalInputPositions(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.value.length), this.value.slice(e, t).length;
      }
      doValidate(e) {
        return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)));
      }
      doCommit() {
        this.masked.doCommit();
      }
      get state() {
        return { _value: this.value, _rawInputValue: this.rawInputValue, masked: this.masked.state, isFilled: this.isFilled };
      }
      set state(e) {
        (this.masked.state = e.masked), (this.isFilled = e.isFilled);
      }
      currentMaskFlags(e) {
        return { ...e, _beforeTailState: e?._beforeTailState?.masked || e?._beforeTailState };
      }
    }
    m.MaskedRegExp = class extends b {
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let t = e.mask;
        t && (e.validate = (e) => e.search(t) >= 0), super._update(e);
      }
    };
    class B extends b {
      static DEFAULTS = { lazy: !0, placeholderChar: "_" };
      static STOP_CHAR = "`";
      static ESCAPE_CHAR = "\\";
      static InputDefinition = L;
      static FixedDefinition = w;
      constructor(e) {
        super({ ...B.DEFAULTS, ...e, definitions: Object.assign({}, L.DEFAULT_DEFINITIONS, e?.definitions) });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        (e.definitions = Object.assign({}, this.definitions, e.definitions)), super._update(e), this._rebuildMask();
      }
      _rebuildMask() {
        let e = this.definitions;
        (this._blocks = []), (this.exposeBlock = void 0), (this._stops = []), (this._maskedBlocks = {});
        let t = this.mask;
        if (!t || !e) return;
        let s = !1,
          i = !1;
        for (let a = 0; a < t.length; ++a) {
          if (this.blocks) {
            let e = t.slice(a),
              s = Object.keys(this.blocks).filter((t) => 0 === e.indexOf(t));
            s.sort((e, t) => t.length - e.length);
            let i = s[0];
            if (i) {
              let { expose: e, repeat: t, ...s } = f(this.blocks[i]),
                n = { lazy: this.lazy, eager: this.eager, placeholderChar: this.placeholderChar, displayChar: this.displayChar, overwrite: this.overwrite, ...s, repeat: t, parent: this },
                r = null != t ? new m.RepeatBlock(n) : k(n);
              r && (this._blocks.push(r), e && (this.exposeBlock = r), this._maskedBlocks[i] || (this._maskedBlocks[i] = []), this._maskedBlocks[i].push(this._blocks.length - 1)), (a += i.length - 1);
              continue;
            }
          }
          let n = t[a],
            r = n in e;
          if (n === B.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if ("{" === n || "}" === n) {
            s = !s;
            continue;
          }
          if ("[" === n || "]" === n) {
            i = !i;
            continue;
          }
          if (n === B.ESCAPE_CHAR) {
            if (!(n = t[++a])) break;
            r = !1;
          }
          let o = r
            ? new L({ isOptional: i, lazy: this.lazy, eager: this.eager, placeholderChar: this.placeholderChar, displayChar: this.displayChar, ...f(e[n]), parent: this })
            : new w({ char: n, eager: this.eager, isUnmasking: s });
          this._blocks.push(o);
        }
      }
      get state() {
        return { ...super.state, _blocks: this._blocks.map((e) => e.state) };
      }
      set state(e) {
        if (!e) return void this.reset();
        let { _blocks: t, ...s } = e;
        this._blocks.forEach((e, s) => (e.state = t[s])), (super.state = s);
      }
      reset() {
        super.reset(), this._blocks.forEach((e) => e.reset());
      }
      get isComplete() {
        return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e) => e.isComplete);
      }
      get isFilled() {
        return this._blocks.every((e) => e.isFilled);
      }
      get isFixed() {
        return this._blocks.every((e) => e.isFixed);
      }
      get isOptional() {
        return this._blocks.every((e) => e.isOptional);
      }
      doCommit() {
        this._blocks.forEach((e) => e.doCommit()), super.doCommit();
      }
      get unmaskedValue() {
        return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, t) => e + t.unmaskedValue, "");
      }
      set unmaskedValue(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.unmaskedValue = e), this.appendTail(t), this.doCommit();
        } else super.unmaskedValue = e;
      }
      get value() {
        return this.exposeBlock ? this.exposeBlock.value : this._blocks.reduce((e, t) => e + t.value, "");
      }
      set value(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.value = e), this.appendTail(t), this.doCommit();
        } else super.value = e;
      }
      get typedValue() {
        return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
      }
      set typedValue(e) {
        if (this.exposeBlock) {
          let t = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
          (this.exposeBlock.typedValue = e), this.appendTail(t), this.doCommit();
        } else super.typedValue = e;
      }
      get displayValue() {
        return this._blocks.reduce((e, t) => e + t.displayValue, "");
      }
      appendTail(e) {
        return super.appendTail(e).aggregate(this._appendPlaceholder());
      }
      _appendEager() {
        let e = new A(),
          t = this._mapPosToBlock(this.displayValue.length)?.index;
        if (null == t) return e;
        this._blocks[t].isFilled && ++t;
        for (let s = t; s < this._blocks.length; ++s) {
          let t = this._blocks[s]._appendEager();
          if (!t.inserted) break;
          e.aggregate(t);
        }
        return e;
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        let s = this._mapPosToBlock(this.displayValue.length),
          i = new A();
        if (!s) return i;
        for (let a, n = s.index; (a = this._blocks[n]); ++n) {
          let s = a._appendChar(e, { ...t, _beforeTailState: t._beforeTailState?._blocks?.[n] });
          if ((i.aggregate(s), s.skip || s.rawInserted)) break;
        }
        return i;
      }
      extractTail(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = new F();
        return (
          e === t ||
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            let n = e.extractTail(i, a);
            (n.stop = this._findStopBefore(t)), (n.from = this._blockStartPos(t)), n instanceof F && (n.blockIndex = t), s.extend(n);
          }),
            s
        );
      }
      extractInput(e, t, s) {
        if ((void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), void 0 === s && (s = {}), e === t)) return "";
        let i = "";
        return (
          this._forEachBlocksInRange(e, t, (e, t, a, n) => {
            i += e.extractInput(a, n, s);
          }),
            i
        );
      }
      _findStopBefore(e) {
        let t;
        for (let s = 0; s < this._stops.length; ++s) {
          let i = this._stops[s];
          if (!(i <= e)) break;
          t = i;
        }
        return t;
      }
      _appendPlaceholder(e) {
        let t = new A();
        if (this.lazy && null == e) return t;
        let s = this._mapPosToBlock(this.displayValue.length);
        if (!s) return t;
        let i = s.index,
          a = null != e ? e : this._blocks.length;
        return (
          this._blocks.slice(i, a).forEach((s) => {
            if (!s.lazy || null != e) {
              let e = s._appendPlaceholder(s._blocks?.length);
              (this._value += e.inserted), t.aggregate(e);
            }
          }),
            t
        );
      }
      _mapPosToBlock(e) {
        let t = "";
        for (let s = 0; s < this._blocks.length; ++s) {
          let i = this._blocks[s],
            a = t.length;
          if (e <= (t += i.displayValue).length) return { index: s, offset: e - a };
        }
      }
      _blockStartPos(e) {
        return this._blocks.slice(0, e).reduce((e, t) => e + t.displayValue.length, 0);
      }
      _forEachBlocksInRange(e, t, s) {
        void 0 === t && (t = this.displayValue.length);
        let i = this._mapPosToBlock(e);
        if (i) {
          let e = this._mapPosToBlock(t),
            a = e && i.index === e.index,
            n = i.offset,
            r = e && a ? e.offset : this._blocks[i.index].displayValue.length;
          if ((s(this._blocks[i.index], i.index, n, r), e && !a)) {
            for (let t = i.index + 1; t < e.index; ++t) s(this._blocks[t], t, 0, this._blocks[t].displayValue.length);
            s(this._blocks[e.index], e.index, 0, e.offset);
          }
        }
      }
      remove(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = super.remove(e, t);
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            s.aggregate(e.remove(i, a));
          }),
            s
        );
      }
      nearestInputPos(e, t) {
        if ((void 0 === t && (t = r), !this._blocks.length)) return 0;
        let s = new x(this, e);
        if (t === r) return s.pushRightBeforeInput() ? s.pos : (s.popState(), s.pushLeftBeforeInput() ? s.pos : this.displayValue.length);
        if (t === o || t === l) {
          if (t === o) {
            if ((s.pushRightBeforeFilled(), s.ok && s.pos === e)) return e;
            s.popState();
          }
          if ((s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), t === o)) {
            if ((s.pushRightBeforeInput(), s.pushRightBeforeRequired(), (s.ok && s.pos <= e) || (s.popState(), s.ok && s.pos <= e))) return s.pos;
            s.popState();
          }
          return s.ok ? s.pos : t === l ? 0 : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
        }
        return t === u || t === h
          ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : t === h ? this.displayValue.length : (s.popState(), s.ok ? s.pos : (s.popState(), s.ok ? s.pos : this.nearestInputPos(e, o))))
          : e;
      }
      totalInputPositions(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
        let s = 0;
        return (
          this._forEachBlocksInRange(e, t, (e, t, i, a) => {
            s += e.totalInputPositions(i, a);
          }),
            s
        );
      }
      maskedBlock(e) {
        return this.maskedBlocks(e)[0];
      }
      maskedBlocks(e) {
        let t = this._maskedBlocks[e];
        return t ? t.map((e) => this._blocks[e]) : [];
      }
    }
    m.MaskedPattern = B;
    class D extends B {
      get _matchFrom() {
        return this.maxLength - String(this.from).length;
      }
      constructor(e) {
        super(e);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let { to: t = this.to || 0, from: s = this.from || 0, maxLength: i = this.maxLength || 0, autofix: a = this.autofix, ...n } = e;
        (this.to = t), (this.from = s), (this.maxLength = Math.max(String(t).length, i)), (this.autofix = a);
        let r = String(this.from).padStart(this.maxLength, "0"),
          o = String(this.to).padStart(this.maxLength, "0"),
          l = 0;
        for (; l < o.length && o[l] === r[l]; ) ++l;
        (n.mask = o.slice(0, l).replace(/0/g, "\\0") + "0".repeat(this.maxLength - l)), super._update(n);
      }
      get isComplete() {
        return super.isComplete && Boolean(this.value);
      }
      boundaries(e) {
        let t = "",
          s = "",
          [, i, a] = e.match(/^(\D*)(\d*)(\D*)/) || [];
        return a && ((t = "0".repeat(i.length) + a), (s = "9".repeat(i.length) + a)), [(t = t.padEnd(this.maxLength, "0")), (s = s.padEnd(this.maxLength, "9"))];
      }
      doPrepareChar(e, t) {
        let s;
        if ((void 0 === t && (t = {}), ([e, s] = super.doPrepareChar(e.replace(/\D/g, ""), t)), !this.autofix || !e)) return (s.skip = !this.isComplete), [e, s];
        let i = String(this.from).padStart(this.maxLength, "0"),
          a = String(this.to).padStart(this.maxLength, "0"),
          n = this.value + e;
        if (n.length > this.maxLength) return ["", s];
        let [r, o] = this.boundaries(n);
        return Number(o) < this.from ? [i[n.length - 1], s] : Number(r) > this.to ? ("pad" === this.autofix && n.length < this.maxLength ? ["", s.aggregate(this.append(i[n.length - 1] + e, t))] : [a[n.length - 1], s]) : [e, s];
      }
      doValidate(e) {
        let t = this.value;
        if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom) return !0;
        let [s, i] = this.boundaries(t);
        return this.from <= Number(i) && Number(s) <= this.to && super.doValidate(e);
      }
    }
    m.MaskedRange = D;
    class I extends B {
      static GET_DEFAULT_BLOCKS = () => ({ d: { mask: D, from: 1, to: 31, maxLength: 2 }, m: { mask: D, from: 1, to: 12, maxLength: 2 }, Y: { mask: D, from: 1900, to: 9999 } });
      static DEFAULTS = {
        mask: Date,
        pattern: "d{.}`m{.}`Y",
        format: (e, t) => (e ? [String(e.getDate()).padStart(2, "0"), String(e.getMonth() + 1).padStart(2, "0"), e.getFullYear()].join(".") : ""),
        parse(e, t) {
          let [s, i, a] = e.split(".").map(Number);
          return new Date(a, i - 1, s);
        },
      };
      static extractPatternOptions(e) {
        let { mask: t, pattern: s, ...a } = e;
        return { ...a, mask: i(t) ? t : s };
      }
      constructor(e) {
        super(I.extractPatternOptions({ ...I.DEFAULTS, ...e }));
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        let { mask: t, pattern: s, blocks: a, ...n } = { ...I.DEFAULTS, ...e },
          r = Object.assign({}, I.GET_DEFAULT_BLOCKS());
        e.min && (r.Y.from = e.min.getFullYear()),
        e.max && (r.Y.to = e.max.getFullYear()),
        e.min && e.max && r.Y.from === r.Y.to && ((r.m.from = e.min.getMonth() + 1), (r.m.to = e.max.getMonth() + 1), r.m.from === r.m.to && ((r.d.from = e.min.getDate()), (r.d.to = e.max.getDate()))),
          Object.assign(r, this.blocks, a),
          Object.keys(r).forEach((t) => {
            let s = r[t];
            !("autofix" in s) && "autofix" in e && (s.autofix = e.autofix);
          }),
          super._update({ ...n, mask: i(t) ? t : s, blocks: r });
      }
      doValidate(e) {
        let t = this.date;
        return super.doValidate(e) && (!this.isComplete || (this.isDateExist(this.value) && null != t && (null == this.min || this.min <= t) && (null == this.max || t <= this.max)));
      }
      isDateExist(e) {
        return this.format(this.parse(e, this), this).indexOf(e) >= 0;
      }
      get date() {
        return this.typedValue;
      }
      set date(e) {
        this.typedValue = e;
      }
      get typedValue() {
        return this.isComplete ? super.typedValue : null;
      }
      set typedValue(e) {
        super.typedValue = e;
      }
      maskEquals(e) {
        return e === Date || super.maskEquals(e);
      }
      optionsIsChanged(e) {
        return super.optionsIsChanged(I.extractPatternOptions(e));
      }
    }
    m.MaskedDate = I;
    class M extends b {
      static DEFAULTS;
      constructor(e) {
        super({ ...M.DEFAULTS, ...e }), (this.currentMask = void 0);
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e),
        "mask" in e &&
        ((this.exposeMask = void 0),
          (this.compiledMasks = Array.isArray(e.mask)
            ? e.mask.map((e) => {
              let { expose: t, ...s } = f(e),
                i = k({ overwrite: this._overwrite, eager: this._eager, skipInvalid: this._skipInvalid, ...s });
              return t && (this.exposeMask = i), i;
            })
            : []));
      }
      _appendCharRaw(e, t) {
        void 0 === t && (t = {});
        let s = this._applyDispatch(e, t);
        return this.currentMask && s.aggregate(this.currentMask._appendChar(e, this.currentMaskFlags(t))), s;
      }
      _applyDispatch(e, t, s) {
        void 0 === e && (e = ""), void 0 === t && (t = {}), void 0 === s && (s = "");
        let i = t.tail && null != t._beforeTailState ? t._beforeTailState._value : this.value,
          a = this.rawInputValue,
          n = t.tail && null != t._beforeTailState ? t._beforeTailState._rawInputValue : a,
          r = a.slice(n.length),
          o = this.currentMask,
          l = new A(),
          u = o?.state;
        if (((this.currentMask = this.doDispatch(e, { ...t }, s)), this.currentMask))
          if (this.currentMask !== o) {
            if ((this.currentMask.reset(), n)) {
              let e = this.currentMask.append(n, { raw: !0 });
              l.tailShift = e.inserted.length - i.length;
            }
            r && (l.tailShift += this.currentMask.append(r, { raw: !0, tail: !0 }).tailShift);
          } else u && (this.currentMask.state = u);
        return l;
      }
      _appendPlaceholder() {
        let e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendPlaceholder()), e;
      }
      _appendEager() {
        let e = this._applyDispatch();
        return this.currentMask && e.aggregate(this.currentMask._appendEager()), e;
      }
      appendTail(e) {
        let t = new A();
        return e && t.aggregate(this._applyDispatch("", {}, e)), t.aggregate(this.currentMask ? this.currentMask.appendTail(e) : super.appendTail(e));
      }
      currentMaskFlags(e) {
        return { ...e, _beforeTailState: (e._beforeTailState?.currentMaskRef === this.currentMask && e._beforeTailState?.currentMask) || e._beforeTailState };
      }
      doDispatch(e, t, s) {
        return void 0 === t && (t = {}), void 0 === s && (s = ""), this.dispatch(e, this, t, s);
      }
      doValidate(e) {
        return super.doValidate(e) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(e)));
      }
      doPrepare(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepare(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepare(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepareChar(e, t);
        if (this.currentMask) {
          let e;
          ([s, e] = super.doPrepareChar(s, this.currentMaskFlags(t))), (i = i.aggregate(e));
        }
        return [s, i];
      }
      reset() {
        this.currentMask?.reset(), this.compiledMasks.forEach((e) => e.reset());
      }
      get value() {
        return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : "";
      }
      set value(e) {
        this.exposeMask ? ((this.exposeMask.value = e), (this.currentMask = this.exposeMask), this._applyDispatch()) : (super.value = e);
      }
      get unmaskedValue() {
        return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : "";
      }
      set unmaskedValue(e) {
        this.exposeMask ? ((this.exposeMask.unmaskedValue = e), (this.currentMask = this.exposeMask), this._applyDispatch()) : (super.unmaskedValue = e);
      }
      get typedValue() {
        return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : "";
      }
      set typedValue(e) {
        if (this.exposeMask) return (this.exposeMask.typedValue = e), (this.currentMask = this.exposeMask), void this._applyDispatch();
        let t = String(e);
        this.currentMask && ((this.currentMask.typedValue = e), (t = this.currentMask.unmaskedValue)), (this.unmaskedValue = t);
      }
      get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
      }
      get isComplete() {
        return Boolean(this.currentMask?.isComplete);
      }
      get isFilled() {
        return Boolean(this.currentMask?.isFilled);
      }
      remove(e, t) {
        let s = new A();
        return this.currentMask && s.aggregate(this.currentMask.remove(e, t)).aggregate(this._applyDispatch()), s;
      }
      get state() {
        return { ...super.state, _rawInputValue: this.rawInputValue, compiledMasks: this.compiledMasks.map((e) => e.state), currentMaskRef: this.currentMask, currentMask: this.currentMask?.state };
      }
      set state(e) {
        let { compiledMasks: t, currentMaskRef: s, currentMask: i, ...a } = e;
        t && this.compiledMasks.forEach((e, s) => (e.state = t[s])), null != s && ((this.currentMask = s), (this.currentMask.state = i)), (super.state = a);
      }
      extractInput(e, t, s) {
        return this.currentMask ? this.currentMask.extractInput(e, t, s) : "";
      }
      extractTail(e, t) {
        return this.currentMask ? this.currentMask.extractTail(e, t) : super.extractTail(e, t);
      }
      doCommit() {
        this.currentMask && this.currentMask.doCommit(), super.doCommit();
      }
      nearestInputPos(e, t) {
        return this.currentMask ? this.currentMask.nearestInputPos(e, t) : super.nearestInputPos(e, t);
      }
      get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
      }
      set overwrite(e) {
        this._overwrite = e;
      }
      get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
      }
      set eager(e) {
        this._eager = e;
      }
      get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
      }
      set skipInvalid(e) {
        this._skipInvalid = e;
      }
      maskEquals(e) {
        return Array.isArray(e)
          ? this.compiledMasks.every((t, s) => {
            if (!e[s]) return;
            let { mask: i, ...a } = e[s];
            return d(t, a) && t.maskEquals(i);
          })
          : super.maskEquals(e);
      }
      typedValueEquals(e) {
        return Boolean(this.currentMask?.typedValueEquals(e));
      }
    }
    (M.DEFAULTS = {
      dispatch(e, t, s, i) {
        if (!t.compiledMasks.length) return;
        let a = t.rawInputValue,
          n = t.compiledMasks.map((n, r) => {
            let o = t.currentMask === n,
              u = o ? n.displayValue.length : n.nearestInputPos(n.displayValue.length, l);
            return (
              n.rawInputValue !== a ? (n.reset(), n.append(a, { raw: !0 })) : o || n.remove(u),
                n.append(e, t.currentMaskFlags(s)),
                n.appendTail(i),
                { index: r, weight: n.rawInputValue.length, totalInputPositions: n.totalInputPositions(0, Math.max(u, n.nearestInputPos(n.displayValue.length, l))) }
            );
          });
        return n.sort((e, t) => t.weight - e.weight || t.totalInputPositions - e.totalInputPositions), t.compiledMasks[n[0].index];
      },
    }),
      (m.MaskedDynamic = M),
      (m.MaskedEnum = class extends B {
        constructor(e) {
          super(e);
        }
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          let { enum: t, ...s } = e;
          if (t) {
            let e = t.map((e) => e.length),
              i = Math.min(...e),
              a = Math.max(...e) - i;
            (s.mask = "*".repeat(i)), a && (s.mask += "[" + "*".repeat(a) + "]"), (this.enum = t);
          }
          super._update(s);
        }
        doValidate(e) {
          return this.enum.some((e) => 0 === e.indexOf(this.unmaskedValue)) && super.doValidate(e);
        }
      }),
      (m.MaskedFunction = class extends b {
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          super._update({ ...e, validate: e.mask });
        }
      });
    class V extends b {
      static UNMASKED_RADIX = ".";
      static EMPTY_VALUES = [...b.EMPTY_VALUES, 0];
      static DEFAULTS = {
        mask: Number,
        radix: ",",
        thousandsSeparator: "",
        mapToRadix: [V.UNMASKED_RADIX],
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER,
        scale: 2,
        normalizeZeros: !0,
        padFractionalZeros: !1,
        parse: Number,
        format: (e) => e.toLocaleString("en-US", { useGrouping: !1, maximumFractionDigits: 20 }),
      };
      constructor(e) {
        super({ ...V.DEFAULTS, ...e });
      }
      updateOptions(e) {
        super.updateOptions(e);
      }
      _update(e) {
        super._update(e), this._updateRegExps();
      }
      _updateRegExps() {
        let e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
          t = (this.scale ? `(${c(this.radix)}\\d{0,${this.scale}})?` : "") + "$";
        (this._numberRegExp = RegExp(e + "\\d*" + t)), (this._mapToRadixRegExp = RegExp(`[${this.mapToRadix.map(c).join("")}]`, "g")), (this._thousandsSeparatorRegExp = RegExp(c(this.thousandsSeparator), "g"));
      }
      _removeThousandsSeparators(e) {
        return e.replace(this._thousandsSeparatorRegExp, "");
      }
      _insertThousandsSeparators(e) {
        let t = e.split(this.radix);
        return (t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator)), t.join(this.radix);
      }
      doPrepareChar(e, t) {
        void 0 === t && (t = {});
        let [s, i] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && ((t.input && t.raw) || (!t.input && !t.raw)) ? e.replace(this._mapToRadixRegExp, this.radix) : e), t);
        return e && !s && (i.skip = !0), !s || this.allowPositive || this.value || "-" === s || i.aggregate(this._appendChar("-")), [s, i];
      }
      _separatorsCount(e, t) {
        void 0 === t && (t = !1);
        let s = 0;
        for (let i = 0; i < e; ++i) this._value.indexOf(this.thousandsSeparator, i) === i && (++s, t && (e += this.thousandsSeparator.length));
        return s;
      }
      _separatorsCountFromSlice(e) {
        return void 0 === e && (e = this._value), this._separatorsCount(this._removeThousandsSeparators(e).length, !0);
      }
      extractInput(e, t, s) {
        return void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), ([e, t] = this._adjustRangeWithSeparators(e, t)), this._removeThousandsSeparators(super.extractInput(e, t, s));
      }
      _appendCharRaw(e, t) {
        if ((void 0 === t && (t = {}), !this.thousandsSeparator)) return super._appendCharRaw(e, t);
        let s = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          i = this._separatorsCountFromSlice(s);
        this._value = this._removeThousandsSeparators(this.value);
        let a = super._appendCharRaw(e, t);
        this._value = this._insertThousandsSeparators(this._value);
        let n = t.tail && t._beforeTailState ? t._beforeTailState._value : this._value,
          r = this._separatorsCountFromSlice(n);
        return (a.tailShift += (r - i) * this.thousandsSeparator.length), (a.skip = !a.rawInserted && e === this.thousandsSeparator), a;
      }
      _findSeparatorAround(e) {
        if (this.thousandsSeparator) {
          let t = e - this.thousandsSeparator.length + 1,
            s = this.value.indexOf(this.thousandsSeparator, t);
          if (s <= e) return s;
        }
        return -1;
      }
      _adjustRangeWithSeparators(e, t) {
        let s = this._findSeparatorAround(e);
        s >= 0 && (e = s);
        let i = this._findSeparatorAround(t);
        return i >= 0 && (t = i + this.thousandsSeparator.length), [e, t];
      }
      remove(e, t) {
        void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length), ([e, t] = this._adjustRangeWithSeparators(e, t));
        let s = this.value.slice(0, e),
          i = this.value.slice(t),
          a = this._separatorsCount(s.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(s + i));
        let n = this._separatorsCountFromSlice(s);
        return new A({ tailShift: (n - a) * this.thousandsSeparator.length });
      }
      nearestInputPos(e, t) {
        if (!this.thousandsSeparator) return e;
        switch (t) {
          case r:
          case o:
          case l: {
            let s = this._findSeparatorAround(e - 1);
            if (s >= 0) {
              let i = s + this.thousandsSeparator.length;
              if (e < i || this.value.length <= i || t === l) return s;
            }
            break;
          }
          case u:
          case h: {
            let t = this._findSeparatorAround(e);
            if (t >= 0) return t + this.thousandsSeparator.length;
          }
        }
        return e;
      }
      doValidate(e) {
        let t = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (t) {
          let e = this.number;
          t = t && !isNaN(e) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
        }
        return t && super.doValidate(e);
      }
      doCommit() {
        if (this.value) {
          let e = this.number,
            t = e;
          null != this.min && (t = Math.max(t, this.min)), null != this.max && (t = Math.min(t, this.max)), t !== e && (this.unmaskedValue = this.format(t, this));
          let s = this.value;
          this.normalizeZeros && (s = this._normalizeZeros(s)), this.padFractionalZeros && this.scale > 0 && (s = this._padFractionalZeros(s)), (this._value = s);
        }
        super.doCommit();
      }
      _normalizeZeros(e) {
        let t = this._removeThousandsSeparators(e).split(this.radix);
        return (
          (t[0] = t[0].replace(/^(\D*)(0*)(\d*)/, (e, t, s, i) => t + i)),
          e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
          t.length > 1 && ((t[1] = t[1].replace(/0*$/, "")), t[1].length || (t.length = 1)),
            this._insertThousandsSeparators(t.join(this.radix))
        );
      }
      _padFractionalZeros(e) {
        if (!e) return e;
        let t = e.split(this.radix);
        return t.length < 2 && t.push(""), (t[1] = t[1].padEnd(this.scale, "0")), t.join(this.radix);
      }
      doSkipInvalid(e, t, s) {
        void 0 === t && (t = {});
        let i = 0 === this.scale && e !== this.thousandsSeparator && (e === this.radix || e === V.UNMASKED_RADIX || this.mapToRadix.includes(e));
        return super.doSkipInvalid(e, t, s) && !i;
      }
      get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, V.UNMASKED_RADIX);
      }
      set unmaskedValue(e) {
        super.unmaskedValue = e;
      }
      get typedValue() {
        return this.parse(this.unmaskedValue, this);
      }
      set typedValue(e) {
        this.rawInputValue = this.format(e, this).replace(V.UNMASKED_RADIX, this.radix);
      }
      get number() {
        return this.typedValue;
      }
      set number(e) {
        this.typedValue = e;
      }
      get allowNegative() {
        return (null != this.min && this.min < 0) || (null != this.max && this.max < 0);
      }
      get allowPositive() {
        return (null != this.min && this.min > 0) || (null != this.max && this.max > 0);
      }
      typedValueEquals(e) {
        return (super.typedValueEquals(e) || (V.EMPTY_VALUES.includes(e) && V.EMPTY_VALUES.includes(this.typedValue))) && !(0 === e && "" === this.value);
      }
    }
    m.MaskedNumber = V;
    let T = { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" };
    function q(e, t, s) {
      void 0 === t && (t = T.MASKED), void 0 === s && (s = T.MASKED);
      let i = k(e);
      return (e) => i.runIsolated((i) => ((i[t] = e), i[s]));
    }
    (m.PIPE_TYPE = T),
      (m.createPipe = q),
      (m.pipe = function (e, t, s, i) {
        return q(t, s, i)(e);
      }),
      (m.RepeatBlock = class extends B {
        get repeatFrom() {
          return (Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === 1 / 0 ? 0 : this.repeat) ?? 0;
        }
        get repeatTo() {
          return (Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) ?? 1 / 0;
        }
        constructor(e) {
          super(e);
        }
        updateOptions(e) {
          super.updateOptions(e);
        }
        _update(e) {
          let { repeat: t, ...s } = f(e);
          this._blockOpts = Object.assign({}, this._blockOpts, s);
          let i = k(this._blockOpts);
          (this.repeat = t ?? i.repeat ?? this.repeat ?? 1 / 0),
            super._update({
              mask: "m".repeat(Math.max((this.repeatTo === 1 / 0 && this._blocks?.length) || 0, this.repeatFrom)),
              blocks: { m: i },
              eager: i.eager,
              overwrite: i.overwrite,
              skipInvalid: i.skipInvalid,
              lazy: i.lazy,
              placeholderChar: i.placeholderChar,
              displayChar: i.displayChar,
            });
        }
        _allocateBlock(e) {
          return e < this._blocks.length
            ? this._blocks[e]
            : this.repeatTo === 1 / 0 || this._blocks.length < this.repeatTo
              ? (this._blocks.push(k(this._blockOpts)), (this.mask += "m"), this._blocks[this._blocks.length - 1])
              : void 0;
        }
        _appendCharRaw(e, t) {
          void 0 === t && (t = {});
          let s = new A();
          for (let i, a, n = this._mapPosToBlock(this.displayValue.length)?.index ?? Math.max(this._blocks.length - 1, 0); (i = this._blocks[n] ?? (a = !a && this._allocateBlock(n))); ++n) {
            let r = i._appendChar(e, { ...t, _beforeTailState: t._beforeTailState?._blocks?.[n] });
            if (r.skip && a) {
              this._blocks.pop(), (this.mask = this.mask.slice(1));
              break;
            }
            if ((s.aggregate(r), r.skip || r.rawInserted)) break;
          }
          return s;
        }
        _trimEmptyTail(e, t) {
          void 0 === e && (e = 0);
          let s,
            i = Math.max(this._mapPosToBlock(e)?.index || 0, this.repeatFrom, 0);
          null != t && (s = this._mapPosToBlock(t)?.index), null == s && (s = this._blocks.length - 1);
          let a = 0;
          for (let e = s; i <= e && !this._blocks[e].unmaskedValue; --e, ++a);
          a && (this._blocks.splice(s - a + 1, a), (this.mask = this.mask.slice(a)));
        }
        reset() {
          super.reset(), this._trimEmptyTail();
        }
        remove(e, t) {
          void 0 === e && (e = 0), void 0 === t && (t = this.displayValue.length);
          let s = super.remove(e, t);
          return this._trimEmptyTail(e, t), s;
        }
        totalInputPositions(e, t) {
          return void 0 === e && (e = 0), null == t && this.repeatTo === 1 / 0 ? 1 / 0 : super.totalInputPositions(e, t);
        }
        get state() {
          return super.state;
        }
        set state(e) {
          (this._blocks.length = e._blocks.length), (this.mask = this.mask.slice(0, this._blocks.length)), (super.state = e);
        }
      });
    try {
      globalThis.IMask = m;
    } catch {}
    document.querySelectorAll('input[type="tel"]').forEach((e) => {
      m(e, { mask: "+{7}(000)000-00-00" });
    }),
      s(122),
      s(158),
      s(478),
      s(964),
      s(195),
      s(396),
      s(204),
      s(983),
      s(851),
      s(115),
      s(392),
      s(429),
      s(367),
      s(906),
      s(640);
  })();
})();



