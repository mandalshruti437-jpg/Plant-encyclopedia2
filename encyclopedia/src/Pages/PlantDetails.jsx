import { useNavigate,Link, useParams ,useLocation ,} from "react-router-dom";
import { useState, useEffect  } from "react";
import "../CSS/PlantDetails.css";

const plants = [
  // ================= A =================
  {
    id: 1,
    name: "Aloe Vera",
  scientificName: "Aloe vera",
  family: "Asphodelaceae",
  genus: "Aloe",
  species: "Aloe vera",
  description: "Aloe Vera is a perennial succulent plant belonging to the family Asphodelaceae. It is widely recognized for its thick, fleshy and green leaves. The leaves contain a clear gel-like substance. This plant is naturally adapted to warm and dry climatic conditions. Aloe Vera stores water in its leaves, which helps it survive during dry periods. The leaves usually grow in a rosette arrangement from the base of the plant. The margins of the leaves may contain small teeth or spines. Aloe Vera is commonly cultivated in gardens and pots as an ornamental plant. It is also widely known for its traditional importance. The gel obtained from the leaves is commonly used in skin-care products. The plant is easy to grow and requires comparatively less water. Aloe Vera is an important example of a succulent plant adapted to dry environments.",
  image: "https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20="
    
  },
  {
    id: 2,
    name: "Apple",
    scientificName: "Malus domestica",
    family: "Rosaceae",
    genus: "Malus",
    species: "Malus domestica",
    description: "Apple is a deciduous tree that belongs to the Rosaceae family. It is widely cultivated for its sweet and crisp fruit. The tree typically grows to a height of 6-15 feet and has a rounded canopy. Apple trees have simple, ovate leaves with serrated edges. The flowers are usually white or pink and bloom in spring. The fruit is a pome, which means it has a core containing seeds surrounded by fleshy tissue. Apples come in various colors, including red, green, and yellow, and they are consumed fresh or used in cooking and baking. The apple tree requires well-drained soil and a temperate climate for optimal growth.",
    image: "https://harvesttotable.com/wp-content/uploads/2009/07/Apple-tree-with-fruit1.jpg"
  },
  {
    id: 3,
    name: "Ashoka",
    scientificName: "Saraca asoca",
    family: "Fabaceae",
    genus: "Saraca",
    species: "Saraca asoca",
    description: "Ashoka is a sacred tree in India, known for its beautiful orange-red flowers and medicinal properties. It is native to the Indian subcontinent and is often associated with religious and cultural significance. The tree can grow up to 15-20 meters in height and has a dense canopy of glossy green leaves. Ashoka trees are commonly found in gardens, temples, and along roadsides. The bark, leaves, and flowers of the Ashoka tree are used in traditional medicine for their therapeutic benefits, including treating gynecological disorders and promoting overall health.",

    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saraca%20asoca.jpg"
  },

  // ================= B =================
  {
    id: 4,
    name: "Banyan",
    scientificName: "Ficus benghalensis",
    family: "Moraceae",
    genus: "Ficus",
    species: "Ficus benghalensis",
    description: "The Banyan tree is a large, evergreen tree native to the Indian subcontinent. It is known for its aerial prop roots that grow downwards from the branches and eventually become additional trunks, allowing the tree to spread over a wide area. The leaves are large, leathery, and dark green, while the small, fig-like fruits are consumed by various birds and animals. The Banyan tree holds cultural and religious significance in many parts of India and is often associated with longevity and immortality. It provides shade and shelter for people and wildlife alike.",
    image: "https://t3.ftcdn.net/jpg/02/12/69/88/360_F_212698839_bWzVsqRaXsi5kfowZdjsaxKD2hg2g3w7.jpg"
  },
  {
    id: 5,
    name: "Bamboo",
    scientificName: "Bambusa vulgaris",
    family: "Poaceae",
    genus: "Bambusa",
    species: "Bambusa vulgaris",
    description: "Bamboo is a fast-growing, woody grass that belongs to the Poaceae family. It is characterized by its tall, hollow stems called culms, which can reach impressive heights depending on the species. Bamboo has jointed nodes and is known for its strength and flexibility. The leaves are long, narrow, and lance-shaped, providing a lush green appearance. Bamboo is widely used in construction, furniture making, paper production, and as a food source (bamboo shoots). It is also valued for its ecological benefits, such as soil stabilization and carbon sequestration. Bamboo thrives in tropical and subtropical climates and can be found in various regions around the world.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/028/635/905/small/green-bamboo-texture-bamboo-forest-green-grass-in-the-sunshine-bamboo-tree-leaf-plant-stem-ai-generated-photo.jpg"
  },
  {
    id: 6,
    name: "Banana",
    scientificName: "Musa acuminata",
    family: "Musaceae",
    genus: "Musa",
    species: "Musa acuminata",
    description: "The Banana tree is a large, herbaceous plant that belongs to the Musaceae family. It is characterized by its thick, pseudostem made of tightly packed leaf sheaths, and its large, curved fruits called bananas. The leaves are broad and glossy, providing a tropical appearance. Bananas are a popular fruit consumed worldwide, rich in potassium and other nutrients. The tree thrives in warm, humid climates and is cultivated in many tropical regions.",
    image: "https://t4.ftcdn.net/jpg/02/15/33/67/360_F_215336758_TKaVsJtZHJzpJ0pIp9d2eTUV58fsbN8v.jpg"
  },

  // ================= C =================
  {
    id: 7,
    name: "Cactus",
    scientificName: "Opuntia ficus-indica",
    family: "Cactaceae",
    genus: "Opuntia",
    species: "Opuntia ficus-indica",
    description: "Cactus is a type of succulent plant that belongs to the Cactaceae family. It is well-known for its ability to thrive in arid and desert environments. Cacti have thick, fleshy stems that store water, allowing them to survive long periods of drought. The stems are often covered with spines, which help reduce water loss and protect the plant from herbivores. Cacti produce beautiful flowers that can be brightly colored and bloom for short periods. They are popular as ornamental plants and are also cultivated for their edible fruits, such as prickly pears.",
    image: "https://cdn.britannica.com/08/100608-050-684264CB/Saguaro-cactus-Arizona.jpg"
  },
  {
    id: 8,
    name: "Coconut",
    scientificName: "Cocos nucifera",
    family: "Arecaceae",
    genus: "Cocos",
    species: "Cocos nucifera",
    description: "The Coconut tree is a tropical palm tree that belongs to the Arecaceae family. It is widely cultivated for its versatile fruit, the coconut, which has numerous culinary and industrial uses. The tree can grow up to 30 meters in height and has a slender trunk topped with a crown of large, feathery leaves. The coconut fruit consists of a hard outer shell, fibrous husk, and a white, edible kernel inside. Coconut water, milk, oil, and coir are derived from different parts of the fruit. The Coconut tree thrives in sandy soils and coastal areas with high humidity and ample sunlight.",
    image: "https://m.media-amazon.com/images/I/71yRLTb9NnL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    name: "Cotton",
    scientificName: "Gossypium hirsutum",
    family: "Malvaceae",
    genus: "Gossypium",
    species: "Gossypium hirsutum",
    description: "Cotton is a soft, fluffy fiber that grows in the seed pods of the cotton plant. It is widely cultivated for its use in textiles and other products. The plant is a shrub that belongs to the Malvaceae family and is known for its large, showy flowers. Cotton fibers are used to make a variety of fabrics and are also utilized in the production of paper, rope, and other goods.",
    image: "https://t4.ftcdn.net/jpg/06/84/31/79/360_F_684317966_Pn9qU1DEfW5zpwoj25znJ1i0VdaOM2Px.jpg"
  },

  // ================= D =================
  {
    id: 10,
    name: "Dahlia",
    scientificName: "Dahlia pinnata",
    family: "Asteraceae",
    genus: "Dahlia",
    species: "Dahlia pinnata",
    description: "Dahlias are flowering plants in the genus Dahlia, in the family Asteraceae. They are widely cultivated for their beautiful, diverse flowers and are commonly used in gardens and as ornamental plants.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6M-B6L4KNQWKeqntjnMnGgoL4uQrS9TJYsjQ65M8in5icsaitZsKVK6s&s=10"
  },
  {
    id: 11,
    name: "Date Palm",
    scientificName: "Phoenix dactylifera",
    family: "Arecaceae",
    genus: "Phoenix",
    species: "Phoenix dactylifera",
    description: "The Date Palm is a tree in the family Arecaceae. It is native to the Middle East and North Africa and is widely cultivated for its edible fruit, the date.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEFnlL7g_QENaIimE9wFTFI1qaMzHa4-0WsxAnV7LUhagcAtbGJvtnZM&s=10"
  },
  {
    id: 12,
    name: "Drumstick Tree",
    scientificName: "Moringa oleifera",
    family: "Moringaceae",
    genus: "Moringa",
    species: "Moringa oleifera",
    description: "The Drumstick Tree, also known as Moringa oleifera, is a fast-growing, drought-resistant tree native to the Indian subcontinent. It is widely cultivated for its nutritious leaves, pods, and seeds. The tree can reach a height of 10-12 meters and has a slender trunk with feathery foliage. The leaves are rich in vitamins and minerals, while the long, slender seed pods (drumsticks) are commonly used in cooking. Moringa is also valued for its medicinal properties and is often referred to as the 'miracle tree' due to its numerous health benefits.",
    image: "https://thumbs.dreamstime.com/b/moringa-oleifera-drumstick-tree-hanging-seedpods-growing-bright-sunlight-south-daytona-florida-75147125.jpg"
  },

  // ================= E =================
  {
    id: 13,
    name: "Eucalyptus",
    scientificName: "Eucalyptus globulus",
    family: "Myrtaceae",
    genus: "Eucalyptus",
    species: "Eucalyptus globulus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeC-9WV61H-CNbxr-BoNpnhHrxMmS6c5--4R5TUJ4L5B5Q9EbhhskGRVfg&s=10"
  },
  {
    id: 14,
    name: "Eggplant",
    scientificName: "Solanum melongena",
    family: "Solanaceae",
    genus: "Solanum",
    species: "Solanum melongena",
    description: "Eggplant is a flowering plant in the family Solanaceae. It is native to the Indian subcontinent and is widely cultivated for its edible fruit. The plant has a sprawling growth habit and produces large, purple flowers. The fruit is typically elongated and has a glossy, deep purple skin.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Solanum%20melongena.jpg"
  },
  {
    id: 15,
    name: "Elm",
    scientificName: "Ulmus americana",
    family: "Ulmaceae",
    genus: "Ulmus",
    species: "Ulmus americana",
    description: "The Elm is a deciduous tree in the family Ulmaceae. It is native to North America and is widely cultivated for its shade and ornamental value. The tree has a broad, spreading canopy and produces small, green flowers.",
    image: "https://www.illinoiswildflowers.info/trees/photos/am_elm1.jpg"
  },

  // ================= F =================
  {
    id: 16,
    name: "Fern",
    scientificName: "Nephrolepis exaltata",
    family: "Nephrolepidaceae",
    genus: "Nephrolepis",
    species: "Nephrolepis exaltata",
    description: "Ferns are vascular plants in the family Nephrolepidaceae. They are characterized by their frond-like leaves and are commonly found in moist, shaded environments.",
    image: "https://www.gardenia.net/wp-content/uploads/2023/04/VjHHNDNC3d5YLaDkvlm0jaxlL1zNRpnIeHEHAWxr-780x520.webp"
  },
  {
    id: 17,
    name: "Fig",
    scientificName: "Ficus carica",
    family: "Moraceae",
    genus: "Ficus",
    species: "Ficus carica",
    description: "The Fig is a fruit tree in the family Moraceae. It is native to the Middle East and is widely cultivated for its sweet, edible fruit. The tree has a distinctive, spreading canopy and produces small, inconspicuous flowers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS910194v5atYz2iID5GrFDZ5m6IXIAYkK7QvcIKQPFN2vI1vmjvwSIzi-J&s=10"
  },
  {
    id: 18,
    name: "Flame Tree",
    scientificName: "Delonix regia",
    family: "Fabaceae",
    genus: "Delonix",
    species: "Delonix regia",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delonix%20regia.jpg"
  },

  // ================= G =================
  {
    id: 19,
    name: "Guava",
    scientificName: "Psidium guajava",
    family: "Myrtaceae",
    genus: "Psidium",
    species: "Psidium guajava",
    description: "Guava is a tropical fruit tree in the family Myrtaceae. It is native to Central America and is widely cultivated for its sweet, aromatic fruit. The tree has a spreading canopy and produces small, white flowers. The fruit is typically round or oval, with a green or yellow skin and pink or white flesh.",
    image: "https://www.flowersofindia.net/catalog/slides/Guava.jpg"
  },
  {
    id: 20,
    name: "Ginger",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
    genus: "Zingiber",
    species: "Zingiber officinale",
    description: "Ginger is a flowering plant in the family Zingiberaceae. It is native to Southeast Asia and is widely cultivated for its aromatic rhizome, which is used as a spice and in traditional medicine. The plant has narrow, green leaves and produces small, white or pink flowers.",
    image: "https://m.media-amazon.com/images/I/616Q0+29VZL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 21,
    name: "Gulmohar",
    scientificName: "Delonix regia",
    family: "Fabaceae",
    genus: "Delonix",
    species: "Delonix regia",
    description: "The Gulmohar is a deciduous tree in the family Fabaceae. It is native to India and is widely cultivated for its vibrant, red flowers. The tree has a broad, spreading canopy and produces large, showy blooms.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Delonix%20regia.jpg"
  },

  // ================= H =================
  {
    id: 22,
    name: "Hibiscus",
    scientificName: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
    genus: "Hibiscus",
    species: "Hibiscus rosa-sinensis",
    description: "Hibiscus is a genus of flowering plants in the family Malvaceae. It is native to tropical and subtropical regions and is widely cultivated for its large, showy flowers. The plants have simple, alternate leaves and produce solitary or clustered flowers.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hibiscus%20rosa-sinensis.jpg"
  },
  {
    id: 23,
    name: "Henna",
    scientificName: "Lawsonia inermis",
    family: "Lythraceae",
    genus: "Lawsonia",
    species: "Lawsonia inermis",
    description: "Henna is a flowering plant in the family Lythraceae. It is native to the Mediterranean region and is widely cultivated for its aromatic leaves, which are used to create temporary tattoos. The plant has small, green leaves and produces white or pale pink flowers.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lawsonia%20inermis.jpg"
  },
  {
    id: 24,
    name: "Holly",
    scientificName: "Ilex aquifolium",
    family: "Aquifoliaceae",
    genus: "Ilex",
    species: "Ilex aquifolium",
    description: "Holly is a genus of flowering plants in the family Aquifoliaceae. It is native to Europe, Asia, and North America and is widely cultivated for its glossy, evergreen leaves and bright red berries. The plants have simple, alternate leaves with spiny margins and produce small, white flowers.",
    image: "https://www.gardeningexpress.co.uk/media/catalog/product/cache/7b4309904d7d86d6db5a4996af690b81/p/y/pyramidalis.jpg"
  },

  // ================= I =================
  {
    id: 25,
    name: "Indian Gooseberry",
    scientificName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    genus: "Phyllanthus",
    species: "Phyllanthus emblica",
    description: "Indian Gooseberry, also known as Amla, is a deciduous tree in the family Phyllanthaceae. It is native to India and is widely cultivated for its small, greenish-yellow fruit, which is rich in vitamin C and antioxidants. The tree has a spreading canopy and produces small, inconspicuous flowers.",
    image: "https://goldenhillsfarm.in/media/ckeditor_uploads/2025/09/11/jhghf.jpg"
  },
  {
    id: 26,
    name: "Iris",
    scientificName: "Iris germanica",
    family: "Iridaceae",
    genus: "Iris",
    species: "Iris germanica",
    description: "Iris is a genus of flowering plants in the family Iridaceae. It is native to temperate regions and is widely cultivated for its distinctive, colorful flowers. The plants have sword-like leaves and produce showy, often fragrant blooms.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iris%20germanica.jpg"
  },
  {
    id: 27,
    name: "Ixora",
    scientificName: "Ixora coccinea",
    family: "Rubiaceae",
    genus: "Ixora",
    species: "Ixora coccinea",
    description: "Ixora is a genus of flowering plants in the family Rubiaceae. It is native to tropical and subtropical regions and is widely cultivated for its clusters of small, brightly colored flowers. The plants have glossy, evergreen leaves and produce dense, rounded flower heads.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ixora%20coccinea.jpg"
  },

  // ================= J =================
  {
    id: 28,
    name: "Jasmine",
    scientificName: "Jasminum sambac",
    family: "Oleaceae",
    genus: "Jasminum",
    species: "Jasminum sambac",
    description: "Jasmine is a genus of flowering plants in the family Oleaceae. It is native to tropical and subtropical regions and is widely cultivated for its fragrant, white or yellow flowers. The plants have simple, opposite leaves and produce small, star-shaped blooms.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jasminum%20sambac.jpg"
  },
  {
    id: 29,
    name: "Jackfruit",
    scientificName: "Artocarpus heterophyllus",
    family: "Moraceae",
    genus: "Artocarpus",
    species: "Artocarpus heterophyllus",
    description: "Jackfruit is a tropical tree in the family Moraceae. It is native to South and Southeast Asia and is widely cultivated for its large, edible fruit. The tree can grow up to 20 meters in height and has a dense canopy of glossy green leaves. The fruit is the largest tree-borne fruit in the world, with a spiky outer skin and sweet, fibrous flesh inside. Jackfruit is rich in nutrients and is used in various culinary dishes, both ripe and unripe.",
    image: "https://m.media-amazon.com/images/I/61eE-1D1jrL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 30,
    name: "Jamun",
    scientificName: "Syzygium cumini",
    family: "Myrtaceae",
    genus: "Syzygium",
    species: "Syzygium cumini",
    description: "Jamun, also known as Java plum or black plum, is a tropical tree in the family Myrtaceae. It is native to the Indian subcontinent and is widely cultivated for its small, dark purple fruit. The tree can grow up to 30 meters in height and has a dense canopy of glossy green leaves. The fruit is oval-shaped, with a sweet and slightly astringent taste. Jamun is rich in vitamins and minerals and is used in traditional medicine for its potential health benefits.",
    image: "https://d2seqvvyy3b8p2.cloudfront.net/fc4441c90b97fb14c675c53cd93e3a88.jpg"
  },

  // ================= K =================
  {
    id: 31,
    name: "Kale",
    scientificName: "Brassica oleracea var. sabellica",
    family: "Brassicaceae",
    genus: "Brassica",
    species: "Brassica oleracea",
    description: "Kale is a leafy green vegetable that belongs to the Brassicaceae family. It is a cultivar of Brassica oleracea and is known for its nutrient-rich leaves, which are high in vitamins A, C, and K, as well as minerals like calcium and iron. Kale has a slightly bitter taste and can be eaten raw in salads, sautéed, or added to soups and stews. It is considered a superfood due to its health benefits and is often included in healthy diets.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brassica%20oleracea.jpg"
  },
  {
    id: 32,
    name: "Karanja",
    scientificName: "Pongamia pinnata",
    family: "Fabaceae",
    genus: "Pongamia",
    species: "Pongamia pinnata",
    description: "Karanja, also known as Pongamia pinnata, is a leguminous tree in the family Fabaceae. It is native to tropical and subtropical regions of Asia and is widely cultivated for its oil-rich seeds. The tree can grow up to 15-25 meters in height and has a spreading canopy of pinnate leaves. Karanja produces small, fragrant flowers that are typically pink or purple, followed by flat, brown seed pods. The seeds contain oil that is used for biodiesel production, traditional medicine, and as a natural pesticide. Karanja is also valued for its ability to improve soil fertility through nitrogen fixation.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pongamia%20pinnata.jpg"
  },
  {
    id: 33,
    name: "Kiwi",
    scientificName: "Actinidia deliciosa",
    family: "Actinidiaceae",
    genus: "Actinidia",
    species: "Actinidia deliciosa",
    description: "Kiwi, also known as Chinese gooseberry, is a fruit-bearing vine in the family Actinidiaceae. It is native to China and is widely cultivated for its small, brown, fuzzy fruit with bright green flesh and tiny black seeds. The kiwi fruit is known for its sweet-tart flavor and high vitamin C content. The vine can grow up to 9 meters in length and requires a temperate climate with adequate sunlight and well-drained soil for optimal growth. Kiwi plants are dioecious, meaning they have separate male and female plants, and both are needed for fruit production.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Actinidia%20deliciosa.jpg"
  },

  // ================= L =================
  {
    id: 34,
    name: "Lemon",
    scientificName: "Citrus limon",
    family: "Rutaceae",
    genus: "Citrus",
    species: "Citrus limon",
    description: "Lemon is a small evergreen tree in the family Rutaceae. It is native to Asia and is widely cultivated for its acidic, yellow fruit. The tree can grow up to 3-6 meters in height and has glossy, dark green leaves. Lemon trees produce fragrant white flowers, followed by the characteristic yellow fruit. The fruit is rich in vitamin C and is commonly used in cooking, beverages, and as a natural remedy for various ailments. Lemon trees thrive in warm climates with well-drained soil and require regular watering and sunlight for optimal growth.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Citrus%20limon.jpg"
  },
  {
    id: 35,
    name: "Lotus",
    scientificName: "Nelumbo nucifera",
    family: "Nelumbonaceae",
    genus: "Nelumbo",
    species: "Nelumbo nucifera",
    description: "Lotus is a aquatic plant in the family Nelumbonaceae. It is native to Asia and is widely cultivated for its large, showy flowers and distinctive seed pods. The plant has floating leaves and produces beautiful, fragrant blooms in various colors, including white, pink, and red. Lotus is considered sacred in many cultures and is often associated with purity and enlightenment.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nelumbo%20nucifera.jpg"
  },
  {
    id: 36,
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
    genus: "Lavandula",
    species: "Lavandula angustifolia",
    description: "Lavender is a flowering plant in the family Lamiaceae. It is native to the Mediterranean region and is widely cultivated for its fragrant, purple flowers and essential oils. The plant has narrow, gray-green leaves and produces spikes of small, tubular flowers that are typically purple or blue. Lavender is commonly used in aromatherapy, perfumery, and as a natural insect repellent.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lavandula%20angustifolia.jpg"
  },

  // ================= M =================
  {
    id: 37,
    name: "Mango",
    scientificName: "Mangifera indica",
    family: "Anacardiaceae",
    genus: "Mangifera",
    species: "Mangifera indica",
    description: "Mango is a tropical tree in the family Anacardiaceae. It is native to South Asia and is widely cultivated for its sweet, juicy fruit. The tree can grow up to 30-40 meters in height and has a broad, spreading canopy of large, glossy leaves. Mango trees produce small, fragrant flowers and bear large, colorful fruits that are rich in vitamins and minerals. The fruit is commonly consumed fresh, used in desserts, and processed into juices and preserves.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mangifera%20indica.jpg"
  },
  {
    id: 38,
    name: "Marigold",
    scientificName: "Tagetes erecta",
    family: "Asteraceae",
    genus: "Tagetes",
    species: "Tagetes erecta",
    description: "Marigold is a flowering plant in the family Asteraceae. It is native to the Americas and is widely cultivated for its bright, showy flowers. The plant has pinnate leaves and produces large, daisy-like blooms that are typically yellow, orange, or red. Marigolds are commonly used in gardens, as ornamental plants, and in traditional ceremonies and festivals.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tagetes%20erecta.jpg"
  },
  {
    id: 39,
    name: "Mint",
    scientificName: "Mentha spicata",
    family: "Lamiaceae",
    genus: "Mentha",
    species: "Mentha spicata",
    description: "Mint is a flowering plant in the family Lamiaceae. It is native to Europe and Asia and is widely cultivated for its aromatic leaves and essential oils. The plant has square stems and opposite, serrated leaves. Mint flowers are small and typically purple or white, growing in spikes. The plant is commonly used in culinary applications, teas, and as a natural remedy for various ailments.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mentha%20spicata.jpg"
  },

  // ================= N =================
  {
    id: 40,
    name: "Neem",
    scientificName: "Azadirachta indica",
    family: "Meliaceae",
    genus: "Azadirachta",
    species: "Azadirachta indica",
    description: "Neem is a tropical tree in the family Meliaceae. It is native to the Indian subcontinent and is widely cultivated for its medicinal properties and natural insecticidal compounds. The tree can grow up to 20 meters in height and has a distinctive, spreading canopy. Neem leaves are glossy and have a characteristic smell. The tree produces small, white flowers and fruit.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Azadirachta%20indica.jpg"
  },
  {
    id: 41,
    name: "Nutmeg",
    scientificName: "Myristica fragrans",
    family: "Myristicaceae",
    genus: "Myristica",
    species: "Myristica fragrans",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Myristica%20fragrans.jpg"
  },
  {
    id: 42,
    name: "Nerium",
    scientificName: "Nerium oleander",
    family: "Apocynaceae",
    genus: "Nerium",
    species: "Nerium oleander",
    description: "Nerium oleander is a flowering plant in the family Apocynaceae. It is native to the Mediterranean region and is widely cultivated for its attractive, colorful flowers. The plant has narrow, glossy leaves and produces clusters of small, tubular flowers that are typically pink, red, or white. Nerium oleander is known for its toxicity and should be handled with care.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nerium%20oleander.jpg"
  },

  // ================= O =================
  {
    id: 43,
    name: "Oak",
    scientificName: "Quercus robur",
    family: "Fagaceae",
    genus: "Quercus",
    species: "Quercus robur",
    description: "Oak is a genus of trees in the family Fagaceae. It is native to the Northern Hemisphere and is widely cultivated for its strong, durable wood and ornamental value. Oak trees have lobed leaves and produce acorns as their fruit. They are known for their longevity and can live for several centuries.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Quercus%20robur.jpg"
  },
  {
    id: 44,
    name: "Olive",
    scientificName: "Olea europaea",
    family: "Oleaceae",
    genus: "Olea",
    species: "Olea europaea",
    description: "Olive is a small tree in the family Oleaceae. It is native to the Mediterranean region and is widely cultivated for its edible fruit and oil. The tree has narrow, gray-green leaves and produces small, white flowers. The fruit is a drupe that is typically green when unripe and black when ripe.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Olea%20europaea.jpg"
  },
  {
    id: 45,
    name: "Orchid",
    scientificName: "Phalaenopsis amabilis",
    family: "Orchidaceae",
    genus: "Phalaenopsis",
    species: "Phalaenopsis amabilis",
    description: "Orchid is a diverse group of flowering plants in the family Orchidaceae. It is native to various regions around the world and is widely cultivated for its beautiful, often fragrant flowers. The plants have specialized structures and are known for their intricate pollination mechanisms.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Phalaenopsis%20amabilis.jpg"
  },

  // ================= P =================
  {
    id: 46,
    name: "Papaya",
    scientificName: "Carica papaya",
    family: "Caricaceae",
    genus: "Carica",
    species: "Carica papaya",
    description: "Papaya is a tropical fruit tree in the family Caricaceae. It is native to the Americas and is widely cultivated for its edible fruit. The tree has a soft, fibrous trunk and large, palmate leaves. The fruit is large and orange-colored, with a sweet, aromatic flesh.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Carica%20papaya.jpg"
  },
  {
    id: 47,
    name: "Peepal",
    scientificName: "Ficus religiosa",
    family: "Moraceae",
    genus: "Ficus",
    species: "Ficus religiosa",
    description: "The Peepal tree is a large, deciduous tree in the family Moraceae. It is native to the Indian subcontinent and is considered sacred in Hinduism. The tree has a distinctive, spreading canopy and produces small, inconspicuous flowers.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ficus%20religiosa.jpg"
  },
  {
    id: 48,
    name: "Pomegranate",
    scientificName: "Punica granatum",
    family: "Lythraceae",
    genus: "Punica",
    species: "Punica granatum",
    description: "Pomegranate is a fruit-bearing shrub or small tree that belongs to the Lythraceae family. It is native to the region extending from Iran to northern India and has been cultivated for thousands of years for its edible fruit. The pomegranate tree typically grows to a height of 5-10 meters and has glossy, dark green leaves. The fruit is round, with a thick, reddish skin and contains numerous seeds surrounded by juicy, red arils. Pomegranates are rich in antioxidants, vitamins, and minerals, making them a popular choice for consumption in various forms, including fresh, juice, and culinary dishes.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Punica%20granatum.jpg"
  },

  // ================= Q =================
  {
    id: 49,
    name: "Queen Palm",
    scientificName: "Syagrus romanzoffiana",
    family: "Arecaceae",
    genus: "Syagrus",
    species: "Syagrus romanzoffiana",
    description: "The Queen Palm is a tree in the family Arecaceae. It is native to the Caribbean and is widely cultivated for its ornamental value. The tree has a single, unbranched trunk and large, feathery fronds.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Syagrus%20romanzoffiana.jpg"
  },
  {
    id: 50,
    name: "Quince",
    scientificName: "Cydonia oblonga",
    family: "Rosaceae",
    genus: "Cydonia",
    species: "Cydonia oblonga",
    description: "Quince is a small, deciduous tree that belongs to the Rosaceae family. It is native to the Caucasus region and is widely cultivated for its aromatic fruit. The tree typically grows to a height of 5-8 meters and has a rounded canopy. Quince trees have simple, ovate leaves with serrated edges, and they produce fragrant white or pink flowers in spring. The fruit is a pome, similar in appearance to a pear, but it is usually hard and tart when raw. Quince is commonly used in cooking and baking, as well as in the production of jams, jellies, and liqueurs.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cydonia%20oblonga.jpg"
  },
  {
    id: 51,
    name: "Queensland Bottle Tree",
    scientificName: "Brachychiton rupestris",
    family: "Malvaceae",
    genus: "Brachychiton",
    species: "Brachychiton rupestris",
    description: "The Queensland Bottle Tree is a tree in the family Malvaceae. It is native to Australia and is known for its distinctive, bottle-shaped trunk and glossy leaves. The tree is commonly cultivated for its ornamental value and is used in traditional medicine.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brachychiton%20rupestris.jpg"
  },

  // ================= R =================
  {
    id: 52,
    name: "Rose",
    scientificName: "Rosa chinensis",
    family: "Rosaceae",
    genus: "Rosa",
    species: "Rosa chinensis",
    description: "Roses are flowering plants in the genus Rosa, in the family Rosaceae. They are widely cultivated for their beautiful flowers and are commonly used in gardens, parks, and as ornamental plants. Roses are also used in perfumery, medicine, and as a source of food.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosa%20chinensis.jpg"
  },
  {
    id: 53,
    name: "Rice",
    scientificName: "Oryza sativa",
    family: "Poaceae",
    genus: "Oryza",
    species: "Oryza sativa",
    description: "Rice is a cereal grain that is a staple food for a large part of the world's population. It is native to Asia and is widely cultivated in tropical and subtropical regions. Rice plants are commonly grown in flooded fields, and the grain is used for human consumption and animal feed.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oryza%20sativa.jpg"
  },
  {
    id: 54,
    name: "Raspberry",
    scientificName: "Rubus idaeus",
    family: "Rosaceae",
    genus: "Rubus",
    species: "Rubus idaeus",
    description: "Raspberries are small, aggregate fruits that grow on deciduous shrubs in the genus Rubus. They are known for their sweet, tart flavor and are commonly consumed fresh or used in jams, pies, and other desserts. Raspberries are also rich in antioxidants and are widely cultivated for their nutritional value.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rubus%20idaeus.jpg"
  },

  // ================= S =================
  {
    id: 55,
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    genus: "Helianthus",
    species: "Helianthus annuus",
    description:"popularly known as the common sunflower, is a prominent annual herbaceous plant that belongs to the composite family, Asteraceae. Celebrated globally for its towering height, striking golden-yellow inflorescences, and substantial economic value, this plant serves as a model organism in botanical studies. The scientific description of this species spans its intricate taxonomy, morphology, reproductive mechanisms, ecological adaptations, and physiological behaviors.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Helianthus%20annuus.jpg"
  },
  {
    id: 56,
    name: "Sugarcane",
    scientificName: "Saccharum officinarum",
    family: "Poaceae",
    genus: "Saccharum",
    species: "Saccharum officinarum",
    description:"Saccharum officinarum, commonly known as sugarcane, is a large, perennial grass species belonging to the family Poaceae. It is classified under the tribe Andropogoneae, a group renowned for high photosynthetic efficiency and C4 carbon fixation. The species name officinarum derives from the Latin word for a workshop or pharmacy, historical evidence of its long-standing value to human civilization as a source of medicine and sweetness.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Saccharum%20officinarum.jpg"
  },
  {
    id: 57,
    name: "Spinach",
    scientificName: "Spinacia oleracea",
    family: "Amaranthaceae",
    genus: "Spinacia",
    species: "Spinacia oleracea",
    description: "Spinach is scientifically classified under the binomial name Spinacia oleracea L The genus name Spinacia is believed by some botanists to derive from the Latin word spina meaning spine, which directly references the prickly or spiny nature of the fruit clusters found in certain wild and cultivated varieties. The specific epithet oleracea translates from Latin to mean of the vegetable garden,indicating its long-standing history as a cultivated kitchen herb",
    image: "https://gardeningcentre.in/cdn/shop/products/s.jpg?v=1678429235"
  },

  // ================= T =================
  {
    id: 58,
    name: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    genus: "Ocimum",
    species: "Ocimum tenuiflorum",
    description: "Tulsi, also known as Holy Basil, is a medicinal plant in the family Lamiaceae. It is native to India and is widely cultivated for its aromatic leaves and medicinal properties. Tulsi is commonly used in traditional medicine and is considered sacred in Hindu culture.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ocimum%20tenuiflorum.jpg"
  },
  {
    id: 59,
    name: "Tea",
    scientificName: "Camellia sinensis",
    family: "Theaceae",
    genus: "Camellia",
    species: "Camellia sinensis",
    description: "Tea is a beverage made from the leaves of the Camellia sinensis plant. It is native to Asia and is one of the most widely consumed drinks in the world. Tea plants are commonly cultivated in tropical and subtropical regions for their leaves, which are processed into various types of tea.",
    image: "https://m.media-amazon.com/images/I/7142Yz8R-TL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 60,
    name: "Tamarind",
    scientificName: "Tamarindus indica",
    family: "Fabaceae",
    genus: "Tamarindus",
    species: "Tamarindus indica",
    description: "Tamarind is a tropical tree in the family Fabaceae. It is native to Africa and is widely cultivated in tropical regions for its edible fruit. The tree produces pod-like fruits that contain a tangy, sweet-sour pulp, which is used in cooking, beverages, and traditional medicine. Tamarind trees are also valued for their shade and ornamental qualities.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tamarindus%20indica.jpg"
  },

  // ================= U =================
  {
    id: 61,
    name: "Umbrella Tree",
    scientificName: "Heptapleurum arboricola",
    family: "Araliaceae",
    genus: "Heptapleurum",
    species: "Heptapleurum arboricola",
    description: "The Umbrella Tree is a tropical tree in the family Araliaceae. It is native to Southeast Asia and is known for its large, distinctive leaves that resemble an umbrella. The tree is commonly cultivated for its ornamental value and is used in traditional medicine.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Schefflera%20arboricola.jpg"
  },
  {
    id: 62,
    name: "Urena",
    scientificName: "Urena lobata",
    family: "Malvaceae",
    genus: "Urena",
    species: "Urena lobata",
    description: "Urena is a genus of flowering plants in the family Malvaceae. It is native to tropical and subtropical regions and is known for its small, delicate flowers and medicinal properties. Urena species are commonly cultivated for their ornamental value and are used in traditional medicine.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Urena%20lobata.jpg"
  },
  {
    id: 63,
    name: "Ulmus",
    scientificName: "Ulmus glabra",
    family: "Ulmaceae",
    genus: "Ulmus",
    species: "Ulmus glabra",
    description: "Ulmus is a genus of deciduous trees in the family Ulmaceae. It is native to the temperate regions of the Northern Hemisphere and is known for its distinctive, often irregularly shaped leaves and strong, durable wood. Ulmus species are commonly cultivated for their ornamental value and are used in urban forestry.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ulmus%20glabra.jpg"
  },

  // ================= V =================
  {
    id: 64,
    name: "Vanilla",
    scientificName: "Vanilla planifolia",
    family: "Orchidaceae",
    genus: "Vanilla",
    species: "Vanilla planifolia",
    description: "Vanilla is a climbing orchid in the family Orchidaceae. It is native to Mexico and is known for its distinctive, aromatic pods, which are used as a flavoring agent in food and cosmetics. Vanilla plants are commonly cultivated in tropical regions for their valuable pods.",
    image: "https://www.pepperhub.in/wp-content/uploads/2025/07/vannilla-1.webp"
  },
  {
    id: 65,
    name: "Violet",
    scientificName: "Viola odorata",
    family: "Violaceae",
    genus: "Viola",
    species: "Viola odorata",
    description: "Violet is a small, fragrant flowering plant in the family Violaceae. It is native to Europe and Asia and is known for its distinctive, often purple or blue flowers. Violets are commonly cultivated in gardens for their ornamental value and are also used in traditional medicine.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Viola%20odorata.jpg"
  },
  {
    id: 66,
    name: "Vetiver",
    scientificName: "Chrysopogon zizanioides",
    family: "Poaceae",
    genus: "Chrysopogon",
    species: "Chrysopogon zizanioides",
    description: "Vetiver is a perennial grass in the family Poaceae. It is native to India and is known for its deep root system and aromatic leaves. Vetiver is commonly used for soil erosion control and as a source of essential oils.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysopogon%20zizanioides.jpg"
  },

  // ================= W =================
  {
    id: 67,
    name: "Water Lily",
    scientificName: "Nymphaea nouchali",
    family: "Nymphaeaceae",
    genus: "Nymphaea",
    species: "Nymphaea nouchali",
    description: "Water Lily is a aquatic plant in the family Nymphaeaceae. It is native to tropical and subtropical regions and is known for its large, floating leaves and beautiful, fragrant flowers. Water Lilies are commonly cultivated in ponds and water gardens for their ornamental value.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nymphaea%20nouchali.jpg"
  },
  {
    id: 68,
    name: "Wheat",
    scientificName: "Triticum aestivum",
    family: "Poaceae",
    genus: "Triticum",
    species: "Triticum aestivum",
    description: "Wheat is a cereal grain that belongs to the family Poaceae. It is one of the most widely cultivated crops in the world and is a major source of nutrition for humans. Wheat plants are typically grown for their edible seeds, which are processed into flour for making bread, pasta, and other food products.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Triticum%20aestivum.jpg"
  },
  {
    id: 69,
    name: "Walnut",
    scientificName: "Juglans regia",
    family: "Juglandaceae",
    genus: "Juglans",
    species: "Juglans regia",
    description: "Walnut is a deciduous tree in the family Juglandaceae. It is native to the temperate regions of the Northern Hemisphere and is known for its edible nuts and valuable timber. Walnut trees can grow quite large and are often cultivated for their fruit and wood.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Juglans%20regia.jpg"
  },

  // ================= X =================
  {
    id: 70,
    name: "Xanthium",
    scientificName: "Xanthium strumarium",
    family: "Asteraceae",
    genus: "Xanthium",
    species: "Xanthium strumarium",
    description: "Xanthium is a genus of annual flowering plants in the family Asteraceae. It is native to the Americas and is known for its distinctive, spiny seed heads. Xanthium species are often considered weeds and can be problematic in agricultural settings.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xanthium%20strumarium.jpg"
  },
  {
    id: 71,
    name: "Xeranthemum",
    scientificName: "Xeranthemum annuum",
    family: "Asteraceae",
    genus: "Xeranthemum",
    species: "Xeranthemum annuum",
    description: "Xeranthemum is a genus of annual flowering plants in the family Asteraceae. It is native to the Mediterranean region and is known for its long-lasting, papery flowers that come in various colors. Xeranthemum species are commonly used in dried flower arrangements and as ornamental plants in gardens.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xeranthemum%20annuum.jpg"
  },
  {
    id: 72,
    name: "Xylosma",
    scientificName: "Xylosma congestum",
    family: "Salicaceae",
    genus: "Xylosma",
    species: "Xylosma congestum",
    description: "Xylosma is a genus of flowering plants in the family Salicaceae. It is native to tropical and subtropical regions of the Americas and Asia. Xylosma species are known for their distinctive leaves and small, inconspicuous flowers. Some species are used in traditional medicine, while others are cultivated as ornamental plants for their attractive foliage.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Xylosma%20congestum.jpg"
  },

  // ================= Y =================
  {
    id: 73,
    name: "Yam",
    scientificName: "Dioscorea alata",
    family: "Dioscoreaceae",
    genus: "Dioscorea",
    species: "Dioscorea alata",
    description: "Yam is a starchy tuberous root vegetable that belongs to the Dioscoreaceae family. It is native to Africa and Asia and is widely cultivated in tropical and subtropical regions. Yams are known for their high carbohydrate content and are an important food source in many cultures. They can be cooked in various ways, including boiling, roasting, frying, and baking. Yams are also rich in vitamins, minerals, and dietary fiber, making them a nutritious addition to the diet.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dioscorea%20alata.jpg"
  },
  {
    id: 74,
    name: "Yarrow",
    scientificName: "Achillea millefolium",
    family: "Asteraceae",
    genus: "Achillea",
    species: "Achillea millefolium",
    description: "Yarrow is a perennial flowering plant that belongs to the Asteraceae family. It is native to temperate regions of the Northern Hemisphere and is known for its feathery leaves and clusters of small, white or pink flowers. Yarrow has been used for centuries in traditional medicine for its anti-inflammatory, antiseptic, and wound-healing properties. It is also a popular ornamental plant in gardens due to its attractive appearance and ability to attract pollinators such as bees and butterflies.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Achillea%20millefolium.jpg"
  },
  {
    id: 75,
    name: "Yellow Oleander",
    scientificName: "Cascabela thevetia",
    family: "Apocynaceae",
    genus: "Cascabela",
    species: "Cascabela thevetia",
    description: "Yellow Oleander is a shrub or small tree in the family Apocynaceae. It is native to the Indian subcontinent and Southeast Asia and is known for its bright yellow flowers and toxic properties. The plant is often used in traditional medicine, but all parts of the plant are highly poisonous and can be fatal if ingested.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cascabela%20thevetia.jpg"
  },

  // ================= Z =================
  {
    id: 76,
    name: "Zinnia",
    scientificName: "Zinnia elegans",
    family: "Asteraceae",
    genus: "Zinnia",
    species: "Zinnia elegans",
    description: "Zinnia is a genus of flowering plants in the family Asteraceae, native to the Americas. Zinnia elegans, commonly known as the common zinnia or elegant zinnia, is a popular ornamental plant known for its vibrant and colorful flowers. It is an annual plant that produces daisy-like blooms in various colors, including red, pink, orange, yellow, and white. Zinnias are easy to grow and thrive in sunny locations with well-drained soil. They are often used in gardens, borders, and containers to add a splash of color. Zinnias attract pollinators such as butterflies and bees, making them beneficial for the ecosystem.",
    image: "https://plantinfo.co.za/wp-content/uploads/2020/07/Zinnia-elegans.jpg"
  },
  {
    id: 77,
    name: "Zucchini",
    scientificName: "Cucurbita pepo",
    family: "Cucurbitaceae",
    genus: "Cucurbita",
    species: "Cucurbita pepo",
    description: "Zucchini, also known as courgette, is a summer squash that belongs to the Cucurbitaceae family. It is characterized by its elongated shape and smooth, dark green skin, although some varieties may have yellow or light green skin. Zucchini has a mild flavor and tender flesh, making it versatile for culinary use. It can be eaten raw in salads, sautéed, grilled, or baked in various dishes. Zucchini is low in calories and rich in vitamins and minerals, including vitamin C, potassium, and dietary fiber. It is commonly grown in home gardens and is widely available in markets during the summer months.",
    image: "https://pureasiaseeds.com/cdn/shop/files/freepik__generate-hyper-realistic-images-of-the-given-plant__29226.png?v=1765781958&width=1946"
  },
  {
    id: 78,
    name: "Ziziphus",
    scientificName: "Ziziphus mauritiana",
    family: "Rhamnaceae",
    genus: "Ziziphus",
    species: "Ziziphus mauritiana",
    description: "Ziziphus is a genus of flowering plants in the family Rhamnaceae. The species Ziziphus mauritiana, commonly known as the Indian mulberry or date palm, is a tropical tree that produces edible fruits. It is native to the Indian subcontinent and Southeast Asia and is cultivated for its fruit, which is used in various culinary and medicinal applications.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ziziphus%20mauritiana.jpg"
  }
];

function PlantDetails() {

  const { id } = useParams();

  const location = useLocation();

  const [plant, setPlant] = useState(null);


  useEffect(() => {

    // Naam / scientific name compare karne ke liye helper
    const clean = (value) =>
      String(value || "").trim().toLowerCase();

    const loadPlant = () => {

      // File ki static list se id wala plant
      const staticPlant = plants.find(
        (item) => item.id === Number(id)
      );

      // Agar list page se plant ka naam pass hua ho (optional)
      const passedName = location.state?.name;

      const savedPlants =
        localStorage.getItem("plants");


      // Agar Admin ne abhi tak data save nahi kiya
      if (savedPlants === null) {

        if (passedName) {
          const byName = plants.find(
            (item) => clean(item.name) === clean(passedName)
          );
          setPlant(byName || staticPlant || null);
          return;
        }

        setPlant(staticPlant || null);

        return;
      }


      try {

        const parsed =
          JSON.parse(savedPlants);

        const plantList =
          Array.isArray(parsed) ? parsed : [];


        // 0) Agar naam pass hua hai to pehle naam se sahi plant dhundo
        if (passedName) {

          const byName =
            plantList.find(
              (item) => clean(item.name) === clean(passedName)
            ) ||
            plants.find(
              (item) => clean(item.name) === clean(passedName)
            );

          if (byName) {
            setPlant(byName);
            return;
          }
        }


        // localStorage mein isi id ka plant
        const savedPlant =
          plantList.find(
            (item) => Number(item.id) === Number(id)
          );


        // 1) localStorage mein id nahi mili -> static list se dikhao
        //    ("I" wale plants ka Not Found yahin theek hota hai)
        if (!savedPlant) {
          setPlant(staticPlant || null);
          return;
        }


        // 2) Static list mein ye id nahi hai -> Admin ka naya plant hai
        if (!staticPlant) {
          setPlant(savedPlant);
          return;
        }


        // 3) Dono mein id mili -> check karo ki wo same plant hai ya nahi
        const samePlant =
          clean(savedPlant.name) === clean(staticPlant.name) ||
          clean(savedPlant.scientificName) === clean(staticPlant.scientificName);


        // Same plant hai (Admin ne edit kiya hoga) -> localStorage wala
        // Alag plant hai (jaise Coconut ki jagah Neem) -> static wala
        setPlant(samePlant ? savedPlant : staticPlant);

      } catch (error) {

        console.log(
          "Error loading plant data:",
          error
        );

        // Error aaye to bhi static plant dikhao
        setPlant(staticPlant || null);
      }
    };


    loadPlant();


    // Admin Add/Edit/Delete ke baad update
    window.addEventListener(
      "plantsUpdated",
      loadPlant
    );


    // Agar dusre browser tab se update ho
    window.addEventListener(
      "storage",
      loadPlant
    );


    return () => {

      window.removeEventListener(
        "plantsUpdated",
        loadPlant
      );

      window.removeEventListener(
        "storage",
        loadPlant
      );

    };

  }, [id, location.state]);


  const fromDashboard =
    location.state?.from === "dashboard";


  if (!plant) {

    return (
      <div className="container py-5 text-center">
        <h2>Plant Not Found</h2>

        <Link
          to={fromDashboard ? "/user-dashboard" : "/plants"}
          className="btn btn-success mt-3"
        >
          {fromDashboard
            ? "← Back to Dashboard"
            : "← Back to Plants"}
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card shadow">

        <div className="row g-0">

          {/* Plant Image */}
          <div className="col-md-5">

            <img
              src={plant.image}
              alt={plant.name}
              className="img-fluid rounded-start w-100 h-100"
              style={{ objectFit: "cover", minHeight: "350px" }}
            />

          </div>

          {/* Plant Details */}
          <div className="col-md-7">

            <div className="card-body p-4">

              <h1 className="card-title">
                {plant.name}
              </h1>

              <hr />

              <p>
                <strong>Scientific Name:</strong>{" "}
                <i>{plant.scientificName}</i>
              </p>

              <p>
                <strong>Family:</strong>{" "}
                {plant.family}
              </p>

              <p>
                <strong>species:</strong>{" "}
                {plant.species}
              </p>
              <p>
                <strong>Genus:</strong>{" "}
                {plant.genus}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {plant.description}
              </p>

              {fromDashboard ? (

                <Link
                  to="/user-dashboard"
                  className="btn btn-success mt-3"
                >
                  ← Back to Dashboard
                </Link>

              ) : (

                <Link
                  to="/plants"
                  className="btn btn-success text-white mt-3"
                >
                  ← Back to Plants
                </Link>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PlantDetails;