---
layout: single
title: "Teaching"
permalink: /teaching/
author_profile: false
sidebar:
  nav: "teaching"
classes: wide
header:
  overlay_image: "/assets/images/background.jpg"
  overlay_filter: 0.3
  overlay_color: "#5e616c"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

<div class="container">
  <div class="header">
    <h1>Course Topics</h1>
    <p>Select</p>
  </div>

  <div class="projects-grid">
    <div class="project-card">
      <a href="/teaching/pattern-recognition/">
        <img src="{{ '/assets/images/PR1.JPG' | relative_url }}" 
             alt="Pattern Recognition" 
             class="project-image">
        <div class="project-content">
          <h3 class="project-title">Pattern Recognition</h3>
        </div>
      </a>
    </div>
    <div class="project-card">
      <a href="/teaching/machine-learning/">
        <img src="{{ '/assets/images/machinelearning1.JPG' | relative_url }}" 
             alt="Machine Learning" 
             class="project-image">
        <div class="project-content">
          <h3 class="project-title">Machine Learning</h3>
        </div>
      </a>
    </div>
    <div class="project-card">
      <a href="/teaching/circuit-analysis/">
        <img src="{{ '/assets/images/startPic.jpg' | relative_url }}" 
             alt="Circuit Analysis" 
             class="project-image">
        <div class="project-content">
          <h3 class="project-title">Circuit Analysis</h3>
        </div>
      </a>
    </div>
    <div class="project-card">
      <a href="/teaching/signal-processing/">
        <img src="{{ '/assets/images/ECG_1.jpg' | relative_url }}" 
             alt="Signal Processing" 
             class="project-image">
        <div class="project-content">
          <h3 class="project-title">Signal Processing</h3>
        </div>
      </a>
    </div>
    <div class="project-card">
      <a href="/teaching/ai-essentials/">
        <img src="{{ '/assets/images/DeepDream2.JPG' | relative_url }}" 
             alt="AI Essentials" 
             class="project-image">
        <div class="project-content">
          <h3 class="project-title">AI Essentials</h3>
        </div>
      </a>
    </div>
  </div>

  <div class="footer">
    Click on each card to view lesson details
  </div>
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  margin-top: 0;
  color: #333;
}
</style>
