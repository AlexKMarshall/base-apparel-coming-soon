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

document.addEventListener(
  "blur",
  (event) => {
    if (event.target.id !== "email") return;

    const valid = inputIsValid(event.target);

    if (!valid) {
      showError();
      return;
    }
  },
  true
);

// emailField.addEventListener(blur, (event) => {
//   console.log("in listener", event.target);
//   const isValid = inputIsValid(event.target);
//   if (!valid) {
//     showError();
//     return;
//   }
// });

// const hasError = (field) => {
//   if (field.type === "button") return;
//   if (field.validity.valid) return;
//   return "Please provide a valid email";
// };

// const showErrorOld = (field, error) => {
//   field.classList.add("error");
//   const id = field.id || field.name;
//   if (!id) return;

//   const errorId = `error-for-${id}`;

//   let message = field.form.querySelector(`.error-message#${errorId}`);
//   if (!message) {
//     message = document.createElement("div");
//     message.className = "error-message";
//     message.id = errorId;
//     field.parentNode.insertBefore(message, field.nextSibling);
//   }

//   field.setAttribute("aria-describedby", errorId);

//   message.innerHTML = error;

//   message.style.display = "block";
//   message.style.visibility = "visible";
// };

// const removeError = (field) => {
//   field.classList.remove("error");

//   field.removeAttribute("aria-describedby");

//   const id = field.id || field.name;
//   if (!id) return;

//   const message = field.form.querySelector(`.error-message#error-for-${id}`);
//   if (!message) return;

//   message.innerHTML = "";
//   message.style.display = "none";
//   message.style.visibility = "hidden";
// };

// document.addEventListener(
//   "blur",
//   (event) => {
//     const error = hasError(event.target);

//     if (error) {
//       showErrorOld(event.target, error);
//       return;
//     }

//     removeError(event.target);
//   },
//   true
// );

// const emailField = document.querySelector("input");
// const validityState = emailField.validity;
