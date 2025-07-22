document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);

  fetch("/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((response) => {
      alert(`Thank you, ${response.name}! Your appointment has been booked.`);
      form.reset(); // Optional: Clear form after submit
    })
    .catch((error) => {
      alert("Something went wrong. Please try again.");
      console.error(error);
    });
});
