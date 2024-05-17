var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

document.querySelector('.openAll').addEventListener('click', function() {
    var accContents = document.querySelectorAll('.panel');
    for (i = 0; i < accContents.length; i++) {
      accContents[i].style.display = 'block';
      accContents[i].style.maxHeight = accContents[i].scrollHeight + "px";
    }
  });

document.querySelector('.closeAll').addEventListener('click', function() {
var accContents = document.querySelectorAll('.panel');
for (i = 0; i < accContents.length; i++) {
    accContents[i].style.display = 'none';
    accContents[i].style.maxHeight = accContents[i].scrollHeight + "px";
}
});
