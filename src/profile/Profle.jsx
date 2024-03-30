import { useEffect, useState } from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "@mui/material";
export default function Profile() {
  const [data, setData] = useState([]);
  // const [maleData, setMaleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  async function getMale() {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?gender=male && nat=CA");
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }
  async function getFemale() {
    const fetchData = async () => {
      const response = await fetch("https://randomuser.me/api/?gender=female && nat=CA");

      const result = await response.json();
      setData(result);
    };
    fetchData();
  }

  console.log(data);
  return (
    <div className="profile-container">
      <button
        onClick={getFemale}
        className="btn btn-primary"
        style={{ margin: "10px" }}
      >
        Female
      </button>

      <button
        onClick={getMale}
        className="btn btn-primary"
        style={{ margin: "10px", color: "white" }}
      >
        Male
      </button>

      <div
        className="profile"
        style={{
          marginLeft: "600px",
          border: "1px solid black",
          marginRight: "600px",
          marginTop: "10px",
          backgroundColor: "#365E7D",
          borderRadius: "55px",
        }}
      >
        <div className="profile-picture">
          <img
            src={data.results[0].picture.large}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginTop: "10px",
            }}
          />
        </div>
        <div className="full-name">
          <p style={{ color: "white", fontSize: "45px", fontWeight: "bold" }}>
            {data.results[0].name.first} {data.results[0].name.last}
          </p>
          <p>{data.results[0].email}</p>
        </div>
        <div className="email"></div>
        <div className="address">
          <p>{data.results[0].location.city}</p>
        </div>
        <div className="phone">
          <p>{data.results[0].phone}</p>
        </div>
        <div className="gender">
          <p>{data.results[0].gender}</p>
        </div>
        <div className="dob">
          <p>{data.results[0].dob.date}</p>
        </div>
      </div>
    </div>
  );
}
