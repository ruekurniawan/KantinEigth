var products = [
  {
    id: 1,
    name: 'Nasi Putih',
    price: 6000,
    active: false,
  },
  {
    id: 2,
    name: 'Nasi Merah',
    price: 8000,
    active: false,
  },
  {
    id: 3,
    name: 'Ayam Goreng',
    price: 12000,
    active: false,
  },
  {
    id: 4,
    name: 'Ayam Semur',
    price: 12000,
    active: false,
  },
  {
    id: 5,
    name: 'Ati Ampela',
    price: 8000,
    active: false,
  },
  {
    id: 6,
    name: 'Telur Dadar Sambal',
    price: 6000,
    active: false,
  },
  {
    id: 7,
    name: 'Kikil',
    price: 6000,
    active: false,
  },
  {
    id: 8,
    name: 'Usus Acak2',
    price: 4000,
    active: false,
  },
  {
    id: 9,
    name: 'Kerang',
    price: 4000,
    active: false,
  },
  {
    id: 10,
    name: 'Oreg Tempe',
    price: 6000,
    active: false,
  },
  {
    id: 11,
    name: 'Kentang Sambal',
    price: 4000,
    active: false,
  },
  {
    id: 12,
    name: 'Kerang',
    price: 4000,
    active: false,
  },
  {
    id: 13,
    name: 'Sayur-Sayuran',
    price: 6000,
    active: false,
  },
  {
    id: 14,
    name: 'Goreng-Gorengan',
    price: 2000,
    active: false,
  },
  {
    id: 15,
    name: 'Kerupuk / Emping',
    price: 2000,
    active: false,
  },
];

var total = 0;
var $app = document.querySelector('.app');

// Render title
function renderTitle(container) {
  var $title = document.createElement('h1');
  var $titlePesanan = document.createElement('h1');
  $title.innerHTML = 'Kantin Kampus Eigth';
  $titlePesanan.innerHTML = 'Silahkan untuk memilih pesanan';
  container.appendChild($title);
  container.appendChild($titlePesanan);
}

function addTotal(product, total, isAdd) {
  if (isAdd) {
    total += product.price;
  } else {
    total -= product.price;
  }
  return total;
}

// Render list
function renderList(container, products) {
  var $orderList = document.createElement('ul');

  // Loop products, buat elemen tiap produk lalu append ke orderList
  products.forEach(function(product) {
    var $product = document.createElement('li');
    var $productPrice = document.createElement('span');

    $productPrice.innerHTML = currency(product.price);
    $product.innerHTML = product.name;
    $product.appendChild($productPrice);

    $orderList.appendChild($product);

    $product.addEventListener('click', function(event) {

      var isAdd = !hasClass($product, 'is-active');

      // Kita tambah atau buang class is-active sesuai operasi yang
      if (isAdd) {
        addClass($product, 'is-active');
      } else {
        removeClass($product, 'is-active');
      }

      // Mendapatkan nilai total yang baru dari fungsi addTotal
      total = addTotal(product, total, isAdd);

      var $total = document.querySelector('.total span');
      $total.innerHTML = currency(total);
    });
  });

  container.appendChild($orderList);
}

// Render Total
function renderTotalContainer(container, total) {
  var $totalContainer = document.createElement('div');
  var $totalBarcode = document.createElement('h2');
  addClass($totalContainer, 'total');

  $totalContainer.innerHTML = 'Total: ';
  $totalBarcode.innerHTML = 'Silahkan Barcode Dibawah ini';
  var $total = document.createElement('span');
  $total.innerHTML = currency(total);
  $totalContainer.appendChild($total)

  container.appendChild($totalContainer);
  container.appendChild($totalBarcode)
}

// Render title, list, dan totalContainer
renderTitle($app);
renderList($app, products);
renderTotalContainer($app, total);

var $products = document.querySelectorAll('li');
// Untuk pilihan kalau mau di default awal ada masukkan di awal
// $products.forEach(function($product, index) {

//   if (index < 2) {
//     $product.dispatchEvent(new Event('click'));
//   }
// });