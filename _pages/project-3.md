---
layout: single
title: "Interactive Wall — An Augmented Reality System for Education and Entertainment"
permalink: /projects/project-3/
classes: wide
author_profile: true
---


<img src="/assets/Projectsimages/InteractiveWall/InteractiveWall_1.png" 
     alt="InteractiveWall Main" 
     style="width: 50%; height: 50%;">

     

**Cooperation:** <a href="https://www.um.ac.ir/" style="text-decoration:underline; color:green;" target="_blank"><strong>Ferdowsi University of Mashhad</strong></a>

---

## Abstract  

The <a href="https://multi-ball.com/?https%3A%2F%2Fmulti-ball.com%2Fpages%2Fthank_you&utm_term=interactive+wall&utm_campaign=MB_Search_Facilities_REST&campaignid=21173878966&utm_source=adwords&utm_medium=ppc&hsa_acc=1413865182&hsa_cam=21173878966&hsa_grp=166468327888&hsa_ad=696068068543&hsa_src=g&hsa_tgt=kwd-329259232684&hsa_kw=interactive+wall&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=21173878966&gbraid=0AAAAAouPjQ7Vv7qiLo702B1IXel-VuRwj&gclid=CjwKCAjw_fnFBhB0EiwAH_MfZlS5BBsdDJ7VhI_wL9yZnJhcmvJJEn0DvgE5ydIHbGiHT47e0VKEaRoCHgUQAvD_BwE" style="text-decoration:none; color:red;" target="_blank"><strong>Interactive Wall</strong></a>
project introduces a smart <a href="https://en.wikipedia.org/wiki/Augmented_reality" style="text-decoration:underline; color:green;" target="_blank"><strong>Augmented Reality (AR)</strong></a> system that transforms ordinary walls into engaging, interactive spaces for children. Using a **3D depth camera** (e.g., Microsoft Kinect), real-time image processing, artificial intelligence, and game engines, the system provides immersive **educational and entertainment experiences**.  

Applications range from **language and mathematics learning** to **interactive games for children with autism**, as well as **innovative advertising solutions**.  

---


## 1. Problem Statement  

Traditional educational and entertainment tools for children are often limited to **static media** (books, TVs, posters) or **isolated digital devices** (PCs, tablets). These approaches:  

- Lack **physical engagement** and motor skill development.  
- Provide limited **real-time feedback**.  
- Fail to exploit the **immersive potential** of interactive technologies.  

**Desired behaviour:** A wall-sized interactive system that responds to gestures and movements, creating a playful and educational environment.  

---

## 2. Proposed Solution (High Level)  

The **Interactive Wall** system consists of:  

- A **3D depth camera** to capture motion and gestures.  
- An **image-processing processor** for real-time interpretation of depth data.  
- An **AI engine** (Python-based) for gesture recognition and adaptive interaction.  
- A **C# configuration tool** for setup and customization.  
- A **Unity game engine** environment for creating interactive educational and entertainment applications.  

![InteractiveWall_3](/assets/Projectsimages/InteractiveWall/InteractiveWall_3.png)


This combination enables robust gesture-based interaction, immersive gameplay, and educational applications.  

---

## 3. Key Technologies & Concepts  

- **Kinect / 3D Camera**: Captures 3D depth and motion.  
  <a href="https://en.wikipedia.org/wiki/Kinect" target="_blank" style="text-decoration:none; color:inherit;"><strong>Kinect overview (Wikipedia)</strong></a>  

- **Image Processing**: Converts raw depth data into actionable gestures.  
  <a href="https://en.wikipedia.org/wiki/Digital_image_processing" target="_blank" style="text-decoration:none; color:inherit;"><strong>Digital Image Processing (Wikipedia)</strong></a>  

- **Artificial Intelligence (Python)**: Recognizes gestures, analyzes actions, and adapts gameplay.  
  <a href="https://www.tensorflow.org/" target="_blank" style="text-decoration:none; color:inherit;"><strong>TensorFlow (Google AI platform)</strong></a>  

- **Unity Game Engine**: Develops interactive 2D/3D applications.  
  <a href="https://unity.com/" target="_blank" style="text-decoration:none; color:inherit;"><strong>Unity official site</strong></a>  

- **C# Software Layer**: Provides setup tools and user interface for activity/game selection.  
  <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" style="text-decoration:none; color:inherit;"><strong>C# documentation (Microsoft)</strong></a>  

---

## 4. System Architecture (Recommended)  

flowchart TD  
    A[3D Depth Camera (Kinect)] --> B[Image Processing Processor]  
    B --> C[AI Engine (Python)]  
    C --> D[Unity Game Environment]  
    D --> E[Interactive Wall Projection]  

![InteractiveWall_FlowGraph](/assets/Projectsimages/InteractiveWall/InteractiveWallFlowchart.png)


  

