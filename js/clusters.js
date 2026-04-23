Chart.defaults.color = '#A89984';
Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
Chart.defaults.font.size = 11;

const CL_LABELS  = ['Cluster 2\n(Critical)', 'Cluster 1\n(High)', 'Cluster 0\n(Moderate)', 'Cluster 3\n(Manageable)'];
const CL_COLORS  = ['#FB4934', '#FE8019', '#FABD2F', '#B8BB26'];
const CL_ALPHA   = ['rgba(251,73,52,0.75)', 'rgba(254,128,25,0.75)', 'rgba(250,189,47,0.75)', 'rgba(184,187,38,0.75)'];

const baseOpts = (yLabel = '') => ({
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: '#1D2021',
            borderColor: '#504945',
            borderWidth: 1,
            titleColor: '#EBDBB2',
            bodyColor: '#A89984',
            padding: 10,
        }
    },
    scales: {
        x: {
            ticks: { color: '#A89984', font: { size: 10 } },
            grid:  { color: 'rgba(80,73,69,0.3)' }
        },
        y: {
            ticks: { color: '#A89984', font: { size: 10 } },
            grid:  { color: 'rgba(80,73,69,0.3)' },
            title: { display: !!yLabel, text: yLabel, color: '#665C54', font: { size: 10 } }
        }
    }
});

// average total PDL
new Chart(document.getElementById('chartClusterPDL'), {
    type: 'bar',
    data: {
        labels: CL_LABELS,
        datasets: [{ label: 'Avg Total PDL', data: [23084, 17570.5, 6009.8, 2679.1], backgroundColor: CL_ALPHA, borderColor: CL_COLORS, borderWidth: 2, borderRadius: 6 }]
    },
    options: baseOpts('PDL Population')
});

// average congestion rate
new Chart(document.getElementById('chartClusterCongestion'), {
    type: 'bar',
    data: {
        labels: CL_LABELS,
        datasets: [{ label: 'Avg Congestion Rate (%)', data: [403, 401.5, 291.4, 148.3], backgroundColor: CL_ALPHA, borderColor: CL_COLORS, borderWidth: 2, borderRadius: 6 }]
    },
    options: baseOpts('Congestion Rate (%)')
});

// average drug cases
new Chart(document.getElementById('chartClusterDrug'), {
    type: 'bar',
    data: {
        labels: CL_LABELS,
        datasets: [{ label: 'Avg Drug Cases', data: [14358, 12754.5, 3509.6, 1297], backgroundColor: CL_ALPHA, borderColor: CL_COLORS, borderWidth: 2, borderRadius: 6 }]
    },
    options: baseOpts('Drug Cases')
});

// average total crimes
new Chart(document.getElementById('chartClusterCrimes'), {
    type: 'bar',
    data: {
        labels: CL_LABELS,
        datasets: [{ label: 'Avg Total Crimes', data: [30534, 25823.5, 9464.4, 4684], backgroundColor: CL_ALPHA, borderColor: CL_COLORS, borderWidth: 2, borderRadius: 6 }]
    },
    options: baseOpts('Total Crimes')
});

// elbow method
new Chart(document.getElementById('chartElbow'), {
    type: 'line',
    data: {
        labels: [2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: 'WCSS',
            data: [37.3699, 24.1717, 17.1152, 12.7915, 9.5759, 7.3883, 5.7041],
            borderColor: '#FE8019',
            backgroundColor: 'rgba(254,128,25,0.08)',
            borderWidth: 2.5,
            pointBackgroundColor: ['#FE8019','#FE8019','#FB4934','#FE8019','#FE8019','#FE8019','#FE8019'],
            pointRadius:          [5,5,9,5,5,5,5],
            pointBorderColor: '#1D2021',
            pointBorderWidth: 2,
            fill: true,
            tension: 0.35,
        }]
    },
    options: {
        ...baseOpts('WCSS'),
        plugins: { ...baseOpts().plugins }
    }
});

// silhouette scores
new Chart(document.getElementById('chartSilhouette'), {
    type: 'bar',
    data: {
        labels: [2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: 'Silhouette Score',
            data: [0.6256, 0.3958, 0.3752, 0.3737, 0.3346, 0.3253, 0.2900],
            backgroundColor: ['rgba(254,128,25,0.5)','rgba(254,128,25,0.5)','rgba(251,73,52,0.85)','rgba(254,128,25,0.5)','rgba(254,128,25,0.5)','rgba(254,128,25,0.5)','rgba(254,128,25,0.5)'],
            borderColor:      ['#FE8019','#FE8019','#FB4934','#FE8019','#FE8019','#FE8019','#FE8019'],
            borderWidth: 2,
            borderRadius: 6,
        }]
    },
    options: baseOpts('Silhouette Score')
});