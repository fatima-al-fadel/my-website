const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
