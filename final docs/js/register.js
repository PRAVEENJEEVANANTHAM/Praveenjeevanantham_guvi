(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// Focus Icons
const inputs = document.querySelectorAll("input");

console.log(typeof inputs);

Object.keys(inputs).map((key, input) => onBlurOnFocus(inputs[key]));

function onBlurOnFocus(input) {
  input.onfocus = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
  };
  input.onblur = (e) => {
    e.target.previousElementSibling.classList.toggle("text-primary");
  };
}
