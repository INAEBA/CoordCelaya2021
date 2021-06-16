var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionCelaya_3 = new ol.format.GeoJSON();
var features_CoordinacionCelaya_3 = format_CoordinacionCelaya_3.readFeatures(json_CoordinacionCelaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionCelaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionCelaya_3.addFeatures(features_CoordinacionCelaya_3);
var lyr_CoordinacionCelaya_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionCelaya_3, 
                style: style_CoordinacionCelaya_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionCelaya_3.png" /> Coordinacion Celaya'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionCE12_5 = new ol.format.GeoJSON();
var features_MicroregionCE12_5 = format_MicroregionCE12_5.readFeatures(json_MicroregionCE12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE12_5.addFeatures(features_MicroregionCE12_5);
var lyr_MicroregionCE12_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE12_5, 
                style: style_MicroregionCE12_5,
                interactive: false,
    title: 'Microregion CE12<br />\
    <img src="styles/legend/MicroregionCE12_5_0.png" /> 2 - 25 Personas<br />\
    <img src="styles/legend/MicroregionCE12_5_1.png" /> 25 - 74 Personas<br />\
    <img src="styles/legend/MicroregionCE12_5_2.png" /> 74 - 180 Personas<br />\
    <img src="styles/legend/MicroregionCE12_5_3.png" /> 180 - 328 Personas<br />\
    <img src="styles/legend/MicroregionCE12_5_4.png" /> 328 - 478 Personas<br />'
        });
var format_MicroregionCE112N_6 = new ol.format.GeoJSON();
var features_MicroregionCE112N_6 = format_MicroregionCE112N_6.readFeatures(json_MicroregionCE112N_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE112N_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE112N_6.addFeatures(features_MicroregionCE112N_6);
var lyr_MicroregionCE112N_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE112N_6, 
                style: style_MicroregionCE112N_6,
                interactive: false,
    title: 'Microregion CE11-2N<br />\
    <img src="styles/legend/MicroregionCE112N_6_0.png" /> 1 - 18 Personas<br />\
    <img src="styles/legend/MicroregionCE112N_6_1.png" /> 18 - 50 Personas<br />\
    <img src="styles/legend/MicroregionCE112N_6_2.png" /> 50 - 132 Personas<br />\
    <img src="styles/legend/MicroregionCE112N_6_3.png" /> 132 - 288 Personas<br />\
    <img src="styles/legend/MicroregionCE112N_6_4.png" /> 288 - 503 Personas<br />'
        });
var format_MicroregionCE111N_7 = new ol.format.GeoJSON();
var features_MicroregionCE111N_7 = format_MicroregionCE111N_7.readFeatures(json_MicroregionCE111N_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE111N_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE111N_7.addFeatures(features_MicroregionCE111N_7);
var lyr_MicroregionCE111N_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE111N_7, 
                style: style_MicroregionCE111N_7,
                interactive: false,
    title: 'Microregion CE11-1N<br />\
    <img src="styles/legend/MicroregionCE111N_7_0.png" /> 2 - 20 Personas<br />\
    <img src="styles/legend/MicroregionCE111N_7_1.png" /> 20 - 57 Personas<br />\
    <img src="styles/legend/MicroregionCE111N_7_2.png" /> 57 - 124 Personas<br />\
    <img src="styles/legend/MicroregionCE111N_7_3.png" /> 124 - 281 Personas<br />\
    <img src="styles/legend/MicroregionCE111N_7_4.png" /> 281 - 486 Personas<br />'
        });
var format_MicroregionCE10_8 = new ol.format.GeoJSON();
var features_MicroregionCE10_8 = format_MicroregionCE10_8.readFeatures(json_MicroregionCE10_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE10_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE10_8.addFeatures(features_MicroregionCE10_8);
var lyr_MicroregionCE10_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE10_8, 
                style: style_MicroregionCE10_8,
                interactive: false,
    title: 'Microregion CE10<br />\
    <img src="styles/legend/MicroregionCE10_8_0.png" /> 2 - 28 Personas<br />\
    <img src="styles/legend/MicroregionCE10_8_1.png" /> 28 - 80 Personas<br />\
    <img src="styles/legend/MicroregionCE10_8_2.png" /> 80 - 191 Personas<br />\
    <img src="styles/legend/MicroregionCE10_8_3.png" /> 191 - 404 Personas<br />\
    <img src="styles/legend/MicroregionCE10_8_4.png" /> 404 - 728 Personas<br />'
        });
