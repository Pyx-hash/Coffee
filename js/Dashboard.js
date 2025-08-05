let list = document.querySelectorAll(".navigation li");
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onClick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

const barChartOptions = {
    series: [
        {
            data: [216, 148, 84, 72, 174],
            name: 'Products',
        },
    ],
    chart: {
        type: 'bar',
        background: 'transparent',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ["#8d99ae", "#ff595e", "#52b788", "#ffbf69", "#a882dd"],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#b08968",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#7f5539",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2,
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Espresso", "Latte", "Cappucino", "Macchiato", "Americano", "Cortado"],
        title: {
            style: {
                color: "#7f5539",
            },
        },
        axisBorder: {
            show: true,
            color: "#7f5539",
        },
        axisTicks: {
            show: true,
            color: "#7f5539",
        },
        labels: {
            style: {
            colors: "#7f5539",
            },
        },
    },
};
const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

const areaChartOptions = {
    series: [
        {
            name: "Desserts",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "Beverages",
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    chart: {
        type: "area",
        background: "transparent",
        height: 350,
        shocked: false,
        toolbar: {
            show: false,
        },
    },
    colors: ["#70798c", "#ffbf69"],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    dataLabels: {
        enabled: false,
    },
    fill: {
        gradient: {
            opacityFrom: 0.4,
            opacityTo: 0.1,
            shadeIntensity: 1,
            stops: [0, 100],
            type: "vertical",
        },
        type: "gradient",
    },
    grid: {
        borderColor: "#7f5539",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#7f5539",
        },
        show: true,
        position: "top",
    },
    markers: {
        size: 6,
        strokeColors: "#7f5539",
        strokeWidth: 3,
    },
    stroke: {
        curve: "smooth",
    },
    xaxis: {
        axisBorder: {
            color: "#7f5539",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            offsetY: 5,
            style: {
                colors: "#7f5539",
            },
        },
    },
    yaxis: [
        {
            title: {
                text: "Beverages",
                style: {
                    color: "#7f5539",
                },
            },
            labels: {
                style: {
                    colors: ["#7f5539"],
                },
            },
        },
        {
            opposite: true,
            title: {
                text: "Desserts",
                style: {
                    color: "#7f5539",
                },
            },
            labels: {
                style: {
                    colors: ["#7f5539"],
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
};

const areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();