import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Tracking.css";

const Tracking = () => {
  const navigate = useNavigate();

  const [latestOrder, setLatestOrder] =
    useState(null);

  const deliverySteps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  // =========================================================
  // LOAD LATEST ORDER
  // ADMIN TRACKING CHANGES USER SIDE PAR AUTOMATICALLY SHOW
  // =========================================================

  useEffect(() => {
    const loadLatestOrder = () => {
      const orders =
        JSON.parse(
          localStorage.getItem("plantOrders")
        ) || [];

      const validOrders =
        orders.filter(
          (order) =>
            order.status !==
            "Cancelled"
        );

      if (
        validOrders.length > 0
      ) {
        setLatestOrder(
          validOrders[
            validOrders.length - 1
          ]
        );
      } else {
        setLatestOrder(null);
      }
    };

    // ================= FIRST LOAD =================

    loadLatestOrder();

    // =========================================================
    // OTHER TAB / WINDOW CHANGE
    // =========================================================

    const handleStorageChange = (event) => {
      if (
        event.key === "plantOrders"
      ) {
        loadLatestOrder();
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    // =========================================================
    // SAME TAB ADMIN CHANGE
    // =========================================================

    const handleOrderUpdate = () => {
      loadLatestOrder();
    };

    window.addEventListener(
      "plantOrdersUpdated",
      handleOrderUpdate
    );

    // ================= CLEANUP =================

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

  // =========================================================
  // NO ACTIVE ORDER
  // =========================================================

  if (!latestOrder) {
    return (
      <div className="tracking-page">
        <div className="tracking-container">

          <h2>
            🚚 Delivery Tracking
          </h2>

          <p>
            You have not placed any
            active order yet.
          </p>

          <button
            className="back-market-button"
            onClick={() =>
              navigate(
                "/plant-market"
              )
            }
          >
            ⬅️ Back to Plant Market
          </button>

        </div>
      </div>
    );
  }

  // =========================================================
  // ADMIN SHIPPING STATUS
  // =========================================================

  const adminShippingStatus =
    latestOrder.shippingStatus ||
    "";

  const adminShippingMessage =
    latestOrder.shippingMessage ||
    "";

  const shippingUpdateDate =
    latestOrder.shippingUpdateDate ||
    "";

  const shippingUpdateTime =
    latestOrder.shippingUpdateTime ||
    "";

  // =========================================================
  // CONVERT ADMIN STATUS TO TRACKING STEP
  // =========================================================

  let currentStatus =
    latestOrder.status ||
    "Order Placed";

  // Admin shipping status ko tracking steps ke saath connect
  if (
    adminShippingStatus ===
    "Shipping Started"
  ) {
    currentStatus = "Shipped";
  } else if (
    adminShippingStatus ===
    "Shipped"
  ) {
    currentStatus = "Shipped";
  } else if (
    adminShippingStatus ===
    "Out for Delivery"
  ) {
    currentStatus =
      "Out for Delivery";
  } else if (
    adminShippingStatus ===
    "Delivered"
  ) {
    currentStatus =
      "Delivered";
  } else if (
    adminShippingStatus ===
    "Processing"
  ) {
    currentStatus =
      "Processing";
  } else if (
    adminShippingStatus ===
    "Order Placed"
  ) {
    currentStatus =
      "Order Placed";
  }

  // =========================================================
  // PARTIALLY CANCELLED
  // =========================================================

  if (
    latestOrder.status ===
    "Partially Cancelled"
  ) {
    if (
      adminShippingStatus
    ) {
      currentStatus =
        adminShippingStatus ===
        "Shipping Started"
          ? "Shipped"
          : adminShippingStatus;
    } else {
      currentStatus =
        "Order Placed";
    }
  }

  // =========================================================
  // CANCELLED
  // =========================================================

  if (
    adminShippingStatus ===
    "Cancelled"
  ) {
    currentStatus =
      "Order Placed";
  }

  // =========================================================
  // CURRENT STEP
  // =========================================================

  let currentStep =
    deliverySteps.indexOf(
      currentStatus
    );

  if (currentStep === -1) {
    currentStep = 0;
  }

  // =========================================================
  // SPECIAL SHIPPING STATUSES
  // =========================================================

  const isDelayed =
    adminShippingStatus ===
    "Shipping Delayed";

  const isDeliveryFailed =
    adminShippingStatus ===
    "Delivery Failed";

  // =========================================================
  // CANCELLED PRODUCTS
  // =========================================================

  const cancelledProducts =
    latestOrder
      .cancellationDetails
      ?.cancelledProducts || [];

  const cancelledAmount =
    latestOrder
      .cancellationDetails
      ?.cancelledAmount || 0;

  const refundStatus =
    latestOrder
      .cancellationDetails
      ?.refundStatus || "";

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="tracking-page">

      <div className="tracking-container">

        {/* =====================================================
             HEADER
        ===================================================== */}

        <h1>
          🚚 Delivery Tracking
        </h1>

        <p className="tracking-subtitle">
          Track your latest Plant
          Market order
        </p>

        {/* =====================================================
             ORDER DETAILS
        ===================================================== */}

        <div className="tracking-order-details">

          <h2>
            📦 Order Details
          </h2>

          <p>
            <strong>
              Order ID:
            </strong>{" "}
            {latestOrder.id}
          </p>

          <p>
            <strong>
              Order Date:
            </strong>{" "}
            {
              latestOrder.orderDate
            }
          </p>

          <p>
            <strong>
              Order Time:
            </strong>{" "}
            {
              latestOrder.orderTime
            }
          </p>

          <p>
            <strong>
              Payment Method:
            </strong>{" "}
            {
              latestOrder.paymentMethod
            }
          </p>

          <p>
            <strong>
              Payment Status:
            </strong>{" "}
            {
              latestOrder.paymentStatus
            }
          </p>

          <p>
            <strong>
              Total Quantity:
            </strong>{" "}
            {
              latestOrder.totalQuantity
            }
          </p>

          <p>
            <strong>
              Total Amount:
            </strong>{" "}
            ₹
            {
              latestOrder.totalAmount
            }
          </p>

        </div>

        {/* =====================================================
             ADMIN SHIPPING UPDATE
        ===================================================== */}

        {(adminShippingStatus ||
          adminShippingMessage ||
          shippingUpdateDate ||
          shippingUpdateTime) && (

          <div
            className="tracking-delivery-details"
            style={{
              border:
                "1px solid #90caf9",
              background:
                "#f3f9ff",
            }}
          >

            <h2
              style={{
                color: "#1565c0",
              }}
            >
              📢 Latest Shipping Update
            </h2>

            {adminShippingStatus && (
              <p>
                <strong>
                  Shipping Status:
                </strong>{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color:
                      adminShippingStatus ===
                      "Delivered"
                        ? "#2e7d32"
                        : adminShippingStatus ===
                          "Shipping Delayed"
                        ? "#ef6c00"
                        : adminShippingStatus ===
                          "Delivery Failed"
                        ? "#c62828"
                        : "#1565c0",
                  }}
                >
                  {adminShippingStatus}
                </span>
              </p>
            )}

            {adminShippingMessage && (
              <p>
                <strong>
                  Message:
                </strong>{" "}
                {adminShippingMessage}
              </p>
            )}

            {shippingUpdateDate && (
              <p>
                <strong>
                  Updated Date:
                </strong>{" "}
                {shippingUpdateDate}
              </p>
            )}

            {shippingUpdateTime && (
              <p>
                <strong>
                  Updated Time:
                </strong>{" "}
                {shippingUpdateTime}
              </p>
            )}

          </div>
        )}

        {/* =====================================================
             DELAYED MESSAGE
        ===================================================== */}

        {isDelayed && (
          <div
            className="tracking-delivery-details"
            style={{
              border:
                "1px solid #ffcc80",
              background:
                "#fff8e1",
            }}
          >

            <h2
              style={{
                color: "#ef6c00",
              }}
            >
              ⚠️ Shipping Delayed
            </h2>

            <p>
              Your order delivery has
              been delayed.
            </p>

            {adminShippingMessage && (
              <p>
                <strong>
                  Admin Message:
                </strong>{" "}
                {
                  adminShippingMessage
                }
              </p>
            )}

          </div>
        )}

        {/* =====================================================
             DELIVERY FAILED MESSAGE
        ===================================================== */}

        {isDeliveryFailed && (
          <div
            className="tracking-delivery-details"
            style={{
              border:
                "1px solid #ef9a9a",
              background:
                "#ffebee",
            }}
          >

            <h2
              style={{
                color: "#c62828",
              }}
            >
              ❌ Delivery Failed
            </h2>

            <p>
              Your delivery could not
              be completed.
            </p>

            {adminShippingMessage && (
              <p>
                <strong>
                  Admin Message:
                </strong>{" "}
                {
                  adminShippingMessage
                }
              </p>
            )}

          </div>
        )}

        {/* =====================================================
             CANCELLED PRODUCTS
        ===================================================== */}

        {cancelledProducts.length >
          0 && (

          <div
            className="tracking-delivery-details"
            style={{
              border:
                "1px solid #f0b4b4",
              background:
                "#fff5f5",
            }}
          >

            <h2
              style={{
                color: "#c62828",
              }}
            >
              ❌ Cancelled Products
            </h2>

            {cancelledProducts.map(
              (item) => (

                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    gap: "12px",
                    padding:
                      "10px 0",
                    borderBottom:
                      "1px solid #eee",
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "55px",
                      height: "55px",
                      objectFit:
                        "cover",
                      borderRadius:
                        "8px",
                    }}
                  />

                  <div>

                    <strong>
                      {item.name}
                    </strong>

                    <p
                      style={{
                        margin:
                          "4px 0",
                      }}
                    >
                      Quantity:{" "}
                      {item.quantity}
                    </p>

                    <p
                      style={{
                        margin:
                          "4px 0",
                      }}
                    >
                      Cancelled Amount:
                      ₹
                      {item.price *
                        item.quantity}
                    </p>

                  </div>

                </div>
              )
            )}

            <p
              style={{
                marginTop:
                  "12px",
                fontWeight:
                  "bold",
                color:
                  "#c62828",
              }}
            >
              Total Cancelled Amount:
              ₹
              {cancelledAmount}
            </p>

            {refundStatus ===
              "Refund Initiated" && (
              <p
                style={{
                  color:
                    "#2e7d32",
                  fontWeight:
                    "bold",
                }}
              >
                💳 Refund Initiated:
                ₹
                {cancelledAmount}
              </p>
            )}

            {refundStatus ===
              "No Refund - Cash on Delivery" && (
              <p
                style={{
                  color:
                    "#795548",
                  fontWeight:
                    "bold",
                }}
              >
                💵 Cash on Delivery:
                No refund required
                because payment was
                not made.
              </p>
            )}

            {refundStatus ===
              "Refund Initiated" && (
              <p
                style={{
                  color:
                    "#2e7d32",
                }}
              >
                Refund will be
                credited to the
                original payment
                method within
                15-20 working days.
              </p>
            )}

          </div>
        )}

        {/* =====================================================
             DELIVERY DETAILS
        ===================================================== */}

        <div className="tracking-delivery-details">

          <h2>
            📍 Delivery Information
          </h2>

          <p>
            <strong>
              Expected Delivery:
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
            <strong>
              Current Status:
            </strong>{" "}

            {latestOrder.status ===
            "Partially Cancelled"
              ? adminShippingStatus
                ? adminShippingStatus
                : "Remaining Products - Order Placed"
              : adminShippingStatus
                ? adminShippingStatus
                : latestOrder.status}

          </p>

          {/* =====================================================
               ADMIN UPDATE DATE/TIME
          ===================================================== */}

          {shippingUpdateDate && (
            <p>
              <strong>
                Last Shipping Update:
              </strong>{" "}
              {shippingUpdateDate}

              {shippingUpdateTime &&
                ` - ${shippingUpdateTime}`}
            </p>
          )}

          {/* =====================================================
               ADMIN MESSAGE
          ===================================================== */}

          {adminShippingMessage && (
            <div
              style={{
                marginTop: "15px",
                padding: "12px",
                borderRadius:
                  "8px",
                background:
                  "#f1f8e9",
                border:
                  "1px solid #c5e1a5",
              }}
            >

              <strong>
                📢 Shipping Message:
              </strong>

              <p
                style={{
                  margin:
                    "6px 0 0",
                }}
              >
                {
                  adminShippingMessage
                }
              </p>

            </div>
          )}

          {/* =====================================================
               REMAINING PRODUCTS
          ===================================================== */}

          {latestOrder.products &&
            latestOrder.products.length >
              0 && (

              <div
                style={{
                  marginTop:
                    "15px",
                }}
              >

                <h3
                  style={{
                    color:
                      "#2e7d32",
                  }}
                >
                  📦 Products Still in
                  Delivery
                </h3>

                {latestOrder.products.map(
                  (item) => (

                    <p
                      key={item.id}
                      style={{
                        margin:
                          "6px 0",
                      }}
                    >
                      🌿{" "}
                      {item.name} ×{" "}
                      {item.quantity}
                    </p>

                  )
                )}

              </div>
            )}

        </div>

        {/* =====================================================
             ORDER TRACKING
        ===================================================== */}

        <div className="tracking-box">

          <h2>
            🚚 Order Tracking
          </h2>

          <div className="tracking-steps">

            {deliverySteps.map(
              (step, index) => {

                const isCompleted =
                  index <=
                  currentStep;

                const isActive =
                  index ===
                  currentStep;

                return (

                  <div
                    className="tracking-step"
                    key={step}
                  >

                    <div
                      className={
                        isCompleted
                          ? isActive
                            ? "tracking-circle active"
                            : "tracking-circle completed"
                          : "tracking-circle pending"
                      }
                    >
                      {isCompleted
                        ? "✓"
                        : index + 1}
                    </div>

                    <div className="tracking-step-text">

                      <strong>
                        {step}
                      </strong>

                      {isActive && (
                        <span>
                          Current Status
                        </span>
                      )}

                    </div>

                    {index <
                      deliverySteps.length -
                        1 && (

                      <div
                        className={
                          index <
                          currentStep
                            ? "tracking-line completed"
                            : "tracking-line"
                        }
                      ></div>

                    )}

                  </div>
                );
              }
            )}

          </div>

        </div>

        {/* =====================================================
             CURRENT STATUS MESSAGE
        ===================================================== */}

        <div className="tracking-message">

          <h3>
            📦 Your order is currently:
          </h3>

          <p>
            <strong>

              {latestOrder.status ===
              "Partially Cancelled"
                ? adminShippingStatus
                  ? adminShippingStatus
                  : "Remaining Products are in Delivery"
                : adminShippingStatus
                  ? adminShippingStatus
                  : currentStatus}

            </strong>
          </p>

          {/* ADMIN MESSAGE */}

          {adminShippingMessage && (
            <p>
              📢{" "}
              <strong>
                {adminShippingMessage}
              </strong>
            </p>
          )}

          {/* UPDATE DATE */}

          {shippingUpdateDate && (
            <p>
              Last updated on{" "}
              <strong>
                {shippingUpdateDate}
              </strong>

              {shippingUpdateTime && (
                <>
                  {" "}
                  at{" "}
                  <strong>
                    {
                      shippingUpdateTime
                    }
                  </strong>
                </>
              )}
            </p>
          )}

          {/* CANCELLED PRODUCT COUNT */}

          {cancelledProducts.length >
            0 && (
            <p
              style={{
                color:
                  "#c62828",
              }}
            >
              ❌{" "}
              {
                cancelledProducts.length
              }{" "}
              product(s)
              cancelled
            </p>
          )}

          {/* EXPECTED DELIVERY */}

          <p>
            Expected delivery on{" "}
            <strong>
              {
                latestOrder.expectedDeliveryDate
              }
            </strong>
          </p>

        </div>

        {/* =====================================================
             BACK BUTTON
        ===================================================== */}

        <button
          className="back-market-button"
          onClick={() =>
            navigate(
              "/plantmarket"
            )
          }
        >
          ⬅️ Back to Plant Market
        </button>

      </div>
    </div>
  );
};

export default Tracking;