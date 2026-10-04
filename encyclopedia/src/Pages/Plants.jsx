import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Plants.css";

const plants = [
  // ================= A =================
  { id: 1, name: "Aloe Vera", scientificName: "Aloe vera", family: "Asphodelaceae" },
  { id: 2, name: "Apple", scientificName: "Malus domestica", family: "Rosaceae" },
  { id: 3, name: "Ashoka", scientificName: "Saraca asoca", family: "Fabaceae" },

  // ================= B =================
  { id: 4, name: "Banyan", scientificName: "Ficus benghalensis", family: "Moraceae" },
  { id: 5, name: "Bamboo", scientificName: "Bambusa vulgaris", family: "Poaceae" },
  { id: 6, name: "Banana", scientificName: "Musa acuminata", family: "Musaceae" },

  // ================= C =================
  { id: 7, name: "Cactus", scientificName: "Opuntia ficus-indica", family: "Cactaceae" },
  { id: 8, name: "Coconut", scientificName: "Cocos nucifera", family: "Arecaceae" },
  { id: 9, name: "Cotton", scientificName: "Gossypium hirsutum", family: "Malvaceae" },

  // ================= D =================
  { id: 10, name: "Dahlia", scientificName: "Dahlia pinnata", family: "Asteraceae" },
  { id: 11, name: "Date Palm", scientificName: "Phoenix dactylifera", family: "Arecaceae" },
  { id: 12, name: "Drumstick Tree", scientificName: "Moringa oleifera", family: "Moringaceae" },

  // ================= E =================
  { id: 13, name: "Eucalyptus", scientificName: "Eucalyptus globulus", family: "Myrtaceae" },
  { id: 14, name: "Eggplant", scientificName: "Solanum melongena", family: "Solanaceae" },
  { id: 15, name: "Elm", scientificName: "Ulmus americana", family: "Ulmaceae" },

  // ================= F =================
  { id: 16, name: "Fern", scientificName: "Nephrolepis exaltata", family: "Nephrolepidaceae" },
  { id: 17, name: "Fig", scientificName: "Ficus carica", family: "Moraceae" },
  { id: 18, name: "Flame Tree", scientificName: "Delonix regia", family: "Fabaceae" },

  // ================= G =================
  { id: 19, name: "Guava", scientificName: "Psidium guajava", family: "Myrtaceae" },
  { id: 20, name: "Ginger", scientificName: "Zingiber officinale", family: "Zingiberaceae" },
  { id: 21, name: "Gulmohar", scientificName: "Delonix regia", family: "Fabaceae" },

  // ================= H =================
  { id: 22, name: "Hibiscus", scientificName: "Hibiscus rosa-sinensis", family: "Malvaceae" },
  { id: 23, name: "Henna", scientificName: "Lawsonia inermis", family: "Lythraceae" },
  { id: 24, name: "Holly", scientificName: "Ilex aquifolium", family: "Aquifoliaceae" },

  // ================= I =================
  { id: 25, name: "Indian Gooseberry", scientificName: "Phyllanthus emblica", family: "Phyllanthaceae" },
  { id: 26, name: "Iris", scientificName: "Iris germanica", family: "Iridaceae" },
  { id: 27, name: "Ixora", scientificName: "Ixora coccinea", family: "Rubiaceae" },

  // ================= J =================
  { id: 28, name: "Jasmine", scientificName: "Jasminum sambac", family: "Oleaceae" },
  { id: 29, name: "Jackfruit", scientificName: "Artocarpus heterophyllus", family: "Moraceae" },
  { id: 30, name: "Jamun", scientificName: "Syzygium cumini", family: "Myrtaceae" },

  // ================= K =================
  { id: 31, name: "Kale", scientificName: "Brassica oleracea var. sabellica", family: "Brassicaceae" },
  { id: 32, name: "Karanja", scientificName: "Pongamia pinnata", family: "Fabaceae" },
  { id: 33, name: "Kiwi", scientificName: "Actinidia deliciosa", family: "Actinidiaceae" },

  // ================= L =================
  { id: 34, name: "Lemon", scientificName: "Citrus limon", family: "Rutaceae" },
  { id: 35, name: "Lotus", scientificName: "Nelumbo nucifera", family: "Nelumbonaceae" },
  { id: 36, name: "Lavender", scientificName: "Lavandula angustifolia", family: "Lamiaceae" },

  // ================= M =================
  { id: 37, name: "Mango", scientificName: "Mangifera indica", family: "Anacardiaceae" },
  { id: 38, name: "Marigold", scientificName: "Tagetes erecta", family: "Asteraceae" },
  { id: 39, name: "Mint", scientificName: "Mentha spicata", family: "Lamiaceae" },

  // ================= N =================
  { id: 40, name: "Neem", scientificName: "Azadirachta indica", family: "Meliaceae" },
  { id: 41, name: "Nutmeg", scientificName: "Myristica fragrans", family: "Myristicaceae" },
  { id: 42, name: "Nerium", scientificName: "Nerium oleander", family: "Apocynaceae" },

  // ================= O =================
  { id: 43, name: "Oak", scientificName: "Quercus robur", family: "Fagaceae" },
  { id: 44, name: "Olive", scientificName: "Olea europaea", family: "Oleaceae" },
  { id: 45, name: "Orchid", scientificName: "Phalaenopsis amabilis", family: "Orchidaceae" },

  // ================= P =================
  { id: 46, name: "Papaya", scientificName: "Carica papaya", family: "Caricaceae" },
  { id: 47, name: "Peepal", scientificName: "Ficus religiosa", family: "Moraceae" },
  { id: 48, name: "Pomegranate", scientificName: "Punica granatum", family: "Lythraceae" },

  // ================= Q =================
  { id: 49, name: "Queen Palm", scientificName: "Syagrus romanzoffiana", family: "Arecaceae" },
  { id: 50, name: "Quince", scientificName: "Cydonia oblonga", family: "Rosaceae" },
  { id: 51, name: "Queensland Bottle Tree", scientificName: "Brachychiton rupestris", family: "Malvaceae" },

  // ================= R =================
  { id: 52, name: "Rose", scientificName: "Rosa chinensis", family: "Rosaceae" },
  { id: 53, name: "Rice", scientificName: "Oryza sativa", family: "Poaceae" },
  { id: 54, name: "Raspberry", scientificName: "Rubus idaeus", family: "Rosaceae" },

  // ================= S =================
  { id: 55, name: "Sunflower", scientificName: "Helianthus annuus", family: "Asteraceae" },
  { id: 56, name: "Sugarcane", scientificName: "Saccharum officinarum", family: "Poaceae" },
  { id: 57, name: "Spinach", scientificName: "Spinacia oleracea", family: "Amaranthaceae" },

  // ================= T =================
  { id: 58, name: "Tulsi", scientificName: "Ocimum tenuiflorum", family: "Lamiaceae" },
  { id: 59, name: "Tea", scientificName: "Camellia sinensis", family: "Theaceae" },
  { id: 60, name: "Tamarind", scientificName: "Tamarindus indica", family: "Fabaceae" },

  // ================= U =================
  { id: 61, name: "Umbrella Tree", scientificName: "Heptapleurum arboricola", family: "Araliaceae" },
  { id: 62, name: "Urena", scientificName: "Urena lobata", family: "Malvaceae" },
  { id: 63, name: "Ulmus", scientificName: "Ulmus glabra", family: "Ulmaceae" },

  // ================= V =================
  { id: 64, name: "Vanilla", scientificName: "Vanilla planifolia", family: "Orchidaceae" },
  { id: 65, name: "Violet", scientificName: "Viola odorata", family: "Violaceae" },
  { id: 66, name: "Vetiver", scientificName: "Chrysopogon zizanioides", family: "Poaceae" },

  // ================= W =================
  { id: 67, name: "Water Lily", scientificName: "Nymphaea nouchali", family: "Nymphaeaceae" },
  { id: 68, name: "Wheat", scientificName: "Triticum aestivum", family: "Poaceae" },
  { id: 69, name: "Walnut", scientificName: "Juglans regia", family: "Juglandaceae" },

  // ================= X =================
  { id: 70, name: "Xanthium", scientificName: "Xanthium strumarium", family: "Asteraceae" },
  { id: 71, name: "Xeranthemum", scientificName: "Xeranthemum annuum", family: "Asteraceae" },
  { id: 72, name: "Xylosma", scientificName: "Xylosma congestum", family: "Salicaceae" },

  // ================= Y =================
  { id: 73, name: "Yam", scientificName: "Dioscorea alata", family: "Dioscoreaceae" },
  { id: 74, name: "Yarrow", scientificName: "Achillea millefolium", family: "Asteraceae" },
  { id: 75, name: "Yellow Oleander", scientificName: "Cascabela thevetia", family: "Apocynaceae" },

  // ================= Z =================
  { id: 76, name: "Zinnia", scientificName: "Zinnia elegans", family: "Asteraceae" },
  { id: 77, name: "Zucchini", scientificName: "Cucurbita pepo", family: "Cucurbitaceae" },
  { id: 78, name: "Ziziphus", scientificName: "Ziziphus mauritiana", family: "Rhamnaceae" },
];

