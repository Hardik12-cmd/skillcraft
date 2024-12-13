document.addEventListener("DOMContentLoaded", () => {
    const skill = localStorage.getItem("skill");
    const level = localStorage.getItem("level");
    const time = localStorage.getItem("time");

    let roadmap = "";

    if (skill === "art") {
        window.location.href="art.html";
    } else if (skill === "music") {
        window.location.href="music.html";
    } else if (skill === "Instrumentcompose") {
        window.location.href="musicinstrument.html";
    } else if (skill === "dance") {
        window.location.href="dance.html";
    }
    else if (skill === "calligraphy") {
        window.location.href="calligraphy.html";
    }

    const roadmapOutput = document.getElementById("roadmap-output");
    roadmapOutput.innerHTML = `
        <p><strong>Skill:</strong> ${skill.charAt(0).toUpperCase() + skill.slice(1)}</p>
        <p><strong>Level:</strong> ${level.charAt(0).toUpperCase() + level.slice(1)}</p>
        <p><strong>Time Commitment:</strong> ${time} hours/week</p>
        ${roadmap}
    `;
});