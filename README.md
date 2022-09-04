## but du site

Ce site a pour seul but de m'exercer en java script. 
L'idée du site n'est pas originale puisqu'il reprend le format du site [jetPunk](https://www.jetpunk.com/fr) qui est un site proposant différents quizz. 
La carte interactive est faite grace à des SVG qui ont été pris sur le site [AMCHART](https://www.amcharts.com/svg-maps/) puis légerement modifiés pour facilier leur utilisation. 

## Améliorations possibles

✅ V0 : premier commit <br>
✅ V1 : compteur de départements restants <br>
✅ V2 : recherche plus flexible (majuscules, accents, tirets de séparation...) <br>
✅ V3 : amélioration visuelle du site + zoom de map<br>
✅ V4 : victoire en fin de partie <br>
❌ V5 : minuteur pour le quizz <br>
❌ V6 : rajout des régions <br>
❌ V7 : affichage des départements déjà complétés sous forme de tableau <br>
❌ V++ : potentiellement des quizz pour une partie des départements ou pour les numéros. <br>

## choses à retenir

### pendant la création de la V2
- Les fonction [getAttribute("class")](https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute) et [setAttribute("class", "text")](https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute) permettent d'acceder aux attributs des élements DOM.
- La fonction [every( e =>{} )](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every) s'utilise comme forEach mais elle permer de s'arreter si une sertaine condition est remplis
- Les fonction de la classe string [normalize()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) et [replace()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace) permettent de modifier du texte. Elles font également appelle au type [RegEx](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

### pendant la création de la V3
- La fonction [getBoundingClientRect()](https://developer.mozilla.org/fr/docs/Web/API/Element/getBoundingClientRect) associée à un eventListener sur la souris permet de prendre ses coordonnées en fonction d'un élement de la page
- La viewBox d'un SVG peut permettre de zoomer facilement.
