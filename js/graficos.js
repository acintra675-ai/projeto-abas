const materias = ['ALGORITMOS', 'BANCO DE DADOS', 'DESIGN', 'ENG. PRODUÇÃO', 'SIST. OPERACIONAIS', 'WEB 1'];


const coresPorMateria = [
    'rgba(255, 99, 132, 0.8)', 
    'rgba(54, 162, 235, 0.8)', 
    'rgba(255, 206, 86, 0.8)', 
    'rgba(75, 192, 192, 0.8)', 
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)'  
];


const bordasPorMateria = [
    'rgba(255, 99, 132, 1)', 
    'rgba(54, 162, 235, 1)', 
    'rgba(255, 206, 86, 1)', 
    'rgba(75, 192, 192, 1)', 
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];


const notasgrafico1 = [5, 9.5, 7.0, 8.5, 5.5, 6]; 
const notasgrafico2 = [5, 9.5, 7.0, 8.5, 5.5, 6]; 
const notasgrafico3 = [5, 9.5, 7.0, 8.5, 5.5, 6]; 
const mediasAnuais = [5, 9.5, 7.0, 8.5, 5.5, 6];  


function criarGrafico(id, tipo, titulo, labels, dados, backgroundColor, borderColor) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: tipo,
        data: {
            labels: labels,
            datasets: [{
                label: titulo,
                data: dados,
                
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
                fill: tipo === 'line' || tipo === 'radar' || tipo === 'polarArea' ? true : false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10 
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            }
        }
    });
}


criarGrafico(
    'barChart', 
    'bar', 
    'Notas', 
    materias, 
    notasgrafico1, 
    coresPorMateria, 
    bordasPorMateria 
);


const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: materias,
        datasets: [{
            label: 'Notas',
            data: notasgrafico2,
            backgroundColor: 'rgba(54, 162, 235, 0.3)', 
            borderColor: 'rgba(54, 162, 235, 1)',   
            borderWidth: 2,
            pointRadius: 6, 
          
            pointBackgroundColor: bordasPorMateria, 
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});



const ctxRadar = document.getElementById('radarChart').getContext('2d');
new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: materias,
        datasets: [{
            label: 'Notas',
            data: notasgrafico3,
            backgroundColor: 'rgba(75, 192, 192, 0.4)', 
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            pointRadius: 5, 
            
            pointBackgroundColor: bordasPorMateria, 
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: bordasPorMateria
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    font: { size: 12 }
                }
            }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});


const coresGraficosCirculares = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
];

// 4. Gráfico de Pizza (Pie Chart)
const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: materias,
        datasets: [{
            label: 'Média Anual',
            data: mediasAnuais,
            backgroundColor: coresGraficosCirculares,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'right' }
        }
    }
});


const notasgrafico5 = [5, 9.5, 7.0, 8.5, 5.5, 6];
const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: materias,
        datasets: [{
            label: 'Habilidades',
            data: notasgrafico5,
            backgroundColor: coresGraficosCirculares,
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'right' }
        }
    }
});



const notasgrafico6 = [5, 9.5, 7.0, 8.5, 5.5, 6];
const ctxPolar = document.getElementById('polarAreaChart').getContext('2d');
new Chart(ctxPolar, {
    type: 'polarArea',
    data: {
        labels: materias,
        datasets: [{
            label: 'Comprometimento',
            data: notasgrafico6,
            backgroundColor: coresPorMateria, 
            borderColor: 'white',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 10 
            }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});