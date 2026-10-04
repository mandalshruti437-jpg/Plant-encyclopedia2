import React, { useEffect, useState } from "react";
import "../CSS/ManagePlantMarket.css";

// ======================================================
// DEFAULT PRODUCTS
// ======================================================

const defaultProducts = [
  {
    id: 1,
    name: "Aloe Vera Plant",
    category: "Plants",
    price: 150,
    stock: 20,
    image:
      "https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20=",
    description:
      "Healthy Aloe Vera plant for home and garden.",
  },

  {
    id: 2,
    name: "Money Plant",
    category: "Plants",
    price: 120,
    stock: 20,
    image:
      "https://m.media-amazon.com/images/I/61EcAiTP9QL._AC_UF1000,1000_QL80_.jpg",
    description:
      "Beautiful indoor Money Plant.",
  },

  {
    id: 3,
    name: "Rose Plant",
    category: "Plants",
    price: 180,
    stock: 20,
    image:
      "https://as2.ftcdn.net/v2/jpg/14/03/24/57/1000_F_1403245716_3u8HwB2WF7JPMFzp2nhEWTtiKtpb2l1b.jpg",
    description:
      "Healthy Rose plant for your garden.",
  },

  {
    id: 4,
    name: "Tomato Seeds",
    category: "Seeds",
    price: 50,
    stock: 20,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/349877149/IN/LB/OE/52351254/f1-hybrid-ratana-round-tomato-seed-500x500.png",
    description:
      "Organic tomato seeds for home gardening.",
  },

  {
    id: 5,
    name: "Sunflower Seeds",
    category: "Seeds",
    price: 70,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_08wGPeuTR8vQ2FUTz8wRs1qnZibvzd2Qk0AdXi6Vg&s=10",
    description:
      "Good quality sunflower seeds.",
  },

  {
    id: 6,
    name: "Chilli Seeds",
    category: "Seeds",
    price: 40,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKheAk7FYqJi2VgG9sOwy-REUCY3TrlqxMjr2yYcjaw&s=10",
    description:
      "Fresh chilli seeds for cultivation.",
  },

  {
    id: 7,
    name: "Terracotta Pot",
    category: "Pots",
    price: 120,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FColVnDiSvJ6346gEyhkB7b02zkSPltYs3kmayw2Fg&s=10",
    description:
      "Natural terracotta pot for plants.",
  },

  {
    id: 8,
    name: "Ceramic Pot",
    category: "Pots",
    price: 250,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfFyUQ60uzd9y5PN268KOSdpLaHtV-cR4Zi4XbzcUqw&s",
    description:
      "Beautiful ceramic pot for indoor plants.",
  },

  {
    id: 9,
    name: "Small Garden Pot",
    category: "Pots",
    price: 90,
    stock: 20,
    image:
      "https://rukminim3.flixcart.com/image/480/480/xif0q/minutes_enrichment_original/-enriched-original-PCSH268WQGRCDZHP_0.jpg?q=90",
    description:
      "Small pot suitable for small plants.",
  },

  {
    id: 10,
    name: "Organic Mango",
    category: "Organic Fruits",
    price: 180,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6x50utJjNH-t-WE9X6mbrMT2mnIOkznxIUr8as1IhmA&s=10",
    description:
      "Fresh naturally grown organic mangoes.",
  },

  {
    id: 11,
    name: "Organic Apple",
    category: "Organic Fruits",
    price: 220,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq44hwQVxTgClA9E4YFOa6KCafoGWLUJmlCM0L5Wzjog&s=10",
    description:
      "Fresh organic apples.",
  },

  {
    id: 12,
    name: "Organic Banana",
    category: "Organic Fruits",
    price: 80,
    stock: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl8b92tqkwJPY8-vsUE0A0VwsV6cKQUg0nDQuJ4-QGA&s",
    description:
      "Fresh organic bananas.",
  },
];

// ======================================================
// EMPTY FORM
// ======================================================

const emptyForm = {
  name: "",
  category: "Plants",
  price: "",
  stock: 0,
  image: "",
  description: "",
};

// ======================================================
// DEFAULT PAYMENT SETTINGS
// ======================================================

const defaultPaymentSettings = {
  onlinePayment: true,
  cashOnDelivery: true,
};

// ======================================================
// COMPONENT
// ======================================================

