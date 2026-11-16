</br>
TrickFire Robotics at the University of Washington Bothell (UWB) is a robotics team that builds real robots to compete in university-level robotic competitions.

</br>

During development of Viator, our rover, we found the need to have a lot of small motors precisely controlling a bunch of small-scale assemblies. 

</br>

The team landed on two types of motors, small stepper motors commonly found in 3D-printers and servos. One nice fact is that both of these motor types do not need an external encoder as the stepper motor position can be homed at the start and its position tracked by the steps it takes and the servo motors have a built-in position loop based on its position signal.

</br>

There is one major issue with these two motors types, however. They do not have a cheap and easy USB device to control them. The stepper motors can use the MP6500 controller, which simplifies the most difficult actions but it still requires direct pin control. The servos are no better as they require PWM at its position input. 

</br>

As such, this custom PCB would have a Raspberry Pi Pico microcontroller to act as a USB peripheral device to accept commands from the main computer and to manipulate its own GPIO pins to control the motors. 

</br>

The board would accept a power source of 12V and adjust that to 5V to power both the servos and the MCU and route the 12V to the stepper motors. 

</br>

Finally, you would also find three more connectors labeled GREEN_L, BLUE_L, and RED_L, which are intended to control some bright LEDs to notify what mode the rover is in. This was added a bit later into the project, which gave rise to the “motherboard” project name as the PCB controlled a bunch of different devices.

</br>

