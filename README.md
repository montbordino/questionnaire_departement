## but du site

Ce site a pour seul but de m'exercer en java script. 
L'idée du site n'est pas originale puisqu'il reprend le format du site [jetPunk](https://www.jetpunk.com/fr) qui est un site proposant différents quizz. 
La carte interactive est faite grace à des SVG qui ont été pris sur le site [AMCHART](https://www.amcharts.com/svg-maps/) puis légerement modifiés pour facilier leur utilisation. 

## Améliorations possibles

✅ V0 : premier commit <br>
✅ V1 : compteur de départements restants <br>
✅ V2 : recherche plus flexible (majuscules, accents, tirets de séparation...) <br>
❌ V3 : amélioration visuelle du site <br>
❌ V4 : victoire en fin de partie <br>
❌ V5 : minuteur pour le quizz <br>
❌ V6 : rajout des régions <br>
❌ V7 : affichage des départements déjà complétés sous forme de tableau <br>
❌ V++ : potentiellement des quizz pour une partie des départements ou pour les numéros. <br>

## choses à retenir

### pendant la création de la V2
- Les fonction **getAttribute("class")** et **setAttribute("class", "text")** permettent d'acceder aux attributs des élements DOM.
- La fonction **every( e =>{} )** s'utilise comme forEach mais elle permer de s'arreter si une sertaine condition est remplis
- Les fonction de la classe string **normalize()** et **replace()** permettent de modifier du texte. Elles font également appelle au type RegEx.
