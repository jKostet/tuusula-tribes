
function openApplyForm() {
  console.log("pls");
  unhide("applyForm");
}


function loadContent(content) {
  var content = content;
  var tribeElement;
  var elementClass;

  // TODO: see which element triggers loadContent(), and hide it (current)


  switch (content) {
    case 1:
      tribeElement = document.getElementById("what");
      elementClassList = tribeElement.classList;

      hide("why");
      hide("peek");
      hide("applyForm");
      unhide("what");
      break;
    case 2:
      hide("what");
      hide("peek");
      hide("applyForm");
      unhide("why");
      break;
    case 3:
      hide("what");
      hide("why");
      hide("applyForm");
      unhide("peek");
      break;
    case 4:
      unhide("applyForm");
      break;
    case 5:
      unhide("applyForm"); // choose startup dropdown
      break;
    default:

  }

}

function hide(element) {
  var element = document.getElementById(element);
  var elementClassList = element.classList;

  if (!element.classList.contains("hidden")) {
    element.classList.add("hidden");
  }
}

function unhide(findElement) {
  var element = document.getElementById(findElement);
  var elementClassList = element.classList;

  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  }
}
