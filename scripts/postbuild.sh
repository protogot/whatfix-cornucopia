#!/bin/bash

jsfilename=$(ls build/cornucopiareact.js | sed 's|.*/||' )
cssfilename=$(ls build/cornucopiareact.css | sed 's|.*/||' )

chmod +x ../w3o-whatfix-dashboard-editor-common
cp build/$jsfilename ../w3o-whatfix-dashboard-editor-common/war/lib/js

newcssname=${cssfilename/main/cornucopiareact}
cp build/$cssfilename ../w3o-whatfix-dashboard-editor-common/war/lib/css/${newcssname}

chmod +x ../w3o-whatfix-widget
sed -i s/cornucopiareact.css/$newcssname/g ../w3o-whatfix-widget/war/cornucopia.html
sed -i s/cornucopiareact.js/$jsfilename/g ../w3o-whatfix-widget/war/cornucopia.html