var format_MicroregionCE09_9 = new ol.format.GeoJSON();
var features_MicroregionCE09_9 = format_MicroregionCE09_9.readFeatures(json_MicroregionCE09_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE09_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE09_9.addFeatures(features_MicroregionCE09_9);
var lyr_MicroregionCE09_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE09_9, 
                style: style_MicroregionCE09_9,
                interactive: false,
    title: 'Microregion CE09<br />\
    <img src="styles/legend/MicroregionCE09_9_0.png" /> 3 - 14 Personas<br />\
    <img src="styles/legend/MicroregionCE09_9_1.png" /> 14 - 31 Personas<br />\
    <img src="styles/legend/MicroregionCE09_9_2.png" /> 31 - 53 Personas<br />\
    <img src="styles/legend/MicroregionCE09_9_3.png" /> 53 - 89 Personas<br />\
    <img src="styles/legend/MicroregionCE09_9_4.png" /> 89 - 183 Personas<br />'
        });
var format_MicroregionCE08_10 = new ol.format.GeoJSON();
var features_MicroregionCE08_10 = format_MicroregionCE08_10.readFeatures(json_MicroregionCE08_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE08_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE08_10.addFeatures(features_MicroregionCE08_10);
var lyr_MicroregionCE08_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE08_10, 
                style: style_MicroregionCE08_10,
                interactive: false,
    title: 'Microregion CE08<br />\
    <img src="styles/legend/MicroregionCE08_10_0.png" /> 1 - 13 Personas <br />\
    <img src="styles/legend/MicroregionCE08_10_1.png" /> 13 - 30 Personas <br />\
    <img src="styles/legend/MicroregionCE08_10_2.png" /> 30 - 65 Personas <br />\
    <img src="styles/legend/MicroregionCE08_10_3.png" /> 65 - 160 Personas <br />\
    <img src="styles/legend/MicroregionCE08_10_4.png" /> 160 - 433 Personas <br />'
        });
var format_MicroregionCE07_11 = new ol.format.GeoJSON();
var features_MicroregionCE07_11 = format_MicroregionCE07_11.readFeatures(json_MicroregionCE07_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE07_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE07_11.addFeatures(features_MicroregionCE07_11);
var lyr_MicroregionCE07_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE07_11, 
                style: style_MicroregionCE07_11,
                interactive: false,
    title: 'Microregion CE07<br />\
    <img src="styles/legend/MicroregionCE07_11_0.png" /> 1 - 26 Personas<br />\
    <img src="styles/legend/MicroregionCE07_11_1.png" /> 26 - 78 Personas<br />\
    <img src="styles/legend/MicroregionCE07_11_2.png" /> 78 - 203 Personas<br />\
    <img src="styles/legend/MicroregionCE07_11_3.png" /> 203 - 407 Personas<br />\
    <img src="styles/legend/MicroregionCE07_11_4.png" /> 407 - 659 Personas<br />'
        });
var format_MicroregionCE06_12 = new ol.format.GeoJSON();
var features_MicroregionCE06_12 = format_MicroregionCE06_12.readFeatures(json_MicroregionCE06_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE06_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE06_12.addFeatures(features_MicroregionCE06_12);
var lyr_MicroregionCE06_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE06_12, 
                style: style_MicroregionCE06_12,
                interactive: false,
    title: 'Microregion CE06<br />\
    <img src="styles/legend/MicroregionCE06_12_0.png" /> 3 - 21 Personas<br />\
    <img src="styles/legend/MicroregionCE06_12_1.png" /> 21 - 63 Personas<br />\
    <img src="styles/legend/MicroregionCE06_12_2.png" /> 63 - 157 Personas<br />\
    <img src="styles/legend/MicroregionCE06_12_3.png" /> 157 - 388 Personas<br />\
    <img src="styles/legend/MicroregionCE06_12_4.png" /> 388 - 590 Personas<br />'
        });
var format_MicroregionCE05_13 = new ol.format.GeoJSON();
var features_MicroregionCE05_13 = format_MicroregionCE05_13.readFeatures(json_MicroregionCE05_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE05_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE05_13.addFeatures(features_MicroregionCE05_13);
var lyr_MicroregionCE05_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE05_13, 
                style: style_MicroregionCE05_13,
                interactive: false,
    title: 'Microregion CE05<br />\
    <img src="styles/legend/MicroregionCE05_13_0.png" /> 2 - 17 Personas<br />\
    <img src="styles/legend/MicroregionCE05_13_1.png" /> 17 - 48 Personas<br />\
    <img src="styles/legend/MicroregionCE05_13_2.png" /> 48 - 111 Personas<br />\
    <img src="styles/legend/MicroregionCE05_13_3.png" /> 111 - 428 Personas<br />\
    <img src="styles/legend/MicroregionCE05_13_4.png" /> 428 - 705 Personas<br />'
        });
