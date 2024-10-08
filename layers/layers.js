var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1 = new ol.format.GeoJSON();
var features_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1 = format_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.readFeatures(json_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.addFeatures(features_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1);
var lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1, 
                style: style_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1,
                popuplayertitle: "Anexo XIV - Área ao Redor da Bóia de Sinalização do Navio Naufragado C.S. Beni",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.png" /> Anexo XIV - Área ao Redor da Bóia de Sinalização do Navio Naufragado C.S. Beni'
            });
var format_AnexoXIIIreadeFundeio7_2 = new ol.format.GeoJSON();
var features_AnexoXIIIreadeFundeio7_2 = format_AnexoXIIIreadeFundeio7_2.readFeatures(json_AnexoXIIIreadeFundeio7_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIIreadeFundeio7_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIIreadeFundeio7_2.addFeatures(features_AnexoXIIIreadeFundeio7_2);
var lyr_AnexoXIIIreadeFundeio7_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIIreadeFundeio7_2, 
                style: style_AnexoXIIIreadeFundeio7_2,
                popuplayertitle: "Anexo XIII -Área de Fundeio 7",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIIreadeFundeio7_2.png" /> Anexo XIII -Área de Fundeio 7'
            });
var format_AnexoXIIreadeEsperadosPrticos_3 = new ol.format.GeoJSON();
var features_AnexoXIIreadeEsperadosPrticos_3 = format_AnexoXIIreadeEsperadosPrticos_3.readFeatures(json_AnexoXIIreadeEsperadosPrticos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIreadeEsperadosPrticos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIreadeEsperadosPrticos_3.addFeatures(features_AnexoXIIreadeEsperadosPrticos_3);
var lyr_AnexoXIIreadeEsperadosPrticos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIreadeEsperadosPrticos_3, 
                style: style_AnexoXIIreadeEsperadosPrticos_3,
                popuplayertitle: "Anexo XII - Área de Espera dos Práticos",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIreadeEsperadosPrticos_3.png" /> Anexo XII - Área de Espera dos Práticos'
            });
var format_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4 = new ol.format.GeoJSON();
var features_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4 = format_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.readFeatures(json_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.addFeatures(features_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4);
var lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4, 
                style: style_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4,
                popuplayertitle: "Anexo XI - Canal de Acesso, Bacia de Evolução e Áreas de Fundeio 2, 3 e 4",
                interactive: true,
                title: '<img src="styles/legend/AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.png" /> Anexo XI - Canal de Acesso, Bacia de Evolução e Áreas de Fundeio 2, 3 e 4'
            });
var format_AnexoXreadeFundeio1_5 = new ol.format.GeoJSON();
var features_AnexoXreadeFundeio1_5 = format_AnexoXreadeFundeio1_5.readFeatures(json_AnexoXreadeFundeio1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXreadeFundeio1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXreadeFundeio1_5.addFeatures(features_AnexoXreadeFundeio1_5);
var lyr_AnexoXreadeFundeio1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXreadeFundeio1_5, 
                style: style_AnexoXreadeFundeio1_5,
                popuplayertitle: "Anexo X - Área de Fundeio 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoXreadeFundeio1_5.png" /> Anexo X - Área de Fundeio 1'
            });
var format_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6 = new ol.format.GeoJSON();
var features_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6 = format_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.readFeatures(json_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.addFeatures(features_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6);
var lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6, 
                style: style_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6,
                popuplayertitle: "Anexo III a VII - Áreas Não Afetas às Operações Portuárias (1 a 6)",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.png" /> Anexo III a VII - Áreas Não Afetas às Operações Portuárias (1 a 6)'
            });
var format_AnexoIITerminaldePassageiros_7 = new ol.format.GeoJSON();
var features_AnexoIITerminaldePassageiros_7 = format_AnexoIITerminaldePassageiros_7.readFeatures(json_AnexoIITerminaldePassageiros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIITerminaldePassageiros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIITerminaldePassageiros_7.addFeatures(features_AnexoIITerminaldePassageiros_7);
var lyr_AnexoIITerminaldePassageiros_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIITerminaldePassageiros_7, 
                style: style_AnexoIITerminaldePassageiros_7,
                popuplayertitle: "Anexo II - Terminal de Passageiros",
                interactive: true,
                title: '<img src="styles/legend/AnexoIITerminaldePassageiros_7.png" /> Anexo II - Terminal de Passageiros'
            });
var format_AnexoIreaPrincipal_8 = new ol.format.GeoJSON();
var features_AnexoIreaPrincipal_8 = format_AnexoIreaPrincipal_8.readFeatures(json_AnexoIreaPrincipal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIreaPrincipal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIreaPrincipal_8.addFeatures(features_AnexoIreaPrincipal_8);
var lyr_AnexoIreaPrincipal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIreaPrincipal_8, 
                style: style_AnexoIreaPrincipal_8,
                popuplayertitle: "Anexo I - Área Principal",
                interactive: true,
                title: '<img src="styles/legend/AnexoIreaPrincipal_8.png" /> Anexo I - Área Principal'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.setVisible(true);lyr_AnexoXIIIreadeFundeio7_2.setVisible(true);lyr_AnexoXIIreadeEsperadosPrticos_3.setVisible(true);lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.setVisible(true);lyr_AnexoXreadeFundeio1_5.setVisible(true);lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.setVisible(true);lyr_AnexoIITerminaldePassageiros_7.setVisible(true);lyr_AnexoIreaPrincipal_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1,lyr_AnexoXIIIreadeFundeio7_2,lyr_AnexoXIIreadeEsperadosPrticos_3,lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4,lyr_AnexoXreadeFundeio1_5,lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6,lyr_AnexoIITerminaldePassageiros_7,lyr_AnexoIreaPrincipal_8];
lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoXIIIreadeFundeio7_2.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoXIIreadeEsperadosPrticos_3.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoXreadeFundeio1_5.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIITerminaldePassageiros_7.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIreaPrincipal_8.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoXIIIreadeFundeio7_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoXIIreadeEsperadosPrticos_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoXreadeFundeio1_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIITerminaldePassageiros_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIreaPrincipal_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoXIVreaaoRedordaBiadeSinalizaodoNavioNaufragadoCSBeni_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoXIIIreadeFundeio7_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoXIIreadeEsperadosPrticos_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoXICanaldeAcessoBaciadeEvoluoereasdeFundeio23e4_4.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoXreadeFundeio1_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIIIaVIIreasNoAfetassOperaesPorturias1a6_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIITerminaldePassageiros_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIreaPrincipal_8.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIreaPrincipal_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});