**Key components**  
- **Camera calibration**: Ensures accurate depth sensing.  
- **Real-time processing**: Optimized for minimal latency.  
- **AI models**: Gesture recognition trained for children’s interaction.  
- **Fallbacks**: Default pre-programmed actions if tracking fails.  

## The Interactive Wall: Immersive AR for Dynamic Learning and Engagement: Product Catalog & Solutions Guide

<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
  <div style="flex: 1;">
    <img src="/assets/Projectsimages/InteractiveWall/catalog-back-new.png" alt="catalog-front 1" style="width: 100%; height: auto;">
  </div>
  <div style="flex: 1;">
    <img src="/assets/Projectsimages/InteractiveWall/catalog-front-new.png" alt="catalog-front-new 2" style="width: 100%; height: auto;">
  </div>
  
</div>

## Product Overview
Interactive Wall  An intelligent AI-powered system that creates virtual, interactive environments on any wall surface.

### System Components
- Computer - Central processing unit
- 3D Camera - Motion and gesture detection
- Video Projector - Display projection system
- Audio System - Sound integration
- Lighting - Environmental lighting control
### Key Features
- Management software for camera and game settings
- Single or multi-player interactive games (competitive/cooperative modes)
- Adaptable to various wall dimensions
- Ball detection system (different sizes and colors)
- Real-time interaction processing
### Application Categories
- Recreational 
    Creates exciting and smart interactive spaces
    Entertainment-focused games and activities
- Educational 
    Dynamic learning environments
    Mathematics and language learning applications
    Interactive educational content with visual elements
- Sports 
    Athletic training and skill development
    Physical activity enhancement
    Performance improvement tools
    Expandable Services
    Climbing wall integration with speed-based competitive games
    Custom game content development based on client requirements
    Specialized interactive game development for specific applications
### Operational Flow
- Projector displays images/games on the wall
- Camera adjusts to environment conditions
- Camera captures user interactions and sends data to system
- System processes interactions and displays real-time results
### Contact Information
- Ferdowsi University of Mashhad Growth Center
- Telegram:@HadiSadoghiYazdi
- Website 1:h-sadoghi.github.io
- Website 2:hadisadoghiyazdi1971.github.io




---

## 5. Implementation Steps  

1. **Camera setup & calibration** — configure Kinect and validate depth accuracy.  
2. **Image processing module** — implement gesture detection algorithms.  
3. **AI integration** — train gesture/action recognition models using Python frameworks.  
4. **Software interface (C#)** — build an intuitive interface for educators and operators.  
5. **Game development (Unity)** — design interactive educational and entertainment games.  
6. **Pilot deployment** — test in controlled settings (classrooms, exhibitions).  
7. **Evaluation & scaling** — refine based on feedback and expand to broader audiences.  

---

## 6. Applications  

**Education**  
- <u>Language Learning</u>: Interactive vocabulary and grammar games.  
- <u>Mathematics</u>: Fun arithmetic and problem-solving activities.  

**Entertainment**  
- <u>Interactive play</u>: Keeps children engaged through movement.  
- <u>Autism support</u>: Customized activities for social interaction and sensory training.  

**Advertising & Public Spaces**  
- <u>Interactive Ads</u>: Smart promotional walls responding to gestures.  
- <u>Exhibitions</u>: Engaging booths with interactive digital displays.  

---

## 7. Addressing Challenges  

- **Camera Calibration**: Use reference patterns for accurate depth mapping.  
- **Tilt Compensation**: Apply mathematical corrections for camera misalignment.  
- **Depth Estimation**: Use machine learning models for robust object tracking.  
- **Real-Time Processing**: Optimize algorithms and leverage GPU acceleration.  

---

## 8. Deployments & Case Studies  

- Installed and demonstrated at **Ferdowsi University of Mashhad**.  
- Showcased in **Mashhad Municipality exhibitions**.  
- Tested with children in **interactive educational sessions**.  

![InteractiveWall_Children](/assets/Projectsimages/InteractiveWall/InteractiveWall_5.png)  

**Capabilities**  
- Games & entertainment  
- Educational activities  
- Interactive advertising  

---

## 9. References (Select)  

- <a href="https://en.wikipedia.org/wiki/Kinect" target="_blank" style="text-decoration:none; color:inherit;"><strong>Kinect — Wikipedia</strong></a>  
- <a href="https://unity.com/" target="_blank" style="text-decoration:none; color:inherit;"><strong>Unity Game Engine — Official</strong></a>  
- <a href="https://www.tensorflow.org/" target="_blank" style="text-decoration:none; color:inherit;"><strong>TensorFlow AI — Google</strong></a>  
- <a href="https://en.wikipedia.org/wiki/Digital_image_processing" target="_blank" style="text-decoration:none; color:inherit;"><strong>Digital Image Processing — Wikipedia</strong></a>  
- <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" style="text-decoration:none; color:inherit;"><strong>C# documentation — Microsoft</strong></a>  

---
