import React from "react";
import { HOC } from "../../components/HOC";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EnhancedTable from "../../components/Table";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaidIcon from "@mui/icons-material/Paid";
import { Notifications } from "@mui/icons-material";

const Home = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    plotOptions: {
      line: {
        showInLegend: true,
      },
    },
    yAxis: {
      title: "",
      lineColor: 'transparent',
      gridLineWidth: 0
    },
    xAxis: {
      title: "",
      lineColor: 'transparent',
      gridLineWidth: 0
    },
    credits: {
      enable: false,
    },
    series: [
      {
        type: "column",
        name: "Estimated Spending",
        color: "#04c4c4",
        data: [1, 2, 3, 4, 4, 5, 5, 2, 7, 4, 5],
      },
    ],
  };
  const data = [
    {
      Name: "Name",
      Bill: 1201,
      Items: "A & B",
    },
    {
      Name: "Hello",
      Bill: 1202,
      Items: "A & B",
    },
    {
      Name: "There",
      Bill: 1200,
      Items: "A & B",
    },
    {
      Name: "How",
      Bill: 1200,
      Items: "A & B",
    },
    {
      Name: "Are",
      Bill: 1200,
      Items: "A & B",
    },
    {
      Name: "You",
      Bill: 1200,
      Items: "A & B",
    },
  ];
  return (
    <HOC>
      <div>
        <div className="grid grid-cols-12 gap-4 justify-evenly">
          <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4 py-5 px-8">
            <div className="flex items-center">
              <PaidIcon
                htmlColor="green"
                className="items-center"
                fontSize="large"
              />
              <div className="items-center ml-3">
                <strong>
                  <h4 className="text-lg text-green-600">
                    $169,000 <small className="text-xs">(Spent)</small>
                  </h4>
                </strong>
                <small>Overall spending</small>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div
                class="bg-green-600 h-1 rounded-full dark:bg-green-500"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4  py-5 px-8">
            <div className="flex items-center">
              <CurrencyExchangeIcon
                htmlColor="cyan"
                className="items-center"
                fontSize="large"
              />
              <div className="items-center ml-3">
                <strong>
                  <h4 className="text-lg text-cyan-500">
                    $169,000 <small className="text-xs">(Spent)</small>
                  </h4>
                </strong>
                <small>Expected Spending</small>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div
                class="bg-cyan-600 h-1 rounded-full dark:bg-cyan-500"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4  py-5 px-8">
            <div className="flex items-center">
              <CurrencyExchangeIcon
                htmlColor="cyan"
                className="items-center"
                fontSize="large"
              />
              <div className="items-center ml-3">
                <strong>
                  <h4 className="text-lg text-cyan-500">
                    $1,690 <small className="text-xs">(Saved)</small>
                  </h4>
                </strong>
                <small>Savings</small>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div
                class="bg-cyan-600 h-1 rounded-full dark:bg-cyan-500"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>

          <div className="col-span-3 items-center border rounded shadow bg-white min-w-2/4 py-5 px-8">
            <div className="flex items-center">
              <div className="h-10 w-20">
                <img
                  className="w-full h-full"
                  src={require("../../assets/images/budgetGraph.png")}
                  alt="Graph"
                ></img>
              </div>
              <div className="items-center ml-3">
                <strong>
                  <h4 className="text-lg text-orange-500">$250,000</h4>
                </strong>
                <small className="text-xs">Budget</small>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1 mt-3">
              <div
                class="bg-orange-500 h-1 rounded-full dark:bg-orange-400"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="w-full my-5 bg-white rounded shadow">
          <h3 className='p-3 text-xl font-bold bg-gray-50 border w-full rounded-t'>Estimated Spending</h3>
          <div className="p-3">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 bg-white rounded shado">
            <h3 className='p-3 text-xl font-bold bg-gray-50 border w-full rounded-t'>Grocery List</h3>
            <div className="px-3 pt-1 pb-2">
              <EnhancedTable model={data} />
            </div>
          </div>

          <div className="col-span-4 bg-white rounded shadow">
            <h3 className='p-3 text-xl font-bold bg-gray-50 border w-full rounded-t'>Notifications</h3>
            <div className="p-4">
              <div className="border rounded p-4 flex items-center">
                <span className="mr-2 border rounded-full p-2 items-center">
                  <Notifications fontSize="large" htmlColor="orange" />
                </span>
                <p>ome notifications can be found here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HOC>
  );
};

export default Home;
