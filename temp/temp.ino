#include "DHT.h"
#include "ArduinoJson.h"

#define DHTPIN A1 
#define DHTTYPE DHT11 
 

DHT dht(DHTPIN, DHTTYPE);
 
void setup() 
{
  Serial.begin(9600);
  dht.begin();
}
 
void loop() 
{

  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(t) || isnan(h)) 
  {
    Serial.println("Failed to read from DHT");
  } 
  else
  {
    
    Serial.print('"');
    Serial.print("{");
    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.print(", ");
    Serial.print("Umidade: ");
    Serial.print(h);
    Serial.print("}");
    Serial.println('"');   

  }
  delay(300000);
}
