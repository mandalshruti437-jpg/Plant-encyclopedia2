import React, { useEffect, useState } from "react";
import "../CSS/ManagePlantCare.css";

const ManagePlantCare = () => {
  // =========================================================
  // DEFAULT PLANT CARE DATA
  // =========================================================

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
      tip: "The soil should dry between watering.",
    },

    Apple: {
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
      tip: "Choose a variety suitable for your local climate.",
    },

    Ashoka: {
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
        "Give the plant enough space and maintain good drainage.",
    },

    Bamboo: {
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
        "Choose a clumping variety if garden space is limited.",
    },

    Banana: {
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
        "Good drainage and regular moisture are important.",
    },

    Cactus: {
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
        "Overwatering is a bigger risk than underwatering.",
    },

    Coconut: {
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
        "Needs plenty of space and a warm climate.",
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
        "Do not keep Moringa roots in constantly wet soil.",
    },

    Eggplant: {
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
        "Regular monitoring is important because fruit and shoot borer can damage plants.",
    },

    Fern: {
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
        "Avoid harsh direct afternoon sunlight for many common ferns.",
    },

    Fig: {
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
        "Give plenty of sunlight and avoid waterlogged soil.",
    },

    Guava: {
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
        "Choose a grafted or air-layered plant if you want more predictable fruiting.",
    },

    Ginger: {
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
        "Loose soil is important because the rhizomes develop underground.",
    },

    Hibiscus: {
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
        "Good sunlight and regular watering support flowering.",
    },

    Jasmine: {
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
        "Provide support because many Jasmine types are climbing plants.",
    },

    Lemon: {
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
        "Good sunlight and drainage are important for healthy citrus growth.",
    },

    Mango: {
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
        "Choose a healthy grafted plant suited to your local climate.",
    },

    Marigold: {
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
        "Give Marigold plenty of sunlight and avoid continuously wet soil.",
    },

    Mint: {
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
        "Growing Mint in a pot makes it easier to control spreading.",
    },

    Neem: {
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
        "Do not plant Neem where the mature tree will have insufficient space.",
    },

    Papaya: {
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
        "Papaya needs good drainage and protection from prolonged waterlogging.",
    },

    Rose: {
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
        "Good air circulation helps reduce fungal problems.",
    },

    Spinach: {
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
        "In hot weather, afternoon shade can reduce heat stress.",
    },

    Sunflower: {
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
        "Give Sunflower plenty of sunlight and enough space.",
    },

    Tulsi: {
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
        "Good sunlight and controlled watering help Tulsi grow well.",
    },

    Wheat: {
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
        "Wheat performs best when planted in the appropriate cool growing season.",
    },

    Zinnia: {
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
        "Avoid overcrowding and provide good air circulation.",
    },
  };

  // =========================================================
  // STATE
  // =========================================================

  const [plantCareData, setPlantCareData] = useState({});
  const [editingPlant, setEditingPlant] = useState(null);

  const emptyForm = {
    name: "",
    scientificName: "",
    sunlight: "",
    soil: "",
    watering: "",
    temperature: "",
    pot: "",
    propagation: "",
    fertilizer: "",
    plantingSeason: "",
    maintenance: "",
    problems: "",
    difficulty: "",
    tip: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  // =========================================================
  // LOAD DATA
  // =========================================================

  useEffect(() => {
    const savedData = localStorage.getItem("plantCareData");

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);

        /*
          Existing localStorage mein agar purana 5-plant data hai,
          to remaining default plants automatically add ho jayenge.

          Admin ke existing changes overwrite nahi honge.
        */

        const mergedData = {
          ...plants,
          ...parsedData,
        };

        setPlantCareData(mergedData);

        localStorage.setItem(
          "plantCareData",
          JSON.stringify(mergedData)
        );

        window.dispatchEvent(
          new Event("plantCareUpdated")
        );
      } catch (error) {
        console.error(
          "Error loading PlantCare data:",
          error
        );

        setPlantCareData(plants);

        localStorage.setItem(
          "plantCareData",
          JSON.stringify(plants)
        );
      }
    } else {
      setPlantCareData(plants);

      localStorage.setItem(
        "plantCareData",
        JSON.stringify(plants)
      );
    }
  }, []);

  // =========================================================
  // SAVE DATA
  // =========================================================

  const saveData = (data) => {
    setPlantCareData(data);

    localStorage.setItem(
      "plantCareData",
      JSON.stringify(data)
    );

    /*
      Important:
      PlantCare.jsx ko immediately update signal.
    */

    window.dispatchEvent(
      new Event("plantCareUpdated")
    );
  };

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // ADD PLANT
  // =========================================================

  const handleAdd = (e) => {
    e.preventDefault();

    const plantName = formData.name.trim();

    if (!plantName) {
      alert("Please enter plant name.");
      return;
    }

    /*
      Case-insensitive duplicate check
    */

    const existingPlant = Object.keys(
      plantCareData
    ).find(
      (name) =>
        name.toLowerCase() === plantName.toLowerCase()
    );

    if (existingPlant) {
      alert(
        "This plant already exists. Please use Edit."
      );
      return;
    }

    const newPlant = {
      scientificName: formData.scientificName,
      sunlight: formData.sunlight,
      soil: formData.soil,
      watering: formData.watering,
      temperature: formData.temperature,
      pot: formData.pot,
      propagation: formData.propagation,
      fertilizer: formData.fertilizer,
      plantingSeason: formData.plantingSeason,
      maintenance: formData.maintenance,
      problems: formData.problems,
      difficulty: formData.difficulty,
      tip: formData.tip,
    };

    const updatedData = {
      ...plantCareData,
      [plantName]: newPlant,
    };

    saveData(updatedData);

    setFormData(emptyForm);

    alert(
      `${plantName} PlantCare added successfully!`
    );
  };

  // =========================================================
  // EDIT BUTTON
  // =========================================================

  const handleEdit = (name) => {
    const plant = plantCareData[name];

    if (!plant) {
      return;
    }

    setEditingPlant(name);

    setFormData({
      name: name,
      scientificName: plant.scientificName || "",
      sunlight: plant.sunlight || "",
      soil: plant.soil || "",
      watering: plant.watering || "",
      temperature: plant.temperature || "",
      pot: plant.pot || "",
      propagation: plant.propagation || "",
      fertilizer: plant.fertilizer || "",
      plantingSeason: plant.plantingSeason || "",
      maintenance: plant.maintenance || "",
      problems: plant.problems || "",
      difficulty: plant.difficulty || "",
      tip: plant.tip || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // UPDATE PLANT
  // =========================================================

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!editingPlant) {
      return;
    }

    const newName = formData.name.trim();

    if (!newName) {
      alert("Please enter plant name.");
      return;
    }

    /*
      Check whether new name belongs to another plant.
    */

    const duplicatePlant = Object.keys(
      plantCareData
    ).find(
      (name) =>
        name !== editingPlant &&
        name.toLowerCase() === newName.toLowerCase()
    );

    if (duplicatePlant) {
      alert(
        "This plant name already exists. Please use another name."
      );
      return;
    }

    const updatedData = {
      ...plantCareData,
    };

    /*
      Old name delete
      This also allows admin to change plant name.
    */

    delete updatedData[editingPlant];

    /*
      Updated plant data
    */

    updatedData[newName] = {
      scientificName: formData.scientificName,
      sunlight: formData.sunlight,
      soil: formData.soil,
      watering: formData.watering,
      temperature: formData.temperature,
      pot: formData.pot,
      propagation: formData.propagation,
      fertilizer: formData.fertilizer,
      plantingSeason: formData.plantingSeason,
      maintenance: formData.maintenance,
      problems: formData.problems,
      difficulty: formData.difficulty,
      tip: formData.tip,
    };

    saveData(updatedData);

    setEditingPlant(null);
    setFormData(emptyForm);

    alert(
      `${newName} PlantCare updated successfully!`
    );
  };

  // =========================================================
  // DELETE PLANT
  // =========================================================

  const handleDelete = (name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name} PlantCare data?`
    );

    if (!confirmDelete) {
      return;
    }

    const updatedData = {
      ...plantCareData,
    };

    delete updatedData[name];

    saveData(updatedData);

    if (editingPlant === name) {
      setEditingPlant(null);
      setFormData(emptyForm);
    }

    alert(
      `${name} PlantCare deleted successfully!`
    );
  };

  // =========================================================
  // CANCEL EDIT
  // =========================================================

  const handleCancel = () => {
    setEditingPlant(null);
    setFormData(emptyForm);
  };

  // =========================================================
  // RESET DEFAULT DATA
  // =========================================================

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset all PlantCare data to default?"
    );

    if (!confirmReset) {
      return;
    }

    saveData(plants);

    setEditingPlant(null);
    setFormData(emptyForm);

    alert(
      "PlantCare data reset successfully!"
    );
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="manage-plantcare-page">

      <div className="container py-4">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="text-center mb-4">

          <h1 className="fw-bold text-success">
            🌿 Manage PlantCare
          </h1>

          <p className="text-muted">
            Admin can add, edit and delete plant care
            information.
          </p>

        </div>

        {/* =====================================================
            FORM
        ====================================================== */}

        <div className="card shadow-sm border-0 mb-5">

          <div className="card-header bg-success text-white">

            <h4 className="mb-0">

              {editingPlant
                ? `✏️ Edit PlantCare - ${editingPlant}`
                : "➕ Add New PlantCare"}

            </h4>

          </div>

          <div className="card-body">

            <form
              onSubmit={
                editingPlant
                  ? handleUpdate
                  : handleAdd
              }
            >

              {/* PLANT NAME */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Plant Name
                </label>

                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter plant name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* SCIENTIFIC NAME */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Scientific Name
                </label>

                <input
                  type="text"
                  name="scientificName"
                  className="form-control"
                  placeholder="Enter scientific name"
                  value={formData.scientificName}
                  onChange={handleChange}
                />

              </div>

              {/* SUNLIGHT */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  ☀️ Sunlight
                </label>

                <textarea
                  name="sunlight"
                  className="form-control"
                  placeholder="Enter sunlight information"
                  value={formData.sunlight}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* SOIL */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  🌱 Soil
                </label>

                <textarea
                  name="soil"
                  className="form-control"
                  placeholder="Enter soil information"
                  value={formData.soil}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* WATERING */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  💧 Watering
                </label>

                <textarea
                  name="watering"
                  className="form-control"
                  placeholder="Enter watering information"
                  value={formData.watering}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* TEMPERATURE */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  🌡️ Temperature
                </label>

                <textarea
                  name="temperature"
                  className="form-control"
                  placeholder="Enter temperature information"
                  value={formData.temperature}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* POT */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  🪴 Pot / Space
                </label>

                <textarea
                  name="pot"
                  className="form-control"
                  placeholder="Enter pot / space information"
                  value={formData.pot}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* PROPAGATION */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  🌿 Propagation
                </label>

                <textarea
                  name="propagation"
                  className="form-control"
                  placeholder="Enter propagation information"
                  value={formData.propagation}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* FERTILIZER */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  🌾 Fertilizer
                </label>

                <textarea
                  name="fertilizer"
                  className="form-control"
                  placeholder="Enter fertilizer information"
                  value={formData.fertilizer}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* PLANTING SEASON */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  📅 Planting Season
                </label>

                <textarea
                  name="plantingSeason"
                  className="form-control"
                  placeholder="Enter planting season"
                  value={formData.plantingSeason}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* MAINTENANCE */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  ✂️ Maintenance
                </label>

                <textarea
                  name="maintenance"
                  className="form-control"
                  placeholder="Enter maintenance information"
                  value={formData.maintenance}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* PROBLEMS */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  ⚠️ Common Problems
                </label>

                <textarea
                  name="problems"
                  className="form-control"
                  placeholder="Enter common problems"
                  value={formData.problems}
                  onChange={handleChange}
                  rows="2"
                />

              </div>

              {/* DIFFICULTY */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  ⭐ Difficulty
                </label>

                <select
                  name="difficulty"
                  className="form-select"
                  value={formData.difficulty}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Difficulty
                  </option>

                  <option value="Easy">
                    Easy
                  </option>

                  <option value="Easy to Medium">
                    Easy to Medium
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="Medium to Hard">
                    Medium to Hard
                  </option>

                  <option value="Hard">
                    Hard
                  </option>

                </select>

              </div>

              {/* TIP */}

              <div className="mb-3">

                <label className="form-label fw-bold">
                  💡 Practical Growing Tip
                </label>

                <textarea
                  name="tip"
                  className="form-control"
                  placeholder="Enter practical growing tip"
                  value={formData.tip}
                  onChange={handleChange}
                  rows="3"
                />

              </div>

              {/* BUTTONS */}

              <div className="d-flex gap-2">

                <button
                  type="submit"
                  className="btn btn-success"
                >

                  {editingPlant
                    ? "💾 Update PlantCare"
                    : "➕ Add PlantCare"}

                </button>

                {editingPlant && (

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancel}
                  >
                    ❌ Cancel
                  </button>

                )}

              </div>

            </form>

          </div>

        </div>

        {/* =====================================================
            ALL PLANTS
        ====================================================== */}

        <div className="card shadow-sm border-0">

          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">

            <h4 className="mb-0">
              🌱 PlantCare List
            </h4>

            <button
              className="btn btn-warning btn-sm"
              onClick={handleReset}
            >
              🔄 Reset Default
            </button>

          </div>

          <div className="card-body">

            {Object.keys(plantCareData).length === 0 ? (

              <div className="text-center py-4">

                <h5 className="text-danger">
                  No PlantCare Data
                </h5>

                <p className="text-muted">
                  Add a new plant using the form above.
                </p>

              </div>

            ) : (

              <div className="table-responsive">

                <table className="table table-bordered table-hover align-middle">

                  <thead className="table-success">

                    <tr>

                      <th>
                        #
                      </th>

                      <th>
                        Plant Name
                      </th>

                      <th>
                        Scientific Name
                      </th>

                      <th>
                        Difficulty
                      </th>

                      <th>
                        Actions
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {Object.entries(
                      plantCareData
                    ).map(
                      ([name, plant], index) => (

                        <tr key={name}>

                          <td>
                            {index + 1}
                          </td>

                          <td>
                            <strong>
                              {name}
                            </strong>
                          </td>

                          <td>
                            <i>
                              {plant.scientificName}
                            </i>
                          </td>

                          <td>
                            {plant.difficulty}
                          </td>

                          <td>

                            <div className="d-flex gap-2 flex-wrap">

                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                  handleEdit(name)
                                }
                              >
                                ✏️ Edit
                              </button>

                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                  handleDelete(name)
                                }
                              >
                                🗑️ Delete
                              </button>

                            </div>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ManagePlantCare;