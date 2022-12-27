//js_041_checkbox.js

//약관동의

document.forms.onsubmit = () => {
  let admin = document.forms.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다');
    return false;
  }
};

//전체선택
document.frm.allcheck.onclick = function () {
  console.log(this.checked);
  document.frm.subject1.checked = this.checked;
  document.frm.subject2.checked = this.checked;
  document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll('.checkgroup');
  console.log(checkgroup.length);

  //   for (let element of checkgroup) {
  //     element.checked = this.checked;
  //   }

  //ES6 Spread operator :NodeList을 Array로 변경
  let myThis = this;
  let iArray = [...checkgroup];
  checkgroup.map(function (element) {
    //alert(this); 여기서는 this window
    element.checked = myThis.checked;
  });
};
