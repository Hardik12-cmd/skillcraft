function navigateToRoadmap() {
    const skill = document.getElementById("skill").value;
    const level = document.getElementById("level").value;
    const time = document.getElementById("time").value;

    if (!skill || !level || !time) {
        alert("Please complete all fields before generating your roadmap.");
        return;
    }

    // Store user input in localStorage
    localStorage.setItem("skill", skill);
    localStorage.setItem("level", level);
    localStorage.setItem("time", time);

    // // Redirect to roadmap page
    window.location.href = "roadmap.html";
}