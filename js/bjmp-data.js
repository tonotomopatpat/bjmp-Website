const bjmpData = {
    "NCR": {
        cluster: 0, clusterName: "Critical Risk", clusterColor: "#FB4934",
        pdl: 23084, jails: 40, det: 20289, sent: 2795,
        cong: 403, ideal: 4658, actual: 18863,
        tc: 30534, m: 1023, h: 313, r: 1566, rob: 797, t: 810,
        dt: 14358, ds: 3526, da: 10832,
        com: 1957, rel: 2190,
        age: { "Below 18": 2, "Age 18-30": 7459, "Age 31-41": 7632, "Above 42": 7991 }
    },

    "Region I": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 1969, jails: 21, det: 1918, sent: 51,
        cong: 110, ideal: 838, actual: 1702,
        tc: 3536, m: 272, h: 72, r: 577, rob: 42, t: 231,
        dt: 1286, ds: 5, da: 1281,
        com: 160, rel: 184,
        age: { "Below 18": 4, "Age 18-30": 630, "Age 31-41": 624, "Above 42": 711 }
    },

    "Region II": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 1969, jails: 20, det: 1773, sent: 196,
        cong: 148, ideal: 998, actual: 1452,
        tc: 3245, m: 206, h: 58, r: 723, rob: 58, t: 237,
        dt: 882, ds: 60, da: 822,
        com: 137, rel: 135,
        age: { "Below 18": 10, "Age 18-30": 1050, "Age 31-41": 900, "Above 42": 1009 }
    },

    "Region III": {
        cluster: 2, clusterName: "Moderate Risk", clusterColor: "#FABD2F",
        pdl: 8811, jails: 41, det: 7583, sent: 1228,
        cong: 289, ideal: 2988, actual: 8382,
        tc: 15111, m: 294, h: 163, r: 778, rob: 227, t: 267,
        dt: 6056, ds: 1164, da: 4892,
        com: 759, rel: 694,
        age: { "Below 18": 10, "Age 18-30": 2832, "Age 31-41": 2693, "Above 42": 3276 }
    },

    "CALABARZON": {
        cluster: 1, clusterName: "High Risk", clusterColor: "#FE8019",
        pdl: 19222, jails: 67, det: 15332, sent: 3890,
        cong: 468, ideal: 4737, actual: 19029,
        tc: 28007, m: 1039, h: 394, r: 2051, rob: 501, t: 477,
        dt: 13203, ds: 2612, da: 10591,
        com: 1146, rel: 1203,
        age: { "Below 18": 6, "Age 18-30": 5761, "Age 31-41": 6295, "Above 42": 7160 }
    },

    "MIMAROPA": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 2116, jails: 19, det: 2062, sent: 54,
        cong: 186, ideal: 899, actual: 1776,
        tc: 2995, m: 460, h: 107, r: 713, rob: 99, t: 122,
        dt: 640, ds: 10, da: 630,
        com: 89, rel: 92,
        age: { "Below 18": 0, "Age 18-30": 515, "Age 31-41": 465, "Above 42": 1136 }
    },

    "Region V": {
        cluster: 2, clusterName: "Moderate Risk", clusterColor: "#FABD2F",
        pdl: 3765, jails: 36, det: 3571, sent: 194,
        cong: 354, ideal: 1239, actual: 4453,
        tc: 6041, m: 393, h: 84, r: 1299, rob: 101, t: 57,
        dt: 1831, ds: 80, da: 1751,
        com: 291, rel: 277,
        age: { "Below 18": 7, "Age 18-30": 1031, "Age 31-41": 1189, "Above 42": 1538 }
    },

    "Region VI": {
        cluster: 2, clusterName: "Moderate Risk", clusterColor: "#FABD2F",
        pdl: 5147, jails: 20, det: 4624, sent: 523,
        cong: 127, ideal: 1032, actual: 1804,
        tc: 9100, m: 769, h: 185, r: 1052, rob: 106, t: 61,
        dt: 3110, ds: 124, da: 2986,
        com: 222, rel: 119,
        age: { "Below 18": 2, "Age 18-30": 1454, "Age 31-41": 1663, "Above 42": 2028 }
    },

    "Region VII": {
        cluster: 1, clusterName: "High Risk", clusterColor: "#FE8019",
        pdl: 15919, jails: 32, det: 13479, sent: 2440,
        cong: 335, ideal: 4578, actual: 15859,
        tc: 23640, m: 965, h: 221, r: 1190, rob: 251, t: 211,
        dt: 12306, ds: 1867, da: 10439,
        com: 909, rel: 892,
        age: { "Below 18": 6, "Age 18-30": 2232, "Age 31-41": 2601, "Above 42": 11080 }
    },

    "Region VIII": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 1957, jails: 37, det: 1791, sent: 166,
        cong: 127, ideal: 1032, actual: 1804,
        tc: 2545, m: 198, h: 89, r: 272, rob: 45, t: 49,
        dt: 956, ds: 17, da: 939,
        com: 146, rel: 107,
        age: { "Below 18": 0, "Age 18-30": 1232, "Age 31-41": 1313, "Above 42": 1412 }
    },

    "Region IX": {
        cluster: 2, clusterName: "Moderate Risk", clusterColor: "#FABD2F",
        pdl: 4599, jails: 21, det: 4448, sent: 151,
        cong: 398, ideal: 646, actual: 2938,
        tc: 5670, m: 646, h: 129, r: 1050, rob: 94, t: 57,
        dt: 2082, ds: 73, da: 2009,
        com: 295, rel: 219,
        age: { "Below 18": 0, "Age 18-30": 1769, "Age 31-41": 1831, "Above 42": 999 }
    },

    "Region X": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 6400, jails: 28, det: 5790, sent: 610,
        cong: 156, ideal: 2075, actual: 6216,
        tc: 9810, m: 420, h: 112, r: 651, rob: 109, t: 78,
        dt: 4146, ds: 330, da: 3816,
        com: 493, rel: 462,
        age: { "Below 18": 0, "Age 18-30": 2137, "Age 31-41": 2079, "Above 42": 2184 }
    },

    "Region XI": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 5566, jails: 13, det: 5069, sent: 497,
        cong: 144, ideal: 1793, actual: 5238,
        tc: 6308, m: 341, h: 135, r: 507, rob: 65, t: 53,
        dt: 4201, ds: 92, da: 4109,
        com: 359, rel: 324,
        age: { "Below 18": 74, "Age 18-30": 1769, "Age 31-41": 2075, "Above 42": 1648 }
    },

    "Region XII": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 2509, jails: 15, det: 2298, sent: 211,
        cong: 228, ideal: 872, actual: 2326,
        tc: 4109, m: 338, h: 96, r: 617, rob: 61, t: 46,
        dt: 1281, ds: 45, da: 1236,
        com: 209, rel: 162,
        age: { "Below 18": 0, "Age 18-30": 723, "Age 31-41": 698, "Above 42": 1088 }
    },

    "CARAGA": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 2182, jails: 12, det: 2182, sent: 112,
        cong: 108, ideal: 1104, actual: 2089,
        tc: 3065, m: 377, h: 61, r: 452, rob: 72, t: 54,
        dt: 929, ds: 12, da: 917,
        com: 174, rel: 197,
        age: { "Below 18": 10, "Age 18-30": 626, "Age 31-41": 869, "Above 42": 677 }
    },

    "CAR": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 823, jails: 20, det: 756, sent: 67,
        cong: 105, ideal: 444, actual: 695,
        tc: 1248, m: 92, h: 32, r: 296, rob: 25, t: 139,
        dt: 305, ds: 24, da: 281,
        com: 102, rel: 87,
        age: { "Below 18": 0, "Age 18-30": 270, "Age 31-41": 252, "Above 42": 301 }
    },

    "BARMM": {
        cluster: 3, clusterName: "Manageable", clusterColor: "#B8BB26",
        pdl: 904, jails: 12, det: 794, sent: 110,
        cong: 171, ideal: 311, actual: 734,
        tc: 1225, m: 113, h: 11, r: 47, rob: 11, t: 8,
        dt: 642, ds: 94, da: 548,
        com: 59, rel: 22,
        age: { "Below 18": 30, "Age 18-30": 285, "Age 31-41": 277, "Above 42": 312 }
    },

    "NIR": {
        cluster: 2, clusterName: "Moderate Risk", clusterColor: "#FABD2F",
        pdl: 7727, jails: 32, det: 6433, sent: 1294,
        cong: 289, ideal: 2421, actual: 7727,
        tc: 11400, m: 1066, h: 315, r: 1075, rob: 168, t: 77,
        dt: 4469, ds: 495, da: 3974,
        com: 359, rel: 324,
        age: { "Below 18": 0, "Age 18-30": 2306, "Age 31-41": 2636, "Above 42": 2785 }
    }
};