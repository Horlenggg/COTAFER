if(document.querySelector('#chartDB')){
    let ctxDB = document.querySelector('#chartDB').getContext('2d');
    let chartDB = new Chart(ctxDB, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Statistics',
                data: [48, 38, 30, 36, 42, 52, 58, 56, 50, 48, 57, 78],
                backgroundColor: 'rgba(239, 68, 68, 1)',
                borderColor: 'rgba(239, 68, 68, 1)',
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            layout: {
                padding : {
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 30
                }
            },
        }
    });
}