let p1 = document.getElementById('1');
let p2 = document.getElementById('2');
let p3 = document.getElementById('3');
let p4 = document.getElementById('4');

let total = 0;
let product1 = 0;
let product2 = 0;
let product3 = 0;
let product4 = 0;

let selectDiv = document.getElementById('display-order');
let displayTotal = document.getElementById('total');

let p1Displayed = document.getElementById('p1');
let p2Displayed = document.getElementById('p2');
let p3Displayed = document.getElementById('p3');
let p4Displayed = document.getElementById('p4');

let lp1 = document.getElementById('lp1');
let lp2 = document.getElementById('lp2');
let lp3 = document.getElementById('lp3');
let lp4 = document.getElementById('lp4');

let rp1 = document.getElementById('rp1');
let rp2 = document.getElementById('rp2');
let rp3 = document.getElementById('rp3');
let rp4 = document.getElementById('rp4');

let submit = document.getElementById('submit');





p1.addEventListener('click', function () {
  selectDiv.classList.remove('form-hidden');
  rp1.classList.remove('form-hidden');
  p1Displayed.classList.remove('form-hidden');
  lp1.classList.remove('form-hidden');

  selectDiv.classList.add('form');
  total = total + 5.0;
  displayTotal.innerHTML = 'Total: $' + total;
  p1Displayed.innerHTML = 'Honey Panda Tea';
  product1++;
  lp1.innerHTML = '$' + 5.0 * product1;
});

p2.addEventListener('click', function () {
  selectDiv.classList.remove('form-hidden');
  rp2.classList.remove('form-hidden');
  p2Displayed.classList.remove('form-hidden');
  lp2.classList.remove('form-hidden');
  selectDiv.classList.add('form');
  total = total + 8.0;
  displayTotal.innerHTML = 'Total: $' + total;
  p2Displayed.innerHTML = 'Matcha Jade Tea';
  product2++;
  lp2.innerHTML = '$' + 8.0 * product2;

});

p3.addEventListener('click', function () {
  selectDiv.classList.remove('form-hidden');
  rp3.classList.remove('form-hidden');
  p3Displayed.classList.remove('form-hidden');
  lp3.classList.remove('form-hidden');

  selectDiv.classList.add('form');
  total = total + 13.0;
  displayTotal.innerHTML = 'Total: $' + total;
  p3Displayed.innerHTML = 'Milk Oreo Tea';
  product3++;
  lp3.innerHTML = '$' + 13.0 * product3;

});

p4.addEventListener('click', function () {
  selectDiv.classList.remove('form-hidden');
  rp4.classList.remove('form-hidden');
  p4Displayed.classList.remove('form-hidden');
  lp4.classList.remove('form-hidden');

  selectDiv.classList.add('form');
  total = total + 10.0;
  displayTotal.innerHTML = 'Total: $' + total;
  p4Displayed.innerHTML = 'Bubble Spider Tea';
  product4++;
  lp4.innerHTML = '$' + 10.0 * product4;

});


rp1.addEventListener('click', function () {
  product1--;
  lp1.innerHTML = '$' + 5.0 * product1;
  total = total - 5.0;
  displayTotal.innerHTML = 'Total: $' + total;
  if (product1 < 1) {
    rp1.classList.add('form-hidden');
    p1Displayed.classList.add('form-hidden');
    lp1.classList.add('form-hidden');
    product1 = 0;
  }
  if (product1 == 0 && product2 == 0 && product3 == 0 && product4 == 0) {
    selectDiv.classList.add('form-hidden');
    selectDiv.classList.remove('form');

  }
});

rp2.addEventListener('click', function () {
  product2--;
  lp2.innerHTML = '$' + 8.0 * product2;
  total = total - 8.0;
  displayTotal.innerHTML = 'Total: $' + total;
  if (product2 < 1) {
    rp2.classList.add('form-hidden');
    p2Displayed.classList.add('form-hidden');
    lp2.classList.add('form-hidden');
    product2 = 0;
  }
  if (product1 == 0 && product2 == 0 && product3 == 0 && product4 == 0) {
    selectDiv.classList.add('form-hidden');
    selectDiv.classList.remove('form');

  }
});

rp3.addEventListener('click', function () {
  product3--;
  lp3.innerHTML = '$' + 13.0 * product3;
  total = total - 13.0;
  displayTotal.innerHTML = 'Total: $' + total;
  if (product3 < 1) {
    rp3.classList.add('form-hidden');
    p3Displayed.classList.add('form-hidden');
    lp3.classList.add('form-hidden');
    product3 = 0;
  }
  if (product1 == 0 && product2 == 0 && product3 == 0 && product4 == 0) {
    selectDiv.classList.add('form-hidden');
    selectDiv.classList.remove('form');

  }
});

rp4.addEventListener('click', function () {
  product4--;
  lp4.innerHTML = '$' + 10.0 * product4;
  total = total - 10.0;
  displayTotal.innerHTML = 'Total: $' + total;
  if (product4 < 1) {
    rp4.classList.add('form-hidden');
    p4Displayed.classList.add('form-hidden');
    lp4.classList.add('form-hidden');
    product4 = 0;
  }
  if (product1 == 0 && product2 == 0 && product3 == 0 && product4 == 0) {
    selectDiv.classList.add('form-hidden');
    selectDiv.classList.remove('form');

  }
});

let text = '';
let num = 0;
submit.addEventListener('click', function () {
  text = 'Your Order Details:';
  if (product1 > 0) {
    num++;
    text = text + '\n' + num + '. Honey Panda Tea\n$' + 5 * product1;
  }

  if (product2 > 0) {
    num++;
    text = text + '\n' + num + '. Matcha Jade Tea\n$' + 8 * product2;
  }

  if (product3 > 0) {
    num++;
    text = text + '\n' + num + '. Milk Oreo Tea\n$' + 13 * product3;
  }

  if (product4 > 0) {
    num++;
    text = text + '\n' + num + '. Bubble Spider Tea\n$' + 10 * product4;
  }

  text += '\nTotal: $' + total;
  text = text + '\nThank you for Ordering! Kisses and Hugs xoxox';
  alert(text);
  text = '';
  num=0;
  location.reload();
});





