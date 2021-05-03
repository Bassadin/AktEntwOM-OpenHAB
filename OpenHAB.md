# OpenHAB

## Installation

- Docker-Container auf Synology-NAS – kann aber auch mit vorgefertigtem Image auf Raspberry Pi installiert werden
- Kurze Konfiguration mit Standort der Wohnung, Name, Admin-Account etc.

## Konfiguration

- Gewünschtes Binding als Add-On installieren (z.B. IKEA Tradfri Binding)
- Things importieren
- Things als Equipment/Points im Model verlinken
- Oberfläche zur Steuerung konfigurieren

## Bindings

- IKEA Tradfri Binding
  - IKEA Tradfri/Home Smart-Ansteuerung
- Openweathermap Binding
  - Wetterdaten von OWM (Openweathermap) - kostenlos

## Dokumentation

<https://www.openhab.org/docs/>

## API

<https://www.openhab.org/docs/configuration/restdocs.html>

## Oberfläche

### Speicherort für Bilder

/conf/html

## Persistenz

- InfluxDB OpenHAB Persistence Addon

## Layouts/Pages

### Cron-Syntax

Cron ist eine kompakte Syntax, um wiederkehrende Zeitevents zu formulieren, z.B. bedeutet "0 1 * * *" = "um ein Uhr". Cron kann sehr komplex komplex werden, z.B. bedeutet "*/2 10 * */2 *" = "Jede zweite Minute nach 10 Uhr in jedem dritten Monat".

## Negatives

- Mehrfachselektion unterstützt kein Shift+Klick, um schneller Items zu selektieren
- Google Home Integration geht bisher nur mit OpenHAB 2 :(
  - <https://www.myopenhab.org/> (ganz unten)
