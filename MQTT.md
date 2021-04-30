# MQTT

## Quality of Service

3 Möglichkeiten, die Übertragungssicherheit zu gewährleisten

- At most once (0) - "Fire and forget": Paket wird einfach herausgeschickt, ohne Bestätigung zu erhalten
- At least once (1)
  - Der Broker antwortet auf einen Publish mit einem PUBACK-Paket, um den Erhalt zu bestätigen
  - Erhält der Client kein PUBACK, so versucht er erneut, die Nachricht zu senden
- Exactly once (2)
  - Der Broker antwortet auf den Publish den Clients mit einem PUBREC (Publish Received)
  - Danach sendet der Client ein PUBREL (Publish Released) zurück
  - Schlussendlich sendet der Broker ein PUBCOMP (Publish complete) zurück an den Client

## Retained Messages

Setzt eine Message bei ihrem Publish das "Retain"-Flag, so wird sie im Broker eine Weile vorgehalten, auch wenn es im Moment keinen Client gibt, die ihre Topic subscribed hat. Das kann praktisch sein, wenn Nachrichten noch keinen Empfänger haben, aber nicht oft aktualisiert werden.

## Last Will

Mit dem Connect-Paket an den Broker können optional noch folgende Parameter mitgegeben werden:

- LastWillTopic
- LastWillQoS
- LastWillMessage
- LastWillRetain

Im Falle, dass der Client die Verbindung verliert, benachrichtigt der Broker dann alle Subscriber der LastWillTopic mit der LastWillMessage

## Keep Alive

- Zeit (Standard = 60s, änderbar auf bis 18h), in der es keine Kommunikation zwischen Client und Broker geben darf
- Wird die Zeit überschritten, sendet der Client ein PINGREQ und der Broker antwortet mit einem PINGRESP, um zu prüfen, ob die Verbindung noch steht
- Methode, um das “half-open TCP Connection”-Problem zu behandeln

## Debugging

z.B. MQTT Explorer...

## Übliche Software

[Eclipse Mosquitto](https://mosquitto.org/)
