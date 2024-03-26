document.addEventListener("DOMContentLoaded", function () {
	const emailForm = document.getElementById("emailForm");
	const successMessage = document.getElementById("successMessage");
	const failedMessage = document.getElementById("failedMessage");

	emailForm.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent form submission

		const emailInput = document.getElementById("emailInput").value;
		if (emailInput) {
			// Simulate form submission (replace this with your actual form submission logic)
			setTimeout(function () {
				// Show success message
				successMessage.style.display = "block";
				// Clear input field
				emailForm.reset();
				// Hide success message after 3 seconds
				setTimeout(function () {
					successMessage.style.display = "none";
				}, 3000);
			}, 1000);
		} else {
			failedMessage.style.display = "block";

			setTimeout(function () {
				failedMessage.style.display = "none";
			}, 3000);
		}
	});
});
