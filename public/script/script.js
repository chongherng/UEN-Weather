const getLocationItems = async () => {
  try {
    const response = await fetch("/locations");
    const data = await response.json();
    const locations = data.locations;
    let locationSelect = document.getElementById("location");
    locations.forEach((location) => {
      let opt = document.createElement("option");
      opt.value = location;
      opt.innerHTML = location;
      locationSelect.appendChild(opt);
    });
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("UENBtn").addEventListener("click", async () => {
  const UEN = document.getElementById("UEN").value;
  const serverResponse = await fetch("/validateFormat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({UEN: UEN}),
  });

  const data = await serverResponse.json();
  document.getElementById("UENResponse").innerHTML = data.validationResult;
});

document.getElementById("weatherBtn").addEventListener("click", async () => {
  const location = document.getElementById("location").value;
  const serverResponse = await fetch("/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location: location }),
  });

  const data = await serverResponse.json();
  document.getElementById("weatherResponse").innerHTML = data.weather;
});

window.onload = getLocationItems;
