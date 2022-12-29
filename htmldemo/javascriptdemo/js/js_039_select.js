//js_039_select.js

document.frm.onsubmit = () => {
  let optfruit = document.querySelector('#sel');
  console.log(optfruit);

  let optSelect = optfruit.selectedIndex + ' ' + optfruit.value;
  console.log(optSelect);

  return false;
};
