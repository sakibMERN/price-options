import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BallTriangle } from "react-loader-spinner";

export default function Phones() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const phoneObj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return phoneObj;
        });
        setPhones(phoneWithFakeData);
        setLoading(false);
      });
  }, []);
  console.log(phones);
  return (
    <div className="bg-slate-700">
      <div className="flex justify-center">
        {loading && <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />}
      </div>
      <h2 className="text-5xl text-yellow-500">Phones: {phones.length}</h2>
      <BarChart width={1500} height={500} data={phones}>
        <Bar
          dataKey={"price"}
          stroke="white"
          fill="green"
          activeBar={<Rectangle fill="pink" stroke="blue"></Rectangle>}
        ></Bar>
        <CartesianGrid strokeDasharray={"5 5"} stroke="gray"></CartesianGrid>
        <XAxis dataKey={"name"} stroke="yellow"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
}
