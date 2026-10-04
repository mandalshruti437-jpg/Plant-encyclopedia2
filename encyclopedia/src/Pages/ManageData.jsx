import { useEffect, useState } from "react";

// ==========================================
// DEFAULT 78 PLANTS
// ==========================================

const defaultPlants = [

  // ================= A =================

  {
    id: 1,
    name: "Aloe Vera",
    scientificName: "Aloe vera",
    family: "Asphodelaceae",
  },

  {
    id: 2,
    name: "Apple",
    scientificName: "Malus domestica",
    family: "Rosaceae",
  },

  {
    id: 3,
    name: "Ashoka",
    scientificName: "Saraca asoca",
    family: "Fabaceae",
  },

  // ================= B =================

  {
    id: 4,
    name: "Banyan",
    scientificName: "Ficus benghalensis",
    family: "Moraceae",
  },

  {
    id: 5,
    name: "Bamboo",
    scientificName: "Bambusa vulgaris",
    family: "Poaceae",
  },

  {
    id: 6,
    name: "Banana",
    scientificName: "Musa acuminata",
    family: "Musaceae",
  },

  // ================= C =================

  {
    id: 7,
    name: "Cactus",
    scientificName: "Opuntia ficus-indica",
    family: "Cactaceae",
  },

  {
    id: 8,
    name: "Coconut",
    scientificName: "Cocos nucifera",
    family: "Arecaceae",
  },

  {
    id: 9,
    name: "Cotton",
    scientificName: "Gossypium hirsutum",
    family: "Malvaceae",
  },

  // ================= D =================

  {
    id: 10,
    name: "Dahlia",
    scientificName: "Dahlia pinnata",
    family: "Asteraceae",
  },

  {
    id: 11,
    name: "Date Palm",
    scientificName: "Phoenix dactylifera",
    family: "Arecaceae",
  },

  {
    id: 12,
    name: "Drumstick Tree",
    scientificName: "Moringa oleifera",
    family: "Moringaceae",
  },

  // ================= E =================

  {
    id: 13,
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    family: "Myrtaceae",
  },

  {
    id: 14,
    name: "Eggplant",
    scientificName: "Solanum melongena",
    family: "Solanaceae",
  },

  {
    id: 15,
    name: "Elm",
    scientificName: "Ulmus americana",
    family: "Ulmaceae",
  },

  // ================= F =================

  {
    id: 16,
    name: "Fern",
    scientificName: "Nephrolepis exaltata",
    family: "Nephrolepidaceae",
  },

  {
    id: 17,
    name: "Fig",
    scientificName: "Ficus carica",
    family: "Moraceae",
  },

  {
    id: 18,
    name: "Flame Tree",
    scientificName: "Delonix regia",
    family: "Fabaceae",
  },

  // ================= G =================

  {
    id: 19,
    name: "Guava",
    scientificName: "Psidium guajava",
    family: "Myrtaceae",
  },

  {
    id: 20,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
  },

  {
    id: 21,
    name: "Gulmohar",
    scientificName: "Delonix regia",
    family: "Fabaceae",
  },

  // ================= H =================

  {
    id: 22,
    name: "Hibiscus",
    scientificName: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
  },

  {
    id: 23,
    name: "Henna",
    scientificName: "Lawsonia inermis",
    family: "Lythraceae",
  },

  {
    id: 24,
    name: "Holly",
    scientificName: "Ilex aquifolium",
    family: "Aquifoliaceae",
  },

  // ================= I =================

  {
    id: 25,
    name: "Indian Gooseberry",
    scientificName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
  },

  {
    id: 26,
    name: "Iris",
    scientificName: "Iris germanica",
    family: "Iridaceae",
  },

  {
    id: 27,
    name: "Ixora",
    scientificName: "Ixora coccinea",
    family: "Rubiaceae",
  },

  // ================= J =================

  {
    id: 28,
    name: "Jasmine",
    scientificName: "Jasminum sambac",
    family: "Oleaceae",
  },

  {
    id: 29,
    name: "Jackfruit",
    scientificName: "Artocarpus heterophyllus",
    family: "Moraceae",
  },

  {
    id: 30,
    name: "Jamun",
    scientificName: "Syzygium cumini",
    family: "Myrtaceae",
  },

  // ================= K =================

  {
    id: 31,
    name: "Kale",
    scientificName: "Brassica oleracea var. sabellica",
    family: "Brassicaceae",
  },

  {
    id: 32,
    name: "Karanja",
    scientificName: "Pongamia pinnata",
    family: "Fabaceae",
  },

  {
    id: 33,
    name: "Kiwi",
    scientificName: "Actinidia deliciosa",
    family: "Actinidiaceae",
  },

  // ================= L =================

  {
    id: 34,
    name: "Lemon",
    scientificName: "Citrus limon",
    family: "Rutaceae",
  },

  {
    id: 35,
    name: "Lotus",
    scientificName: "Nelumbo nucifera",
    family: "Nelumbonaceae",
  },

  {
    id: 36,
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
  },

  // ================= M =================

  {
    id: 37,
    name: "Mango",
    scientificName: "Mangifera indica",
    family: "Anacardiaceae",
  },

  {
    id: 38,
    name: "Marigold",
    scientificName: "Tagetes erecta",
    family: "Asteraceae",
  },

  {
    id: 39,
    name: "Mint",
    scientificName: "Mentha spicata",
    family: "Lamiaceae",
  },

  // ================= N =================

  {
    id: 40,
    name: "Neem",
    scientificName: "Azadirachta indica",
    family: "Meliaceae",
  },

  {
    id: 41,
    name: "Nutmeg",
    scientificName: "Myristica fragrans",
    family: "Myristicaceae",
  },

  {
    id: 42,
    name: "Nerium",
    scientificName: "Nerium oleander",
    family: "Apocynaceae",
  },

  // ================= O =================

  {
    id: 43,
    name: "Oak",
    scientificName: "Quercus robur",
    family: "Fagaceae",
  },

  {
    id: 44,
    name: "Olive",
    scientificName: "Olea europaea",
    family: "Oleaceae",
  },

  {
    id: 45,
    name: "Orchid",
    scientificName: "Phalaenopsis amabilis",
    family: "Orchidaceae",
  },

  // ================= P =================

  {
    id: 46,
    name: "Papaya",
    scientificName: "Carica papaya",
    family: "Caricaceae",
  },

  {
    id: 47,
    name: "Peepal",
    scientificName: "Ficus religiosa",
    family: "Moraceae",
  },

  {
    id: 48,
    name: "Pomegranate",
    scientificName: "Punica granatum",
    family: "Lythraceae",
  },

  // ================= Q =================

  {
    id: 49,
    name: "Queen Palm",
    scientificName: "Syagrus romanzoffiana",
    family: "Arecaceae",
  },

  {
    id: 50,
    name: "Quince",
    scientificName: "Cydonia oblonga",
    family: "Rosaceae",
  },

  {
    id: 51,
    name: "Queensland Bottle Tree",
    scientificName: "Brachychiton rupestris",
    family: "Malvaceae",
  },

  // ================= R =================

  {
    id: 52,
    name: "Rose",
    scientificName: "Rosa chinensis",
    family: "Rosaceae",
  },

  {
    id: 53,
    name: "Rice",
    scientificName: "Oryza sativa",
    family: "Poaceae",
  },

  {
    id: 54,
    name: "Raspberry",
    scientificName: "Rubus idaeus",
    family: "Rosaceae",
  },

  // ================= S =================

  {
    id: 55,
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
  },

  {
    id: 56,
    name: "Sugarcane",
    scientificName: "Saccharum officinarum",
    family: "Poaceae",
  },

  {
    id: 57,
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    family: "Amaranthaceae",
  },

  // ================= T =================

  {
    id: 58,
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae",
  },

  {
    id: 59,
    name: "Tea",
    scientificName: "Camellia sinensis",
    family: "Theaceae",
  },

  {
    id: 60,
    name: "Tamarind",
    scientificName: "Tamarindus indica",
    family: "Fabaceae",
  },

  // ================= U =================

  {
    id: 61,
    name: "Umbrella Tree",
    scientificName: "Heptapleurum arboricola",
    family: "Araliaceae",
  },

  {
    id: 62,
    name: "Urena",
    scientificName: "Urena lobata",
    family: "Malvaceae",
  },

  {
    id: 63,
    name: "Ulmus",
    scientificName: "Ulmus glabra",
    family: "Ulmaceae",
  },

  // ================= V =================

  {
    id: 64,
    name: "Vanilla",
    scientificName: "Vanilla planifolia",
    family: "Orchidaceae",
  },

  {
    id: 65,
    name: "Violet",
    scientificName: "Viola odorata",
    family: "Violaceae",
  },

  {
    id: 66,
    name: "Vetiver",
    scientificName: "Chrysopogon zizanioides",
    family: "Poaceae",
  },

  // ================= W =================

  {
    id: 67,
    name: "Water Lily",
    scientificName: "Nymphaea nouchali",
    family: "Nymphaeaceae",
  },

  {
    id: 68,
    name: "Wheat",
    scientificName: "Triticum aestivum",
    family: "Poaceae",
  },

  {
    id: 69,
    name: "Walnut",
    scientificName: "Juglans regia",
    family: "Juglandaceae",
  },

  // ================= X =================

  {
    id: 70,
    name: "Xanthium",
    scientificName: "Xanthium strumarium",
    family: "Asteraceae",
  },

  {
    id: 71,
    name: "Xeranthemum",
    scientificName: "Xeranthemum annuum",
    family: "Asteraceae",
  },

  {
    id: 72,
    name: "Xylosma",
    scientificName: "Xylosma congestum",
    family: "Salicaceae",
  },

  // ================= Y =================

  {
    id: 73,
    name: "Yam",
    scientificName: "Dioscorea alata",
    family: "Dioscoreaceae",
  },

  {
    id: 74,
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    family: "Asteraceae",
  },

  {
    id: 75,
    name: "Yellow Oleander",
    scientificName: "Cascabela thevetia",
    family: "Apocynaceae",
  },

  // ================= Z =================

  {
    id: 76,
    name: "Zinnia",
    scientificName: "Zinnia elegans",
    family: "Asteraceae",
  },

  {
    id: 77,
    name: "Zucchini",
    scientificName: "Cucurbita pepo",
    family: "Cucurbitaceae",
  },

  {
    id: 78,
    name: "Ziziphus",
    scientificName: "Ziziphus mauritiana",
    family: "Rhamnaceae",
  },

];


