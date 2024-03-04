import axios from "axios";

// Berikut adalah contoh penggunaan axios untuk mengambil data dari github saya
axios.get('https://api.github.com/users/AlthariqFairuz')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log('\nData telah diambil');
  });