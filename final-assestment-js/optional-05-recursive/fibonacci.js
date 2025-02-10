function fibonacci(n) {
  // Basis rekursi
  if (n === 0) {
    return [0]; // Deret Fibonacci untuk n=0
  } else if (n === 1) {
    return [0, 1]; // Deret Fibonacci untuk n=1
  } else {
    const fib = fibonacci(n - 1); // Memanggil fungsi rekursif
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]); // Menambahkan elemen berikutnya
    return fib; // Mengembalikan deret Fibonacci
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
