
var regionNameMap = {
    "National Capital Region":"NCR",
    "Ilocos":"Region I",
    "Cagayan Valley":"Region II",
    "Central Luzon":"Region III",
    "Calabarzon":"CALABARZON",
    "Mimaropa":"MIMAROPA",
    "Bicol":"Region V",
    "Western Visayas":"Region VI",
    "Central Visayas":"Region VII",
    "Eastern Visayas":"Region VIII",
    "Zamboanga Peninsula":"Region IX",
    "Northern Mindanao":"Region X",
    "Davao":"Region XI",
    "Soccsksargen":"Region XII",
    "Caraga":"CARAGA",
    "Cordillera Administrative Region":"CAR",
    "Autonomous Region in Muslim Mindanao":"BARMM",
    "Negros Island Region": "NIR"
};

var clusterColors={
    0: "#FB4934",
    1: "#FE8019",
    2: "#FABF2F",
    3:"#B8BB26"
};

var selectedLayer = null;

var map = L.map('map', {
    center: [12.5, 122.5],
    zoom: 5,
    zoomControl: true,
    attributionControl: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

function getRegionStyle(feature) {
    var geoName = feature.properties.name;
    var bjmpKey = regionNameMap[geoName];
    var d = bjmpKey ? bjmpData[bjmpKey] : null;
    var color = d ? clusterColors[d.cluster] : "#665C54";

    return {
        fillColor:color,
        fillOpacity: 0.75,
        color:"#1D2021",
        weight:1.5,
        opacity:1
    };
}

function highlightRegion(e){
    var layer=e.target;
    layer.setStyle({fillOpacity: 0.95, weight:2.5, color:"#EBDBB2"
    });
    layer.bringToFront();
}
function resetHighlight(e) {
    if (selectedLayer !== e.target) {
        geojsonLayer.resetStyle(e.target);
    }
}



function onRegionClick(e) {
    var layer = e.target;
    var geoName = layer.feature.properties.name;
    var bjmpKey = regionNameMap[geoName];
    if (selectedLayer) {
        geojsonLayer.resetStyle(selectedLayer);
    }
    layer.setStyle({
        fillOpacity: 0.95,
        weight:      3,
        color:       "#EBDBB2"
    });
    layer.bringToFront();
    selectedLayer = layer;
    if (bjmpKey && bjmpData[bjmpKey]) {
        showSidebar(bjmpKey, bjmpData[bjmpKey]);
    } else {
        showNoData(geoName);
    }
}


var geojsonLayer;
fetch('data/ph-regions.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        geojsonLayer=L.geoJSON(data,{
            style:getRegionStyle,
            onEachFeature: function(feature, layer){
                layer.on({
                    mouseover:highlightRegion,
                    mouseout:resetHighlight,
                    click:onRegionClick
                });

                var geoName=feature.properties.name;
                var bjmpKey=regionNameMap[geoName];
                var d = bjmpKey ? bjmpData[bjmpKey] : null;
                var clusterName = d ? d.clusterName : "No Data";
                layer.bindTooltip(
                    '<strong>' + geoName + '</strong><br>' + clusterName, { sticky: true, className: 'map-tooltip'}
                );
            }
        }).addTo(map);
        // map.fitBounds(geojsonLayer.getBounds());
    })
    .catch(function(err){
        console.error('Error loading geojson:', err);
    });

function showSidebar(regionName, d) {
    document.getElementById('sbDefault').style.display = 'none';
    var detail = document.getElementById('sbDetail');
    detail.style.display = 'flex';

    document.getElementById('sdName').textContent = regionName;

    var badge = document.getElementById('sdBadge');
    badge.textContent = '● ' + d.clusterName + ' — Cluster ' + d.cluster;
    badge.style.backgroundColor = d.clusterColor;

    document.getElementById('sdPDL').textContent    = d.pdl.toLocaleString();
    document.getElementById('sdJails').textContent  = d.jails;
    document.getElementById('sdDet').textContent    = d.det.toLocaleString();
    document.getElementById('sdSent').textContent   = d.sent.toLocaleString();
    document.getElementById('sdCong').textContent   = d.cong + '%';
    document.getElementById('sdIdeal').textContent  = d.ideal.toLocaleString();
    document.getElementById('sdActual').textContent = d.actual.toLocaleString();

    var congPct = Math.min((d.cong / 500) * 100, 100);
    document.getElementById('sdCongBar').style.width = congPct + '%';

    document.getElementById('sdTC').textContent  = d.tc.toLocaleString();
    document.getElementById('sdM').textContent   = d.m.toLocaleString();
    document.getElementById('sdH').textContent   = d.h.toLocaleString();
    document.getElementById('sdR').textContent   = d.r.toLocaleString();
    document.getElementById('sdRob').textContent = d.rob.toLocaleString();
    document.getElementById('sdT').textContent   = d.t.toLocaleString();

    document.getElementById('sdDT').textContent = d.dt.toLocaleString();
    document.getElementById('sdDS').textContent = d.ds.toLocaleString();
    document.getElementById('sdDA').textContent = d.da.toLocaleString();

    document.getElementById('sdCom').textContent = d.com.toLocaleString();
    document.getElementById('sdRel').textContent = d.rel.toLocaleString();

    var net = d.com - d.rel;
    var netEl = document.getElementById('sdFlowNet');
    if (net > 0) {
        netEl.textContent = '↑ Net +' + net + ' — population growing';
        netEl.style.color = '#FB4934';
    } else if (net < 0) {
        netEl.textContent = '↓ Net ' + net + ' — population shrinking';
        netEl.style.color = '#B8BB26';
    } else {
        netEl.textContent = '→ Net 0 — population stable';
        netEl.style.color = '#A89984';
    }

    var ages = d.age;
    var maxAge = Math.max.apply(null, Object.values(ages));
    var ageHtml = '';
    for (var label in ages) {
        var val = ages[label];
        var pct = ((val / maxAge) * 100).toFixed(0);
        ageHtml += '<div class="age-row">';
        ageHtml += '<span class="age-lbl">' + label + '</span>';
        ageHtml += '<div class="age-track"><div class="age-fill" style="width:' + pct + '%"></div></div>';
        ageHtml += '<span class="age-val">' + val.toLocaleString() + '</span>';
        ageHtml += '</div>';
    }
    document.getElementById('sdAge').innerHTML = ageHtml;

    detail.scrollTop = 0;
}

function showNoData(name) {
    document.getElementById('sbDefault').style.display = 'none';
    var detail = document.getElementById('sbDetail');
    detail.style.display = 'flex';
    document.getElementById('sdName').textContent = name;
    var badge = document.getElementById('sdBadge');
    badge.textContent = 'No BJMP Data Available';
    badge.style.backgroundColor = '#665C54';
}

function resetSidebar() {
    if (selectedLayer) {
        geojsonLayer.resetStyle(selectedLayer);
        selectedLayer = null;
    }
    document.getElementById('sbDefault').style.display = 'flex';
    document.getElementById('sbDetail').style.display = 'none';
}