import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/UserDashboard.css";

function UserDashboard() {

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const navigate = useNavigate();

  const [showPlants, setShowPlants] = useState(false);

  const [selectedPlants, setSelectedPlants] = useState([]);
 
  // Dashboard ke popup ke liye plant data
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      scientificName: "Aloe vera",
      image:
        "https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20="
    },
    {
      id: 2,
      name: "Apple",
      scientificName: "Malus domestica",
      image:
        "https://harvesttotable.com/wp-content/uploads/2009/07/Apple-tree-with-fruit1.jpg"
    },
    {
      id: 3,
      name: "Ashoka",
      scientificName: "Saraca asoca",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Saraca%20asoca.jpg"
    },
    {
      id: 4,
      name: "Banyan",
      scientificName: "Ficus benghalensis",
      image:
        "https://t4.ftcdn.net/jpg/07/12/78/43/360_F_712784357_SBqQo3ePHzElJcsIPYQjDAsbrrXcYij1.jpg"
    },
    
  {
    id: 5,
    name: "Bamboo",
    scientificName: "Bambusa vulgaris",
    family: "Poaceae",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/635/905/small/green-bamboo-texture-bamboo-forest-green-grass-in-the-sunshine-bamboo-tree-leaf-plant-stem-ai-generated-photo.jpg"
  },
  {
    id: 6,
    name: "Banana",
    scientificName: "Musa acuminata",
    family: "Musaceae",
    image: "https://t4.ftcdn.net/jpg/02/15/33/67/360_F_215336758_TKaVsJtZHJzpJ0pIp9d2eTUV58fsbN8v.jpg"
  },

  // ================= C =================
  {
    id: 7,
    name: "Cactus",
    scientificName: "Opuntia ficus-indica",
    family: "Cactaceae",
    image: "https://cdn.britannica.com/08/100608-050-684264CB/Saguaro-cactus-Arizona.jpg"
  },
  {
    id: 8,
    name: "Coconut",
    scientificName: "Cocos nucifera",
    family: "Arecaceae",
    image: "https://m.media-amazon.com/images/I/71yRLTb9NnL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    name: "Cotton",
    scientificName: "Gossypium hirsutum",
    family: "Malvaceae",
    image: "https://t4.ftcdn.net/jpg/06/84/31/79/360_F_684317966_Pn9qU1DEfW5zpwoj25znJ1i0VdaOM2Px.jpg"
  },

  // ================= D =================
  {
    id: 10,
    name: "Dahlia",
    scientificName: "Dahlia pinnata",
    family: "Asteraceae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6M-B6L4KNQWKeqntjnMnGgoL4uQrS9TJYsjQ65M8in5icsaitZsKVK6s&s=10"
  },
  {
    id: 11,
    name: "Date Palm",
    scientificName: "Phoenix dactylifera",
    family: "Arecaceae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEFnlL7g_QENaIimE9wFTFI1qaMzHa4-0WsxAnV7LUhagcAtbGJvtnZM&s=10"
  },
  {
    id: 12,
    name: "Drumstick Tree",
    scientificName: "Moringa oleifera",
    family: "Moringaceae",
    image: "https://thumbs.dreamstime.com/b/moringa-oleifera-drumstick-tree-hanging-seedpods-growing-bright-sunlight-south-daytona-florida-75147125.jpg"
  },

  // ================= E =================
  {
    id: 13,
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    family: "Myrtaceae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeC-9WV61H-CNbxr-BoNpnhHrxMmS6c5--4R5TUJ4L5B5Q9EbhhskGRVfg&s=10"
  },
  {
    id: 14,
    name: "Eggplant",
    scientificName: "Solanum melongena",
    family: "Solanaceae",
    image: "https://t4.ftcdn.net/jpg/16/12/56/13/360_F_1612561388_wP2cVrZLMaejSWaUhihTzG8fAHDvH4Qp.jpg"
  },
  {
    id: 15,
    name: "Elm",
    scientificName: "Ulmus americana",
    family: "Ulmaceae",
    image: "https://www.illinoiswildflowers.info/trees/photos/am_elm1.jpg"
  },

  // ================= F =================
  {
    id: 16,
    name: "Fern",
    scientificName: "Nephrolepis exaltata",
    family: "Nephrolepidaceae",
    image: "https://www.gardenia.net/wp-content/uploads/2023/04/VjHHNDNC3d5YLaDkvlm0jaxlL1zNRpnIeHEHAWxr-780x520.webp"
  },
  {
    id: 17,
    name: "Fig",
    scientificName: "Ficus carica",
    family: "Moraceae",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS910194v5atYz2iID5GrFDZ5m6IXIAYkK7QvcIKQPFN2vI1vmjvwSIzi-J&s=10"
  },
  {
    id: 18,
    name: "Flame Tree",
    scientificName: "Delonix regia",
    family: "Fabaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delonix%20regia.jpg"
  },

  // ================= G =================
  {
    id: 19,
    name: "Guava",
    scientificName: "Psidium guajava",
    family: "Myrtaceae",
    image: "https://www.flowersofindia.net/catalog/slides/Guava.jpg"
  },
  {
    id: 20,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
    image: "https://m.media-amazon.com/images/I/616Q0+29VZL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 21,
    name: "Gulmohar",
    scientificName: "Delonix regia",
    family: "Fabaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delonix%20regia.jpg"
  },

  // ================= H =================
  {
    id: 22,
    name: "Hibiscus",
    scientificName: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus%20rosa-sinensis.jpg"
  },
  {
    id: 23,
    name: "Henna",
    scientificName: "Lawsonia inermis",
    family: "Lythraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lawsonia%20inermis.jpg"
  },
  {
    id: 24,
    name: "Holly",
    scientificName: "Ilex aquifolium",
    family: "Aquifoliaceae",
    image: "https://www.gardeningexpress.co.uk/media/catalog/product/cache/7b4309904d7d86d6db5a4996af690b81/p/y/pyramidalis.jpg"
  },

  // ================= I =================
  {
    id: 25,
    name: "Indian Gooseberry",
    scientificName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    image: "https://goldenhillsfarm.in/media/ckeditor_uploads/2025/09/11/jhghf.jpg"
  },
  {
    id: 26,
    name: "Iris",
    scientificName: "Iris germanica",
    family: "Iridaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iris%20germanica.jpg"
  },
  {
    id: 27,
    name: "Ixora",
    scientificName: "Ixora coccinea",
    family: "Rubiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ixora%20coccinea.jpg" 
  },

  // ================= J =================
  {
    id: 28,
    name: "Jasmine",
    scientificName: "Jasminum sambac",
    family: "Oleaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jasminum%20sambac.jpg"
  },
  {
    id: 29,
    name: "Jackfruit",
    scientificName: "Artocarpus heterophyllus",
    family: "Moraceae",
    image: "https://m.media-amazon.com/images/I/61eE-1D1jrL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 30,
    name: "Jamun",
    scientificName: "Syzygium cumini",
    family: "Myrtaceae",
    image: "https://d2seqvvyy3b8p2.cloudfront.net/fc4441c90b97fb14c675c53cd93e3a88.jpg"
  },

  // ================= K =================
  {
    id: 31,
    name: "Kale",
    scientificName: "Brassica oleracea var. sabellica",
    family: "Brassicaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brassica%20oleracea.jpg"
  },
  {
    id: 32,
    name: "Karanja",
    scientificName: "Pongamia pinnata",
    family: "Fabaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pongamia%20pinnata.jpg"
  },
  {
    id: 33,
    name: "Kiwi",
    scientificName: "Actinidia deliciosa",
    family: "Actinidiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Actinidia%20deliciosa.jpg"
  },

  // ================= L =================
  {
    id: 34,
    name: "Lemon",
    scientificName: "Citrus limon",
    family: "Rutaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Citrus%20limon.jpg"
  },
  {
    id: 35,
    name: "Lotus",
    scientificName: "Nelumbo nucifera",
    family: "Nelumbonaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nelumbo%20nucifera.jpg"
  },
  {
    id: 36,
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavandula%20angustifolia.jpg"
  },

  // ================= M =================
  {
    id: 37,
    name: "Mango",
    scientificName: "Mangifera indica",
    family: "Anacardiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mangifera%20indica.jpg"
  },
  {
    id: 38,
    name: "Marigold",
    scientificName: "Tagetes erecta",
    family: "Asteraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tagetes%20erecta.jpg"
  },
  {
    id: 39,
    name: "Mint",
    scientificName: "Mentha spicata",
    family: "Lamiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mentha%20spicata.jpg"
  },

  // ================= N =================
  {
    id: 40,
    name: "Neem",
    scientificName: "Azadirachta indica",
    family: "Meliaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Azadirachta%20indica.jpg"
  },
  {
    id: 41,
    name: "Nutmeg",
    scientificName: "Myristica fragrans",
    family: "Myristicaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Myristica%20fragrans.jpg"
  },
  {
    id: 42,
    name: "Nerium",
    scientificName: "Nerium oleander",
    family: "Apocynaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nerium%20oleander.jpg"
  },

  // ================= O =================
  {
    id: 43,
    name: "Oak",
    scientificName: "Quercus robur",
    family: "Fagaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quercus%20robur.jpg"
  },
  {
    id: 44,
    name: "Olive",
    scientificName: "Olea europaea",
    family: "Oleaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Olea%20europaea.jpg"
  },
  {
    id: 45,
    name: "Orchid",
    scientificName: "Phalaenopsis amabilis",
    family: "Orchidaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Phalaenopsis%20amabilis.jpg"
  },

  // ================= P =================
  {
    id: 46,
    name: "Papaya",
    scientificName: "Carica papaya",
    family: "Caricaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Carica%20papaya.jpg"
  },
  {
    id: 47,
    name: "Peepal",
    scientificName: "Ficus religiosa",
    family: "Moraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus%20religiosa.jpg"
  },
  {
    id: 48,
    name: "Pomegranate",
    scientificName: "Punica granatum",
    family: "Lythraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Punica%20granatum.jpg"
  },

  // ================= Q =================
  {
    id: 49,
    name: "Queen Palm",
    scientificName: "Syagrus romanzoffiana",
    family: "Arecaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Syagrus%20romanzoffiana.jpg"
  },
  {
    id: 50,
    name: "Quince",
    scientificName: "Cydonia oblonga",
    family: "Rosaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cydonia%20oblonga.jpg"
  },
  {
    id: 51,
    name: "Queensland Bottle Tree",
    scientificName: "Brachychiton rupestris",
    family: "Malvaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brachychiton%20rupestris.jpg"
  },

  // ================= R =================
  {
    id: 52,
    name: "Rose",
    scientificName: "Rosa chinensis",
    family: "Rosaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa%20chinensis.jpg"
  },
  {
    id: 53,
    name: "Rice",
    scientificName: "Oryza sativa",
    family: "Poaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oryza%20sativa.jpg"
  },
  {
    id: 54,
    name: "Raspberry",
    scientificName: "Rubus idaeus",
    family: "Rosaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubus%20idaeus.jpg"
  },

  // ================= S =================
  {
    id: 55,
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Helianthus%20annuus.jpg"
  },
  {
    id: 56,
    name: "Sugarcane",
    scientificName: "Saccharum officinarum",
    family: "Poaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saccharum%20officinarum.jpg"
  },
  {
    id: 57,
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    family: "Amaranthaceae",
    image: "https://gardeningcentre.in/cdn/shop/products/s.jpg?v=1678429235"
  },

  // ================= T =================
  {
    id: 58,
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ocimum%20tenuiflorum.jpg"
  },
  {
    id: 59,
    name: "Tea",
    scientificName: "Camellia sinensis",
    family: "Theaceae",
    image: "https://m.media-amazon.com/images/I/7142Yz8R-TL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 60,
    name: "Tamarind",
    scientificName: "Tamarindus indica",
    family: "Fabaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tamarindus%20indica.jpg"
  },

  // ================= U =================
  {
    id: 61,
    name: "Umbrella Tree",
    scientificName: "Heptapleurum arboricola",
    family: "Araliaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Schefflera%20arboricola.jpg"
  },
  {
    id: 62,
    name: "Urena",
    scientificName: "Urena lobata",
    family: "Malvaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Urena%20lobata.jpg"
  },
  {
    id: 63,
    name: "Ulmus",
    scientificName: "Ulmus glabra",
    family: "Ulmaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ulmus%20glabra.jpg"
  },

  // ================= V =================
  {
    id: 64,
    name: "Vanilla",
    scientificName: "Vanilla planifolia",
    family: "Orchidaceae",
    image: "https://www.pepperhub.in/wp-content/uploads/2025/07/vannilla-1.webp"
  },
  {
    id: 65,
    name: "Violet",
    scientificName: "Viola odorata",
    family: "Violaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola%20odorata.jpg"
  },
  {
    id: 66,
    name: "Vetiver",
    scientificName: "Chrysopogon zizanioides",
    family: "Poaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysopogon%20zizanioides.jpg"
  },

  // ================= W =================
  {
    id: 67,
    name: "Water Lily",
    scientificName: "Nymphaea nouchali",
    family: "Nymphaeaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nymphaea%20nouchali.jpg"
  },
  {
    id: 68,
    name: "Wheat",
    scientificName: "Triticum aestivum",
    family: "Poaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Triticum%20aestivum.jpg"
  },
  {
    id: 69,
    name: "Walnut",
    scientificName: "Juglans regia",
    family: "Juglandaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Juglans%20regia.jpg"
  },

  // ================= X =================
  {
    id: 70,
    name: "Xanthium",
    scientificName: "Xanthium strumarium",
    family: "Asteraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xanthium%20strumarium.jpg"
  },
  {
    id: 71,
    name: "Xeranthemum",
    scientificName: "Xeranthemum annuum",
    family: "Asteraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xeranthemum%20annuum.jpg"
  },
  {
    id: 72,
    name: "Xylosma",
    scientificName: "Xylosma congestum",
    family: "Salicaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xylosma%20congestum.jpg"
  },

  // ================= Y =================
  {
    id: 73,
    name: "Yam",
    scientificName: "Dioscorea alata",
    family: "Dioscoreaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dioscorea%20alata.jpg"
  },
  {
    id: 74,
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    family: "Asteraceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Achillea%20millefolium.jpg"
  },
  {
    id: 75,
    name: "Yellow Oleander",
    scientificName: "Cascabela thevetia",
    family: "Apocynaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cascabela%20thevetia.jpg"
  },

  // ================= Z =================
  {
    id: 76,
    name: "Zinnia",
    scientificName: "Zinnia elegans",
    family: "Asteraceae",
     image: "https://plantinfo.co.za/wp-content/uploads/2020/07/Zinnia-elegans.jpg"
  },
  {
    id: 77,
    name: "Zucchini",
    scientificName: "Cucurbita pepo",
    family: "Cucurbitaceae",
    image: "https://pureasiaseeds.com/cdn/shop/files/freepik__generate-hyper-realistic-images-of-the-given-plant__29226.png?v=1765781958&width=1946"
  },
  {
    id: 78,
    name: "Ziziphus",
    scientificName: "Ziziphus mauritiana",
    family: "Rhamnaceae",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziziphus%20mauritiana.jpg"
  }
  ];


  const handleExplorePlants = () => {

    // 4 plants popup mein show honge
    const shuffledPlants = [...plants].sort(
      () => Math.random() - 0.5
    );

    setSelectedPlants(
      shuffledPlants.slice(0, 4)
    );

    setShowPlants(true);
  };


  const handlePlantClick = (id) => {

    setShowPlants(false);

    navigate(`/plants/${id}`, {
      state: {
        from: "dashboard"
      }
    });
  };


  return (

    <div className="user-dashboard"
     style={{
      backgroundImage: 'url("/image/dashboard-.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
    }}
    >

      {/* =========================
          Welcome Section
      ========================== */}

      <section className="welcome-section container-fluid text-center">

        <h1>
          🌿 Welcome, {user?.name}!
        </h1>

        <p className="lead">
          Welcome to Plant Encyclopedia.
          Explore and learn about different plants and
          their botanical information.
        </p>

        <button
          onClick={handleExplorePlants}
          className="btn btn-success explore-btn"
        >
          Explore Plants
        </button>

      </section>


      {/* =========================
          Features Section
      ========================== */}

      <section className="container features-section">

        <div className="row text-center">


          {/* A-Z Plants */}

          <div className="col-md-4">

            <div className="feature-box">

              <h3>
                🔤 A-Z Plants
              </h3>

              <p>
                Find plants alphabetically.
              </p>

            </div>

          </div>


          {/* Plant Information */}

          <div className="col-md-4">

            <div className="feature-box">

              <h3>
                🌱 Plant Information
              </h3>

              <p>
                Learn scientific and botanical details.
              </p>

            </div>

          </div>


          {/* Educational */}

          <div className="col-md-4">

            <div className="feature-box">

              <h3>
                📚 Educational
              </h3>

              <p>
                Useful for Botany students.
              </p>

            </div>

          </div>


        </div>

      </section>


      {/* =========================
          Plants Popup / Modal
      ========================== */}

      {showPlants && (

        <div
          className="modal d-block plant-modal"
          tabIndex="-1"
        >

          <div className="modal-dialog modal-lg modal-dialog-centered">

            <div className="modal-content">


              {/* Modal Header */}

              <div className="modal-header">

                <h5 className="modal-title">
                  🌿 Explore Plants
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() =>
                    setShowPlants(false)
                  }
                ></button>

              </div>


              {/* Modal Body */}

              <div className="modal-body">

                <div className="row">

                  {selectedPlants.map((plant) => (

                    <div
                      className="col-md-6 mb-4"
                      key={plant.id}
                    >

                      <div className="card h-100 shadow-sm plant-card">

                        <img
                          src={plant.image}
                          className="card-img-top"
                          alt={plant.name}
                        />


                        <div className="card-body text-center">

                          <h5 className="card-title">
                            {plant.name}
                          </h5>


                          <p className="scientific-name">

                            <i>
                              {plant.scientificName}
                            </i>

                          </p>


                          <button
                            className="btn btn-success view-details-btn"
                            onClick={() =>
                              handlePlantClick(
                                plant.id
                              )
                            }
                          >
                            View Details
                          </button>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* Modal Footer */}

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    setShowPlants(false)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default UserDashboard;