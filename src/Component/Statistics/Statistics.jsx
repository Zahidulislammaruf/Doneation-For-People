
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/LocalStroage";
import React, { useCallback } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const carditem = useLoaderData();
  const [saveDon, setsaveDon] = useState([])
useEffect(()=>{
  const StoreCardIds = getStoredApplication()  
  if(carditem.length > 0){
   
    const StoreCard = [];
    for(const id of StoreCardIds ){
        const job =carditem.find(job=> job.id === id);
        if(job){
            StoreCard.push(job)
        }
    }
    setsaveDon(StoreCard) ;
  }
},[])
  const donateValue = saveDon.length
  const totalValue = 12;
  const reValue = totalValue - donateValue
  console.log(donateValue,totalValue,reValue)
  const data1 = [
    {
      "name": "Group A",
      "value": reValue
    },
    {
      "name": "Group B",
      "value": donateValue
    }
    
  ]
  const data = [
    { name: "Total Value", value: reValue },
    { name: "Total Donation", value: donateValue }, 
  ];
  const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
   
    return (
        <div className="flex justify-center">
        <div 
        className="  mt-10 md:mt-16 lg:mt-28"
        >
          <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

        </div>
     </div>
 );
};
export default Statistics;