import IMask from "imask";

document.querySelectorAll('input[type="tel"]').forEach((element) => {
  IMask(element, {
    mask: "+{7}(#00)000-00-00",
    definitions: {
      '#': /[01234569]/
    },
    placeholderChar: ' '
  });
});
