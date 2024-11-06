document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab");

    // Sembunyikan semua konten tab
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.add("hidden");
    });

    // Tampilkan konten tab yang sesuai
    document.getElementById(tabName).classList.remove("hidden");

    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("border-b-[3px]", "border-pastilaris-black", "bg-pastilaris-primary", "text-black", "font-semibold");

      btn.classList.add("font-medium");

      btn.querySelector("div").classList.remove("bg-pastilaris-primary");
      btn.querySelector("div").classList.add("bg-[#ABB4B1]");

      btn.querySelector("svg").classList.remove("stroke-pastilaris-black");

      btn.querySelector("svg").classList.add("stroke-white");
    });

    // Tambahkan style untuk tombol aktif
    button.classList.add("border-b-[3px]", "border-pastilaris-black", "font-semibold", "pb-[30px]");

    button.querySelector("div").classList.remove("bg-pastilaris-primary");

    button.querySelector("div").classList.add("bg-pastilaris-primary");

    button.querySelector("svg").classList.remove("stroke-white");

    button.querySelector("svg").classList.add("stroke-pastilaris-black");
  });
});
