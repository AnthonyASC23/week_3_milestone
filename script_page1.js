
  const selectOption = document.getElementById("selectOption");
  const navigateButton = document.getElementById("navigateButton");

  navigateButton.addEventListener("click", function () {
    const selectedOptionValue = selectOption.value;

    if (selectedOptionValue) {
      window.open(selectedOptionValue, "_blank");
    } else {
      alert("Please select an option.");
    }
  });

