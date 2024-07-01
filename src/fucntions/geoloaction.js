export async function hasLocationPermission() {
  try {
    const result = await navigator.permissions.query({ name: "geolocation" });
    return result.state === "granted";
  } catch (error) {
    console.error("Error checking location permission:", error);
    return false;
  }
}

export async function getLatLon() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({
          status: "success",
          position: { lat: latitude, lon: longitude },
        });
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          resolve({ status: "denied" });
        } else {
          resolve({ status: "error", message: error.message });
        }
      }
    );
  });
}

export async function getLocation(setPos, showMsg, route) {
  setPos((old) => {
    return { ...old, status: "loading", count: old.count + 1 };
  });
  const pos = await getLatLon();
  if (pos.status == "denied") {
    showMsg("Access denied, showing data of default location Surat", {
      variant: "info",
    });
    route("/Surat");
  } else if (pos.status == "erorr") {
    showMsg("somthing went wrong, showing default location Surat", {
      variant: "error",
    });
    route("/Surat");
  } else if (pos.status == "success") {
    route(`/latlon?lat=${pos.position.lat}&lon=${pos.position.lon}`);
  }
  setPos((old) => {
    return { ...old, ...pos };
  });
}
