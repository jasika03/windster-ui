import axios from "axios";
import { useEffect, useState } from "react";

const Chart = () => {
  const [chartUrl, setChartUrl] = useState("");

  useEffect(() => {
    const fetchChart = async () => {
      const config = {
        type: "line", // Change to "bar" or other chart types as needed
        data: {
          labels: ["1 feb", "2 feb", "3 feb", "4 feb", "5 feb", "6 feb", "7 feb"],
          datasets: [
            {
              label: "Sales",
              data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
              borderColor: "rgba(75,192,192,1)",
              backgroundColor: "rgba(75,192,192,0.2)",
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      try {
        const response = await axios.post(
          "https://quickchart.io/chart/create",
          { chart: config, width: 600, height: 400, format: "png" }
        );
        setChartUrl(response.data.url); // QuickChart provides a URL to render the chart
      } catch (error) {
        console.error("Error generating chart:", error);
      }
    };

    fetchChart();
  }, []);

  return (
    <div>
      <h1>Graph Example</h1>
      {chartUrl ? (
        <img src={chartUrl} alt="Graph" style={{ maxWidth: "100%" }} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default Chart;