// Ini adalah program sederhana untuk fetching data github seseorang

import axios from 'axios';
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let users = [];

const fetchGithubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    users.push(response.data);
    console.log(`Data untuk ${username}: \n`, response.data);
    questionPrompt();
  } catch (error) {
    console.error(`Terjadi kesalahan: ${error}`);
    questionPrompt();
  }
};

const questionPrompt = () => {
  rl.question('Masukkan username GitHub yang ingin Anda lihat datanya atau "quit" untuk keluar: ', (username) => {
    if (username === 'quit') {
      console.log('Anda telah keluar dari program.');
      if (users.length !== 0) {
        console.log('Berikut adalah data pengguna yang telah Anda lihat:');
        users.forEach(user => console.log(user));
      }
      rl.close();
    } else {
      console.log(`Mengambil data untuk username: ${username}`);
      fetchGithubUser(username);
    }
  });
};

questionPrompt();