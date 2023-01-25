---
title: "POSTino: a mobile robot for delivery pickup" 
date: 2023-01-24T11:10:36+08:00
draft: false
language: en
featured_image: ../assets/images/featured/DSC09742-2.jpg
summary: BSc thesis about Robotics, Artificial Intelligence and Computer Vision.
description: Thesis project which involved the development of a mobile robot by leveraging the concepts of Artificial Intelligence, Computer Vision and robot programming in ROS. Created a robot with path planning and autonomous navigation capabilities and able to e�ffectively interact with people and the environment.
author: Ludovico Comito
authorimage: ../assets/images/global/author.webp
categories: Portfolio
tags: [ML, Robotics, Projects]
---

Introduction
============

The inspiration for this thesis project was derived from a task of the
*RoboCup\@Home Education 2022*. QThis competition is one of the main
events in the field of educational robotics at a global scale, and in
its \@Home versions it has the purpose of making new generations of
students interested in the fields of artificial intelligence and
robotics approach the development of solutions that could have an
effective impact on daily life, providing the educative instruments in
order to develop innovative ideas.\
\
The competition is divided in two categories: *Standard Platform* and
*Open Platform*. The first one requires competing using only Pepper
robots developed by Softbank Robotics, while the Open Platform (the one
chosen in this case) admits participation using custom made robots. As
described by the competition rulebook [@robocupRulebook], a score based
on the overall completeness of the solution gets assigned to each team,
which has the pobbility of accessing the final phase of the competition,
where an additional task will be assignes. The chosen task for this
project is named "*Carry My Luggage*". The goal described consists in
transporting a payload from the starting position to the final one while
following an operator. Bonus points get rewarded in case it is
demonstrated that the robot can navigate the surrounding environment in
a "conscoius" way.\
\
The inspiration, derived from the nature of the chosen task, brought to
the development of an idea based on a robot whose function can have a
real impact on daily life and in a domestic sphere. In particular, it
sought to provide support for achieving the social distancing imposed by
the COVID-19 pandemic to help effectively prevent new infections. The
idea stems from the evidence of data reporting a marked increase since
the start of the pandemic in the number of home deliveries of products
of all kinds. Before illustrating this idea, it is useful to refer to
the context in which it was born, that is *food delivery* (the delivery
at home of ready meals), one of the fastest growing sectors with a
market that has more than tripled since the beginning of 2019
[@marketEvolution], as highlighted in Figure
[1.1](#fig:food_delivery_market){reference-type="ref"
reference="fig:food_delivery_market"}.\
\

![Trend of the food delivery market between 2018 and
2021](assets/food_delivery_market.jpg){#fig:food_delivery_market
width="60%"}

\
However, the consequence of the surge in the number of deliveries has
played havoc with the delivery operators themselves (the *riders*). Data
retrieved from a study of Universidad de Las Américas [@ortiz2021high]
expose how the occurrence of Covid-19 contagions can reach 15.2%, a
significantly higher figure than the average for other workers, higher
even than for physicians (incidence of 13.6%), which represents one of
the most exposed categories. The main reason for this result is the
continuous exposure to diverse people and low hygiene standards (as
shown in Figure [1.2](#fig:riders_condition){reference-type="ref"
reference="fig:riders_condition"}). This implies that diminishing
contact between clients and *riders* can mean a reduction in the
occurrence of new cases, bringing benefits to both categories.\

![Main risk factors for
*riders*](assets/riders_condition.jpg){#fig:riders_condition
width="60%"}

\
The project, therefore, aims to develop a domestic robot that can act as
an intermediary between the user and the rider, picking up delivery
goods and bringing them to a predetermined point in the home.\
Being in a dynamic context, where interaction with the environment and
the users involved is required, the robot will have to be able to
navigate autonomously within the environments (mapping functionality) of
the house and will, in addition, have to interact with people
(*Text-To-Speech, Speech-To-Text*), recognizing their faces (*Face
Detection*). The robot employed in the implementation of this project is
MARRtino, a robotic platform developed within our university and usually
dedicated to educational robotics. The sensors and actuators that came
with the robot enabled the implementation of the functionality described
earlier. The structure of the robot and its operation will be explained
in the chapters Tools Used and Methodology. Finally, the output of the
project will be discussed in the chapters on Results and Conclusions.

