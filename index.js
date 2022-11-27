const min = document.querySelector(".min");
const h = document.querySelector(".h");
const sec = document.querySelector(".sec");
const selector = document.querySelector("#selector");
const ap = document.querySelector("#AMorPM");
const time = () => {
  const date = new Date();
  const times = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone:
      selector.value || Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(date);
  ap.innerHTML = times.split(" ")[1];
  //   console.log(times);

  const [hr, m, s] = times.split(" ")[0].split(":");
  //   console.log(hr, m, s);
  const secs = parseInt(s),
    mins = parseInt(m) * 60,
    hours = parseInt(hr) * 3600;

  sec.style.animationDelay = "-" + secs + "s";
  min.style.animationDelay = "-" + mins + "s";
  h.style.animationDelay = "-" + hours + "s";
};

time();

selector.innerHTML = `
    ${Intl.supportedValuesOf("timeZone").map(
      (v, i) =>
        `<option value="${v}" ${
          v == Intl.DateTimeFormat().resolvedOptions().timeZone
            ? "selected"
            : ""
        }>${v}</option>`
    )}
`;
