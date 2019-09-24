window.onload = function() {

let chart = document.getElementById('moodChart').getContext('2d');

let chart2 = document.getElementById('reasonChart').getContext('2d');
Chart.defaults.global.defaultFontSize = 15;

let myChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: stringData.moodNameArray,
        datasets: [{
            label: 'Mood by Amount',
            data: stringData.moodCountArray,
            backgroundColor: [
                'rgba(148, 202, 147, 1)',
                'rgba(194, 183, 210, 1)',
                'rgba(253, 192, 133, 1)',
                'rgba(234, 234, 178, 1)',
                'rgba(55, 108, 176, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 65,
        aspectRatio: 1
    }
});

let myChart2 = new Chart(chart2, {
    type: 'doughnut',
    data: {
        labels: stringData.reasonNameArray,
        datasets: [{
            label: 'Reason by Amount',
            data: stringData.reasonCountArray,
            backgroundColor: [
                'rgba(148, 202, 147, 1)',
                'rgba(194, 183, 210, 1)',
                'rgba(253, 192, 133, 1)',
                'rgba(234, 234, 178, 1)',
                'rgba(55, 108, 176, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 65,
        aspectRatio: 1
    }
});
}