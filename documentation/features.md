# Dammen

## bord

- een bord bestaat uit 8x8 vlakken (2)
- de zwarte vlakken bevinden zich links beneden en rechts boven (0)
- stenen zijn ronde schijven (0)
- de 12 witte en zwarte stenen worden op hun initieele positie geplaatst (2) (Must)

## verplaatsen (Must)

- start van een zet begint door op de betreffende steen te klikken (4)
- einde van een (tussen)zet begint door op een geldig vlak te klikken (4)

## game rules

### spel begin

- wit begint (1)
- random (1)
- keuzeknop (1)

### geldige zetten

- stenen mogen alleen op de donkere vlakken staan (2) (Must)
- je mag alleen vooruit zetten (2)
- "vooruit" moet gezien worden vanuit het perspectief van de speler die aan de beurt is (2)
- je mag wel terug slaan (2)
- [optioneel] moet je slaan (2)
- je moet direct achter het lege vlak landen (2)
- als een steen de overkant bereikt dan wordt deze gepromoveerd tot dame (2) (Must)
- stenen mogen niet over de grens van het bord (2) (Must)

### geldige zetten voor een dame

- de dame mag terug zetten (2)
- de dame mag over eigen stenen springen (2)
- bij het slaan land de dam wel direct achter de geslagen steen (2)
- de dame mag over meerdere vlakken in een lijn springen (2)

### slaan

- Detecteer als er geslagen is (2) (Must)
- detecteer of er met dezelfde steen nog meer slagen kunnen worden gemaakt (2)

### score

- score bijhouden

### check of er een winnaar is

Iemand is een winnaar als de tegenspeler geen stenen meer over heeft

### nieuw spel opstarten

- maak een knop voor een restart (page refresh)

### AI (OUT OF SCOPE)

- een random geldige zet maken
- random zetten maken en kijken welke het beste resultaat heeft
