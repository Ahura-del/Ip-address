document.addEventListener("DOMContentLoaded" , () => {
  async function getIp(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  getIp("https://ipinfo.io/?token=34acd62fb8aafb")
    .then((data) => data)
    .then((res) => {
      document.querySelector("#ip").textContent = res.ip;
      document.querySelector("#city").textContent = res.city;
      document.querySelector("#country").textContent = res.country;
      document.querySelector("#region").textContent = res.region;
      document.querySelector("#time-zone").textContent = res.timezone;
      document.querySelector("#address").textContent = res.abuse.address;
      L.mapquest.key = "F2jqB2KYhWt2G5o9rgk2WFFjB5GAqACl";
      L.mapquest.map("map", {
        center: [res.loc.split(",")[0], res.loc.split(",")[1]],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
      });
    })
    .catch(err => err)
});
