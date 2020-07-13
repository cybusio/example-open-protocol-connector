# Atlas Copco OpenProtocol Connector

## About

This project implements a connector for the Atlas Copco OpenProtocol.
To use it you will need to commission a service with this image and make use of VRPC generic protocol interface. 

## How to build it

`docker build -t open-protocol:0.1 .`

## How to run it

`docker run -d --name openprotocol-connector --rm -e CYBUS_MQTT_USER=admin -e CYBUS_MQTT_PASSWORD=admin open-protocol:0.1`
