---
layout: single
title: "Indoor Positioning System"
permalink: /projects/project-4/
classes: wide
---


Modern outdoor positioning systems, such as the **Global Positioning System**, <a href="https://en.wikipedia.org/wiki/Global_Positioning_System" style="text-decoration:underline; color:green;" target="_blank"><strong>GPS</strong></a> offer high accuracy for navigation in open spaces but face challenges when used indoors due to **weakened satellite signals** inside buildings. To overcome this limitation, a variety of *indoor positioning systems* (IPS) have emerged. IPS is extensively applied in environments like schools, offices, supermarkets, hospitals, and universities. For instance, in supermarkets, shoppers can use digital guide screens on carts equipped with RFID tags to easily locate products. In museums, visitors can access exhibit information using Bluetooth and Wi-Fi devices. IPS also aids students in navigating specific shelves in libraries and is utilized in targeted marketing, such as sending personalized advertisements to individuals based on their location within a building.


**Left to right:** Map of the Engineering Department at Ferdowsi University of Mashhad, Designed System for FUM, Mobile App

<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <div style="flex: 1;">
    <img src="/assets/Projectsimages/IPS/EngineeringFUM.png" alt="EngineeringFUM" style="width: 100%; height: auto;">
  </div>
  <div style="flex: 1;">
    <img src="/assets/Projectsimages/IPS/FingerprintingDiagram.png" alt="FingerprintingDiagram" style="width: 100%; height: auto;">
  </div>
  <div style="flex: 1;">
    <img src="/assets/Projectsimages/IPS/mobileapppic2.png" alt="mobileapppic2" style="width: 100%; height: auto;">
  </div>
</div>

### IPS applied at the Engineering Department of Ferdowsi University of Mashhad, Iran 

<div style="display: flex; justify-content: center;">
    <img src="/assets/Projectsimages/IPS/ENG_FUM.png" alt="ENG_FUM" style="width: 50%; height: 50%;">
</div>


## Problem Statement and Research Motivation

Visitors to large complexes like hospitals, offices, stores, and universities often face difficulties in **finding optimal routes to their destinations**, leading to wasted time and energy. To address this issue, the research focuses on developing a **ubiquitous and cost-effective indoor positioning system** that leverages **existing infrastructure**. The goal is to design an IPS prototype for mobile phones, tested at the **Faculty of Engineering at Ferdowsi University of Mashhad**. This system will utilize the building's **Wi-Fi access points** for positioning, eliminating the need for additional infrastructure or high-cost solutions.

## System Overview

This production presents contributions in two key areas: **software development** and **machine learning**. First, the floor plan of the Faculty of Engineering was converted from AutoCAD to **GeoJSON**, an open-source format compatible with applications. An **Android app** was developed using Flutter to capture Wi-Fi signals and display the predicted location on a map. The data collected is stored on a **server**, where machine learning operations are also carried out. 

The machine learning component employs the **fingerprinting method** for positioning. During the offline phase, the data is cleaned, preprocessed, and stored in a database. To improve positioning accuracy, **Gaussian Process Regression** was used to enrich the offline data by considering the effect of the number of reference points. In the online phase, a **buffering mechanism** was introduced to provide smoother, more reliable location predictions. The final location is determined using the **weighted k-nearest neighbors (k-NN) algorithm**, and various **distance metrics** were analyzed for their impact on prediction accuracy.
Locations of Wi-Fi access points installed as part of the Indoor Positioning System (IPS). These access points are strategically placed to ensure optimal signal coverage and accurate positioning throughout the building. Their placement is crucial for minimizing dead zones and improving the overall precision of the system.

<div style="display: flex; justify-content: center;">
    <img src="/assets/Projectsimages/IPS/ComputerGroup_ENG_FUM.jpg" alt="ENG_FUM1" style="width: 50%; height: 50%;">
    <div class="caption">
        Computer Deparrtment of Ferdowsin University of Mashhad
    </div>
</div>

<div style="display: flex; justify-content: center;">
    <img src="/assets/Projectsimages/IPS/WiFiLocation.jpg" alt="WiFiLocation" style="width: 50%; height: 50%;">
    <div class="caption">
        Wifi Locations
    </div>
</div>

