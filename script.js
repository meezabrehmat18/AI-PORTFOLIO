function showSection(sectionId) {

    const sections = document.querySelectorAll(".content-section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}
