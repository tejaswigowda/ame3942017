int potPin = A0;    // select the input pin for the potentiometer
int val = 0;  

void setup() {
  Serial.begin(115200);
  pinMode(potPin, INPUT);  // declare the ledPin as an OUTPUT
}

void loop() {
  val = analogRead(potPin);    // read the value from the sensor
  Serial.println(val);  
}
