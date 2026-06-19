// Haversine formula to calculate distance between two coordinates
// Returns distance in kilometers
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Get user's current location
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};

// Filter and sort doctors by distance
export const getNearbyDoctors = (userLocation, doctors, radiusKm = 50) => {
  if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
    return [];
  }

  const doctorsWithDistance = Object.entries(doctors).map(([specialty, doctor]) => {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      doctor.latitude,
      doctor.longitude
    );
    return {
      specialty,
      ...doctor,
      distance: Math.round(distance * 10) / 10, // Round to 1 decimal
      isNearby: distance <= radiusKm,
    };
  });

  return doctorsWithDistance
    .filter((doc) => doc.isNearby)
    .sort((a, b) => a.distance - b.distance);
};

// Get location name from coordinates (reverse geocoding mock)
export const getLocationName = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return data.address?.city || data.address?.town || "Current Location";
  } catch (error) {
    console.error("Error getting location name:", error);
    return "Current Location";
  }
};
