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

  function jumlah() {
    const gajiUser = document.getElementById("gaji");
    const bonusUser = document.getElementById("bonus");
    const pengeluaranUser = document.getElementById("pengeluaran");

    const gaji = parseFloat(gajiUser.value.replace(/[^\d]/g, ""));
    const bonus = parseFloat(bonusUser.value.replace(/[^\d]/g, "") || 0);
    const pengeluaran = parseFloat(
        pengeluaranUser.value.replace(/[^\d]/g, "") || 0
    );

    const totalPendapatan = gaji + bonus - pengeluaran;

    if (totalPendapatan > 7000000) {
        let totalZakat = totalPendapatan * 0.025;
        if (totalZakat < 0) {
            totalZakat = 0;
        }
        document.getElementById("hasil").innerText =
            "Rp " + totalZakat.toLocaleString("id-ID");
    } else {
        document.getElementById("hasil").innerText = "anda belum wajib mebayar zakat";
    }
}