# Dammen

## bord

- een bord bestaat uit 8x8 vlakken
- de zwarte vlakken bevinden zich links beneden en rechts boven

## verplaatsen

- start van een zet begint door op de betreffende steen te klikken
- einde van een (tussen)zet begint door op een geldig vlak te klikken

## game rules

### spel begin

- wit begint
- random
- keuzeknop

### geldige zetten

- stenen mogen alleen op de donkere vlakken staan
- je mag alleen vooruit zetten
- je mag wel terug slaan
- [optioneel] moet je slaan
- je moet direct achter het lege vlak landen
- als een steen de overkant bereikt dan wordt deze gepromoveerd tot dame

### geldige zetten voor een dame

- de dame mag terug zetten
- de dame mag over eigen stenen springen
- bij het slaan land de dam wel direct achter de geslagen steen
- de dame mag over meerdere vlakken in een lijn springen

### slaan

- Detecteer als er geslagen is
- detecteer of er met dezelfde steen nog meer slagen kunnen worden gemaakt

### check of er een winnaar is

Iemand is een winnaar als de tegenspeler geen stenen meer over heeft