function Plants() {

  // ==========================================
  // SAVED ALPHABET
  // ==========================================

  const savedLetter =
    sessionStorage.getItem("selectedLetter") || "";

  const [letter, setLetter] =
    useState(savedLetter);

  const [search, setSearch] =
    useState("");

  const [searchText, setSearchText] =
    useState("");


  // ==========================================
  // PLANTS DATA
  // ==========================================

  const getPlants = () => {

    // Always start with your original 78 plants
    const result = [...plants];

    const getSavedArray = (key) => {

      const value = localStorage.getItem(key);

      if (!value) {
        return [];
      }

      try {

        const parsed = JSON.parse(value);

        return Array.isArray(parsed)
          ? parsed
          : [];

      } catch (error) {

        console.log(
          `Invalid ${key} data in localStorage`
        );

        return [];

      }

    };


    // Get Admin saved data
    const savedPlants = [
      ...getSavedArray("plants"),
      ...getSavedArray("adminPlants")
    ];


    savedPlants.forEach((savedPlant) => {

      if (!savedPlant) {
        return;
      }


      const savedName =
        String(savedPlant.name || "")
          .trim()
          .toLowerCase();


      // 1) Same name wali plant ho to usi ko update karo
      //    (original id safe rahegi)
      const sameNameIndex =
        result.findIndex(
          (defaultPlant) =>
            String(defaultPlant.name || "")
              .trim()
              .toLowerCase() === savedName
        );


      if (sameNameIndex !== -1) {

        result[sameNameIndex] = {
          ...result[sameNameIndex],
          ...savedPlant,
          id: result[sameNameIndex].id
        };

        return;

      }


      // 2) Nayi admin plant: agar id pehle se kisi plant
      //    ki hai to nayi unique id do,
      //    taaki koi plant overwrite na ho
      const idAlreadyUsed =
        result.some(
          (item) =>
            String(item.id) ===
            String(savedPlant.id ?? "")
        );


      if (idAlreadyUsed || savedPlant.id == null) {

        result.push({
          ...savedPlant,
          id: `admin-${Date.now()}-${result.length}`
        });

      } else {

        result.push(savedPlant);

      }

    });


    return result;

  };


  const [plantList, setPlantList] =
    useState(() => getPlants());


  // ==========================================
  // ADMIN PLANT UPDATE
  // ==========================================

  useEffect(() => {

    const updatePlants = () => {

      setPlantList(getPlants());

    };


    window.addEventListener(
      "plantsUpdated",
      updatePlants
    );


    window.addEventListener(
      "storage",
      updatePlants
    );


    return () => {

      window.removeEventListener(
        "plantsUpdated",
        updatePlants
      );


      window.removeEventListener(
        "storage",
        updatePlants
      );

    };

  }, []);


  // ==========================================
  // ALPHABET
  // ==========================================

  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


  // ==========================================
  // ALPHABET CLICK
  // ==========================================

  const handleAlphabetClick = (item) => {

    setLetter(item);


    sessionStorage.setItem(
      "selectedLetter",
      item
    );


    setSearch("");

    setSearchText("");

  };


  // ==========================================
  // SEARCH
  // ==========================================

  const handleSearch = () => {

    setSearch(searchText);

  };


  // ==========================================
  // FILTER PLANTS
  // ==========================================

  const filteredPlants = plantList
    .filter((plant) => {

      const plantName =
        String(plant.name || "")
          .trim()
          .toLowerCase();


      // Search
      if (search.trim() !== "") {

        return plantName.includes(
          search.trim().toLowerCase()
        );

      }


      // No alphabet selected
      if (letter === "") {

        return false;

      }


      // Selected alphabet
      return plantName.startsWith(
        letter.toLowerCase()
      );

    })
    .sort((a, b) =>
      String(a.name || "").localeCompare(
        String(b.name || "")
      )
    );


  // ==========================================
  // RETURN
  // ==========================================

  return (

    <div
      className="plants-page"
      style={{
        backgroundImage:
          'url("/image/dashboard-.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >

      <div className="container py-5">


        {/* ==========================================
            HEADING
        ========================================== */}

        <h1 className="text-center">

          Find a Plant by Its First Letter

        </h1>


        {/* ==========================================
            ALPHABET
        ========================================== */}

        <div className="row g-2 my-4">

          {alphabet.map((item) => (

            <div
              className="col-3 col-md-1"
              key={item}
            >

              <button
                className={
                  letter === item
                    ? "btn btn-success w-100"
                    : "btn btn-outline-success w-100"
                }
                onClick={() =>
                  handleAlphabetClick(item)
                }
              >

                {item}

              </button>

            </div>

          ))}

        </div>


        {/* ==========================================
            SEARCH BOX
        ========================================== */}

        <div className="input-group mb-4">

          <input
            type="text"
            className="form-control"
            placeholder="Search Plant..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                handleSearch();

              }

            }}
          />


          <button
            className="btn btn-success"
            onClick={handleSearch}
          >

            <i className="bi bi-search"></i>

          </button>

        </div>


        {/* ==========================================
            HEADING
        ========================================== */}

        <h2>

          {search !== ""

            ? `Search Result for "${search}"`

            : letter !== ""

            ? `Plants Starting With ${letter}`

            : ""}

        </h2>


        {/* ==========================================
            PLANTS
        ========================================== */}

        <div className="row g-4 mt-3">


          {letter === "" && search === "" ? (

            null

          ) : filteredPlants.length > 0 ? (

            filteredPlants.map((plant) => (

              <div
                className="col-12 col-md-4 mb-4"
                key={plant.id}
              >

                <div className="card h-100 shadow-sm">

                  <div className="card-body">


                    {/* PLANT NAME */}

                    <h4>
                      {plant.name}
                    </h4>


                    {/* SCIENTIFIC NAME */}

                    <p>

                      <b>
                        Scientific Name:
                      </b>{" "}

                      <i>
                        {plant.scientificName}
                      </i>

                    </p>


                    {/* FAMILY */}

                    <p>

                      <b>
                        Family:
                      </b>{" "}

                      {plant.family}

                    </p>


                    {/* VIEW DETAILS */}

                    <Link
                      to={`/plants/${plant.id}`}
                      className="btn btn-success"
                    >

                      View Details

                    </Link>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <div className="alert alert-warning">

              No plant found.

            </div>

          )}

        </div>

      </div>

    </div>

  );

}


export default Plants;