var format_MicroregionCE04_14 = new ol.format.GeoJSON();
var features_MicroregionCE04_14 = format_MicroregionCE04_14.readFeatures(json_MicroregionCE04_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE04_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE04_14.addFeatures(features_MicroregionCE04_14);
var lyr_MicroregionCE04_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE04_14, 
                style: style_MicroregionCE04_14,
                interactive: false,
    title: 'Microregion CE04<br />\
    <img src="styles/legend/MicroregionCE04_14_0.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionCE04_14_1.png" /> 12 - 29 Personas<br />\
    <img src="styles/legend/MicroregionCE04_14_2.png" /> 29 - 56 Personas<br />\
    <img src="styles/legend/MicroregionCE04_14_3.png" /> 56 - 99 Personas<br />\
    <img src="styles/legend/MicroregionCE04_14_4.png" /> 99 - 170 Personas<br />'
        });
var format_MicroregionCE0103_15 = new ol.format.GeoJSON();
var features_MicroregionCE0103_15 = format_MicroregionCE0103_15.readFeatures(json_MicroregionCE0103_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionCE0103_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionCE0103_15.addFeatures(features_MicroregionCE0103_15);
var lyr_MicroregionCE0103_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionCE0103_15, 
                style: style_MicroregionCE0103_15,
                interactive: false,
    title: 'Microregion CE01-03<br />\
    <img src="styles/legend/MicroregionCE0103_15_0.png" /> 3 - 8 Personas<br />\
    <img src="styles/legend/MicroregionCE0103_15_1.png" /> 8 - 18 Personas<br />\
    <img src="styles/legend/MicroregionCE0103_15_2.png" /> 18 - 34 Personas<br />\
    <img src="styles/legend/MicroregionCE0103_15_3.png" /> 34 - 56 Personas<br />\
    <img src="styles/legend/MicroregionCE0103_15_4.png" /> 56 - 98 Personas<br />'
        });
var format_CoordinacionCelaya_16 = new ol.format.GeoJSON();
var features_CoordinacionCelaya_16 = format_CoordinacionCelaya_16.readFeatures(json_CoordinacionCelaya_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionCelaya_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionCelaya_16.addFeatures(features_CoordinacionCelaya_16);
var lyr_CoordinacionCelaya_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionCelaya_16, 
                style: style_CoordinacionCelaya_16,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionCelaya_16.png" /> Coordinacion Celaya'
            });
var group_CoordinacionCelayaRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionCE12_5,lyr_MicroregionCE112N_6,lyr_MicroregionCE111N_7,lyr_MicroregionCE10_8,lyr_MicroregionCE09_9,lyr_MicroregionCE08_10,lyr_MicroregionCE07_11,lyr_MicroregionCE06_12,lyr_MicroregionCE05_13,lyr_MicroregionCE04_14,lyr_MicroregionCE0103_15,],
                                title: "Coordinacion Celaya Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionCelaya_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionCelaya_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionCE12_5.setVisible(true);lyr_MicroregionCE112N_6.setVisible(true);lyr_MicroregionCE111N_7.setVisible(true);lyr_MicroregionCE10_8.setVisible(true);lyr_MicroregionCE09_9.setVisible(true);lyr_MicroregionCE08_10.setVisible(true);lyr_MicroregionCE07_11.setVisible(true);lyr_MicroregionCE06_12.setVisible(true);lyr_MicroregionCE05_13.setVisible(true);lyr_MicroregionCE04_14.setVisible(true);lyr_MicroregionCE0103_15.setVisible(true);lyr_CoordinacionCelaya_16.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionCelayaRezago,lyr_CoordinacionCelaya_16];
lyr_CoordinacionCelaya_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionCE12_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE112N_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE111N_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE10_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE09_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionCE08_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE07_11.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE06_12.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE05_13.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionCE04_14.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_MicroregionCE0103_15.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_CoordinacionCelaya_16.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionCelaya_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionCE12_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE112N_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE111N_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE10_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE09_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionCE08_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE07_11.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE06_12.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE05_13.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionCE04_14.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroregionCE0103_15.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionCelaya_16.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionCelaya_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionCE12_5.set('fieldLabels', {});
lyr_MicroregionCE112N_6.set('fieldLabels', {});
lyr_MicroregionCE111N_7.set('fieldLabels', {});
lyr_MicroregionCE10_8.set('fieldLabels', {});
lyr_MicroregionCE09_9.set('fieldLabels', {});
lyr_MicroregionCE08_10.set('fieldLabels', {});
lyr_MicroregionCE07_11.set('fieldLabels', {});
lyr_MicroregionCE06_12.set('fieldLabels', {});
lyr_MicroregionCE05_13.set('fieldLabels', {});
lyr_MicroregionCE04_14.set('fieldLabels', {});
lyr_MicroregionCE0103_15.set('fieldLabels', {});
lyr_CoordinacionCelaya_16.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionCelaya_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});