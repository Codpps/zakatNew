function addGramText() {
    var inputEmas = document.getElementById("inputEmas");
    var inputValue = inputEmas.value.trim();
    

    inputValue = inputValue.replace(/\D/g, '');
  
    if (inputValue !== "") {
      inputEmas.value = inputValue + " gram";
    }
  }

  function jumlahZakatEmas() {
    const inputanEmas =  document.getElementById("inputEmas");
    const hasilInputEmas = parseFloat(inputanEmas.value.replace(/[^\d]/g, ""));

    if (hasilInputEmas > 85) {
        const hitungEmas = hasilInputEmas * 0.025;
        document.getElementById("hasilEmas").innerText = hitungEmas.toFixed(2) + " gram emas anda";
    } else {
        document.getElementById("hasilEmas").innerText = "Anda belum wajib membayar zakat";
    }
}