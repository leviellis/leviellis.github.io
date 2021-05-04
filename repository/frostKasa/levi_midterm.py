from m5stack import axp192, lcd
from machine import Pin, PWM
import time
import esp32               # there is an (internal) temperature sensor in the microcontroller

axp = axp192.Axp192()      # and another one in the power-management chip (used for charging etc)
pwm = PWM(Pin(0))       # wire up the yellow wire of your servo motor to pin G0
pwm.freq(1000)            # common servos want updates 50 times a second
lcd.clear()

while True:
	axp_temp = axp.getTempInAXP192()
	esp_temp = (esp32.raw_temperature()-32.0)/1.8
	if esp_temp < 50:
		fan_power = 123 - esp32.raw_temperature()
	else:
		fan_power = 1
	lcd.text(5, 10, "AXP temp")
	lcd.text(5, 30, str(axp_temp))
	lcd.text(5, 50, "ESP temp")
	lcd.text(5, 70, str(esp_temp))
	time.sleep_ms(1000)
	print(fan_power)
	pwm.duty(fan_power)
