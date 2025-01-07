import React from "react";

function Code() {
  return (
    <>
      <div
        className="sidebar"
        style={{ border: "1.5px solid #EEEEEE", borderTop: "none" }}
      >
        <a href="#">
          <i class="fa-solid fa-chart-pie"></i>Dashboard
        </a>
        <a href="#">
          <i class="fa-solid fa-boxes-stacked"></i>Kanban
          <button
            style={{
              padding: "0vh 1vh 0vh 1vh",
              border: "none",
              borderRadius: "10px",
              marginLeft: "10vh",
            }}
          >
            Pro
          </button>
        </a>
        <a href="#">
          <i class="fa-solid fa-inbox"></i>Inbox
          <button
            style={{
              padding: "0vh 1vh 0vh 1vh",
              border: "none",
              borderRadius: "10px",
              marginLeft: "12.2vh",
            }}
          >
            Pro
          </button>
        </a>
        <a href="#">
          <i class="fa-solid fa-user"></i>User
        </a>
        <a href="#">
          <i class="fa-solid fa-bag-shopping"></i>Products
        </a>
        <a href="#">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign In
        </a>
        <a href="#">
          <i class="fa-solid fa-table"></i>Sign Up
        </a>
        <hr style={{ color: "gray" }} />
        <a href="#">
          <i class="fa-solid fa-gem"></i>Upgrade To Pro
        </a>
        <a href="#">
          <i class="fa-solid fa-clipboard-list"></i>Documentation
        </a>
        <a href="#">
          <i class="fa-solid fa-layer-group"></i>Components
        </a>
        <a href="#">
          <i class="fa-solid fa-circle-radiation"></i>Help
        </a>
      </div>
      <div
        className="topnav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          borderBottom: "1.5px solid #EEEEEE",
          backgroundColor: "#fff",
          zIndex: 10,
          padding: "5vh 3vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          
        }}
      >
        <a class="active" href="#logo">
          <img src="src/assets/windsteruilogo.svg" width="33" height="33" />
        </a>
        <a href="#">
          <strong>Windster</strong>
        </a>
        <div
          className="search"
          style={{
            marginLeft: "17vh",
            marginBottom: "1vh",
            border: "1px solid #dee2e6 ",
            borderRadius: "10px",
            display: "flex",
            backgroundColor: "#f6f9fc",
            alignItems: "center",
            padding: "1vh",
            paddingTop: "0",
            width: "35vh",
          }}
        >
          <i
            class="fa-solid fa-magnifying-glass"
            style={{
              marginRight: "10px",
              marginTop: "8px",
              color: "#9E9E9E",
            }}
          ></i>
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              background: "transparent",
              marginTop: "8px",
            }}
          />
        </div>
        <a style={{ marginLeft: "70vh", color: "#808080" }}>
          Open source <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
        </a>
        <button
          style={{
            padding: "0vh 1.3vh 0vh 1.3vh",
            border: "1px solid #dee2e6",
            borderRadius: "3px",
            marginBottom: "10px",
          }}
        >
          <i class="fa-regular fa-star"></i> Star
        </button>
        <button
          style={{
            marginLeft: "2.5vh",
            marginBottom: "5px",
            border: "none",
            borderRadius: "10px",
            background: "#00ACC1",
            padding: "1vh 2vh 1vh 2vh",
            color: "white",
          }}
        >
          <i class="fa-solid fa-gem"></i> Upgrade to Pro
        </button>
      </div>
      <div
        className="main"
        style={{
          backgroundColor: "#f6f9fc",
          height: "calc(1000vh - 7.3vh)",
          marginLeft: "16.6vw",
          width: "calc(100% - 16.6vw)",
          padding: "2vh",
          marginTop:"7vh"
        }}
      >
        <div className="main-one" style={{ display: "flex", gap: "2vh" }}>
          <div
            className="graph"
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "50px",
              width: "100vh",
              marginTop: "3vh",
            }}
          >
            <div className="content" style={{ position: "relative" }}>
              <h2>
                <strong>$45,385</strong>
              </h2>
              <p style={{ color: "gray" }}>Sales this week</p>
              <p
                style={{
                  color: "green",
                  textAlign: "right",
                  position: "absolute",
                  right: "50px",
                  top: "20px",
                  // marginTop: "-70px",
                  fontWeight: "bold",
                }}
              >
                12.5% <i class="fa-solid fa-arrow-up"></i>
              </p>
            </div>
          </div>
          <div
            className="latest"
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "50px",
              width: "70vh",
              marginTop: "3vh",
              position: "relative",
            }}
          >
            <h4>
              <strong>Latest Transactions</strong>
            </h4>
            <p style={{ color: "gray" }}>
              This is a list of latest transactions
            </p>
            <button
              style={{
                color: "#00ACC1",
                background: "none",
                border: "none",
                position: "absolute",
                right: "50px",
                top: "60px",
                // marginTop: "-70px",
              }}
            >
              View all
            </button>
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  marginTop: "5vh",
                  borderCollapse: "collapse",
                  borderSpacing: "0",
                  width: "100%",
                  border: "1px solid #ddd",
                }}
              >
                <tr>
                  <th
                    style={{
                      padding: "15px 190px 15px 10px",
                      fontWeight: "small",
                      color: "gray",
                    }}
                  >
                    TRANSACTION
                  </th>
                  <th
                    style={{
                      padding: "15px 10px",
                      fontWeight: "small",
                      whiteSpace: "nowrap",
                      color: "gray",
                    }}
                  >
                    DATE & TIME
                  </th>
                  <th
                    style={{
                      padding: "15px 10px",
                      fontWeight: "small",
                      color: "gray",
                    }}
                  >
                    AMOUNT
                  </th>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment from Bonnie Green
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 23 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$2300</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment refund to #00910
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 23 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>-$670</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment failed from #087651
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 18 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$234</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment from Lana Byrd
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 15 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$5000</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment from Jese Leos
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 15 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$2300</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment from THEMESBERG LLC
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 11 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$560</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px 10px" }}>
                    Payment from Lana Lysle
                  </td>
                  <td style={{ padding: "15px 10px" }}>Apr 6 ,2021</td>
                  <td style={{ padding: "15px 10px" }}>$1437</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "55vh 55vh 55vh",
            gap: "2vh",
            marginTop: "3vh",
          }}
        >
          <div
            className="first-grid"
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "left",
              position: "relative",
            }}
          >
            <h2>
              <strong>2,340</strong>
            </h2>
            <p style={{color:"grey"}}>New products this week</p>
            <p
              style={{
                position: "absolute",
                right: "20px",
                top:"45px",
                color: "green",
                fontWeight: "bold",
              }}
            >
              14.6%<i class="fa-solid fa-arrow-up"></i>
            </p>
          </div>
          <div
            className="second-grid"
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "left",
              position: "relative",
            }}
          >
            <h2>
              <strong>5,355</strong>
            </h2>
            <p style={{color:"grey"}}>Visitors this week</p>
            <p style={{
                position: "absolute",
                right: "20px",
                top:"45px",
                color: "green",
                fontWeight: "bold",
              }}>
              32.9%<i class="fa-solid fa-arrow-up"></i>
            </p>
          </div>
          <div
            className="third-grid"
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "left",
              position: "relative",
            }}
          >
            <h2>
              <strong>385</strong>
            </h2>
            <p style={{color:"grey"}}>User signups this week</p>
            <p style={{
                position: "absolute",
                right: "20px",
                top:"45px",
                color: "red",
                fontWeight: "bold",
              }}>
              -2.7%<i class="fa-solid fa-arrow-down"></i>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Code;
