import { useState, useEffect } from "react";
import AppShell from "../../components/common/AppShell";
import { getUserLocation, getNearbyDoctors, getLocationName } from "../../utils/locationUtils";
import "./Doctors.css";

function Doctors() {
  const [specialist, setSpecialist] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [locationName, setLocationName] = useState("");
  const [allDoctors, setAllDoctors] = useState([]);
  const [nearbyDoctorsOnly, setNearbyDoctorsOnly] = useState(true);
  const [radiusKm, setRadiusKm] = useState(50);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const doctors = {
    Cardiologist: {
      doctor: "Dr. Rajesh Kumar",
      hospital: "City Heart Hospital",
      fee: 800,
      tests: 2500,
      surgery: 150000,
      recovery: "2-6 Months",
      latitude: 28.6139,
      longitude: 77.209,
      rating: 4.8,
      availability: "Mon-Fri, 9AM-6PM",
    },
    Gastroenterologist: {
      doctor: "Dr. Priya Sharma",
      hospital: "Gastro Care Center",
      fee: 700,
      tests: 1500,
      surgery: 80000,
      recovery: "2-4 Weeks",
      latitude: 28.5355,
      longitude: 77.391,
      rating: 4.6,
      availability: "Tue-Sat, 10AM-5PM",
    },
    "General Physician": {
      doctor: "Dr. Arun Kumar",
      hospital: "MediCare Hospital",
      fee: 500,
      tests: 1000,
      surgery: 0,
      recovery: "1-2 Weeks",
      latitude: 28.7041,
      longitude: 77.1025,
      rating: 4.7,
      availability: "Daily, 8AM-8PM",
    },
    Neurologist: {
      doctor: "Dr. Vikram Singh",
      hospital: "Brain Health Institute",
      fee: 900,
      tests: 3000,
      surgery: 200000,
      recovery: "4-8 Weeks",
      latitude: 28.6262,
      longitude: 77.216,
      rating: 4.9,
      availability: "Mon-Thu, 9AM-5PM",
    },
    Pulmonologist: {
      doctor: "Dr. Neha Patel",
      hospital: "Respiratory Care Center",
      fee: 750,
      tests: 2000,
      surgery: 120000,
      recovery: "2-4 Weeks",
      latitude: 28.5244,
      longitude: 77.1855,
      rating: 4.7,
      availability: "Wed-Sun, 11AM-6PM",
    },
  };

  // Get user location on component mount
  useEffect(() => {
    const fetchUserLocation = async () => {
      setIsLoadingLocation(true);
      try {
        const location = await getUserLocation();
        setUserLocation(location);
        setLocationError("");

        // Get location name
        const name = await getLocationName(location.latitude, location.longitude);
        setLocationName(name);

        // Get nearby doctors
        const nearby = getNearbyDoctors(location, doctors, radiusKm);
        setAllDoctors(nearby);
      } catch (error) {
        setLocationError(
          "Unable to get your location. Showing all doctors. Enable location permission for distance-based recommendations."
        );
        // Show all doctors as fallback
        setAllDoctors(
          Object.entries(doctors).map(([specialty, doctor]) => ({
            specialty,
            ...doctor,
            distance: null,
          }))
        );
      } finally {
        setIsLoadingLocation(false);
      }
    };

    fetchUserLocation();
  }, []);

  // Update nearby doctors when radius changes
  useEffect(() => {
    if (userLocation) {
      const nearby = getNearbyDoctors(userLocation, doctors, radiusKm);
      setAllDoctors(nearby);
    }
  }, [radiusKm]);

  // Get doctors to display (filtered by selection and proximity toggle)
  const displayedDoctors = nearbyDoctorsOnly && userLocation
    ? allDoctors
    : Object.entries(doctors).map(([specialty, doctor]) => ({
        specialty,
        ...doctor,
        distance: userLocation
          ? Math.round(
              (Math.acos(
                Math.sin((doctor.latitude * Math.PI) / 180) *
                  Math.sin((userLocation.latitude * Math.PI) / 180) +
                  Math.cos((doctor.latitude * Math.PI) / 180) *
                  Math.cos((userLocation.latitude * Math.PI) / 180) *
                  Math.cos(
                    ((doctor.longitude - userLocation.longitude) * Math.PI) / 180
                  )
              ) * 6371) * 10
            ) / 10
          : null,
      }));

  const selectedDoctorData = specialist
    ? displayedDoctors.find((doc) => doc.specialty === specialist)
    : null;

  return (
    <AppShell>
      <div className="doctor-container">
        <h1>🏥 Find Nearby Doctors</h1>
        <p className="subtitle">Get recommendations for specialists near you</p>

        {isLoadingLocation && (
          <div className="info-message">
            <span>⏳ Fetching your location...</span>
          </div>
        )}

        {locationError && (
          <div className="warning-message">
            <span>ℹ️ {locationError}</span>
          </div>
        )}

        {userLocation && (
          <div className="location-info">
            <div className="location-badge">
              <span className="location-icon">📍</span>
              <span>Current Location: {locationName}</span>
              <span className="coordinates">
                ({userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)})
              </span>
            </div>

            <div className="radius-control">
              <label htmlFor="radius">Search Radius:</label>
              <input
                id="radius"
                type="range"
                min="5"
                max="100"
                step="5"
                value={radiusKm}
                onChange={(e) => setRadiusKm(Number(e.target.value))}
                className="radius-slider"
              />
              <span className="radius-value">{radiusKm} km</span>
            </div>

            <div className="toggle-nearby">
              <input
                id="nearby-toggle"
                type="checkbox"
                checked={nearbyDoctorsOnly}
                onChange={(e) => setNearbyDoctorsOnly(e.target.checked)}
              />
              <label htmlFor="nearby-toggle">Show only nearby doctors</label>
            </div>
          </div>
        )}

        <select
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
          className="doctor-select"
        >
          <option value="">Select Specialist</option>
          {displayedDoctors.map((doc) => (
            <option key={doc.specialty} value={doc.specialty}>
              {doc.specialty}
              {doc.distance ? ` - ${doc.distance} km away` : ""}
            </option>
          ))}
        </select>

        {selectedDoctorData && (
          <div className="doctor-card">
            <div className="doctor-header">
              <div>
                <h2>{selectedDoctorData.doctor}</h2>
                <p className="specialty">{selectedDoctorData.specialty}</p>
              </div>
              <div className="rating">
                <span className="stars">⭐ {selectedDoctorData.rating}</span>
              </div>
            </div>

            <div className="doctor-details">
              <div className="detail-group">
                <strong>🏢 Hospital:</strong>
                <p>{selectedDoctorData.hospital}</p>
              </div>

              {selectedDoctorData.distance !== null && (
                <div className="detail-group distance-highlight">
                  <strong>📍 Distance:</strong>
                  <p>{selectedDoctorData.distance} km from your location</p>
                </div>
              )}

              <div className="detail-group">
                <strong>🕐 Availability:</strong>
                <p>{selectedDoctorData.availability}</p>
              </div>

              <div className="pricing-section">
                <h3>Pricing</h3>
                <div className="pricing-grid">
                  <div className="price-item">
                    <span className="price-label">Consultation</span>
                    <span className="price-amount">₹{selectedDoctorData.fee}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Tests</span>
                    <span className="price-amount">₹{selectedDoctorData.tests}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Surgery</span>
                    <span className="price-amount">
                      {selectedDoctorData.surgery ? `₹${selectedDoctorData.surgery}` : "N/A"}
                    </span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">Recovery</span>
                    <span className="price-amount">{selectedDoctorData.recovery}</span>
                  </div>
                </div>
              </div>

              <button className="book-btn">Book Appointment</button>
            </div>
          </div>
        )}

        {displayedDoctors.length === 0 && !isLoadingLocation && (
          <div className="no-doctors">
            <span>❌ No doctors found within {radiusKm} km radius.</span>
            <p>Try increasing the search radius.</p>
          </div>
        )}
      </div>
    </AppShell>
  );
}

export default Doctors;