// ==========================================
// MANAGE DATA
// ==========================================

function ManageData() {

  const [plants, setPlants] = useState(() => {

    const savedPlants =
      localStorage.getItem("allPlants");

    return savedPlants
      ? JSON.parse(savedPlants)
      : defaultPlants;

  });


  const [formData, setFormData] = useState({
    name: "",
    scientificName: "",
    family: "",
  });


  const [editId, setEditId] = useState(null);


  // ==========================================
  // SAVE DATA
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "allPlants",
      JSON.stringify(plants)
    );

  }, [plants]);


  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  // ==========================================
  // ADD / UPDATE
  // ==========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.scientificName.trim() === "" ||
      formData.family.trim()
    ) {

      if (
        formData.name.trim() === "" ||
        formData.scientificName.trim() === "" ||
        formData.family.trim() === ""
      ) {

        alert(
          "Please enter Plant Name, Scientific Name and Family"
        );

        return;

      }

    }


    // ========================================
    // UPDATE
    // ========================================

    if (editId !== null) {

      setPlants((prevPlants) =>
        prevPlants.map((plant) =>

          plant.id === editId
            ? {
                ...plant,
                name: formData.name.trim(),
                scientificName:
                  formData.scientificName.trim(),
                family:
                  formData.family.trim(),
              }
            : plant

        )
      );


      setEditId(null);

      alert("Plant updated successfully");

    }


    // ========================================
    // ADD
    // ========================================

    else {

      const newPlant = {

        id: Date.now(),

        name:
          formData.name.trim(),

        scientificName:
          formData.scientificName.trim(),

        family:
          formData.family.trim(),

      };


      setPlants((prevPlants) => [

        ...prevPlants,

        newPlant,

      ]);


      alert("Plant added successfully");

    }


    setFormData({

      name: "",
      scientificName: "",
      family: "",

    });

  };


  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (plant) => {

    setEditId(plant.id);

    setFormData({

      name: plant.name,

      scientificName:
        plant.scientificName,

      family:
        plant.family,

    });

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };


  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this plant?"
      );


    if (!confirmDelete) {
      return;
    }


    setPlants((prevPlants) =>
      prevPlants.filter(
        (plant) => plant.id !== id
      )
    );


    alert("Plant deleted successfully");

  };


  // ==========================================
  // CANCEL
  // ==========================================

  const handleCancel = () => {

    setEditId(null);

    setFormData({

      name: "",
      scientificName: "",
      family: "",

    });

  };


  return (

    <div className="container mt-4 mb-5">

      <div className="text-center mb-4">

        <h2 className="fw-bold">
          Manage Data
        </h2>

        <p className="text-muted">
          Add, Edit and Delete Plant Data
        </p>

      </div>


      {/* FORM */}

      <div className="card shadow mb-4">

        <div className="card-header bg-success text-white">

          <h5 className="mb-0">

            {editId !== null
              ? "Edit Plant"
              : "Add New Plant"}

          </h5>

        </div>


        <div className="card-body">

          <form onSubmit={handleSubmit}>

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
              />

            </div>


            <div className="mb-3">

              <label className="form-label fw-bold">
                Scientific Name
              </label>

              <input
                type="text"
                name="scientificName"
                className="form-control"
                placeholder="Enter scientific name"
                value={
                  formData.scientificName
                }
                onChange={handleChange}
              />

            </div>


            <div className="mb-3">

              <label className="form-label fw-bold">
                Family
              </label>

              <input
                type="text"
                name="family"
                className="form-control"
                placeholder="Enter plant family"
                value={formData.family}
                onChange={handleChange}
              />

            </div>


            <button
              type="submit"
              className="btn btn-success me-2"
            >

              {editId !== null
                ? "Update Plant"
                : "Add Plant"}

            </button>


            {editId !== null && (

              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >

                Cancel

              </button>

            )}

          </form>

        </div>

      </div>


      {/* TABLE */}

      <div className="card shadow">

        <div className="card-header bg-dark text-white">

          <h5 className="mb-0">
            Manage Plants ({plants.length})
          </h5>

        </div>


        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

                <tr>

                  <th>No.</th>

                  <th>Plant Name</th>

                  <th>Scientific Name</th>

                  <th>Family</th>

                  <th>Action</th>

                </tr>

              </thead>


              <tbody>

                {plants.map(
                  (plant, index) => (

                    <tr key={plant.id}>

                      <td>
                        {index + 1}
                      </td>

                      <td>
                        <strong>
                          {plant.name}
                        </strong>
                      </td>

                      <td>
                        <i>
                          {plant.scientificName}
                        </i>
                      </td>

                      <td>
                        {plant.family}
                      </td>

                      <td>

                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() =>
                            handleEdit(plant)
                          }
                        >
                          Edit
                        </button>


                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleDelete(
                              plant.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ManageData;