# OpenHAB

## Installation

- Docker-Container auf Synology-NAS – kann aber auch mit vorgefertigtem Image auf Raspberry Pi installiert werden
- Kurze Konfiguration mit Standort der Wohnung, Name, Admin-Account etc.

## Konfiguration

- Gewünschtes Binding als Add-On installieren (z.B. IKEA Tradfri Binding)
- Things importieren
- Things als Equipment/Points im Model verlinken
- Oberfläche zur Steuerung konfigurieren

## Dokumentation

<https://www.openhab.org/docs/>

## API

<https://www.openhab.org/docs/configuration/restdocs.html>

## Oberfläche

### Speicherort für Bilder

conf/html

## Persistenz

- InfluxDB OpenHAB Persistence Addon

## Negatives

- Mehrfachselektion unterstützt kein Shift+Klick, um schneller Items zu selektieren