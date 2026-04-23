# 🏛️ JailWatch PH — Philippine Jail Risk Profiling System

> **IT Elective 2 — Final Project** | K-Means Clustering | BJMP Regional Data | Interactive Web Application

---

## 📌 Project Overview

**JailWatch PH** is a machine learning–powered web application that applies **K-Means Clustering** to official BJMP (Bureau of Jail Management and Penology) regional jail data across all **18 Philippine administrative regions**. The system groups regions into meaningful risk profiles based on jail population, congestion rates, drug case concentration, and crime patterns — providing a data-driven tool to support BJMP policy decisions and resource allocation.

> ⚠️ This project is developed solely for **academic purposes** as a final requirement for IT Elective 2. All data is sourced from official BJMP public statistical reports (As of July 31, 2025).

---

## 🌐 Live Demo

🔗 **[View Live Site](https://your-username.github.io/jailwatch-ph)**


---

## 🖼️ Screenshots

| Home Page | Risk Map | Cluster Analysis |
|---|---|---|
| ![Home](screenshots/home.png) | ![Map](screenshots/map.png) | ![Clusters](screenshots/clusters.png) |

---

## 🎯 Research Questions

1. How can the 18 administrative regions of the Philippines be meaningfully grouped based on their BJMP jail population, congestion, crime, and drug case profiles using K-Means clustering?
2. What BJMP features — such as congestion rate, drug case volume, total PDL population, and committed/released ratio — characterize and differentiate the resulting regional clusters?
3. What is the optimal number of clusters that best captures the variation in regional jail conditions across the BJMP dataset?
4. What characteristics define each cluster, and what implications do these groupings carry for BJMP resource allocation, decongestion strategies, and rehabilitation programming?

---

## 🧠 Machine Learning

### Algorithm
**K-Means Clustering** (Unsupervised Learning) via Python's `scikit-learn`

### Features Used (6)
| Feature | Description |
|---|---|
| Total PDL | Total Persons Deprived of Liberty per region |
| Avg Congestion Rate | How far above capacity the jails are (%) |
| Total Drug Cases | PDLs with RA 9165 drug-related charges |
| Total Crimes | Total index + non-index crimes charged |
| Violence Index | Murder + Homicide combined |
| Net PDL Flow | Committed − Released (monthly) |

### Optimal k Selection
- **Elbow Method** — WCSS plotted for k=2 to k=8, elbow identified at k=4
- **Silhouette Score** — k=4 chosen balancing statistical validity and real-world interpretability

### Cluster Results

| Cluster | Risk Level | Regions | Avg PDL | Avg Congestion |
|---|---|---|---|---|
| Cluster 2 | 🔴 Critical Risk | NCR | 23,084 | 403% |
| Cluster 1 | 🟠 High Risk | Region VII, CALABARZON | 17,570 | 401.5% |
| Cluster 0 | 🟡 Moderate Risk | Region III, VI, V, IX, NIR | 6,009 | 291.4% |
| Cluster 3 | 🟢 Manageable | 10 regions | 2,679 | 148.3% |

---

## 📊 Dataset

### Source
All data is from **official BJMP (Bureau of Jail Management and Penology)** statistical publications **as of July 31, 2025**.

### 8 Source Tables Merged
1. BJMP Actual Jail Population
2. BJMP Jurisdiction of Jails
3. BJMP Number of Crimes Charged
4. BJMP Congestion Rate Status
5. BJMP PDL Age Bracket
6. BJMP Data on PDL with Drug Cases
7. BJMP PDL Committed and Released
8. BJMP Data on Escorted PDL *(excluded from ML, used for reference)*

### Final Merged Dataset
- **18 regions** × **30 features**
- Merge key: `Region` (horizontal LEFT JOIN across all tables)
- Available as `BJMP_Merged_Dataset.xlsx`

---

## 🌟 Features of the Web Application

### 🗺️ Interactive Philippine Risk Map
- Real Philippine regional map using **Leaflet.js** + **GeoJSON**
- Regions color-coded by K-Means cluster assignment
- Click any region to view its complete BJMP jail profile in the sidebar
- Hover tooltips showing region name and cluster

### 📊 Regional Dashboard
- Region selector dropdown
- 6 key metric cards per region
- Charts: PDL breakdown, crime types, drug cases, age profile
- Congestion rate gauge
- Monthly PDL flow (Committed vs Released)
- Full 30-feature data table

### 🔵 Cluster Analysis Page
- 4 cluster cards with real centroid values
- Elbow Method results table (WCSS k=2 to k=8)
- Silhouette Score results table
- Side-by-side cluster comparison table
- Policy implications per cluster

### 🏠 Home Page
- Project overview and key nationwide statistics
- 7-category dataset breakdown (30 features)
- 4 cluster preview cards with real ML results

---

## 🛠️ Tech Stack

### Machine Learning
| Tool | Purpose |
|---|---|
| Python 3 | Main programming language |
| pandas | Data loading and merging |
| numpy | Numerical operations |
| scikit-learn | KMeans, StandardScaler, silhouette_score |
| matplotlib | Elbow Method and scatter plot charts |
| openpyxl | Reading/writing Excel files |

### Web Application
| Tool | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript (ES6) | Interactivity and data binding |
| Leaflet.js | Interactive Philippine map |
| GeoJSON | Philippine regional boundaries |
| Google Fonts | Playfair Display + Plus Jakarta Sans |

---

## 📁 Project Structure

```
jailwatch-ph/
├── index.html              # Home page
├── map.html                # Interactive Risk Map
├── clusters.html           # Cluster Analysis
├── dashboard.html          # Regional Dashboard
├── about.html              # About / Methodology
│
├── css/
│   ├── index.css           # Home page styles
│   ├── map.css             # Map page styles
│   ├── clusters.css        # Clusters page styles
│   └── dashboard.css       # Dashboard styles
│
├── js/
│   ├── bjmp-data.js        # All 18 regions BJMP data + cluster assignments
│   ├── map.js              # Leaflet map logic + sidebar interaction
│   └── dashboard.js        # Dashboard charts and data binding
│
├── data/
│   └── ph-regions.json     # Philippine regional GeoJSON boundaries
│
├── python/
│   ├── kmeans_clustering.py        # Complete K-Means clustering script
│   ├── BJMP_Merged_Dataset.xlsx    # Merged dataset (18 regions × 30 features)
│   └── BJMP_Clustering_Results.xlsx # Final clustering output
│
└── README.md
```

---

## 🚀 How to Run Locally

### Web Application
1. Clone the repository:
```bash
git clone https://github.com/your-username/jailwatch-ph.git
cd jailwatch-ph
```

2. Start a local server (required for GeoJSON fetch to work):
```bash
# Using Python
python -m http.server 5500

# Or using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

3. Open your browser and go to:
```
http://127.0.0.1:5500
```

### Python Clustering Script
1. Install required libraries:
```bash
pip install pandas numpy matplotlib scikit-learn openpyxl
```

2. Put `kmeans_clustering.py` and `BJMP_Merged_Dataset.xlsx` in the same folder

3. Run:
```bash
python kmeans_clustering.py
```

4. Outputs generated:
- `elbow_method.png` — Elbow Method chart
- `silhouette_scores.png` — Silhouette Score chart
- `kmeans_scatter.png` — Cluster scatter plot
- `BJMP_Clustering_Results.xlsx` — Full results table

---

---

## 📋 Objectives

1. Collect, clean, and consolidate the eight BJMP statistical tables into a unified dataset structured for machine learning analysis.
2. Implement K-Means clustering using Python's scikit-learn to group the 18 administrative regions based on six key features.
3. Determine the optimal number of clusters (k) using the Elbow Method and Silhouette Score.
4. Analyze and interpret each cluster to identify shared regional jail conditions and patterns.
5. Develop an interactive website that presents clustering results through a Philippine map, charts, and regional summaries.

---

---

## 📚 Data Source

**Bureau of Jail Management and Penology (BJMP)**
- Official statistical reports as of July 31, 2025
- All data is publicly available from BJMP official publications
- Website: [bjmp.gov.ph](https://bjmp.gov.ph)

---

## 📄 License

This project is for **academic purposes only**. All BJMP data used is from official public publications. No data was used for commercial purposes.

---

*IT Elective 2 — Final Project | 2026 | Best Group 🏆*
