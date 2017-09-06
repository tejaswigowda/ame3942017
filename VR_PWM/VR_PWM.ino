int potPin = A0;    // select the input pin for the potentiometer
float val = 0;  


float mapFloat(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

void setup() {
  Serial.begin(115200);
  pinMode(potPin, INPUT);  // declare the ledPin as an OUTPUT
}

void loop() {
  val = analogRead(potPin);    // read the value from the sensor
  float valMapped = mapFloat(val, 0, 1023, 0, 99.99);
  Serial.println(valMapped);  
}