Instrumentation {#ch:strumentiUtilizzati}
===============

MARRtino Robot
--------------

MARRtino is an educational robotic platform developed by the department
DIAG of Sapienza University. It was created with the aim of making a
completely Open Hardware and Open Software project available to students
of different levels (from high school students to master's and doctoral
students). This implies that the hardware and software specifications of
the robot are freely disclosed, along with detailed documentation of its
operation, allowing anyone who wants to be able to replicate the
creation of the robot. Python, C++, and Matlab programming languages are
supported, as well as various interfaces with which the robot can be
programmed (block programming, text editor). The following will explain
the hardware and software equipment the robot is composed of.

![A complete view of the MARRtino
robot](assets/marrtino_full_view_RESIZED.jpg){#fig:marrtino_full_view
width="30%"}

### Hardware components

The MARRtino robot can be thought of as the union of three basic
components: sensors, actuators, and a logic and control unit. Briefly,
the logic unit receives data about the environment collected by the
sensors with which the robot is equipped and establishes control logic
that determines the action of the actuators. The various components will
be listed below, describing their function.

##### Logic and control unit

-   SainSmart Mega2560 R3 ATmega2560-16AU - A microcontroller equivalent
    to an Arduino Mega board, used for motor control.

-   MARRtino motor shield 2019 - Custom made shield that manages the
    drivers and power supply needed to control the motors.

-   Intel NUC - A Mini PC on which the virtual machine is installed that
    is responsible for running the software necessary for the robot to
    operate.

##### Sensors

-   ORBBEC Astra - It is a general purpose 3D camera used to perform the
    tasks of computer vision and autonomous navigation. It consists of
    three modules: RGB sensor, IR sensor and depth sensor.

    ![image](assets/astra_view.png){#fig:astra_totalview width="50%"}
    [\[fig:astra\_totalview\]]{#fig:astra_totalview
    label="fig:astra_totalview"}

-   RPlidar - The LIDAR (Light Detection and Ranging) sensor used in
    autonomous navigation and environment mapping phases.

    ![image](assets/RPlidar.jpeg){#fig:rplidar width="40%"}
    [\[fig:rplidar\]]{#fig:rplidar label="fig:rplidar"}

##### Actuators

-   Logitech S150 speakers - The speakers used for audio playback using
    the Text-To-Speech function.

-   Pololu 2825 70:1, L-Bracket Pair, 3281 Scooter wheel 144mm, Caster
    wheel - Respectively, the motors, their mounts, and the free wheel
    at the base of the robot.

##### Input devices

-   Smartphone - A Samsung Galaxy S7 Smartphone was used in order to
    implement the Speech-To-Text feature, enabled by the LU4R Android
    application.

-   Bluetooth joystick - Employed to remotely pilot the robot within
    environments.

##### Extras

One of the main risk factors for riders is the continuous exchange of
cash. In a study by the European Central Bank \[5\] it was shown how the
virus can persist for up to 72 hours on the surface of banknotes in a
concentration that can cause infection. In order to prevent this risk, a
bag with a reflective interior was mounted, to which a UV-C type LED
strip was added. The effect of UV-C lights is indeed to deactivate the
virus and prevent its replication, as reported by the U.S. Food and Drug
Administration \[2\]. Therefore, the use of this device may contribute
to the protection of both the food delivery operators and the users who
use it, and also contribute to the sterilization of the delivery
package.

MARRtino OS
-----------

### ROS framework

ROS (Robot Operating System) is the framework on which MARRtino is
based. The ROS project was born in 2007 at Stanford University to create
a standard for programming robots of all shapes while maintaining an
ease of use that makes it accessible to projects of any complexity. The
fundamental insight of ROS is to implement a modular approach to robot
development, relying on two fundamental components: nodes and topics.
Each node represents a script that specializes in a single task to be
performed, such as processing input data from a given sensor. The
strength of this system is that the exchange of information between
nodes is not direct, but is mediated by topics. A topic is a
communication channel that specializes in a certain type of data to be
communicated. Each piece of data defined as a message and is represented
as a struct that combines several primitive data types. The node that
inserts new data within a topic is named Publisher, while the nodes that
receive data from that topic are called Subscribers. Figure 2.2 provides
a graphical representation of this mechanism:

![*Publish/Subscribe*
mechanism](assets/ros_publish_subscribe.png){#fig:ros_publish_subscribe
width="50%"}

\
\
Following the mechanism just described, the various functionalities of
MARRtino are divided into atomic threads that behave like nodes, which
are in turn grouped according to the functionality to which they
contribute. Decisions regarding the implementation of the various
functionalities will be discussed in Section 2.2.2 on software
architecture. In addition to providing the basic mechanisms for
exchanging information and executing processes, ROS provides a suite of
applications useful for developing and testing the robot. In particular,
the RViz (ROS Visualization) program used for visualizing information
about the environment was employed during this experiment. This is used
in two phases: during the mapping phase, it allows to see in real-time
the construction of the map facilitating its construction, while in the
navigation phase it allows visualizing the loaded map and shows the
planning of the path that the robot will take.

![RViz User Interface
example](assets/esempio-rviz.png){#fig:rviz_interface width="60%"}

### Software achitecture {#sec:arc_software}

MARRtino's operating system consists of a Ubuntu 18.04 image on which
different instances of Docker containers corresponding to the robot's
various functionalities are run. Docker is open-source software that
allows running containers, which are standardized units containing the
software needed to run a given application. Unlike virtual machines,
containers are distinguished by their lightness and speed, allowing a
modular and secure approach to running different instances of
applications. In the case of MARRtino, each container corresponds to an
image of Ubuntu on which ROS is installed, along with the packages and
custom software needed for certain functionality. The scripts that are
launched within the containers are contained in the \"marrtino\_apps\"
folder, where each directory corresponds to a certain category of
functionality. Each running container exposes a web-socket, making
itself externally accessible via TCP protocol.\
MARRtino can be accessed remotely by connecting to the hotspot generated
by the robot itself. In this way, it is possible to connect to the
terminal remotely via SSH protocol. In addition, a graphical user
interface has been developed that simplifies the setup and execution of
programs remotely accessible via a browser, the functionality of which
will be discussed in Section 2.2.3 within which the suite of software
made available with MARRtino is explained.

![Software
architecture](assets/achitettura_software.png){#fig:arch_software
width="70%"}

### MARRtino Apps {#sec:marrtino_apps}

Leveraging ROS's modular approach, MARRtino's operating system provides
a series of scripts needed to operate the robot. Each process is
represented by a file with a .launch extension, constituting a launch
file. In the structure of ROS, a launch file is a document in XML format
that contains the information needed to set up and launch one or more
nodes. To execute such nodes simply invoke the roslaunch command by
providing the launch file as a parameter. Launch files are organized so
that they are grouped within folders according to the functionality and
services to which they contribute. Specifically, the robot has the
following functionality: orazio(robot), stage(simulator), navigation,
mapping, vision, speech, objrec. Each of them runs in a separate Docker
container. Given the educational purpose of the robot, in order to
simplify its use, an abstraction layer has been implemented for the
execution of the various launch files, which consists of a graphical
user interface accessible via a Web browser at the robot's IP address.
Four sections constitute it: Configure, Bringup, Program, Viewer.

![Homepage of the web
interface](assets/interface_fullview.png){#fig:int_fullview width="50%"}

##### Configure

Section dedicated to the robot operating system. It allows you to check
the status of the robot and perform operations such as system update.

##### Bringup

From this page, the status of active nodes and topics can be checked in
real-time. It also lists all the robot's functionality, which can be
started or stopped using the Start and Stop commands. What happens
during this interaction is the execution of the script via the robot
shell that grabs the Docker container that contains that functionality.
Through this page, the procedures outlined in Chapter 3 on Methodology
are initiated.

![ View of nodes and topics](assets/active_nodes.png){#fig:nodes
width="60%"}

##### Program

An interface that lets the user write and execute Python code directly
on the robot.

##### Viewer

It allows to visualize the feedback (such as the stream of images of
robot's sensors in real time

![View of the Program
page](assets/interface_programming.png){#fig:program width="70%"}

Libraries used
--------------

### Marrtino library {#sub:marrtino_lib}

With MARRtino, is provided a Python library custom-developed to take
exploit the robot's various functionalities. The functions provided, in
addition to enabling the robot to perform basic movements, combine
various third-party technologies and services that expand its
functionality.\
The Text-To-Speech function makes use of Pico TTS. This is a cloudless
service (that can be run locally), which given a text and the language
to which it belongs, transforms it into audio (WAV file) which is then
played by the robot's speakers.\
Speech-To-Text, on the other hand, requires a smartphone to process
natural language through the Google Cloud Speech API. Communication with
the robot is done through the Android LU4R application, which allows it
to connect to the robot's audio server and then transmit the processed
information.\
Finally, navigation functions make use of the chosen Navigator (in the
case of the move\_base experiment) to determine the robot's path within
the map.

### OpenCV {#sub:opencv}

OpenCV is an open-source software library used extensively in the fields
of Computer Vision and Machine Learning. It provides more than 2,500
algorithms that are used in tasks such as moving object tracking, object
detection, image stitching, and many others, which are implemented in
professional solutions in different application fields. In the case of
this project, the library is exploited for Face Detection. The Face
Detection feature aims to detect and count the number of faces in a
certain image. The implementation of this feature makes use of the Haar
Cascade classifier. A cascade classifier is a classification algorithm
that is based on the use of a cascading window. A cascading window is a
window of fixed size that is scrolled within the image. At each new
position, features are extracted from the identified quadrant. Figure
2.8 shows an example of the features of interest to the classifier.

![Features examples](assets/haar_features.jpeg){#fig:haar_features
width="40%"}

A version of Haar Cascade that specializes in face recognition
(haarcascade\_frontface\_default) is used for the robot routine. Figure
2.9 shows an example of the classifier's result applied to an image.

![Detection of a face](assets/sample_haar.jpeg){#fig:sample_haar
width="70%"}

Methodology {#ch:metodologia}
===========

Environment mapping
-------------------

One of the fundamental functions of the robot is to be able to orient
itself autonomously within the domestic environment in which it
navigates. For this to be possible, it is necessary for the robot to
know a priori the conformation of the environments in which it will
move, which is encoded within a map. Therefore as a preliminary step to
navigation, it was necessary to generate a new map by taking advantage
of the robot's LIDAR sensor.\
The problem of having to create and update a map while simultaneously
keeping track of the robot's position within the map itself is named
SLAM, which stands for Simultaneous Localization And Mapping. For this
purpose was used the srrg\_mapper script provided by MARRtino , which
can be started via the dedicated web interface. A LIDAR sensor and a
joystick are required for the execution of the mapping procedure. The
first service to be started is the one dedicated to the joystick, which
will allow the robot to be controlled via analog sticks. Once
srrg\_mapper is also started, the robot will set its home point to the
position it is currently on and begin collecting data on the environment
from the LIDAR sensor. A real-time representation of the map being
constructed can be viewed via RViz within the virtual machine running on
the laptop.\
Figure 3.1 shows the robot creating a new map. The right quadrant shows
the RViz screen representing the map being created. The lines in red
show the edges that the LIDAR senses at that moment.\
When you have finished the setup procedures, you will need to navigate
within the environment using the joystick, replicating the same
movements several times if necessary, to obtain a uniform map. To finish
the procedure and save the map, simply select save map from the web
interface.\
Figure 3.2 shows the final result of the map, which will be used for the
actual navigation of the robot. For a comparison of the quality of the
scan, Figure 3.3 shows the overlay with a map created from the LIDAR
sensor of an iPhone 13 Pro. As can be noted, the two maps are almost
overlapping.

![Comparison with a smartphone-generated
map](assets/creating_the_map.png){#fig:iphone_map width="70%"}

![Comparison with a smartphone-generated
map](assets/mappa_marrtino_enhanced.png){#fig:iphone_map width="50%"}

![Comparison with a smartphone-generated
map](assets/sovrapposizione_enhanced.png){#fig:iphone_map width="50%"}

Speech-To-Text implementation
-----------------------------

As described in Section 2.3.1 of Chapter 2, the Speech-To-Text function
uses the MARRtino library, which takes advantage of communication with a
smartphone to receive text from the Android LU4R application.

![Schematic representation of the Smartphone-Computer
communication](assets/speech_to _text_structure.png){#fig:stt_communication
width="80%"}

Operationally, it is necessary to start the Audio Server from the
MARRtino web interface, through which it will be possible to connect
from the application. Once LU4R is open, it will be necessary to set the
server's IP address and port to connect. Once connected, the application
will present the interface illustrated in Figure 3.5. To start voice
recognition, simply press the ON icon. At that point, the text will be
recognized automatically whenever speech is perceived and then
communicated to the Audio Server. The MARRtino library provides the
asr() function, which will have the effect of putting program execution
on hold until new feedback is received from the Audio Server. The return
value of this function will be the exact string corresponding to the
recognized text, which can then be subjected to checks to verify the
validity of the text.\

![View of the LU4r Android app](assets/app_lu4r.jpg){#fig:lu4r
width="20%"}

View of the LU4R application
----------------------------

In order to navigate within an existing map, the robot will need to
start the Localizer and Navigator modules. The first module is needed to
determine in real-time the robot's position within the map. In this
case, the AMCL (Adaptive Monte Carlo Localization) Localizer was chosen.
Its function is to determine the position of the robot as a result of a
movement through the use of probabilistic calculations based on the data
stream received from the LIDAR.\
Given a certain target point to reach, the Navigator module will create
the trajectory for the robot to follow within the map. The MARRtino
operating system provides different types of Navigator, among them
move\_base was chosen. Move\_base is a dedicated navigation framework
belonging to the ROS distribution. Before the actual movement of the
robot, the path planning operation takes place. This operation consists
in tracing the path that the robot will have to follow within the
virtual map. This is achieved through the cooperation of four basic
units within the framework, which are responsible for processing data
from the tracker and sensors. These units are: global planner, global
costmap, local planner and local costmap. Global planner and global
costmap refer to the map, identifying a cost function that depends on
the obstacles already inside it and plotting the overall trajectory from
the robot's current point to its target. Local planner and local
costmap, on the other hand, are the units responsible for correcting the
estimates and path trajectory based on an assessment of the obstacles
the robot faces, given a certain time and location. Figure 3.6 shows
schematically how move\_base works.

![Schematic representation of move\_base
](assets/move_base_schema.png){#fig:move_base_schema width="80%"}

Once the necessary modules for navigation have been started, it will be
necessary to establish a target point inside the map. This can be done
by launching the RViz software from the laptop to view the map loaded on
the robot and determine the gx,gy,gth coordinates of the target by
activating the \"focus camera\" tool. The goto() function of the
MARRtino library takes the coordinates of the target as input to
initiate path planning and control the movement of the robot. An example
of path calculation is shown in Figure 3.7. The line in purple
represents the calculated path.

![Computation of a trajectory using
move\_base](assets/path_planning.png){#fig:path_planning width="60%"}

Face Detection implementation
-----------------------------

As explained in section 2.3.2, the Face Detection functionality is
realized by using the haar cascade classifier belonging to the OpenCV
library. The images to be processed come from the Orbbec Astra sensor
mounted on the robot. To make the data stream from the RGB camera
available to the program, it is necessary to activate the Camera module
from the MARRtino web interface. Once started, the getImage() function
of the MARRtino library will allow a frame to be saved, which can be
stored as a variable, for later use within the program.\
Face Detection functionality is accomplished by calling the countFaces
function, which, taking as input the image and the classifier, converts
the image to grayscale, and then proceeds to invoke the classifier that
will extract information about the faces found within the faces
variable. In the case of this project, the only significant information
is the presence or absence of a face within the frame. The function is
represented below:

``` {.python style="colorful"}
def countFaces(image,classifier):
    #convert image to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # Detect faces
    faces = classifier.detectMultiScale(gray, 1.1, 4)
    num_faces = len(faces)
    return num_faces
```

Discussion of results
=====================

The combination of the functionalities described in the previous chapter
enabled the creation of a robot capable of navigating autonomously and
interacting intelligently with the environment and users. Starting from
its homepoint, the robot waits for the user to say the phrase \"Delivery
is coming.\" Subsequently, the house's door is set as a target point of
the robot, and a path is computed. Once there, the countFaces function
is invoked until a person is recognized within the frame. When
recognized, the robot will interact with the rider by reproducing the
phrase \"Hello, you can leave the delivery inside the bag. Let me know
when you finished.\" and then wait for a response. Once the delivery is
completed, the rider will have to confirm it by saying \"delivered.\"
The robot will greet the operator by saying \"thank you and have a nice
day,\" and then return to the homepoint.\
Familiarization with the tools provided by the robot required several
attempts for the complete execution of the routine. The most elaborate
phase resulted to be the mapping phase since a thorough scan of the
environments was required. This makes the creation of the map subject to
several possible disturbances due to the imprecision that can be
obtained by driving the robot manually using the joystick. The final map
used during the routine was obtained after several iterations of this
process.\
Face Detection and Speech-To-Text features proved robust against the
challenges presented by the environment. Both were tested against five
different people, always returning positive results. People's faces were
always detected correctly, even under different lighting conditions and
in presence of noise in the image derived from the webcam. Speech
recognition was found to be robust with respect to background noise,
always correctly recognizing the moment when the person starts to speak,
although it did not always interpret the precise content of the speech.\
The complete routine of the robot has been documented along with the
mapping procedure in a video available online at the following url:
[<https://www.youtube.com/watchv=AbUo8WZJyv0&ab_channel=LudovicoComito>]{style="color: blue"}.\
Figures 4.1 and 4.2 represent two frames extracted from the video,
respectively showing the path planning execution and the interaction
with the rider.

![Face detection and interaction with the
user](assets/routine_1.png){#fig:routine_2 width="90%"}

![Face detection and interaction with the
user](assets/routine_2.png){#fig:routine_2 width="90%"}

![View of RViz during the routine of the
robot](assets/rviz_during_routine.png){#fig:rviz_during_routine
width="100%"}

![Routine of the robot](assets/RR_EN.png){width="40%"}

Conclusions
===========

The use of the MARRtino robotics platform and the software made
available by its operating system allowed to development of the
prototype of a robot able to be actually useful inside a domestic
environment. The implemented functions allowed for intelligent
navigation within the environment in which the robot operates, as well
as demonstrating the ability to interact with both the robot owner and
the rider. This achievement aligns with the purpose of the Robocup\@Home
Education competition, which is to develop robotic solutions that are
useful in everyday domestic life.\
Programming the robot routine also allowed to delve into the subjects of
robotics and artificial intelligence, ranging from topics such as
mapping and autonomous navigation to computer vision. Ultimately
becoming familiar with the ROS framework means having the ability to
implement new features in the future while maintaining a modular
approach.

Potential improvements
----------------------

The development of this robot demonstrated that while it is possible to
create a complete product demo even with an educational platform,
interacting intelligently with the environment and the users is not an
easy task to implement in a robot. One of the possible improvements can
certainly be implementing voice interaction with users. In fact, the
robot has been programmed to recognize a predefined string of text as a
response, a procedure that is not very effective in real-life contexts.
More advanced Natural Language Processing algorithms could therefore be
implemented, which would allow more naturalness in the interaction with
the user. Other improvements could be made to the robot's equipment
itself. Currently, the routine involves MARRtino reaching up to an
already open door, as it does not have a mechanism to be able to open
doors. A possible improvement could be equipping the robot with an
additional manipulator that could open the door once the robot arrives.
Finally, it should be pointed out that the robot is only able to move on
flat surfaces. Therefore, the current wheels could be replaced with a
system capable of moving on stairs, a function that could, for example,
contribute positively to the daily experience of an elderly person who
does not have complete mobility.
