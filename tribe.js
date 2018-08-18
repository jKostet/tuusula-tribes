function loadContent(content) {
  var content = content;
  var tribeElement;
  var elementClass;

  // TODO: see which element triggers loadContent(), and hide it (current)


  switch (content) {
    case "what":
      tribeElement = document.getElementById(content);
      elementClassList = tribeElement.classList;

      hideUnhide(elementClassList);

      break;
    case "why":

      break;
    case "who":

      break;
    case "apply"
      hideUnhide(document.getElementById("applyForm"));
      break;
    default:

  }

}

function hideUnhide(element) {
  var element = document.getElementById(element);
  var elementClassList = element.classList;

  if elementClassList.contains("hidden") {
    elementClassList.remove("hidden");
  } else {
    elementClassList.add("hidden");
  }
}
