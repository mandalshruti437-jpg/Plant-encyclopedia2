import React, { useEffect, useState } from "react";
import "../CSS/PlantCare.css";

const PlantCare = () => {
  const [selectedPlant, setSelectedPlant] = useState("Aloe Vera");

  // Admin se aane wala PlantCare data
  const [plantCareData, setPlantCareData] = useState({});

  // ================= DEFAULT PLANTS =================

  const plants = {
    "Aloe Vera": {
      scientificName: "Aloe vera",
      sunlight: "Bright light with some direct sunlight.",
      soil: "Very well-drained sandy or succulent soil.",
      watering:
        "Water thoroughly and allow the soil to dry before watering again.",
      temperature: "Warm conditions; protect from frost.",
      pot: "Use a pot with drainage holes.",
      propagation: "Offsets or pups.",
      fertilizer: "Light fertilizer during active growth.",
      plantingSeason: "Spring to early monsoon in warm climates.",
      maintenance: "Remove damaged leaves and avoid excess water.",
      problems: "Root rot, fungal problems and sun stress.",
      difficulty: "Easy",
      tip: "The soil should dry between watering."
    },

    "Apple": {
      scientificName: "Malus domestica",
      sunlight: "Full sun.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Water regularly during dry periods, especially when young.",
      temperature:
        "Depends on variety; many varieties need winter chilling.",
      pot: "Large container for suitable dwarf varieties.",
      propagation:
        "Grafted or budded nursery plants are commonly used.",
      fertilizer:
        "Use suitable fruit-tree fertilizer according to plant needs.",
      plantingSeason:
        "Depends on local climate and variety.",
      maintenance:
        "Pruning, training, watering and pest monitoring.",
      problems:
        "Pests, fungal diseases and water stress.",
      difficulty: "Medium",
      tip: "Choose a variety suitable for your local climate."
    },

    "Ashoka": {
      scientificName: "Saraca asoca",
      sunlight: "Bright light to partial shade.",
      soil: "Fertile, moist but well-drained soil.",
      watering:
        "Water regularly when young; avoid prolonged waterlogging.",
      temperature: "Warm tropical conditions.",
      pot:
        "Large container when young; needs more space as it grows.",
      propagation: "Seeds.",
      fertilizer:
        "Compost or balanced fertilizer during active growth.",
      plantingSeason:
        "Monsoon season is suitable in many Indian regions.",
      maintenance:
        "Remove damaged branches and maintain soil moisture.",
      problems:
        "Water stress and common garden pests.",
      difficulty: "Medium",
      tip:
        "Give the plant enough space and maintain good drainage."
    },

    "Bamboo": {
      scientificName: "Bambusoideae",
      sunlight:
        "Bright light to full sun depending on species.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Keep young plants adequately moist.",
      temperature:
        "Depends on the bamboo species.",
      pot:
        "Large container for suitable clumping varieties.",
      propagation:
        "Division or species-specific propagation.",
      fertilizer:
        "Compost or balanced fertilizer during active growth.",
      plantingSeason:
        "Warm growing season or monsoon depending on climate.",
      maintenance:
        "Control spreading and remove damaged stems.",
      problems:
        "Water stress, mites and fungal problems.",
      difficulty: "Medium",
      tip:
        "Choose a clumping variety if garden space is limited."
    },

    "Banana": {
      scientificName: "Musa spp.",
      sunlight: "Full sun to bright light.",
      soil: "Deep, fertile and well-drained soil.",
      watering:
        "Needs regular moisture but does not tolerate prolonged waterlogging.",
      temperature: "Warm tropical conditions.",
      pot:
        "Very large container for dwarf varieties.",
      propagation:
        "Suckers or tissue-cultured plants.",
      fertilizer:
        "Regular balanced nutrition and organic matter.",
      plantingSeason: "Warm and moist season.",
      maintenance:
        "Remove old leaves and unwanted suckers.",
      problems:
        "Sigatoka, Panama disease, weevils and nutrient deficiencies.",
      difficulty: "Medium",
      tip:
        "Good drainage and regular moisture are important."
    },

    "Cactus": {
      scientificName: "Opuntia ficus-indica",
      sunlight: "Full sun.",
      soil:
        "Very well-drained sandy or cactus soil.",
      watering:
        "Water thoroughly and allow the soil to dry.",
      temperature:
        "Warm and relatively dry conditions.",
      pot:
        "Pot with excellent drainage.",
      propagation:
        "Stem pads or seeds.",
      fertilizer:
        "Light cactus fertilizer during active growth.",
      plantingSeason: "Warm season.",
      maintenance:
        "Avoid overwatering and handle spines carefully.",
      problems:
        "Root rot from excess water and pests.",
      difficulty: "Easy",
      tip:
        "Overwatering is a bigger risk than underwatering."
    },

    "Coconut": {
      scientificName: "Cocos nucifera",
      sunlight: "Full sun.",
      soil: "Deep, well-drained soil.",
      watering:
        "Regular moisture is important, especially when young.",
      temperature: "Warm tropical climate.",
      pot:
        "Not suitable for long-term indoor pot growing.",
      propagation: "Seed/nut.",
      fertilizer:
        "Organic manure and balanced palm nutrition.",
      plantingSeason:
        "Monsoon season is suitable in many tropical regions.",
      maintenance:
        "Maintain drainage and remove dead fronds safely.",
      problems:
        "Rhinoceros beetle, mites and nutrient deficiencies.",
      difficulty: "Medium",
      tip:
        "Needs plenty of space and a warm climate."
    },

    "Drumstick Tree": {
      scientificName: "Moringa oleifera",
      sunlight: "Full sun.",
      soil: "Well-drained soil.",
      watering:
        "Water regularly when young; established plants tolerate some dryness.",
      temperature:
        "Warm tropical and subtropical conditions.",
      pot:
        "Large container for dwarf or regularly pruned plants.",
      propagation:
        "Seeds or stem cuttings.",
      fertilizer:
        "Compost or balanced fertilizer.",
      plantingSeason:
        "Warm season or monsoon.",
      maintenance:
        "Prune regularly to encourage branching and manageable growth.",
      problems:
        "Root problems from waterlogging and some insect pests.",
      difficulty: "Easy",
      tip:
        "Do not keep Moringa roots in constantly wet soil."
    },

    "Eggplant": {
      scientificName: "Solanum melongena",
      sunlight: "Full sun.",
      soil: "Fertile, well-drained soil.",
      watering:
        "Keep soil consistently moist but not waterlogged.",
      temperature: "Warm conditions.",
      pot:
        "Large container with drainage holes.",
      propagation:
        "Seeds or nursery seedlings.",
      fertilizer:
        "Compost and balanced vegetable fertilizer.",
      plantingSeason:
        "Warm growing season.",
      maintenance:
        "Support plants if necessary and harvest fruits regularly.",
      problems:
        "Shoot and fruit borer, aphids and fungal diseases.",
      difficulty: "Medium",
      tip:
        "Regular monitoring is important because fruit and shoot borer can damage plants."
    },

    "Fern": {
      scientificName: "Various fern species",
      sunlight:
        "Bright indirect light or filtered light.",
      soil:
        "Moist, organic-rich and well-drained soil.",
      watering:
        "Keep soil moderately moist; do not allow prolonged dryness.",
      temperature:
        "Moderate to warm conditions depending on species.",
      pot:
        "Pot with drainage holes.",
      propagation:
        "Spores or division depending on species.",
      fertilizer:
        "Light balanced fertilizer during active growth.",
      plantingSeason:
        "Suitable throughout the warm growing period.",
      maintenance:
        "Remove dry fronds and maintain humidity.",
      problems:
        "Dry leaf edges, fungal problems and pests.",
      difficulty: "Easy to Medium",
      tip:
        "Avoid harsh direct afternoon sunlight for many common ferns."
    },

    "Fig": {
      scientificName: "Ficus carica",
      sunlight: "Full sun.",
      soil: "Well-drained soil.",
      watering:
        "Water regularly while establishing and during dry periods.",
      temperature:
        "Warm conditions; variety determines cold tolerance.",
      pot:
        "Large container is possible for suitable varieties.",
      propagation:
        "Cuttings or grafted plants.",
      fertilizer:
        "Compost and balanced fruit-tree fertilizer.",
      plantingSeason:
        "Cooler or mild season depending on local climate.",
      maintenance:
        "Prune to maintain manageable size and remove damaged branches.",
      problems:
        "Fig rust, pests and water stress.",
      difficulty: "Medium",
      tip:
        "Give plenty of sunlight and avoid waterlogged soil."
    },

    "Guava": {
      scientificName: "Psidium guajava",
      sunlight: "Full sun.",
      soil: "Well-drained fertile soil.",
      watering:
        "Water regularly when young; established trees tolerate moderate dryness.",
      temperature:
        "Warm tropical and subtropical conditions.",
      pot:
        "Large container for dwarf or grafted varieties.",
      propagation:
        "Seeds, cuttings, air-layering or grafting depending on purpose.",
      fertilizer:
        "Organic manure and balanced fruit-tree fertilizer.",
      plantingSeason:
        "Monsoon or warm season depending on region.",
      maintenance:
        "Prune lightly and remove damaged branches.",
      problems:
        "Fruit fly, mealybugs and fungal diseases.",
      difficulty: "Easy to Medium",
      tip:
        "Choose a grafted or air-layered plant if you want more predictable fruiting."
    },

    "Ginger": {
      scientificName: "Zingiber officinale",
      sunlight:
        "Partial shade to filtered sunlight.",
      soil:
        "Loose, fertile and well-drained soil rich in organic matter.",
      watering:
        "Keep soil evenly moist but avoid waterlogging.",
      temperature:
        "Warm and humid conditions.",
      pot:
        "Wide container with drainage holes.",
      propagation:
        "Rhizome pieces with healthy buds.",
      fertilizer:
        "Compost and balanced fertilizer during growth.",
      plantingSeason:
        "Warm and moist season.",
      maintenance:
        "Keep weeds controlled and maintain soil moisture.",
      problems:
        "Rhizome rot and fungal diseases.",
      difficulty: "Easy to Medium",
      tip:
        "Loose soil is important because the rhizomes develop underground."
    },

    "Hibiscus": {
      scientificName: "Hibiscus rosa-sinensis",
      sunlight:
        "Full sun to bright light.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Water when the upper soil begins to dry.",
      temperature: "Warm conditions.",
      pot:
        "Large pot with drainage holes.",
      propagation: "Stem cuttings.",
      fertilizer:
        "Balanced fertilizer during active growth.",
      plantingSeason: "Warm season.",
      maintenance:
        "Prune lightly to encourage branching.",
      problems:
        "Aphids, whiteflies, mealybugs and fungal problems.",
      difficulty: "Easy",
      tip:
        "Good sunlight and regular watering support flowering."
    },

    "Jasmine": {
      scientificName: "Jasminum spp.",
      sunlight:
        "Full sun to partial shade depending on species.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Water when the upper soil starts to dry.",
      temperature: "Warm conditions.",
      pot:
        "Medium to large container with support.",
      propagation:
        "Cuttings or layering depending on species.",
      fertilizer:
        "Compost and balanced flowering-plant fertilizer.",
      plantingSeason: "Warm season.",
      maintenance:
        "Provide support and prune after flowering when appropriate.",
      problems:
        "Aphids, mealybugs and fungal problems.",
      difficulty: "Medium",
      tip:
        "Provide support because many Jasmine types are climbing plants."
    },

    "Lemon": {
      scientificName: "Citrus limon",
      sunlight: "Full sun.",
      soil: "Well-drained fertile soil.",
      watering:
        "Water deeply when the soil begins to dry.",
      temperature:
        "Warm subtropical to tropical conditions.",
      pot:
        "Large container for dwarf or grafted plants.",
      propagation:
        "Grafted or budded nursery plants are preferred for reliable fruiting.",
      fertilizer:
        "Citrus fertilizer or balanced nutrition according to plant needs.",
      plantingSeason:
        "Warm season; timing varies by climate.",
      maintenance:
        "Prune damaged branches and monitor pests.",
      problems:
        "Citrus leaf miner, aphids, scale insects and fungal diseases.",
      difficulty: "Medium",
      tip:
        "Good sunlight and drainage are important for healthy citrus growth."
    },

    "Mango": {
      scientificName: "Mangifera indica",
      sunlight: "Full sun.",
      soil:
        "Well-drained soil; avoid waterlogging.",
      watering:
        "Young plants need regular watering; established trees need less frequent watering.",
      temperature:
        "Warm tropical and subtropical conditions.",
      pot:
        "Large container for suitable dwarf or grafted varieties.",
      propagation:
        "Grafted plants are preferred for reliable fruit production.",
      fertilizer:
        "Compost and soil-based nutrient management.",
      plantingSeason:
        "June to July is commonly suitable in many Indian regions when moisture is available.",
      maintenance:
        "Train young trees and remove damaged or crossing branches.",
      problems:
        "Mango hopper, mealybugs and fungal diseases.",
      difficulty: "Medium",
      tip:
        "Choose a healthy grafted plant suited to your local climate."
    },

    "Marigold": {
      scientificName: "Tagetes spp.",
      sunlight: "Full sun.",
      soil: "Well-drained fertile soil.",
      watering:
        "Water when the upper soil begins to dry.",
      temperature:
        "Moderate to warm conditions.",
      pot:
        "Medium-sized pot with drainage holes.",
      propagation: "Seeds.",
      fertilizer:
        "Compost and moderate balanced fertilizer.",
      plantingSeason:
        "Cooler growing season in hot regions.",
      maintenance:
        "Remove spent flowers to encourage more flowering.",
      problems:
        "Aphids, mites and fungal diseases.",
      difficulty: "Easy",
      tip:
        "Give Marigold plenty of sunlight and avoid continuously wet soil."
    },

    "Mint": {
      scientificName: "Mentha spp.",
      sunlight:
        "Morning sun or bright light; afternoon shade is useful in hot weather.",
      soil:
        "Moist but well-drained fertile soil.",
      watering:
        "Keep soil moderately moist.",
      temperature:
        "Mild to warm conditions.",
      pot:
        "A container is recommended because Mint spreads quickly.",
      propagation:
        "Stem cuttings or division.",
      fertilizer:
        "Compost or light balanced fertilizer.",
      plantingSeason: "Mild weather is suitable.",
      maintenance:
        "Trim regularly to encourage fresh growth.",
      problems:
        "Spider mites, fungal problems and wilting.",
      difficulty: "Easy",
      tip:
        "Growing Mint in a pot makes it easier to control spreading."
    },

    "Neem": {
      scientificName: "Azadirachta indica",
      sunlight: "Full sun.",
      soil: "Well-drained soil.",
      watering:
        "Water young plants regularly; established trees need less frequent watering.",
      temperature:
        "Warm tropical and subtropical conditions.",
      pot:
        "Only suitable temporarily because Neem becomes a large tree.",
      propagation: "Seeds.",
      fertilizer:
        "Organic manure or balanced fertilizer during establishment.",
      plantingSeason:
        "Monsoon season in many Indian regions.",
      maintenance:
        "Give enough space for the mature tree.",
      problems:
        "Water stress and some pest problems.",
      difficulty: "Easy",
      tip:
        "Do not plant Neem where the mature tree will have insufficient space."
    },

    "Papaya": {
      scientificName: "Carica papaya",
      sunlight: "Full sun.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Water regularly but avoid waterlogging.",
      temperature:
        "Warm tropical conditions.",
      pot:
        "Large container can be used for suitable plants.",
      propagation: "Seeds.",
      fertilizer:
        "Regular balanced nutrition and organic matter.",
      plantingSeason:
        "Warm season depending on local climate.",
      maintenance:
        "Maintain drainage and monitor fruits and leaves.",
      problems:
        "Viral diseases, mites, root problems and fungal diseases.",
      difficulty: "Medium",
      tip:
        "Papaya needs good drainage and protection from prolonged waterlogging."
    },

    "Rose": {
      scientificName: "Rosa spp.",
      sunlight:
        "Several hours of direct sunlight.",
      soil:
        "Fertile, well-drained soil rich in organic matter.",
      watering:
        "Water deeply when the soil begins to dry.",
      temperature:
        "Moderate conditions depending on variety.",
      pot:
        "Large pot with good drainage.",
      propagation:
        "Cuttings, budding or grafting depending on variety.",
      fertilizer:
        "Compost or suitable rose fertilizer.",
      plantingSeason:
        "Cooler months are generally easier in hot Indian climates.",
      maintenance:
        "Remove spent flowers and prune appropriately.",
      problems:
        "Aphids, black spot, powdery mildew and spider mites.",
      difficulty: "Medium",
      tip:
        "Good air circulation helps reduce fungal problems."
    },

    "Spinach": {
      scientificName: "Spinacia oleracea",
      sunlight:
        "Full sun to partial shade depending on temperature.",
      soil:
        "Fertile, moisture-retentive but well-drained soil.",
      watering:
        "Keep soil evenly moist.",
      temperature:
        "Prefers cooler growing conditions.",
      pot:
        "Wide container with drainage holes.",
      propagation: "Seeds.",
      fertilizer:
        "Compost and suitable fertilizer when needed.",
      plantingSeason:
        "Cooler season in hot climates.",
      maintenance:
        "Harvest outer leaves regularly.",
      problems:
        "Leaf miners, aphids and fungal problems.",
      difficulty: "Easy",
      tip:
        "In hot weather, afternoon shade can reduce heat stress."
    },

    "Sunflower": {
      scientificName: "Helianthus annuus",
      sunlight: "Full sun.",
      soil: "Well-drained fertile soil.",
      watering:
        "Water regularly during establishment and flowering.",
      temperature: "Warm conditions.",
      pot:
        "Large deep pot for dwarf varieties.",
      propagation: "Seeds.",
      fertilizer:
        "Compost and balanced fertilizer when needed.",
      plantingSeason:
        "Warm growing season.",
      maintenance:
        "Support tall plants if necessary.",
      problems:
        "Bird damage, caterpillars, fungal diseases and water stress.",
      difficulty: "Easy",
      tip:
        "Give Sunflower plenty of sunlight and enough space."
    },

    "Tulsi": {
      scientificName: "Ocimum tenuiflorum",
      sunlight:
        "Bright sunlight for several hours daily.",
      soil:
        "Loose, fertile and well-drained soil.",
      watering:
        "Water when the upper soil begins to dry.",
      temperature: "Warm conditions.",
      pot:
        "Pot with drainage holes.",
      propagation:
        "Seeds or stem cuttings.",
      fertilizer:
        "Compost or mild balanced fertilizer.",
      plantingSeason: "Warm season.",
      maintenance:
        "Pinch growing tips to encourage branching.",
      problems:
        "Root problems from excess water and pests.",
      difficulty: "Easy",
      tip:
        "Good sunlight and controlled watering help Tulsi grow well."
    },

    "Wheat": {
      scientificName: "Triticum spp.",
      sunlight: "Full sun.",
      soil: "Fertile and well-drained soil.",
      watering:
        "Requires suitable moisture during growth; avoid prolonged waterlogging.",
      temperature:
        "Generally a cool-season cereal crop.",
      pot:
        "Can be grown in a wide container for demonstration or small harvests.",
      propagation: "Seeds.",
      fertilizer:
        "Nutrient management should be based on soil and crop requirements.",
      plantingSeason:
        "Usually a winter/rabi crop in much of India.",
      maintenance:
        "Weed control and appropriate irrigation.",
      problems:
        "Rust diseases, aphids and other crop pests.",
      difficulty: "Medium",
      tip:
        "Wheat performs best when planted in the appropriate cool growing season."
    },

    "Zinnia": {
      scientificName: "Zinnia spp.",
      sunlight: "Full sun.",
      soil: "Well-drained fertile soil.",
      watering:
        "Water at the soil level when the upper soil dries.",
      temperature: "Warm conditions.",
      pot:
        "Medium container with drainage holes.",
      propagation: "Seeds.",
      fertilizer:
        "Compost and moderate balanced fertilizer.",
      plantingSeason:
        "Warm growing season.",
      maintenance:
        "Remove spent flowers to encourage continued flowering.",
      problems:
        "Powdery mildew, aphids and fungal problems.",
      difficulty: "Easy",
      tip:
        "Avoid overcrowding and provide good air circulation."
    }
  };

  // =========================================================
  // LOAD ADMIN CHANGES FROM LOCAL STORAGE
  // =========================================================

  useEffect(() => {
    const loadPlantCareData = () => {
      const savedPlantCare =
        localStorage.getItem("plantCareData");

      if (savedPlantCare) {
        try {
          const parsedData = JSON.parse(savedPlantCare);

          if (
            parsedData &&
            typeof parsedData === "object"
          ) {
            setPlantCareData(parsedData);
          }
        } catch (error) {
          console.error(
            "Error loading PlantCare data:",
            error
          );
        }
      } else {
        setPlantCareData({});
      }
    };

    loadPlantCareData();

    // Storage event
    window.addEventListener(
      "storage",
      loadPlantCareData
    );

    // Custom event
    window.addEventListener(
      "plantCareUpdated",
      loadPlantCareData
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadPlantCareData
      );

      window.removeEventListener(
        "plantCareUpdated",
        loadPlantCareData
      );
    };
  }, []);

  // =========================================================
  // FINAL DATA
  // =========================================================

  const finalPlants =
    Object.keys(plantCareData).length > 0
      ? plantCareData
      : plants;

  const availablePlants = Object.keys(finalPlants);

  // Agar selected plant delete ho gaya hai
  // to first available plant select hoga

  const currentPlantName =
    finalPlants[selectedPlant]
      ? selectedPlant
      : availablePlants.length > 0
      ? availablePlants[0]
      : null;

  const plant = currentPlantName
    ? finalPlants[currentPlantName]
    : null;

  // =========================================================
  // IF NO DATA
  // =========================================================

  if (!plant || !currentPlantName) {
    return (
      <div
        className="plantcare-page"
        style={{
          backgroundImage:
            'url("/image/dashboard-.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%"
        }}
      >
        <div className="container py-5">
          <div className="card shadow-sm border-0">
            <div className="card-body text-center">
              <h3 className="text-danger">
                No PlantCare Data Available
              </h3>

              <p className="text-muted mb-0">
                Please add plant care information from
                Admin Manage PlantCare.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================
  // UI
  // =========================================================

  return (
    <div
      className="plantcare-page"
      style={{
        backgroundImage:
          'url("/image/dashboard-.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%"
      }}
    >
      <div className="container py-4">

        {/* ================= PAGE HEADING ================= */}

        <div className="text-center mb-5">

          <h1 className="fw-bold text-success">
            🌿 PlantCare
          </h1>

          <p className="text-muted">
            Practical plant growing and care guide
          </p>

        </div>

        {/* ================= PLANT SELECTION ================= */}

        <div className="card shadow-sm border-0 mb-4">

          <div className="card-body">

            <label className="form-label fw-bold">
              🌱 Select Plant
            </label>

            <select
              className="form-select"
              value={currentPlantName}
              onChange={(e) =>
                setSelectedPlant(e.target.value)
              }
            >
              {availablePlants.map((name) => (
                <option
                  key={name}
                  value={name}
                >
                  {name}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* ================= SELECTED PLANT ================= */}

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            {currentPlantName}
          </h2>

          <p className="text-muted fst-italic">
            {plant.scientificName}
          </p>

        </div>

        {/* ================= CARE INFORMATION ================= */}

        <div className="row g-4">

          {/* SUNLIGHT */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-warning">
                  ☀️ Sunlight
                </h5>

                <p>
                  {plant.sunlight}
                </p>

              </div>

            </div>
          </div>

          {/* SOIL */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-success">
                  🌱 Soil
                </h5>

                <p>
                  {plant.soil}
                </p>

              </div>

            </div>
          </div>

          {/* WATERING */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-primary">
                  💧 Watering
                </h5>

                <p>
                  {plant.watering}
                </p>

              </div>

            </div>
          </div>

          {/* TEMPERATURE */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-danger">
                  🌡️ Temperature
                </h5>

                <p>
                  {plant.temperature}
                </p>

              </div>

            </div>
          </div>

          {/* POT */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-secondary">
                  🪴 Pot / Space
                </h5>

                <p>
                  {plant.pot}
                </p>

              </div>

            </div>
          </div>

          {/* PROPAGATION */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-success">
                  🌿 Propagation
                </h5>

                <p>
                  {plant.propagation}
                </p>

              </div>

            </div>
          </div>

          {/* FERTILIZER */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-success">
                  🌾 Fertilizer
                </h5>

                <p>
                  {plant.fertilizer}
                </p>

              </div>

            </div>
          </div>

          {/* PLANTING SEASON */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-info">
                  📅 Planting Season
                </h5>

                <p>
                  {plant.plantingSeason}
                </p>

              </div>

            </div>
          </div>

          {/* MAINTENANCE */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-dark">
                  ✂️ Maintenance
                </h5>

                <p>
                  {plant.maintenance}
                </p>

              </div>

            </div>
          </div>

          {/* COMMON PROBLEMS */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-danger">
                  ⚠️ Common Problems
                </h5>

                <p>
                  {plant.problems}
                </p>

              </div>

            </div>
          </div>

          {/* DIFFICULTY */}

          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-primary">
                  ⭐ Difficulty
                </h5>

                <p>
                  {plant.difficulty}
                </p>

              </div>

            </div>
          </div>

        </div>

        {/* ================= PRACTICAL TIP ================= */}

        <div className="card border-success shadow-sm mt-4 mb-4">

          <div className="card-body">

            <h5 className="text-success">
              💡 Practical Growing Tip
            </h5>

            <p className="mb-0">
              {plant.tip}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PlantCare;