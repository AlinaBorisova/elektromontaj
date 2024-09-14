if (null !== document.querySelector(".projects")) {
  var e = document.querySelector(".projects__type"),
    t = document.querySelector("#next-button"),
    s = document.querySelector("#pagination-numbers");
  function i() {
    e.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  t.addEventListener("click", i), s.addEventListener("click", i);
  const n = document.getElementById("pagination-numbers"),
    r = (document.getElementById("paginated-list"), document.querySelectorAll(".paginated-list li")),
    a = document.getElementById("next-button"),
    o = document.getElementById("prev-button"),
    l = 9,
    d = Math.ceil(r.length / l);
  let c = 1;
  const u = (e) => {
      e.classList.add("disabled"), e.setAttribute("disabled", !0);
    },
    p = (e) => {
      e.classList.remove("disabled"), e.removeAttribute("disabled");
    },
    h = () => {
      1 === c ? u(o) : p(o), d === c ? u(a) : p(a);
    },
    m = () => {
      document.querySelectorAll(".pagination-number").forEach((e) => {
        e.classList.remove("active"), Number(e.getAttribute("page-index")) == c && e.classList.add("active");
      });
    },
    f = (e) => {
      const t = document.createElement("button");
      (t.className = "pagination-number"), (t.innerHTML = e), t.setAttribute("page-index", e), t.setAttribute("aria-label", "Page " + e), n.appendChild(t);
    },
    g = () => {
      for (let e = 1; e <= d; e++) f(e);
    },
    v = (e) => {
      (c = e), m(), h();
      const t = (e - 1) * l,
        s = e * l;
      r.forEach((e, i) => {
        e.classList.add("hidden"), i >= t && i < s && e.classList.remove("hidden");
      });
    };
  window.addEventListener("load", () => {
    g(),
      v(1),
      o.addEventListener("click", () => {
        v(c - 1);
      }),
      a.addEventListener("click", () => {
        v(c + 1);
      }),
      document.querySelectorAll(".pagination-number").forEach((e) => {
        const t = Number(e.getAttribute("page-index"));
        t &&
        e.addEventListener("click", () => {
          v(t);
        });
      });
  });
}
