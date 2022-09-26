const buttonAdd = document.querySelector("#btn-add");
const textArea = document.getElementById('text');
const titleOfNote = document.getElementsByClassName(".titleOfNote");


//buttons
// const deleteText  = document.getElementById('delete');
// const save = document.getElementById('save');
// const bold = document.getElementById('bold');
// const underline = document.getElementById("underline");
// const italic = document.getElementById("italic");


function addNote() {
  document.getElementById("hide").style.display = "block";
}
buttonAdd.addEventListener("click", addNote);

function Bold() {
  var bold = textArea.style.fontWeight;

  if (bold == 'normal' ) {
    textArea.style.fontWeight = "bold";

    
  } else {
    textArea.style.fontWeight = "normal";

  }
}
function Italic() {
  var bold = textArea.style.fontStyle;
  if (bold == 'normal' ) {
    textArea.style.fontStyle = "Italic";
    
  } else {
    textArea.style.fontStyle = "normal";
  }
}
function Underline() {
  var bold = textArea.style.textDecoration;
  if (bold !== "underline") {
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.textDecoration = "none";
  }
}
function Delete() {
  textArea.style.fontStyle = 'normal';
  textArea.style.fontWeight = 'normal';
  textArea.style.textDecoration = 'none';

}
function RsetAll() {
  var isTextExist = textArea.innerText;
  console.log(isTextExist)
  
}



