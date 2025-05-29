document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("ageConfirmed")) {
    document.getElementById("age-warning-overlay").style.display = "flex";
  }

  document.getElementById("confirmBtn").addEventListener("click", function () {
    localStorage.setItem("ageConfirmed", "true");
    document.getElementById("age-warning-overlay").style.display = "none";
  });

  document.getElementById("denyBtn").addEventListener("click", function () {
    alert("Maaf, Anda tidak diperbolehkan mengakses situs ini.");
    window.location.href = "/";
  });
});
