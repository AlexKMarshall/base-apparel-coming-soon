const form = document.querySelector("form");
form.setAttribute("novalidate", true);
const emailField = document.querySelector("#email");
const emailErrorText = document.querySelector("#error-for-email");
const emailIcon = document.querySelector("#icon-for-email");

const showElement = (element) => {
  element.style.display = "block";
  element.style.visibility = "visible";
};

const hideElement = (element) => {
  element.style.display = "none";
  element.style.visibility = "hidden";
};

const inputIsValid = (field) => {
  return field.validity.valid;
};

const showError = () => {
  emailField.classList.add("error");
  [emailErrorText, emailIcon].forEach((element) => {
    showElement(element);
  });
  emailField.setAttribute("aria-describedby", "error-for-email");
};

const removeError = () => {
  emailField.classList.remove("error");
  [emailErrorText, emailIcon].forEach((element) => {
    hideElement(element);
  });
  emailField.removeAttribute("aria-describedby");
};

document.addEventListener(
  "blur",
  (event) => {
    if (event.target.id !== "email") return;

    const valid = inputIsValid(event.target);

    if (!valid) {
      showError();
      return;
    }

    removeError();
  },
  true
);
