document.addEventListener("DOMContentLoaded", function () {
  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is a "Toggle" paragraph
    if (
      event.target.tagName === "P" &&
      event.target.textContent.indexOf("Toggle") !== -1
    ) {
      // Get all even paragraphs (content paragraphs)
      const contentParagraphs = document.querySelectorAll("p:nth-child(even)");

      // Hide all content paragraphs
      contentParagraphs.forEach((paragraph) => {
        paragraph.classList.add("hidden");
      });

      // Get the next sibling of the clicked p element
      let adjacentP = event.target.nextElementSibling;

      // Remove the "hidden" class on the adjacent p element
      adjacentP.classList.remove("hidden");
    }
  });
});
