function formatRupiah(input) {
  let nilai = input.value.replace(/[^\d,]/g, "");
  nilai = nilai.replace(/,/g, ".");
  const formattedValue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(nilai);
  input.value = formattedValue.replace("IDR", "Rp ");
}

function addPersen() {
  var inputbunga = document.getElementById("bngTabungan");
  var bungaValue = inputbunga.value.trim();

  bungaValue = bungaValue.replace(/\D/g, "");

  if (bungaValue !== "") {
    inputbunga.value = bungaValue + " %"; // Corrected variable name
  }
}

function jumlahTbngan() {
  const saldo = document.getElementById("InptTabungan");
  const bunga = document.getElementById("bngTabungan");
  const totalZakat = saldo.value.replace(/\D/g, ""); // Removing non-numeric characters

  if (totalZakat > 97070000) {
    const zakat = (totalZakat - bunga.value.replace(/\D/g, "") / 100) * 0.025; // Corrected variable names
    document.getElementById("hasilTabungan").innerText =
      "Rp " + zakat.toLocaleString("id-ID");
  } else {
    document.getElementById("hasilTabungan").innerText =
      "Anda belum wajib membayar zakat";
  }
}
