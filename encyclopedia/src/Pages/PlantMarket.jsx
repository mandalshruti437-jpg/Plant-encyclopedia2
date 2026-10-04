import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/PlantMarket.css";

const PlantMarket = () => {
  const navigate = useNavigate();

  // ================= DEFAULT PRODUCTS =================

  const defaultProducts = [
    {
      id: 1,
      name: "Aloe Vera Plant",
      category: "Plants",
      price: 150,
      image:
        "https://media.istockphoto.com/id/171384767/photo/aloe-vera-plant-growth-in-farm.jpg?s=612x612&w=0&k=20&c=O5RciB1rLnEp99_9wPl-EB5pdeEmABe8Rt1oVTbLJ20=",
      description: "Healthy Aloe Vera plant for home and garden.",
      stock: 10,
    },
    {
      id: 2,
      name: "Money Plant",
      category: "Plants",
      price: 120,
      image:
        "https://m.media-amazon.com/images/I/61EcAiTP9QL._AC_UF1000,1000_QL80_.jpg",
      description: "Beautiful indoor Money Plant.",
      stock: 15,
    },
    {
      id: 3,
      name: "Rose Plant",
      category: "Plants",
      price: 180,
      image:
        "https://as2.ftcdn.net/v2/jpg/14/03/24/57/1000_F_1403245716_3u8HwB2WF7JPMFzp2nhEWTtiKtpb2l1b.jpg",
      description: "Healthy Rose plant for your garden.",
      stock: 12,
    },
    {
      id: 4,
      name: "Tomato Seeds",
      category: "Seeds",
      price: 50,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/349877149/IN/LB/OE/52351254/f1-hybrid-ratana-round-tomato-seed-500x500.png",
      description: "Organic tomato seeds for home gardening.",
      stock: 25,
    },
    {
      id: 5,
      name: "Sunflower Seeds",
      category: "Seeds",
      price: 70,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_08wGPeuTR8vQ2FUTz8wRs1qnZibvzd2Qk0AdXi6Vg&s=10",
      description: "Good quality sunflower seeds.",
      stock: 20,
    },
    {
      id: 6,
      name: "Chilli Seeds",
      category: "Seeds",
      price: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKheAk7FYqJi2VgG9sOwy-REUCY3TrlqxMjr2yYcjaw&s=10",
      description: "Fresh chilli seeds for cultivation.",
      stock: 30,
    },
    {
      id: 7,
      name: "Terracotta Pot",
      category: "Pots",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4FColVnDiSvJ6346gEyhkB7b02zkSPltYs3kmayw2Fg&s=10",
      description: "Natural terracotta pot for plants.",
      stock: 10,
    },
    {
      id: 8,
      name: "Ceramic Pot",
      category: "Pots",
      price: 250,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfFyUQ60uzd9y5PN268KOSdpLaHtV-cR4Zi4XbzcUqw&s",
      description: "Beautiful ceramic pot for indoor plants.",
      stock: 8,
    },
    {
      id: 9,
      name: "Small Garden Pot",
      category: "Pots",
      price: 90,
      image:
        "https://rukminim3.flixcart.com/image/480/480/xif0q/minutes_enrichment_original/-enriched-original-PCSH268WQGRCDZHP_0.jpg?q=90",
      description: "Small pot suitable for small plants.",
      stock: 15,
    },
    {
      id: 10,
      name: "Organic Mango",
      category: "Organic Fruits",
      price: 180,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6x50utJjNH-t-WE9X6mbrMT2mnIOkznxIUr8as1IhmA&s=10",
      description: "Fresh naturally grown organic mangoes.",
      stock: 20,
    },
    {
      id: 11,
      name: "Organic Apple",
      category: "Organic Fruits",
      price: 220,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq44hwQVxTgClA9E4YFOa6KCafoGWLUJmlCM0L5Wzjog&s=10",
      description: "Fresh organic apples.",
      stock: 18,
    },
    {
      id: 12,
      name: "Organic Banana",
      category: "Organic Fruits",
      price: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAl8b92tqkwJPY8-vsUE0A0VwsV6cKQUg0nDQuJ4-QGA&s",
      description: "Fresh organic bananas.",
      stock: 25,
    },
  ];

  // ================= STATES =================

  const [products, setProducts] = useState(defaultProducts);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // ================= PAYMENT STATES =================

  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlineMethod, setOnlineMethod] = useState("");

  const [upiId, setUpiId] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [bankName, setBankName] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // ================= SHOW / HIDE PAYMENT FIELDS =================

  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCvv, setShowCvv] = useState(false);
  const [showAccountNumber, setShowAccountNumber] = useState(false);

  // ================= DELIVERY DETAILS =================

  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryMobile, setDeliveryMobile] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [deliveryPincode, setDeliveryPincode] = useState("");

  // ================= ORDER STATES =================

  const [orderMessage, setOrderMessage] = useState("");

  const [paymentPopup, setPaymentPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [latestOrder, setLatestOrder] = useState(null);
  const [cartLoaded, setCartLoaded] = useState(false);
  const [selectedCancelItems, setSelectedCancelItems] = useState([]);

  // =========================================================
  // ADMIN CANCELLED ORDER CHECK
  // =========================================================

  const isAdminCancelledOrder = (order) => {
    if (!order) return false;

    return (
      order.cancelledBy === "admin" ||
      order.status === "Cancelled by Admin" ||
      order.status === "Admin Cancelled" ||
      !!order.adminCancellationDetails ||
      !!order.adminCancellationReason ||
      (order.status === "Cancelled" &&
        !!order.cancellationReason &&
        order.cancelledBy !== "user")
    );
  };

  // =========================================================
  // USER CANCELLED ORDER CHECK
  // =========================================================

  const isUserCancelledOrder = (order) => {
    if (!order) return false;

    return (
      order.status === "Cancelled" &&
      order.cancelledBy === "user"
    );
  };

  // =========================================================
  // ORDER CANCELLED CHECK
  // =========================================================

  const isOrderCancelled = (order) => {
    if (!order) return false;

    return (
      order.status === "Cancelled" ||
      isAdminCancelledOrder(order)
    );
  };

  // =========================================================
  // GET ADMIN CANCELLATION REASON
  // =========================================================

  const getAdminCancellationReason = (order) => {
    if (!order) return "";

    return (
      order.adminCancellationDetails?.reason ||
      order.adminCancellationDetails?.cancellationReason ||
      order.adminCancellationReason ||
      (order.cancelledBy === "admin"
        ? order.cancellationReason
        : "") ||
      ""
    );
  };

  // =========================================================
  // GET ADMIN CANCELLATION DATE
  // =========================================================

  const getAdminCancellationDate = (order) => {
    if (!order) return "";

    return (
      order.adminCancellationDetails?.cancellationDate ||
      order.adminCancellationDate ||
      ""
    );
  };

  // =========================================================
  // GET ADMIN CANCELLATION TIME
  // =========================================================

  const getAdminCancellationTime = (order) => {
    if (!order) return "";

    return (
      order.adminCancellationDetails?.cancellationTime ||
      order.adminCancellationTime ||
      ""
    );
  };

  // =========================================================
  // REMOVE ADMIN CANCELLED ORDER
  // =========================================================

  const removeAdminCancelledOrder = () => {
    if (!latestOrder) return;

    if (!isAdminCancelledOrder(latestOrder)) return;

    const existingOrders =
      JSON.parse(localStorage.getItem("plantOrders")) || [];

    const updatedOrders = existingOrders.filter(
      (order) => order.id !== latestOrder.id
    );

    localStorage.setItem(
      "plantOrders",
      JSON.stringify(updatedOrders)
    );

    window.dispatchEvent(new Event("plantOrdersUpdated"));

    setLatestOrder(null);
    setSelectedCancelItems([]);

    setOrderMessage(
      "✅ Cancelled order removed successfully."
    );

    showPaymentPopup(
      "success",
      "Cancelled Order Removed Successfully!"
    );
  };

  // =========================================================
  // LOAD ADMIN PRODUCTS
  // =========================================================

  useEffect(() => {
    const loadAdminProducts = () => {
      const savedProducts =
        JSON.parse(
          localStorage.getItem("plantMarketProducts")
        ) || [];

      if (
        Array.isArray(savedProducts) &&
        savedProducts.length > 0
      ) {
        const normalizedProducts = savedProducts.map(
          (product) => {
            const defaultProduct = defaultProducts.find(
              (item) => item.id === product.id
            );

            return {
              ...product,
              stock:
                product.stock !== undefined
                  ? Math.max(0, Number(product.stock))
                  : Number(defaultProduct?.stock || 0),
            };
          }
        );

        localStorage.setItem(
          "plantMarketProducts",
          JSON.stringify(normalizedProducts)
        );

        setProducts(normalizedProducts);
      } else {
        localStorage.setItem(
          "plantMarketProducts",
          JSON.stringify(defaultProducts)
        );

        setProducts(defaultProducts);
      }
    };

    loadAdminProducts();

    const handleStorageChange = (event) => {
      if (event.key === "plantMarketProducts") {
        loadAdminProducts();
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    const handleProductUpdate = () => {
      loadAdminProducts();
    };

    window.addEventListener(
      "plantMarketProductsUpdated",
      handleProductUpdate
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "plantMarketProductsUpdated",
        handleProductUpdate
      );
    };
  }, []);

  // =========================================================
  // LOAD CART + ACTIVE ORDER
  // =========================================================

  useEffect(() => {
    const loadCartAndOrder = () => {
      const savedCart =
        JSON.parse(
          localStorage.getItem("plantCart")
        ) || [];

      setCart(savedCart);

      const orders =
        JSON.parse(
          localStorage.getItem("plantOrders")
        ) || [];

      const validOrders = orders.filter((order) => {
        if (isAdminCancelledOrder(order)) {
          return true;
        }

        if (isUserCancelledOrder(order)) {
          return false;
        }

        if (
          order.status === "Cancelled" &&
          !order.adminCancellationDetails &&
          !order.adminCancellationReason &&
          !order.cancellationReason
        ) {
          return false;
        }

        return true;
      });

      const activeOrder =
        validOrders.length > 0
          ? validOrders[validOrders.length - 1]
          : null;

      if (activeOrder) {
        setLatestOrder(activeOrder);

        if (activeOrder.deliveryDetails) {
          setDeliveryName(
            activeOrder.deliveryDetails.name || ""
          );

          setDeliveryMobile(
            activeOrder.deliveryDetails.mobile || ""
          );

          setDeliveryAddress(
            activeOrder.deliveryDetails.address || ""
          );

          setDeliveryCity(
            activeOrder.deliveryDetails.city || ""
          );

          setDeliveryState(
            activeOrder.deliveryDetails.state || ""
          );

          setDeliveryPincode(
            activeOrder.deliveryDetails.pincode || ""
          );
        }
      } else {
        setLatestOrder(null);
      }

      setCartLoaded(true);
    };

    loadCartAndOrder();

    const handleStorageChange = (event) => {
      if (
        event.key === "plantOrders" ||
        event.key === "plantCart"
      ) {
        loadCartAndOrder();
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    const handleOrderUpdate = () => {
      loadCartAndOrder();
    };

    window.addEventListener(
      "plantOrdersUpdated",
      handleOrderUpdate
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );

      window.removeEventListener(
        "plantOrdersUpdated",
        handleOrderUpdate
      );
    };
  }, []);

  // ================= SAVE CART =================

  useEffect(() => {
    if (!cartLoaded) return;

    localStorage.setItem(
      "plantCart",
      JSON.stringify(cart)
    );
  }, [cart, cartLoaded]);

  // ================= CATEGORIES =================

  const categories = [
    "All",
    "Plants",
    "Seeds",
    "Pots",
    "Organic Fruits",
  ];

  // ================= FILTER PRODUCTS =================

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // =========================================================
  // GET AVAILABLE STOCK (LATEST FROM PRODUCTS)
  // =========================================================

  const getAvailableStock = (id) => {
    const found = products.find((item) => item.id === id);

    return Math.max(0, Number(found?.stock || 0));
  };

  // =========================================================
  // ADD TO CART
  // =========================================================

  const addToCart = (product) => {
    const latestProducts =
      JSON.parse(
        localStorage.getItem("plantMarketProducts")
      ) || products;

    const latestProduct =
      latestProducts.find(
        (item) => item.id === product.id
      ) || product;

    // ===== OUT OF STOCK - CANNOT ADD =====

    if (Number(latestProduct.stock || 0) <= 0) {
      return;
    }

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                ...latestProduct,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...latestProduct,
          quantity: 1,
        },
      ]);
    }

    setOrderMessage("");
  };

  // =========================================================
  // INCREASE QUANTITY
  // =========================================================

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

    setOrderMessage("");
  };

  // =========================================================
  // DECREASE QUANTITY
  // =========================================================

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    setOrderMessage("");
  };

  // =========================================================
  // REMOVE FROM CART
  // =========================================================

  const removeFromCart = (id) => {
    const isOrderedProduct =
      latestOrder &&
      !isOrderCancelled(latestOrder) &&
      latestOrder.products?.some(
        (orderedItem) => orderedItem.id === id
      );

    if (isOrderedProduct) {
      return;
    }

    setCart(
      cart.filter((item) => item.id !== id)
    );

    setOrderMessage("");
  };

  // =========================================================
  // SELECT ITEM FOR CANCELLATION
  // =========================================================

  const toggleCancelItem = (id) => {
    if (
      latestOrder &&
      isAdminCancelledOrder(latestOrder)
    ) {
      return;
    }

    setSelectedCancelItems((previous) => {
      if (previous.includes(id)) {
        return previous.filter(
          (itemId) => itemId !== id
        );
      }

      return [...previous, id];
    });
  };

  // =========================================================
  // PAYMENT POPUP
  // =========================================================

  const showPaymentPopup = (type, message) => {
    setPaymentPopup({
      show: true,
      type: type,
      message: message,
    });
  };

  const closePaymentPopup = () => {
    setPaymentPopup({
      show: false,
      type: "",
      message: "",
    });
  };

  // =========================================================
  // SELECTIVE CANCEL
  // =========================================================

  const cancelSelectedItems = () => {
    if (!latestOrder) return;

    if (isAdminCancelledOrder(latestOrder)) {
      showPaymentPopup(
        "failed",
        "This order has already been cancelled by the admin. You can remove it from your order history."
      );
      return;
    }

    if (
      !selectedCancelItems ||
      selectedCancelItems.length === 0
    ) {
      showPaymentPopup(
        "failed",
        "Please select at least one product to cancel."
      );
      return;
    }

    const selectedProducts =
      latestOrder.products.filter((item) =>
        selectedCancelItems.includes(item.id)
      );

    if (selectedProducts.length === 0) {
      return;
    }

    const selectedRefundAmount =
      selectedProducts.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      );

    const isOnlinePayment =
      latestOrder.paymentMethod !==
      "Cash on Delivery";

    const existingOrders =
      JSON.parse(
        localStorage.getItem("plantOrders")
      ) || [];

    const remainingProducts =
      latestOrder.products.filter(
        (item) =>
          !selectedCancelItems.includes(item.id)
      );

    const remainingQuantity =
      remainingProducts.reduce(
        (total, item) =>
          total + item.quantity,
        0
      );

    const remainingAmount =
      remainingProducts.reduce(
        (total, item) =>
          total +
          item.price * item.quantity,
        0
      );

    const allProductsCancelled =
      remainingProducts.length === 0;

    const updatedOrders =
      existingOrders.map((order) => {
        if (order.id !== latestOrder.id) {
          return order;
        }

        return {
          ...order,
          products: remainingProducts,
          totalQuantity: remainingQuantity,
          totalAmount: remainingAmount,
          status: allProductsCancelled
            ? "Cancelled"
            : "Partially Cancelled",
          cancelledBy: "user",
          cancellationDetails: {
            cancelledProducts: selectedProducts,
            cancelledAmount: selectedRefundAmount,
            refundStatus: isOnlinePayment
              ? "Refund Initiated"
              : "No Refund - Cash on Delivery",
            cancellationDate:
              new Date().toLocaleDateString("en-IN"),
            cancellationTime:
              new Date().toLocaleTimeString(
                "en-IN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              ),
          },
        };
      });

    // ================= RESTORE CANCELLED STOCK =================

    const currentProducts =
      JSON.parse(
        localStorage.getItem("plantMarketProducts")
      ) || products;

    const restoredProducts =
      currentProducts.map((product) => {
        const cancelledItem =
          selectedProducts.find(
            (item) => item.id === product.id
          );

        if (!cancelledItem) {
          return product;
        }

        return {
          ...product,
          stock:
            Number(product.stock || 0) +
            Number(cancelledItem.quantity || 0),
        };
      });

    localStorage.setItem(
      "plantMarketProducts",
      JSON.stringify(restoredProducts)
    );

    setProducts(restoredProducts);

    window.dispatchEvent(
      new Event("plantMarketProductsUpdated")
    );

    localStorage.setItem(
      "plantOrders",
      JSON.stringify(updatedOrders)
    );

    window.dispatchEvent(
      new Event("plantOrdersUpdated")
    );

    setCart([...cart]);

    localStorage.setItem(
      "plantCart",
      JSON.stringify(cart)
    );

    if (allProductsCancelled) {
      setLatestOrder(null);
    } else {
      setLatestOrder({
        ...latestOrder,
        products: remainingProducts,
        totalQuantity: remainingQuantity,
        totalAmount: remainingAmount,
        status: "Partially Cancelled",
        cancelledBy: "user",
        cancellationDetails: {
          cancelledProducts: selectedProducts,
          cancelledAmount: selectedRefundAmount,
          refundStatus: isOnlinePayment
            ? "Refund Initiated"
            : "No Refund - Cash on Delivery",
        },
      });
    }

    setSelectedCancelItems([]);

    if (isOnlinePayment) {
      setOrderMessage(
        `✅ Selected items cancelled successfully. Refund of ₹${selectedRefundAmount} initiated. It will be credited within 15-20 working days.`
      );

      showPaymentPopup(
        "success",
        `Order Items Cancelled Successfully!\n\nRefund Initiated: ₹${selectedRefundAmount}\n\nRefund will be credited to the original payment method within 15-20 working days.`
      );
    } else {
      setOrderMessage(
        "✅ Selected items cancelled successfully. No payment was made, so no refund is required."
      );

      showPaymentPopup(
        "success",
        "Order Items Cancelled Successfully!\n\nCash on Delivery was selected, so no payment was made and no refund is required."
      );
    }
  };

  // ================= TOTAL =================

  const totalQuantity = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // =========================================================
  // DELIVERY INPUT VALIDATION
  // =========================================================

  const handleNameChange = (value) => {
    const cleanedValue = value.replace(
      /[^a-zA-Z\s]/g,
      ""
    );

    setDeliveryName(cleanedValue);
  };

  const handleCityChange = (value) => {
    const cleanedValue = value.replace(
      /[^a-zA-Z\s]/g,
      ""
    );

    setDeliveryCity(cleanedValue);
  };

  const handleStateChange = (value) => {
    const cleanedValue = value.replace(
      /[^a-zA-Z\s]/g,
      ""
    );

    setDeliveryState(cleanedValue);
  };

  // =========================================================
  // VALIDATE DELIVERY DETAILS
  // =========================================================

  const validateDeliveryDetails = () => {
    const namePattern = /^[A-Za-z\s]+$/;
    const cityPattern = /^[A-Za-z\s]+$/;
    const statePattern = /^[A-Za-z\s]+$/;
    const mobilePattern = /^\d{10}$/;
    const pincodePattern = /^\d{6}$/;

    if (!deliveryName.trim()) {
      showPaymentPopup(
        "failed",
        "Please enter your full name."
      );
      return false;
    }

    if (!namePattern.test(deliveryName.trim())) {
      showPaymentPopup(
        "failed",
        "Name should contain letters only. Numbers are not allowed."
      );
      return false;
    }

    if (!deliveryMobile) {
      showPaymentPopup(
        "failed",
        "Please enter your mobile number."
      );
      return false;
    }

    if (!mobilePattern.test(deliveryMobile)) {
      showPaymentPopup(
        "failed",
        "Mobile number must contain exactly 10 digits."
      );
      return false;
    }

    if (!deliveryAddress.trim()) {
      showPaymentPopup(
        "failed",
        "Please enter your full address."
      );
      return false;
    }

    if (!deliveryCity.trim()) {
      showPaymentPopup(
        "failed",
        "Please enter your city."
      );
      return false;
    }

    if (!cityPattern.test(deliveryCity.trim())) {
      showPaymentPopup(
        "failed",
        "City should contain letters only. Numbers are not allowed."
      );
      return false;
    }

    if (!deliveryState.trim()) {
      showPaymentPopup(
        "failed",
        "Please enter your state."
      );
      return false;
    }

    if (!statePattern.test(deliveryState.trim())) {
      showPaymentPopup(
        "failed",
        "State should contain letters only. Numbers are not allowed."
      );
      return false;
    }

    if (!deliveryPincode) {
      showPaymentPopup(
        "failed",
        "Please enter your pincode."
      );
      return false;
    }

    if (!pincodePattern.test(deliveryPincode)) {
      showPaymentPopup(
        "failed",
        "Pincode must contain exactly 6 digits."
      );
      return false;
    }

    return true;
  };

  // =========================================================
  // PAYMENT VALIDATION
  // =========================================================

  const validatePayment = () => {
    if (paymentMethod === "cash") {
      return true;
    }

    if (paymentMethod !== "online") {
      showPaymentPopup(
        "failed",
        "Payment Failed!\nPlease select a payment method."
      );
      return false;
    }

    if (!onlineMethod) {
      showPaymentPopup(
        "failed",
        "Payment Failed!\nPlease select an online payment method."
      );
      return false;
    }

    if (onlineMethod === "UPI") {
      if (!upiId.trim()) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nUPI ID is required."
        );
        return false;
      }

      const upiPattern =
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;

      if (!upiPattern.test(upiId.trim())) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nPlease enter a valid UPI ID.\nExample: name@upi"
        );
        return false;
      }

      return true;
    }

    if (
      onlineMethod === "Debit Card" ||
      onlineMethod === "Credit Card"
    ) {
      const cardHolderPattern =
        /^[A-Za-z\s]+$/;

      const cardNumberPattern =
        /^\d{16}$/;

      const expiryPattern =
        /^(0[1-9]|1[0-2])\/\d{2}$/;

      const cvvPattern = /^\d{3}$/;

      if (!cardNumber) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCard number is required."
        );
        return false;
      }

      if (!cardName.trim()) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCard holder name is required."
        );
        return false;
      }

      if (!expiryDate) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nExpiry date is required."
        );
        return false;
      }

      if (!cvv) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCVV is required."
        );
        return false;
      }

      if (!cardNumberPattern.test(cardNumber)) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCard number must contain exactly 16 digits."
        );
        return false;
      }

      if (!cardHolderPattern.test(cardName.trim())) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCard holder name should contain letters only."
        );
        return false;
      }

      if (!expiryPattern.test(expiryDate)) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nPlease enter a valid expiry date in MM/YY format."
        );
        return false;
      }

      if (!cvvPattern.test(cvv)) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nCVV must contain exactly 3 digits."
        );
        return false;
      }

      return true;
    }

    if (onlineMethod === "Net Banking") {
      const accountHolderPattern =
        /^[A-Za-z\s]+$/;

      const accountNumberPattern =
        /^\d+$/;

      if (!bankName) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nPlease select your bank."
        );
        return false;
      }

      if (!accountHolderName.trim()) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nAccount holder name is required."
        );
        return false;
      }

      if (!accountNumber) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nAccount number is required."
        );
        return false;
      }

      if (
        !accountHolderPattern.test(
          accountHolderName.trim()
        )
      ) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nAccount holder name should contain letters only."
        );
        return false;
      }

      if (!accountNumberPattern.test(accountNumber)) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nAccount number should contain numbers only."
        );
        return false;
      }

      if (accountNumber.length < 8) {
        showPaymentPopup(
          "failed",
          "Payment Failed!\nAccount number must contain at least 8 digits."
        );
        return false;
      }

      return true;
    }

    return false;
  };

  // =========================================================
  // PLACE ORDER
  // =========================================================

  const placeOrder = () => {
    if (cart.length === 0) {
      showPaymentPopup(
        "failed",
        "Payment Failed!\nYour cart is empty."
      );
      return;
    }

    // =====================================================
    // STOCK IS CHECKED BEFORE PLACING THE ORDER
    // USER CAN SEE AVAILABLE STOCK / OUT OF STOCK
    // ADMIN MANAGES STOCK
    // =====================================================

    const latestProducts =
      JSON.parse(
        localStorage.getItem("plantMarketProducts")
      ) || products;

    for (const cartItem of cart) {
      const latestProduct =
        latestProducts.find(
          (product) =>
            product.id === cartItem.id
        );

      const availableStock = Math.max(
        0,
        Number(latestProduct?.stock || 0)
      );

      if (availableStock <= 0) {
        showPaymentPopup(
          "failed",
          `Payment Failed!\n${cartItem.name} is currently out of stock. Please remove it from the cart.`
        );
        return;
      }

      if (cartItem.quantity > availableStock) {
        showPaymentPopup(
          "failed",
          `Payment Failed!\nOnly ${availableStock} unit(s) of ${cartItem.name} available. Please reduce the quantity.`
        );
        return;
      }
    }

    const deliveryValid =
      validateDeliveryDetails();

    if (!deliveryValid) return;

    if (!paymentMethod) {
      showPaymentPopup(
        "failed",
        "Payment Failed!\nPlease select a payment method."
      );
      return;
    }

    const paymentValid =
      validatePayment();

    if (!paymentValid) return;

    // ================= USER DETAILS =================

    const loggedInUser =
      JSON.parse(
        localStorage.getItem("loggedInUser")
      ) || {};

    const userName =
      loggedInUser?.name ||
      deliveryName ||
      "Unknown User";

    const userEmail =
      loggedInUser?.email || "";

    // ================= DATE =================

    const orderDateObject = new Date();

    const orderDate =
      orderDateObject.toLocaleDateString(
        "en-IN"
      );

    const orderTime =
      orderDateObject.toLocaleTimeString(
        "en-IN",
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      );

    // ================= DELIVERY DATE =================

    const deliveryDateObject =
      new Date();

    deliveryDateObject.setDate(
      deliveryDateObject.getDate() + 5
    );

    const deliveryDate =
      deliveryDateObject.toLocaleDateString(
        "en-IN"
      );

    const deliveryTime =
      "10:00 AM - 6:00 PM";

    // ================= PAYMENT STATUS =================

    const paymentStatus =
      paymentMethod === "cash"
        ? "Cash on Delivery"
        : "Payment Successful";

    const resolvedPaymentMethod =
      paymentMethod === "cash"
        ? "Cash on Delivery"
        : onlineMethod;

    // ================= DELIVERY DETAILS =================

    const deliveryDetails = {
      name: deliveryName.trim(),
      mobile: deliveryMobile,
      address: deliveryAddress.trim(),
      city: deliveryCity.trim(),
      state: deliveryState.trim(),
      pincode: deliveryPincode,
    };

    // ================= EXISTING ORDERS =================

    const existingOrders =
      JSON.parse(
        localStorage.getItem("plantOrders")
      ) || [];

    // ================= ACTIVE ORDER =================

    const hasActiveOrder =
      latestOrder &&
      !isOrderCancelled(latestOrder) &&
      latestOrder.status !==
        "Partially Cancelled";

    let newOrder;
    let updatedOrders;

    // =====================================================
    // MERGE INTO EXISTING ACTIVE ORDER
    // =====================================================

    if (hasActiveOrder) {
      const mergedProductsMap =
        new Map();

      latestOrder.products.forEach(
        (item) => {
          mergedProductsMap.set(
            item.id,
            {
              ...item,
            }
          );
        }
      );

      cart.forEach((item) => {
        if (
          mergedProductsMap.has(item.id)
        ) {
          const existingItem =
            mergedProductsMap.get(
              item.id
            );

          mergedProductsMap.set(
            item.id,
            {
              ...existingItem,
              quantity:
                existingItem.quantity +
                item.quantity,
            }
          );
        } else {
          mergedProductsMap.set(
            item.id,
            {
              ...item,
            }
          );
        }
      });

      const mergedProducts =
        Array.from(
          mergedProductsMap.values()
        );

      const mergedQuantity =
        mergedProducts.reduce(
          (total, item) =>
            total + item.quantity,
          0
        );

      const mergedAmount =
        mergedProducts.reduce(
          (total, item) =>
            total +
            item.price * item.quantity,
          0
        );

      newOrder = {
        ...latestOrder,
        userName: userName,
        userEmail: userEmail,
        deliveryDetails: deliveryDetails,
        products: mergedProducts,
        totalQuantity: mergedQuantity,
        totalAmount: mergedAmount,
        paymentMethod: resolvedPaymentMethod,
        paymentStatus: paymentStatus,
        orderDate: orderDate,
        orderTime: orderTime,
        expectedDeliveryDate: deliveryDate,
        expectedDeliveryTime: deliveryTime,
        status: "Order Placed",
        cancelledBy: undefined,
        adminCancellationDetails: undefined,
        adminCancellationReason: undefined,
      };

      updatedOrders =
        existingOrders.map(
          (order) =>
            order.id === latestOrder.id
              ? newOrder
              : order
        );
    }

    // =====================================================
    // CREATE FRESH ORDER
    // =====================================================

    else {
      newOrder = {
        id: Date.now(),
        userName: userName,
        userEmail: userEmail,
        deliveryDetails: deliveryDetails,
        products: cart,
        totalQuantity: totalQuantity,
        totalAmount: totalPrice,
        paymentMethod: resolvedPaymentMethod,
        paymentStatus: paymentStatus,
        orderDate: orderDate,
        orderTime: orderTime,
        expectedDeliveryDate: deliveryDate,
        expectedDeliveryTime: deliveryTime,
        status: "Order Placed",
        cancelledBy: null,
      };

      updatedOrders = [
        ...existingOrders,
        newOrder,
      ];
    }

    // ================= UPDATE STOCK AFTER ORDER =================

    const updatedProducts =
      latestProducts.map(
        (product) => {
          const orderedItems =
            cart.filter(
              (item) =>
                item.id === product.id
            );

          const orderedQuantity =
            orderedItems.reduce(
              (total, item) =>
                total +
                Number(
                  item.quantity || 0
                ),
              0
            );

          if (orderedQuantity === 0) {
            return product;
          }

          return {
            ...product,
            stock: Math.max(
              0,
              Number(
                product.stock || 0
              ) - orderedQuantity
            ),
          };
        }
      );

    localStorage.setItem(
      "plantMarketProducts",
      JSON.stringify(updatedProducts)
    );

    setProducts(updatedProducts);

    window.dispatchEvent(
      new Event(
        "plantMarketProductsUpdated"
      )
    );

    // ================= SAVE ORDER =================

    localStorage.setItem(
      "plantOrders",
      JSON.stringify(updatedOrders)
    );

    window.dispatchEvent(
      new Event("plantOrdersUpdated")
    );

    // ================= UPDATE LATEST ORDER =================

    setLatestOrder(newOrder);

    // ================= SUCCESS MESSAGE =================

    setOrderMessage(
      `✅ Order placed successfully!
Expected Delivery: ${deliveryDate}
Delivery Time: ${deliveryTime}`
    );

    showPaymentPopup(
      "success",
      `Payment Successful!

Order placed successfully.

Order ID: ${newOrder.id}

Delivery Date: ${deliveryDate}
Delivery Time: ${deliveryTime}`
    );

    // ================= RESET PAYMENT FIELDS =================

    setPaymentMethod("");
    setOnlineMethod("");

    setUpiId("");

    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvv("");

    setBankName("");
    setAccountHolderName("");
    setAccountNumber("");

    setShowCardNumber(false);
    setShowCvv(false);
    setShowAccountNumber(false);

    // ================= CLEAR CART =================

    setCart([]);

    localStorage.setItem(
      "plantCart",
      JSON.stringify([])
    );

    setSelectedCancelItems([]);
  };

  // ================= RETURN =================

  return (
    <div className="plant-market">

      {/* ================= PAYMENT POPUP ================= */}

      {paymentPopup.show && (
        <div className="payment-popup-overlay">
          <div
            className={
              paymentPopup.type === "success"
                ? "payment-popup success-popup"
                : "payment-popup failed-popup"
            }
          >
            <div className="popup-icon">
              {paymentPopup.type === "success"
                ? "✅"
                : "❌"}
            </div>

            <h2>
              {paymentPopup.type === "success"
                ? "Payment Successful"
                : "Payment Failed"}
            </h2>

            <p>
              {paymentPopup.message}
            </p>

            <button
              className="popup-close-button"
              onClick={closePaymentPopup}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}

      <div className="market-header">
        <h1>🌿 Plant Market</h1>

        <p>
          Buy plants, seeds, pots and
          organic fruits
        </p>
      </div>

      {/* ================= SEARCH ================= */}

      <div className="market-search">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* ================= CATEGORIES ================= */}

      <div className="market-categories">
        {categories.map(
          (category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* ================= PRODUCTS ================= */}

      <div className="product-container">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(
            (product) => {
              const cartProduct =
                cart.find(
                  (item) =>
                    item.id === product.id
                );

              const productStock = Math.max(
                0,
                Number(product.stock || 0)
              );

              const isOutOfStock =
                productStock <= 0;

              return (
                <div
                  className="product-card"
                  key={product.id}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={
                      isOutOfStock
                        ? { opacity: 0.5 }
                        : undefined
                    }
                  />

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h2>
                      {product.name}
                    </h2>

                    <p>
                      {product.description}
                    </p>

                    <h3>
                      ₹{product.price}
                    </h3>

                    {/* ================= STOCK STATUS ================= */}

                    {isOutOfStock ? (
                      <p
                        className="out-of-stock-message"
                        style={{
                          color: "#c62828",
                          fontWeight: "bold",
                          margin: "6px 0",
                        }}
                      >
                        ❌ Out of Stock
                      </p>
                    ) : (
                      <p
                        className="available-stock-message"
                        style={{
                          color: "#2e7d32",
                          fontWeight: "bold",
                          margin: "6px 0",
                        }}
                      >
                        📦 Available Stock:{" "}
                        {productStock}
                      </p>
                    )}

                    <button
                      className="add-cart-button"
                      disabled={isOutOfStock}
                      style={
                        isOutOfStock
                          ? {
                              opacity: 0.6,
                              cursor:
                                "not-allowed",
                            }
                          : undefined
                      }
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      {isOutOfStock
                        ? "🚫 Out of Stock"
                        : "🛒 Add to Cart"}
                    </button>

                    {cartProduct && (
                      <p className="added-message">
                        ✓ Added to cart
                      </p>
                    )}
                  </div>
                </div>
              );
            }
          )
        )}
      </div>

      {/* ================= SHOPPING DASHBOARD ================= */}

      <div className="shopping-dashboard">
        <h2>
          🛒 Shopping Dashboard
        </h2>

        <p>
          Total Products:{" "}
          {cart.length}
        </p>

        <p>
          Total Quantity:{" "}
          {totalQuantity}
        </p>

        {/* ================= CART ================= */}

        {cart.length === 0 ? (
          <div className="empty-cart">

            {/* ================= ADMIN CANCELLED ORDER ================= */}

            {latestOrder &&
            isAdminCancelledOrder(
              latestOrder
            ) ? (
              <div
                style={{
                  width: "100%",
                  padding: "25px",
                  borderRadius: "12px",
                  background: "#fff3f3",
                  border: "1px solid #f1b5b5",
                  textAlign: "left",
                  boxSizing: "border-box",
                }}
              >
                <h2
                  style={{
                    color: "#c62828",
                    marginBottom: "15px",
                  }}
                >
                  ❌ Order Cancelled by Admin
                </h2>

                <p>
                  <strong>
                    Order ID:
                  </strong>{" "}
                  {latestOrder.id}
                </p>

                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  Cancelled by Admin
                </p>

                <p>
                  <strong>
                    Cancellation Reason:
                  </strong>{" "}
                  {getAdminCancellationReason(
                    latestOrder
                  ) ||
                    "Admin cancelled this order."}
                </p>

                {getAdminCancellationDate(
                  latestOrder
                ) && (
                  <p>
                    <strong>
                      Cancellation Date:
                    </strong>{" "}
                    {getAdminCancellationDate(
                      latestOrder
                    )}
                  </p>
                )}

                {getAdminCancellationTime(
                  latestOrder
                ) && (
                  <p>
                    <strong>
                      Cancellation Time:
                    </strong>{" "}
                    {getAdminCancellationTime(
                      latestOrder
                    )}
                  </p>
                )}

                {latestOrder
                  .adminCancellationDetails
                  ?.refundStatus && (
                  <p>
                    <strong>
                      Refund Status:
                    </strong>{" "}
                    {
                      latestOrder
                        .adminCancellationDetails
                        .refundStatus
                    }
                  </p>
                )}

                <button
                  onClick={
                    removeAdminCancelledOrder
                  }
                  style={{
                    marginTop: "15px",
                    padding: "12px 20px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#c62828",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  🗑️ Remove Cancelled Order
                </button>

                <p
                  style={{
                    marginTop: "12px",
                    marginBottom: "0",
                    color: "#555",
                    fontSize: "14px",
                  }}
                >
                  This order will remain
                  visible until you remove
                  it.
                </p>
              </div>
            ) : (
              <>
                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add a product from Plant
                  Market.
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="dashboard-products">
            {cart.map((item) => {
              const cartItemStock =
                getAvailableStock(item.id);

              return (
                <div
                  className="dashboard-card"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="dashboard-details">
                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Price: ₹
                      {item.price}
                    </p>

                    {/* ================= STOCK STATUS IN CART ================= */}

                    {cartItemStock <= 0 ? (
                      <p
                        style={{
                          color: "#c62828",
                          fontWeight: "bold",
                        }}
                      >
                        ❌ Out of Stock
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#2e7d32",
                          fontWeight: "bold",
                        }}
                      >
                        📦 Available Stock:{" "}
                        {cartItemStock}
                      </p>
                    )}

                    <p className="cart-stock">
                      🛒 In Cart:{" "}
                      <strong>
                        {item.quantity}
                      </strong>
                    </p>

                    <div className="quantity-box">
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                      >
                        +
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                      >
                        −
                      </button>
                    </div>

                    <p>
                      Total: ₹
                      {item.price *
                        item.quantity}
                    </p>

                    {latestOrder &&
                    !isOrderCancelled(
                      latestOrder
                    ) &&
                    latestOrder.products?.some(
                      (orderedItem) =>
                        orderedItem.id ===
                        item.id
                    ) ? (
                      <label
                        className="cancel-item-option"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedCancelItems.includes(
                            item.id
                          )}
                          onChange={() =>
                            toggleCancelItem(
                              item.id
                            )
                          }
                        />

                        <span>
                          ❌ Select to Cancel
                        </span>
                      </label>
                    ) : (
                      <button
                        className="remove-button"
                        onClick={() =>
                          removeFromCart(
                            item.id
                          )
                        }
                      >
                        🗑️ Remove
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================
             ADMIN CANCEL MESSAGE
        ===================================================== */}

        {cart.length > 0 &&
          latestOrder &&
          isAdminCancelledOrder(
            latestOrder
          ) && (
            <div
              className="admin-cancellation-update"
              style={{
                marginTop: "25px",
                padding: "20px",
                borderRadius: "12px",
                background: "#fff3f3",
                border: "1px solid #f1b5b5",
              }}
            >
              <h3
                style={{
                  color: "#c62828",
                }}
              >
                ❌ Order Cancelled by Admin
              </h3>

              <p>
                <strong>
                  Order ID:
                </strong>{" "}
                {latestOrder.id}
              </p>

              <p>
                <strong>
                  Cancellation Reason:
                </strong>{" "}
                {getAdminCancellationReason(
                  latestOrder
                ) ||
                  "Admin cancelled this order."}
              </p>

              {getAdminCancellationDate(
                latestOrder
              ) && (
                <p>
                  <strong>
                    Cancellation Date:
                  </strong>{" "}
                  {getAdminCancellationDate(
                    latestOrder
                  )}
                </p>
              )}

              {getAdminCancellationTime(
                latestOrder
              ) && (
                <p>
                  <strong>
                    Cancellation Time:
                  </strong>{" "}
                  {getAdminCancellationTime(
                    latestOrder
                  )}
                </p>
              )}

              <button
                onClick={
                  removeAdminCancelledOrder
                }
                style={{
                  marginTop: "15px",
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#c62828",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🗑️ Remove Cancelled Order
              </button>
            </div>
          )}

        {/* ================= DASHBOARD TOTAL ================= */}

        {cart.length > 0 && (
          <div className="dashboard-total">
            <h3>
              Total Quantity:{" "}
              {totalQuantity}
            </h3>

            <h2>
              Total Amount: ₹
              {totalPrice}
            </h2>
          </div>
        )}

        {/* ================= LATEST ORDER ================= */}

        {latestOrder && (
          <div className="latest-order">
            <h2>
              📦 Latest Order
            </h2>

            <div className="order-info">
              <p>
                <strong>
                  Order ID:
                </strong>{" "}
                {latestOrder.id}
              </p>

              <p>
                <strong>
                  User Name:
                </strong>{" "}
                {latestOrder.userName ||
                  latestOrder.deliveryDetails?.name ||
                  "Unknown User"}
              </p>

              {latestOrder.userEmail && (
                <p>
                  <strong>
                    Email:
                  </strong>{" "}
                  {latestOrder.userEmail}
                </p>
              )}

              <p>
                <strong>
                  Order Date:
                </strong>{" "}
                {latestOrder.orderDate}
              </p>

              <p>
                <strong>
                  Order Time:
                </strong>{" "}
                {latestOrder.orderTime}
              </p>

              <p>
                <strong>
                  Payment Method:
                </strong>{" "}
                {latestOrder.paymentMethod}
              </p>

              <p>
                <strong>
                  Payment Status:
                </strong>{" "}
                {latestOrder.paymentStatus}
              </p>

              <p>
                <strong>
                  Total Quantity:
                </strong>{" "}
                {latestOrder.totalQuantity}
              </p>

              <p>
                <strong>
                  Total Amount:
                </strong>{" "}
                ₹
                {latestOrder.totalAmount}
              </p>

              <hr />

              {/* ================= ADMIN CANCELLATION ================= */}

              {isAdminCancelledOrder(
                latestOrder
              ) && (
                <div
                  className="admin-cancellation-update"
                  style={{
                    marginTop: "15px",
                    marginBottom: "20px",
                    padding: "18px",
                    borderRadius: "10px",
                    background: "#fff3f3",
                    border: "1px solid #f1b5b5",
                  }}
                >
                  <h3
                    style={{
                      color: "#c62828",
                      marginBottom: "12px",
                    }}
                  >
                    ❌ Order Cancelled by Admin
                  </h3>

                  <p>
                    <strong>
                      Cancellation Reason:
                    </strong>{" "}
                    {getAdminCancellationReason(
                      latestOrder
                    ) ||
                      "No reason provided"}
                  </p>

                  {getAdminCancellationDate(
                    latestOrder
                  ) && (
                    <p>
                      <strong>
                        Cancellation Date:
                      </strong>{" "}
                      {getAdminCancellationDate(
                        latestOrder
                      )}
                    </p>
                  )}

                  {getAdminCancellationTime(
                    latestOrder
                  ) && (
                    <p>
                      <strong>
                        Cancellation Time:
                      </strong>{" "}
                      {getAdminCancellationTime(
                        latestOrder
                      )}
                    </p>
                  )}

                  {latestOrder
                    .adminCancellationDetails
                    ?.refundStatus && (
                    <p>
                      <strong>
                        Refund Status:
                      </strong>{" "}
                      {
                        latestOrder
                          .adminCancellationDetails
                          .refundStatus
                      }
                    </p>
                  )}

                  <button
                    onClick={
                      removeAdminCancelledOrder
                    }
                    style={{
                      marginTop: "15px",
                      padding: "12px 20px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#c62828",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    🗑️ Remove Cancelled Order
                  </button>

                  <p
                    style={{
                      marginTop: "12px",
                      marginBottom: "0",
                      color: "#555",
                      fontSize: "14px",
                    }}
                  >
                    This cancelled order
                    will stay visible
                    until you remove it.
                  </p>
                </div>
              )}

              {/* ================= DELIVERY INFORMATION ================= */}

              <h3>
                📍 Delivery Information
              </h3>

              {latestOrder.deliveryDetails && (
                <div className="order-delivery-details">
                  <p>
                    <strong>Name:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.name
                    }
                  </p>

                  <p>
                    <strong>Mobile:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.mobile
                    }
                  </p>

                  <p>
                    <strong>Address:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.address
                    }
                  </p>

                  <p>
                    <strong>City:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.city
                    }
                  </p>

                  <p>
                    <strong>State:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.state
                    }
                  </p>

                  <p>
                    <strong>Pincode:</strong>{" "}
                    {
                      latestOrder
                        .deliveryDetails.pincode
                    }
                  </p>
                </div>
              )}

              <h3>
                🚚 Delivery Information
              </h3>

              <p>
                <strong>
                  Expected Delivery Date:
                </strong>{" "}
                {
                  latestOrder.expectedDeliveryDate
                }
              </p>

              <p>
                <strong>
                  Delivery Time:
                </strong>{" "}
                {
                  latestOrder.expectedDeliveryTime
                }
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {latestOrder.status}
              </p>

              {/* ================= ADMIN SHIPPING UPDATE ================= */}

              {latestOrder.shippingStatus && (
                <div
                  className="user-shipping-update"
                  style={{
                    marginTop: "15px",
                    padding: "15px",
                    borderRadius: "10px",
                    background: "#eef8ee",
                    border: "1px solid #c8e6c9",
                  }}
                >
                  <h3>
                    🚚 Shipping Update
                  </h3>

                  <p>
                    <strong>
                      Shipping Status:
                    </strong>{" "}
                    {
                      latestOrder.shippingStatus
                    }
                  </p>

                  {latestOrder.shippingMessage && (
                    <p>
                      <strong>
                        Message:
                      </strong>{" "}
                      {
                        latestOrder.shippingMessage
                      }
                    </p>
                  )}

                  {latestOrder.shippingUpdateDate && (
                    <p>
                      <strong>
                        Update Date:
                      </strong>{" "}
                      {
                        latestOrder.shippingUpdateDate
                      }
                    </p>
                  )}

                  {latestOrder.shippingUpdateTime && (
                    <p>
                      <strong>
                        Update Time:
                      </strong>{" "}
                      {
                        latestOrder.shippingUpdateTime
                      }
                    </p>
                  )}
                </div>
              )}

              {/* ================= ORDERED PRODUCTS ================= */}

              {latestOrder.products &&
                latestOrder.products.length >
                  0 && (
                  <div
                    className="ordered-products-section"
                    style={{
                      marginTop: "20px",
                      padding: "15px",
                      borderRadius: "10px",
                      background: "#f7faf7",
                    }}
                  >
                    <h3>
                      🛍️ Ordered Products
                    </h3>

                    {latestOrder.products.map(
                      (item) => (
                        <div
                          key={item.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "10px 0",
                            borderBottom:
                              "1px solid #ddd",
                          }}
                        >
                          {!isOrderCancelled(
                            latestOrder
                          ) && (
                            <input
                              type="checkbox"
                              checked={selectedCancelItems.includes(
                                item.id
                              )}
                              onChange={() =>
                                toggleCancelItem(
                                  item.id
                                )
                              }
                            />
                          )}

                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "55px",
                              height: "55px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />

                          <div
                            style={{
                              flex: 1,
                            }}
                          >
                            <strong>
                              {item.name}
                            </strong>

                            <p
                              style={{
                                margin: "4px 0",
                              }}
                            >
                              Quantity:{" "}
                              {item.quantity}
                            </p>

                            <p
                              style={{
                                margin: "4px 0",
                              }}
                            >
                              Amount: ₹
                              {item.price *
                                item.quantity}
                            </p>
                          </div>
                        </div>
                      )
                    )}

                    {!isOrderCancelled(
                      latestOrder
                    ) && (
                      <p
                        style={{
                          marginTop: "12px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        Select the
                        product(s)
                        you want to
                        cancel.
                      </p>
                    )}
                  </div>
                )}

              {/* ================= TRACK DELIVERY ================= */}

              {!isOrderCancelled(
                latestOrder
              ) && (
                <button
                  className="tracking-button"
                  onClick={() =>
                    navigate("/tracking")
                  }
                >
                  🚚 Track Delivery
                </button>
              )}

              {/* ================= SELECTIVE CANCEL ================= */}

              {!isOrderCancelled(
                latestOrder
              ) && (
                <>
                  <button
                    className="cancel-order-button"
                    onClick={
                      cancelSelectedItems
                    }
                  >
                    ❌ Cancel Selected
                    Items
                  </button>

                  {selectedCancelItems.length >
                    0 && (
                    <p
                      style={{
                        marginTop: "10px",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#2e7d32",
                      }}
                    >
                      {
                        selectedCancelItems.length
                      }{" "}
                      product(s)
                      selected for
                      cancellation
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* =====================================================
             DELIVERY DETAILS FORM
        ===================================================== */}

        {cart.length > 0 && (
          <div className="delivery-details-section">
            <h2>
              📍 Delivery Details
            </h2>

            <p>
              Enter your delivery
              address before placing
              the order.
            </p>

            <div className="delivery-form">
              {/* FULL NAME */}

              <div className="delivery-form-group">
                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={deliveryName}
                  onChange={(e) =>
                    handleNameChange(
                      e.target.value
                    )
                  }
                />
              </div>

              {/* MOBILE */}

              <div className="delivery-form-group">
                <label>
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  maxLength="10"
                  inputMode="numeric"
                  value={deliveryMobile}
                  onChange={(e) =>
                    setDeliveryMobile(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />
              </div>

              {/* ADDRESS */}

              <div className="delivery-form-group full-width">
                <label>
                  Full Address *
                </label>

                <textarea
                  placeholder="House/Flat No., Building, Street, Area"
                  rows="4"
                  value={deliveryAddress}
                  onChange={(e) =>
                    setDeliveryAddress(
                      e.target.value
                    )
                  }
                />
              </div>

              {/* CITY */}

              <div className="delivery-form-group">
                <label>
                  City *
                </label>

                <input
                  type="text"
                  placeholder="Enter city"
                  value={deliveryCity}
                  onChange={(e) =>
                    handleCityChange(
                      e.target.value
                    )
                  }
                />
              </div>

              {/* STATE */}

              <div className="delivery-form-group">
                <label>
                  State *
                </label>

                <input
                  type="text"
                  placeholder="Enter state"
                  value={deliveryState}
                  onChange={(e) =>
                    handleStateChange(
                      e.target.value
                    )
                  }
                />
              </div>

              {/* PINCODE */}

              <div className="delivery-form-group">
                <label>
                  Pincode *
                </label>

                <input
                  type="text"
                  placeholder="Enter 6 digit pincode"
                  maxLength="6"
                  inputMode="numeric"
                  value={deliveryPincode}
                  onChange={(e) =>
                    setDeliveryPincode(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
             PAYMENT
        ===================================================== */}

        {cart.length > 0 && (
          <div className="payment-section">
            <h2>
              💳 Payment
            </h2>

            <p className="payment-total">
              Amount to Pay:{" "}
              <strong>
                ₹{totalPrice}
              </strong>
            </p>

            {/* ================= PAYMENT OPTIONS ================= */}

            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={
                    paymentMethod ===
                    "online"
                  }
                  onChange={(e) => {
                    setPaymentMethod(
                      e.target.value
                    );
                    setOnlineMethod("");
                  }}
                />

                💳 Online Payment
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={
                    paymentMethod ===
                    "cash"
                  }
                  onChange={(e) => {
                    setPaymentMethod(
                      e.target.value
                    );
                    setOnlineMethod("");
                  }}
                />

                💵 Cash on Delivery
              </label>
            </div>

            {/* ================= ONLINE PAYMENT ================= */}

            {paymentMethod ===
              "online" && (
              <div className="online-payment">
                <h3>
                  Select Online
                  Payment
                </h3>

                {/* UPI */}

                <label>
                  <input
                    type="radio"
                    name="onlineMethod"
                    value="UPI"
                    checked={
                      onlineMethod ===
                      "UPI"
                    }
                    onChange={(e) =>
                      setOnlineMethod(
                        e.target.value
                      )
                    }
                  />

                  📱 UPI
                </label>

                {/* DEBIT CARD */}

                <label>
                  <input
                    type="radio"
                    name="onlineMethod"
                    value="Debit Card"
                    checked={
                      onlineMethod ===
                      "Debit Card"
                    }
                    onChange={(e) =>
                      setOnlineMethod(
                        e.target.value
                      )
                    }
                  />

                  💳 Debit Card
                </label>

                {/* CREDIT CARD */}

                <label>
                  <input
                    type="radio"
                    name="onlineMethod"
                    value="Credit Card"
                    checked={
                      onlineMethod ===
                      "Credit Card"
                    }
                    onChange={(e) =>
                      setOnlineMethod(
                        e.target.value
                      )
                    }
                  />

                  💳 Credit Card
                </label>

                {/* NET BANKING */}

                <label>
                  <input
                    type="radio"
                    name="onlineMethod"
                    value="Net Banking"
                    checked={
                      onlineMethod ===
                      "Net Banking"
                    }
                    onChange={(e) =>
                      setOnlineMethod(
                        e.target.value
                      )
                    }
                  />

                  🏦 Net Banking
                </label>

                {/* ================= UPI DETAILS ================= */}

                {onlineMethod ===
                  "UPI" && (
                  <div className="payment-details">
                    <h3>
                      Enter UPI
                      Details
                    </h3>

                    <input
                      type="text"
                      name="upi-id-field"
                      placeholder="Enter UPI ID (example@upi)"
                      autoComplete="off"
                      value={upiId}
                      onChange={(e) =>
                        setUpiId(
                          e.target.value
                        )
                      }
                    />

                    <p>
                      Valid UPI ID
                      is required
                    </p>
                  </div>
                )}

                {/* ================= CARD DETAILS ================= */}

                {(onlineMethod ===
                  "Debit Card" ||
                  onlineMethod ===
                    "Credit Card") && (
                  <div className="card-details">
                    <h3>
                      Enter Card
                      Details
                    </h3>

                    <div className="password-input-wrapper">
                      <input
                        type={
                          showCardNumber
                            ? "text"
                            : "password"
                        }
                        name="pm-card-num"
                        placeholder="Card Number"
                        autoComplete="off"
                        inputMode="numeric"
                        maxLength="16"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(
                            e.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                      />

                      <button
                        type="button"
                        className="show-hide-button"
                        onClick={() =>
                          setShowCardNumber(
                            !showCardNumber
                          )
                        }
                      >
                        {showCardNumber
                          ? "Hide"
                          : "Show"}
                      </button>
                    </div>

                    <input
                      type="text"
                      name="pm-card-holder"
                      placeholder="Card Holder Name"
                      autoComplete="off"
                      value={cardName}
                      onChange={(e) =>
                        setCardName(
                          e.target.value.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          )
                        )
                      }
                    />

                    <input
                      type="text"
                      name="pm-card-expiry"
                      placeholder="MM/YY"
                      autoComplete="off"
                      inputMode="numeric"
                      maxLength="5"
                      value={expiryDate}
                      onChange={(e) => {
                        let raw =
                          e.target.value.replace(
                            /\D/g,
                            ""
                          );

                        if (
                          raw.length > 4
                        ) {
                          raw =
                            raw.slice(
                              0,
                              4
                            );
                        }

                        if (
                          raw.length > 2
                        ) {
                          raw =
                            raw.slice(
                              0,
                              2
                            ) +
                            "/" +
                            raw.slice(2);
                        }

                        setExpiryDate(
                          raw
                        );
                      }}
                    />

                    <div className="password-input-wrapper">
                      <input
                        type={
                          showCvv
                            ? "text"
                            : "password"
                        }
                        name="pm-card-cvv"
                        placeholder="CVV"
                        autoComplete="off"
                        inputMode="numeric"
                        maxLength="3"
                        value={cvv}
                        onChange={(e) =>
                          setCvv(
                            e.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                      />

                      <button
                        type="button"
                        className="show-hide-button"
                        onClick={() =>
                          setShowCvv(
                            !showCvv
                          )
                        }
                      >
                        {showCvv
                          ? "Hide"
                          : "Show"}
                      </button>
                    </div>
                  </div>
                )}

                {/* ================= NET BANKING ================= */}

                {onlineMethod ===
                  "Net Banking" && (
                  <div className="payment-details">
                    <h3>
                      Enter Net Banking
                      Details
                    </h3>

                    <select
                      name="pm-net-bank"
                      value={bankName}
                      onChange={(e) =>
                        setBankName(
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Select Bank
                      </option>

                      <option value="SBI">
                        State Bank of
                        India
                      </option>

                      <option value="HDFC">
                        HDFC Bank
                      </option>

                      <option value="ICICI">
                        ICICI Bank
                      </option>

                      <option value="Axis">
                        Axis Bank
                      </option>

                      <option value="Kotak">
                        Kotak Mahindra
                        Bank
                      </option>
                    </select>

                    <input
                      type="text"
                      name="pm-net-holder"
                      placeholder="Account Holder Name"
                      autoComplete="off"
                      value={
                        accountHolderName
                      }
                      onChange={(e) =>
                        setAccountHolderName(
                          e.target.value.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          )
                        )
                      }
                    />

                    <div className="password-input-wrapper">
                      <input
                        type={
                          showAccountNumber
                            ? "text"
                            : "password"
                        }
                        name="pm-net-account"
                        placeholder="Account Number"
                        autoComplete="off"
                        inputMode="numeric"
                        value={
                          accountNumber
                        }
                        onChange={(e) =>
                          setAccountNumber(
                            e.target.value.replace(
                              /\D/g,
                              ""
                            )
                          )
                        }
                      />

                      <button
                        type="button"
                        className="show-hide-button"
                        onClick={() =>
                          setShowAccountNumber(
                            !showAccountNumber
                          )
                        }
                      >
                        {showAccountNumber
                          ? "Hide"
                          : "Show"}
                      </button>
                    </div>

                    <p>
                      Valid bank
                      details are
                      required
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ================= PLACE ORDER ================= */}

            <button
              className="place-order-button"
              onClick={placeOrder}
            >
              🛍️ Proceed Payment &
              Place Order
            </button>

            {orderMessage && (
              <p className="order-success">
                {orderMessage}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantMarket;