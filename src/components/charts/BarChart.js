import React, {useEffect , useState} from 'react';

import { Bar, Line, Pie } from 'react-chartjs-2';



const BarChart = ({data, prop_labels,title, max, color, data2, general_label, color2,label1,label2,type }) => {

  let labels = [];
  let data_points = [];
  let backgroundColors = [];
  let barColor = color
  let max_c;

  // console.log(max);

  useEffect( () => {
    if(data2){
       setBarData({
         labels: prop_labels,
       datasets: [
           {
               label: label1,
               data: data,
               backgroundColor: color,
               borderWidth: 3
          },
          {
              label: label2,
              data: data2,
              backgroundColor: color2,
              borderWidth: 3
         },
        ]
       });
    } else {
      setBarData({
        labels: prop_labels,
      datasets: [
          {
              label: 'Number of Answers',
              data: data,
              backgroundColor: color,
              borderWidth: 3
         }
       ]
      });
    }
  },[data,max])


  const [barData, setBarData] = useState({
      labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    datasets: [
        {
            label: 'Precio m2',
            data: data_points,
            backgroundColor: [
                'rgba(248, 187, 208, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(75, 192, 192, 0.9)'
            ],
            borderWidth: 3
        }
    ]
    });

    // console.log(max_c);

    // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax:max
              },
              scaleLabel: {
                display: true,
                labelString: type
              }
            }
        ],
        xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: ''
              }
            }
        ]
        },
      title: {
          display: true,
          text: title,
          fontSize: 25
        },
      legend: {
          display: true,
          position: 'top'
        }
          }
  });

  // return JSX
  return (
    <div className="Bar example materialboxed hoverable grey lighten-5">
        <Bar
            data={barData}
            options={barOptions.options} />
    </div>
  )

}

export default BarChart;
