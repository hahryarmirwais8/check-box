// Selecting the checkboxes from the UI
const customCheckbox = document.getElementById("customCheckbox");
const nativeCheckbox = document.getElementById("nativeCheckbox");

// Updating the custom checkbox, checked or uncheked state
function updateCustomCheckboxState() {
  const isChecked = customCheckbox.classList.toggle("checked");
  nativeCheckbox.checked = isChecked;
}

// Updating the native checkbox, checked or uncheked state
function updateNativeCheckboxState() {
  const isChecked = nativeCheckbox.checked;
  customCheckbox.classList.toggle("checked", isChecked);
}

// Setting Event Listeners on custom checkbox and catching if its spacebar key stroke
// this event is used to update check or uncheck state
customCheckbox.addEventListener("click", updateCustomCheckboxState);
customCheckbox.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Spacebar") {
    event.preventDefault();
    updateCustomCheckboxState();
  }
});

// Updating the custom checkbox, checked or uncheked state event
nativeCheckbox.addEventListener("change", updateNativeCheckboxState);

//while tab is pressed update the ui for the custom checkbox while on native checkbox
nativeCheckbox.addEventListener("focus", (event) => {
  customCheckbox.classList.add("focus");
});
// remove the style from custom checkbox
nativeCheckbox.addEventListener("blur", () => {
  customCheckbox.classList.remove("focus");
});