const ManagePlantMarket = () => {
  // ======================================================
  // PRODUCT STATES
  // ======================================================

  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState(emptyForm);

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // ======================================================
  // ORDER STATES
  // ======================================================

  const [orders, setOrders] = useState([]);

  const [orderSearch, setOrderSearch] = useState("");

  const [orderStatusFilter, setOrderStatusFilter] =
    useState("All");

  // ======================================================
  // PAYMENT SETTINGS
  // ======================================================

  const [paymentSettings, setPaymentSettings] =
    useState(defaultPaymentSettings);

  // ======================================================
  // CANCEL ORDER STATES
  // ======================================================

  const [cancelOrderId, setCancelOrderId] = useState(null);

  const [cancelReason, setCancelReason] = useState("");

  // ======================================================
  // LOAD PRODUCTS + ORDERS + PAYMENT SETTINGS
  // ======================================================

  useEffect(() => {
    // ------------------------------------------------------
    // PRODUCTS
    // ------------------------------------------------------

    const savedProducts =
      localStorage.getItem("plantMarketProducts");

    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          // Add stock to old products if stock is missing
          const productsWithStock = parsedProducts.map(
            (product) => ({
              ...product,
              stock:
                product.stock !== undefined
                  ? Number(product.stock)
                  : 20,
            })
          );

          setProducts(productsWithStock);

          localStorage.setItem(
            "plantMarketProducts",
            JSON.stringify(productsWithStock)
          );
        } else {
          setProducts(defaultProducts);

          localStorage.setItem(
            "plantMarketProducts",
            JSON.stringify(defaultProducts)
          );
        }
      } catch (error) {
        console.error(
          "Error loading products:",
          error
        );

        setProducts(defaultProducts);

        localStorage.setItem(
          "plantMarketProducts",
          JSON.stringify(defaultProducts)
        );
      }
    } else {
      setProducts(defaultProducts);

      localStorage.setItem(
        "plantMarketProducts",
        JSON.stringify(defaultProducts)
      );
    }

    // ------------------------------------------------------
    // ORDERS
    // ------------------------------------------------------

    loadOrders();

    // ------------------------------------------------------
    // PAYMENT SETTINGS
    // ------------------------------------------------------

    const savedPaymentSettings =
      localStorage.getItem(
        "plantPaymentSettings"
      );

    if (savedPaymentSettings) {
      try {
        const parsedSettings =
          JSON.parse(savedPaymentSettings);

        setPaymentSettings({
          onlinePayment:
            parsedSettings.onlinePayment !== false,

          cashOnDelivery:
            parsedSettings.cashOnDelivery !== false,
        });
      } catch (error) {
        console.error(
          "Error loading payment settings:",
          error
        );

        setPaymentSettings(
          defaultPaymentSettings
        );
      }
    } else {
      setPaymentSettings(
        defaultPaymentSettings
      );

      localStorage.setItem(
        "plantPaymentSettings",
        JSON.stringify(
          defaultPaymentSettings
        )
      );
    }

    // ------------------------------------------------------
    // ORDER UPDATE EVENT
    // ------------------------------------------------------

    const handleOrderUpdate = () => {
      loadOrders();
    };

    window.addEventListener(
      "plantOrdersUpdated",
      handleOrderUpdate
    );

    // ------------------------------------------------------
    // PAYMENT UPDATE EVENT
    // ------------------------------------------------------

    const handlePaymentUpdate = () => {
      loadPaymentSettings();
    };

    window.addEventListener(
      "paymentSettingsUpdated",
      handlePaymentUpdate
    );

    // ------------------------------------------------------
    // PRODUCT UPDATE EVENT
    // ------------------------------------------------------

    const handleProductUpdate = () => {
      loadProducts();
    };

    window.addEventListener(
      "plantProductsUpdated",
      handleProductUpdate
    );

    // ------------------------------------------------------
    // CLEANUP
    // ------------------------------------------------------

    return () => {
      window.removeEventListener(
        "plantOrdersUpdated",
        handleOrderUpdate
      );

      window.removeEventListener(
        "paymentSettingsUpdated",
        handlePaymentUpdate
      );

      window.removeEventListener(
        "plantProductsUpdated",
        handleProductUpdate
      );
    };
  }, []);

  // ======================================================
  // LOAD PRODUCTS
  // ======================================================

  const loadProducts = () => {
    const savedProducts =
      localStorage.getItem("plantMarketProducts");

    if (savedProducts) {
      try {
        const parsedProducts =
          JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          const productsWithStock =
            parsedProducts.map((product) => ({
              ...product,
              stock:
                product.stock !== undefined
                  ? Number(product.stock)
                  : 20,
            }));

          setProducts(productsWithStock);
        }
      } catch (error) {
        console.error(
          "Error loading products:",
          error
        );
      }
    }
  };

  // ======================================================
  // LOAD ORDERS
  // ======================================================

  const loadOrders = () => {
    const savedOrders =
      localStorage.getItem("plantOrders");

    if (savedOrders) {
      try {
        const parsedOrders =
          JSON.parse(savedOrders);

        setOrders(
          Array.isArray(parsedOrders)
            ? parsedOrders
            : []
        );
      } catch (error) {
        console.error(
          "Error loading orders:",
          error
        );

        setOrders([]);
      }
    } else {
      setOrders([]);
    }
  };

  // ======================================================
  // LOAD PAYMENT SETTINGS
  // ======================================================

  const loadPaymentSettings = () => {
    const saved =
      localStorage.getItem(
        "plantPaymentSettings"
      );

    if (saved) {
      try {
        const parsed =
          JSON.parse(saved);

        setPaymentSettings({
          onlinePayment:
            parsed.onlinePayment !== false,

          cashOnDelivery:
            parsed.cashOnDelivery !== false,
        });
      } catch (error) {
        console.error(
          "Payment settings error:",
          error
        );
      }
    }
  };

  // ======================================================
  // SAVE ORDERS
  // ======================================================

  const saveOrders = (updatedOrders) => {
    setOrders(updatedOrders);

    localStorage.setItem(
      "plantOrders",
      JSON.stringify(updatedOrders)
    );

    window.dispatchEvent(
      new Event("plantOrdersUpdated")
    );
  };

  // ======================================================
  // SAVE PRODUCTS
  // ======================================================

  const saveProducts = (updatedProducts) => {
    setProducts(updatedProducts);

    localStorage.setItem(
      "plantMarketProducts",
      JSON.stringify(updatedProducts)
    );

    window.dispatchEvent(
      new Event("plantProductsUpdated")
    );
  };

  // ======================================================
  // UPDATE PAYMENT SETTINGS
  // ======================================================

  const updatePaymentSettings = (
    paymentType,
    value
  ) => {
    const updatedSettings = {
      ...paymentSettings,
      [paymentType]: value,
    };

    setPaymentSettings(
      updatedSettings
    );

    localStorage.setItem(
      "plantPaymentSettings",
      JSON.stringify(updatedSettings)
    );

    window.dispatchEvent(
      new Event("paymentSettingsUpdated")
    );
  };

  // ======================================================
  // PRODUCT INPUT CHANGE
  // ======================================================

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ======================================================
  // ADD / UPDATE PRODUCT
  // ======================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert(
        "Please enter product name."
      );
      return;
    }

    if (!formData.category) {
      alert(
        "Please select category."
      );
      return;
    }

    if (
      formData.price === "" ||
      Number(formData.price) <= 0
    ) {
      alert(
        "Please enter a valid price."
      );
      return;
    }

    if (
      formData.stock === "" ||
      Number(formData.stock) < 0
    ) {
      alert(
        "Please enter a valid stock quantity."
      );
      return;
    }

    if (!formData.image.trim()) {
      alert(
        "Please enter product image URL."
      );
      return;
    }

    if (!formData.description.trim()) {
      alert(
        "Please enter product description."
      );
      return;
    }

    // ------------------------------------------------------
    // UPDATE PRODUCT
    // ------------------------------------------------------

    if (editingId !== null) {
      const updatedProducts =
        products.map((product) =>
          product.id === editingId
            ? {
                ...product,

                name:
                  formData.name.trim(),

                category:
                  formData.category,

                price:
                  Number(formData.price),

                stock:
                  Number(formData.stock),

                image:
                  formData.image.trim(),

                description:
                  formData.description.trim(),
              }
            : product
        );

      saveProducts(
        updatedProducts
      );

      alert(
        "Product updated successfully."
      );

      setEditingId(null);

      setFormData(emptyForm);

      return;
    }

    // ------------------------------------------------------
    // DUPLICATE CHECK
    // ------------------------------------------------------

    const duplicateProduct =
      products.some(
        (product) =>
          product.name
            .toLowerCase() ===
          formData.name
            .trim()
            .toLowerCase()
      );

    if (duplicateProduct) {
      alert(
        "This product already exists."
      );
      return;
    }

    // ------------------------------------------------------
    // ADD PRODUCT
    // ------------------------------------------------------

    const newProduct = {
      id: Date.now(),

      name:
        formData.name.trim(),

      category:
        formData.category,

      price:
        Number(formData.price),

      stock:
        Number(formData.stock),

      image:
        formData.image.trim(),

      description:
        formData.description.trim(),
    };

    const updatedProducts = [
      ...products,
      newProduct,
    ];

    saveProducts(
      updatedProducts
    );

    alert(
      "Product added successfully."
    );

    setFormData(emptyForm);
  };

  // ======================================================
  // EDIT PRODUCT
  // ======================================================

  const handleEdit = (product) => {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock:
        product.stock !== undefined
          ? product.stock
          : 0,
      image: product.image,
      description: product.description,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // DELETE PRODUCT
  // ======================================================

  const handleDelete = (id) => {
    const product =
      products.find(
        (item) =>
          item.id === id
      );

    if (!product) {
      return;
    }

    const confirmDelete =
      window.confirm(
        `Are you sure you want to delete "${product.name}"?`
      );

    if (!confirmDelete) {
      return;
    }

    const updatedProducts =
      products.filter(
        (item) =>
          item.id !== id
      );

    saveProducts(
      updatedProducts
    );

    if (editingId === id) {
      setEditingId(null);
      setFormData(emptyForm);
    }

    alert(
      "Product deleted successfully."
    );
  };

  // ======================================================
  // INCREASE STOCK
  // ======================================================

  const increaseStock = (id) => {
    const updatedProducts =
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              stock:
                Number(product.stock || 0) +
                1,
            }
          : product
      );

    saveProducts(
      updatedProducts
    );
  };

  // ======================================================
  // DECREASE STOCK
  // ======================================================

  const decreaseStock = (id) => {
    const updatedProducts =
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              stock: Math.max(
                0,
                Number(product.stock || 0) -
                  1
              ),
            }
          : product
      );

    saveProducts(
      updatedProducts
    );
  };

  // ======================================================
  // CANCEL EDIT
  // ======================================================

  const cancelEdit = () => {
    setEditingId(null);

    setFormData(
      emptyForm
    );
  };

  // ======================================================
  // RESET PRODUCTS
  // ======================================================

  const resetProducts = () => {
    const confirmReset =
      window.confirm(
        "Are you sure you want to reset all products to default products?"
      );

    if (!confirmReset) {
      return;
    }

    saveProducts(
      defaultProducts
    );

    setEditingId(null);

    setFormData(
      emptyForm
    );

    alert(
      "Products reset successfully."
    );
  };

  // ======================================================
  // FILTER PRODUCTS
  // ======================================================

  const filteredProducts =
    products.filter(
      (product) => {
        const categoryMatch =
          selectedCategory ===
            "All" ||
          product.category ===
            selectedCategory;

        const searchMatch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        return (
          categoryMatch &&
          searchMatch
        );
      }
    );

  // ======================================================
  // PRODUCT CATEGORIES
  // ======================================================

  const categories = [
    "All",
    "Plants",
    "Seeds",
    "Pots",
    "Organic Fruits",
  ];

  // ======================================================
  // GET USER NAME
  // ======================================================

  const getUserName = (order) => {
    return (
      order.userName ||
      order.customerName ||
      order.name ||
      "Unknown User"
    );
  };

  // ======================================================
  // GET PAYMENT METHOD
  // ======================================================

  const getPaymentMethod = (order) => {
    if (order.paymentMethod) {
      return order.paymentMethod;
    }

    if (order.onlineMethod) {
      return order.onlineMethod;
    }

    if (order.paymentType) {
      return order.paymentType;
    }

    return "Cash on Delivery";
  };

  // ======================================================
  // GET PAYMENT STATUS
  // ======================================================

  const getPaymentStatus = (order) => {
    if (order.paymentStatus) {
      return order.paymentStatus;
    }

    const method =
      getPaymentMethod(order);

    if (
      method ===
        "Cash on Delivery" ||
      method === "COD"
    ) {
      return "Pending";
    }

    return "Paid";
  };

  // ======================================================
  // GET ORDER PRODUCTS
  // ======================================================

  const getOrderProducts = (order) => {
    if (
      Array.isArray(
        order.products
      )
    ) {
      return order.products;
    }

    if (
      Array.isArray(
        order.cart
      )
    ) {
      return order.cart;
    }

    return [];
  };

  // ======================================================
  // GET PRODUCT NAME
  // ======================================================

  const getOrderProductName = (
    product
  ) => {
    return (
      product.name ||
      product.productName ||
      "Unknown Product"
    );
  };

  // ======================================================
  // GET PRODUCT PRICE
  // ======================================================

  const getOrderProductPrice = (
    product
  ) => {
    return Number(
      product.price ||
        product.productPrice ||
        0
    );
  };

  // ======================================================
  // GET PRODUCT QUANTITY
  // ======================================================

  const getOrderProductQuantity = (
    product
  ) => {
    return Number(
      product.quantity ||
        product.qty ||
        1
    );
  };

  // ======================================================
  // GET ORDER TOTAL
  // ======================================================

  const getOrderTotal = (order) => {
    if (
      order.totalAmount !==
      undefined
    ) {
      return Number(
        order.totalAmount
      );
    }

    if (
      order.total !==
      undefined
    ) {
      return Number(
        order.total
      );
    }

    const orderProducts =
      getOrderProducts(order);

    return orderProducts.reduce(
      (
        total,
        product
      ) =>
        total +
        getOrderProductPrice(
          product
        ) *
          getOrderProductQuantity(
            product
          ),
      0
    );
  };

  // ======================================================
  // UPDATE ORDER STATUS
  // ======================================================

  const updateOrderStatus = (
    orderId,
    newStatus
  ) => {
    if (
      newStatus ===
      "Cancelled"
    ) {
      setCancelOrderId(
        orderId
      );

      setCancelReason("");

      return;
    }

    const updatedOrders =
      orders.map(
        (order) =>
          String(order.id) ===
          String(orderId)
            ? {
                ...order,

                status:
                  newStatus,
              }
            : order
      );

    saveOrders(
      updatedOrders
    );
  };

  // ======================================================
  // CANCEL ORDER WITH REASON
  // ======================================================

  const cancelOrderWithReason = () => {
    if (
      cancelOrderId === null
    ) {
      return;
    }

    if (
      !cancelReason.trim()
    ) {
      alert(
        "Please enter the reason for cancelling the order."
      );

      return;
    }

    const reason =
      cancelReason.trim();

    const cancellationDate =
      new Date().toLocaleDateString(
        "en-IN"
      );

    const cancellationTime =
      new Date().toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );

    const cancellationDateTime =
      new Date().toLocaleString(
        "en-IN"
      );

    const updatedOrders =
      orders.map(
        (order) =>
          String(order.id) ===
          String(
            cancelOrderId
          )
            ? {
                ...order,

                status:
                  "Cancelled",

                cancelledBy:
                  "Admin",

                cancellationReason:
                  reason,

                cancellationMessage:
                  `Your order has been cancelled by admin. Reason: ${reason}`,

                cancelledAt:
                  cancellationDateTime,

                adminCancellationReason:
                  reason,

                adminCancellationDate:
                  cancellationDate,

                adminCancellationTime:
                  cancellationTime,

                adminCancellationDetails: {
                  reason:
                    reason,

                  cancellationDate:
                    cancellationDate,

                  cancellationTime:
                    cancellationTime,

                  cancellationDateTime:
                    cancellationDateTime,

                  cancelledBy:
                    "Admin",
                },
              }
            : order
      );

    saveOrders(
      updatedOrders
    );

    setCancelOrderId(
      null
    );

    setCancelReason("");

    alert(
      "Order cancelled and reason sent to user."
    );
  };

  // ======================================================
  // DELETE ORDER
  // ======================================================

  const deleteOrder = (
    orderId
  ) => {
    const order =
      orders.find(
        (item) =>
          String(item.id) ===
          String(orderId)
      );

    if (!order) {
      return;
    }

    const confirmDelete =
      window.confirm(
        `Are you sure you want to delete Order #${order.id}?`
      );

    if (!confirmDelete) {
      return;
    }

    const updatedOrders =
      orders.filter(
        (item) =>
          String(item.id) !==
          String(orderId)
      );

    saveOrders(
      updatedOrders
    );

    alert(
      "Order deleted successfully."
    );
  };

  // ======================================================
  // ORDER STATUSES
  // ======================================================

  const orderStatuses = [
    "All",
    "Order Placed",
    "Confirmed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  // ======================================================
  // FILTER ORDERS
  // ======================================================

  const filteredOrders =
    orders.filter(
      (order) => {
        const userName =
          getUserName(
            order
          );

        const paymentMethod =
          getPaymentMethod(
            order
          );

        const orderId =
          String(
            order.id || ""
          );

        const searchText =
          orderSearch.toLowerCase();

        const searchMatch =
          userName
            .toLowerCase()
            .includes(
              searchText
            ) ||
          paymentMethod
            .toLowerCase()
            .includes(
              searchText
            ) ||
          orderId
            .toLowerCase()
            .includes(
              searchText
            );

        const statusMatch =
          orderStatusFilter ===
            "All" ||
          (order.status ||
            "Order Placed") ===
            orderStatusFilter;

        return (
          searchMatch &&
          statusMatch
        );
      }
    );

  // ======================================================
  // RETURN
  // ======================================================

  return (
    <div className="manage-plant-market">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="manage-market-header">

        <h1>
          🌿 Manage Plant Market
        </h1>

        <p>
          Admin can add, edit and delete
          Plant Market products and manage
          customer orders.
        </p>

        <div className="security-note">
          🔒 Payment information is not
          managed or stored here.
        </div>

      </div>

      {/* ==================================================
          PRODUCT FORM
      ================================================== */}

      <div className="market-form-card">

        <h2>
          {editingId !== null
            ? "✏️ Edit Product"
            : "➕ Add New Product"}
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
        >

          <div className="form-group">

            <label>
              Product Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div className="form-group">

            <label>
              Category
            </label>

            <select
              name="category"
              value={
                formData.category
              }
              onChange={
                handleChange
              }
            >

              <option value="Plants">
                Plants
              </option>

              <option value="Seeds">
                Seeds
              </option>

              <option value="Pots">
                Pots
              </option>

              <option value="Organic Fruits">
                Organic Fruits
              </option>

            </select>

          </div>

          <div className="form-group">

            <label>
              Price (₹)
            </label>

            <input
              type="number"
              name="price"
              min="1"
              placeholder="Enter price"
              value={
                formData.price
              }
              onChange={
                handleChange
              }
            />

          </div>

          {/* ==================================================
              STOCK INPUT
          ================================================== */}

          <div className="form-group">

            <label>
              Stock Available
            </label>

            <input
              type="number"
              name="stock"
              min="0"
              placeholder="Enter available stock"
              value={
                formData.stock
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div className="form-group">

            <label>
              Product Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              value={
                formData.image
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div className="form-group">

            <label>
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter product description"
              rows="4"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div className="form-buttons">

            <button
              type="submit"
              className="save-product-button"
            >
              {editingId !== null
                ? "💾 Update Product"
                : "➕ Add Product"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="cancel-edit-button"
                onClick={
                  cancelEdit
                }
              >
                ❌ Cancel Edit
              </button>
            )}

          </div>

        </form>

      </div>

      {/* ==================================================
          PAYMENT AVAILABILITY SETTINGS
      ================================================== */}

      <div className="payment-availability-box">

        <h3>
          💳 Payment Availability
        </h3>

        <p>
          Admin can control which payment
          methods are available to customers.
        </p>

        {/* ONLINE PAYMENT */}

        <div className="payment-setting-row">

          <div>

            <strong>
              💳 Online Payment
            </strong>

            <p>
              UPI / Card / Net Banking
            </p>

          </div>

          <label className="payment-switch">

            <input
              type="checkbox"
              checked={
                paymentSettings.onlinePayment
              }
              onChange={(e) =>
                updatePaymentSettings(
                  "onlinePayment",
                  e.target.checked
                )
              }
            />

            <span className="payment-slider"></span>

          </label>

          <strong>
            {paymentSettings.onlinePayment
              ? "Available"
              : "Disabled"}
          </strong>

        </div>

        {/* COD */}

        <div className="payment-setting-row">

          <div>

            <strong>
              💵 Cash on Delivery
            </strong>

            <p>
              Customer pays at delivery.
            </p>

          </div>

          <label className="payment-switch">

            <input
              type="checkbox"
              checked={
                paymentSettings.cashOnDelivery
              }
              onChange={(e) =>
                updatePaymentSettings(
                  "cashOnDelivery",
                  e.target.checked
                )
              }
            />

            <span className="payment-slider"></span>

          </label>

          <strong>
            {paymentSettings.cashOnDelivery
              ? "Available"
              : "Disabled"}
          </strong>

        </div>

        {/* CURRENT STATUS */}

        <div className="payment-current-status">

          <p>
            <strong>
              Current Payment Options:
            </strong>
          </p>

          {paymentSettings.onlinePayment && (
            <span className="payment-active">
              💳 Online Payment
            </span>
          )}

          {paymentSettings.cashOnDelivery && (
            <span className="payment-active">
              💵 Cash on Delivery
            </span>
          )}

          {!paymentSettings.onlinePayment &&
            !paymentSettings.cashOnDelivery && (
              <span className="payment-disabled">
                ⚠️ No payment method is
                currently available.
              </span>
            )}

        </div>

      </div>

      {/* ==================================================
          PAYMENT SECURITY
      ================================================== */}

      <div className="payment-security-box">

        <h3>
          🔒 Payment Security
        </h3>

        <p>
          Manage Plant Market does not
          contain payment credentials.
        </p>

        <ul>

          <li>
            UPI ID is not stored here.
          </li>

          <li>
            Debit Card number is not stored here.
          </li>

          <li>
            Credit Card number is not stored here.
          </li>

          <li>
            CVV is not stored here.
          </li>

          <li>
            Card expiry is not stored here.
          </li>

          <li>
            Net Banking account number is
            not stored here.
          </li>

          <li>
            Bank login/password should never
            be stored in localStorage.
          </li>

        </ul>

      </div>

      {/* ==================================================
          PRODUCT SEARCH
      ================================================== */}

      <div className="market-management-tools">

        <input
          type="text"
          placeholder="🔍 Search product..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <div className="admin-category-buttons">

          {categories.map(
            (category) => (

              <button
                key={category}
                className={
                  selectedCategory ===
                  category
                    ? "admin-category active"
                    : "admin-category"
                }
                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }
              >
                {category}
              </button>

            )
          )}

        </div>

      </div>

      {/* ==================================================
          PRODUCT COUNT
      ================================================== */}

      <div className="product-count">

        <h2>
          🛍️ Products:{" "}
          {filteredProducts.length}
        </h2>

      </div>

      {/* ==================================================
          PRODUCT TABLE
      ================================================== */}

      <div className="product-table-container">

        {filteredProducts.length ===
        0 ? (

          <div className="no-products">

            <h3>
              No products found.
            </h3>

            <p>
              Try another search or category.
            </p>

          </div>

        ) : (

          <table className="manage-product-table">

            <thead>

              <tr>

                <th>
                  Image
                </th>

                <th>
                  Product
                </th>

                <th>
                  Category
                </th>

                <th>
                  Price
                </th>

                <th>
                  Stock Available
                </th>

                <th>
                  Description
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.map(
                (product) => (

                  <tr
                    key={
                      product.id
                    }
                  >

                    <td>

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                        className="admin-product-image"
                      />

                    </td>

                    <td>

                      <strong>
                        {
                          product.name
                        }
                      </strong>

                    </td>

                    <td>

                      <span className="category-badge">

                        {
                          product.category
                        }

                      </span>

                    </td>

                    <td>

                      <strong>
                        ₹
                        {
                          product.price
                        }
                      </strong>

                    </td>

                    {/* ==================================================
                        STOCK
                    ================================================== */}

                    <td>

                      <div className="stock-management">

                        <strong
                          className={
                            Number(
                              product.stock || 0
                            ) === 0
                              ? "stock-out"
                              : "stock-available"
                          }
                        >
                          {Number(
                            product.stock || 0
                          ) === 0
                            ? "Out of Stock"
                            : `${Number(
                                product.stock || 0
                              )} Available`}
                        </strong>

                        <div className="stock-buttons">

                          <button
                            type="button"
                            className="stock-plus-button"
                            onClick={() =>
                              increaseStock(
                                product.id
                              )
                            }
                          >
                            ➕
                          </button>

                          <button
                            type="button"
                            className="stock-minus-button"
                            disabled={
                              Number(
                                product.stock || 0
                              ) === 0
                            }
                            onClick={() =>
                              decreaseStock(
                                product.id
                              )
                            }
                          >
                            ➖
                          </button>

                        </div>

                      </div>

                    </td>

                    <td>
                      {
                        product.description
                      }
                    </td>

                    <td>

                      <div className="action-buttons">

                        <button
                          className="edit-product-button"
                          onClick={() =>
                            handleEdit(
                              product
                            )
                          }
                        >
                          ✏️ Edit
                        </button>

                        <button
                          className="delete-product-button"
                          onClick={() =>
                            handleDelete(
                              product.id
                            )
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

        )}

      </div>

      {/* ==================================================
          RESET PRODUCTS
      ================================================== */}

      <div className="reset-section">

        <button
          className="reset-products-button"
          onClick={
            resetProducts
          }
        >
          🔄 Reset Default Products
        </button>

      </div>

      {/* ==================================================
          ORDERS SECTION
      ================================================== */}

      <div className="admin-orders-section">

        <div className="orders-header">

          <h2>
            📦 Customer Orders
          </h2>

          <p>
            View customer name, Order ID,
            payment method and order details.
          </p>

        </div>

        {/* ==================================================
            ORDER SEARCH
        ================================================== */}

        <div className="orders-management-tools">

          <input
            type="text"
            placeholder="🔍 Search Order ID, User Name or Payment Method..."
            value={
              orderSearch
            }
            onChange={(e) =>
              setOrderSearch(
                e.target.value
              )
            }
          />

          <select
            value={
              orderStatusFilter
            }
            onChange={(e) =>
              setOrderStatusFilter(
                e.target.value
              )
            }
          >

            {orderStatuses.map(
              (status) => (

                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>

              )
            )}

          </select>

        </div>

        {/* ==================================================
            ORDER COUNT
        ================================================== */}

        <div className="orders-count">

          <h3>
            📦 Orders:{" "}
            {
              filteredOrders.length
            }
          </h3>

        </div>

        {/* ==================================================
            NO ORDERS
        ================================================== */}

        {filteredOrders.length ===
        0 ? (

          <div className="no-orders">

            <h3>
              📭 No orders found.
            </h3>

            <p>
              Orders placed by users will
              appear here.
            </p>

          </div>

        ) : (

          <div className="orders-list">

            {filteredOrders.map(
              (order) => {

                const orderProducts =
                  getOrderProducts(
                    order
                  );

                const userName =
                  getUserName(
                    order
                  );

                const paymentMethod =
                  getPaymentMethod(
                    order
                  );

                const paymentStatus =
                  getPaymentStatus(
                    order
                  );

                const totalAmount =
                  getOrderTotal(
                    order
                  );

                const totalQuantity =
                  order.totalQuantity ||
                  orderProducts.reduce(
                    (
                      total,
                      product
                    ) =>
                      total +
                      getOrderProductQuantity(
                        product
                      ),
                    0
                  );

                const isOnlinePayment =
                  !paymentMethod
                    .toLowerCase()
                    .includes(
                      "cash"
                    ) &&
                  paymentMethod !==
                    "COD";

                return (

                  <div
                    className="admin-order-card"
                    key={
                      order.id
                    }
                  >

                    {/* ==================================================
                        ORDER TOP
                    ================================================== */}

                    <div className="admin-order-header">

                      <div>

                        <h3>
                          📦 Order #
                          {
                            order.id
                          }
                        </h3>

                        <p>
                          👤 User:{" "}
                          <strong>
                            {
                              userName
                            }
                          </strong>
                        </p>

                        <div className="order-payment-badge">

                          {isOnlinePayment ? (
                            <span className="online-payment-badge">
                              💳 Online Payment
                            </span>
                          ) : (
                            <span className="cod-payment-badge">
                              💵 Cash on Delivery
                            </span>
                          )}

                        </div>

                      </div>

                      <div className="order-status-control">

                        <label>
                          Order Status
                        </label>

                        <select
                          value={
                            order.status ||
                            "Order Placed"
                          }
                          onChange={(e) =>
                            updateOrderStatus(
                              order.id,
                              e.target.value
                            )
                          }
                        >

                          {orderStatuses
                            .filter(
                              (
                                status
                              ) =>
                                status !==
                                "All"
                            )
                            .map(
                              (
                                status
                              ) => (

                                <option
                                  key={
                                    status
                                  }
                                  value={
                                    status
                                  }
                                >
                                  {
                                    status
                                  }
                                </option>

                              )
                            )}

                        </select>

                      </div>

                    </div>

                    {/* ==================================================
                        CANCELLED MESSAGE
                    ================================================== */}

                    {order.status ===
                      "Cancelled" &&
                      (order.cancellationReason ||
                        order.adminCancellationDetails?.reason) && (

                      <div className="admin-cancellation-message">

                        <h4>
                          ❌ Cancellation Message
                        </h4>

                        <p>
                          <strong>
                            Reason:
                          </strong>{" "}
                          {
                            order.cancellationReason ||
                            order.adminCancellationDetails?.reason
                          }
                        </p>

                        {order.cancelledBy && (
                          <p>
                            <strong>
                              Cancelled By:
                            </strong>{" "}
                            {
                              order.cancelledBy
                            }
                          </p>
                        )}

                        {order.cancelledAt && (
                          <small>
                            Cancelled at:{" "}
                            {
                              order.cancelledAt
                            }
                          </small>
                        )}

                      </div>

                    )}

                    {/* ==================================================
                        ORDER INFORMATION
                    ================================================== */}

                    <div className="order-information-grid">

                      <div className="order-info-item">

                        <span>
                          Order ID
                        </span>

                        <strong>
                          #
                          {
                            order.id
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          User Name
                        </span>

                        <strong>
                          👤{" "}
                          {
                            userName
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Payment Method
                        </span>

                        <strong
                          className={
                            isOnlinePayment
                              ? "online-payment"
                              : "cod-payment"
                          }
                        >

                          {isOnlinePayment
                            ? "💳 Online Payment"
                            : "💵 Cash on Delivery"}

                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Payment Status
                        </span>

                        <strong
                          className={
                            paymentStatus
                              .toLowerCase()
                              .includes(
                                "paid"
                              )
                              ? "paid"
                              : "pending"
                          }
                        >
                          {
                            paymentStatus
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Total Quantity
                        </span>

                        <strong>
                          {
                            totalQuantity
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Total Amount
                        </span>

                        <strong className="order-total">
                          ₹
                          {
                            totalAmount
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Order Date
                        </span>

                        <strong>
                          {
                            order.orderDate ||
                            order.date ||
                            "Not available"
                          }
                        </strong>

                      </div>

                      <div className="order-info-item">

                        <span>
                          Order Time
                        </span>

                        <strong>
                          {
                            order.orderTime ||
                            order.time ||
                            "Not available"
                          }
                        </strong>

                      </div>

                    </div>

                    {/* ==================================================
                        PRODUCTS IN ORDER
                    ================================================== */}

                    <div className="order-products-section">

                      <h4>
                        🛒 Ordered Products
                      </h4>

                      {orderProducts.length ===
                      0 ? (

                        <p>
                          Product details not
                          available.
                        </p>

                      ) : (

                        <div className="order-products-table-wrapper">

                          <table className="order-products-table">

                            <thead>

                              <tr>

                                <th>
                                  Product
                                </th>

                                <th>
                                  Category
                                </th>

                                <th>
                                  Price
                                </th>

                                <th>
                                  Quantity
                                </th>

                                <th>
                                  Subtotal
                                </th>

                              </tr>

                            </thead>

                            <tbody>

                              {orderProducts.map(
                                (
                                  product,
                                  index
                                ) => {

                                  const price =
                                    getOrderProductPrice(
                                      product
                                    );

                                  const quantity =
                                    getOrderProductQuantity(
                                      product
                                    );

                                  return (

                                    <tr
                                      key={
                                        product.id ||
                                        index
                                      }
                                    >

                                      <td>

                                        <strong>
                                          {
                                            getOrderProductName(
                                              product
                                            )
                                          }
                                        </strong>

                                      </td>

                                      <td>
                                        {
                                          product.category ||
                                          "Plants"
                                        }
                                      </td>

                                      <td>
                                        ₹
                                        {
                                          price
                                        }
                                      </td>

                                      <td>
                                        {
                                          quantity
                                        }
                                      </td>

                                      <td>

                                        <strong>
                                          ₹
                                          {
                                            price *
                                            quantity
                                          }
                                        </strong>

                                      </td>

                                    </tr>

                                  );
                                }
                              )}

                            </tbody>

                          </table>

                        </div>

                      )}

                    </div>

                    {/* ==================================================
                        DELIVERY
                    ================================================== */}

                    {(order.expectedDeliveryDate ||
                      order.expectedDeliveryTime) && (

                      <div className="order-delivery-info">

                        <h4>
                          🚚 Delivery Information
                        </h4>

                        {order.expectedDeliveryDate && (

                          <p>

                            <strong>
                              Expected Date:
                            </strong>{" "}

                            {
                              order.expectedDeliveryDate
                            }

                          </p>

                        )}

                        {order.expectedDeliveryTime && (

                          <p>

                            <strong>
                              Expected Time:
                            </strong>{" "}

                            {
                              order.expectedDeliveryTime
                            }

                          </p>

                        )}

                      </div>

                    )}

                    {/* ==================================================
                        ORDER ACTIONS
                    ================================================== */}

                    <div className="order-action-area">

                      {order.status !==
                        "Cancelled" &&
                        order.status !==
                          "Delivered" && (

                        <button
                          className="cancel-order-button"
                          onClick={() => {

                            setCancelOrderId(
                              order.id
                            );

                            setCancelReason(
                              ""
                            );

                          }}
                        >
                          ❌ Cancel Order
                        </button>

                      )}

                      <button
                        className="delete-order-button"
                        onClick={() =>
                          deleteOrder(
                            order.id
                          )
                        }
                      >
                        🗑️ Delete Order
                      </button>

                    </div>

                  </div>

                );
              }
            )}

          </div>

        )}

      </div>

      {/* ==================================================
          CANCEL ORDER MESSAGE MODAL
      ================================================== */}

      {cancelOrderId !== null && (

        <div className="cancel-message-overlay">

          <div className="cancel-message-box">

            <h3>
              ❌ Cancel Order
            </h3>

            <p>
              Order #
              {
                cancelOrderId
              }
            </p>

            <label>
              Cancellation Reason
            </label>

            <textarea
              rows="5"
              placeholder="Enter the reason why this order is being cancelled..."
              value={
                cancelReason
              }
              onChange={(e) =>
                setCancelReason(
                  e.target.value
                )
              }
            />

            <p className="cancel-message-info">
              💬 This message will be saved
              with the order and shown to the
              customer.
            </p>

            <div className="cancel-message-buttons">

              <button
                className="confirm-cancel-button"
                onClick={
                  cancelOrderWithReason
                }
              >
                ❌ Confirm Cancellation
              </button>

              <button
                className="cancel-popup-button"
                onClick={() => {

                  setCancelOrderId(
                    null
                  );

                  setCancelReason(
                    ""
                  );

                }}
              >
                Go Back
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ManagePlantMarket;