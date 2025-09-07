---
layout: single
title: "Projects"
permalink: /projects/
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/background.png # یک تصویر برای هدر انتخاب کنید
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
classes: wide
---

<div class="projects-grid">
  
  <!-- پروژه ۱ -->
  <div class="project-card">
    <a href="/projects/project-1/">
      <img src="/assets/images/FireMain.png" alt="پروژه ۱" class="project-image">
      <div class="project-content">
        <h3 class="project-title">Design and Manufacture of Firefighter Vital Signs Locator Kit with Transmitter and Recorder</h3>
        <p class="project-description">Design and Fabrication of a Portable Vital Signs Monitoring and Location Tracking System for Firefighters.</p>
      </div>
    </a>
  </div>

  <!-- پروژه ۲ -->
  <div class="project-card">
    <a href="/projects/project-2/">
      <img src="/assets/images/project2-thumb.jpg" alt="پروژه ۲" class="project-image">
      <div class="project-content">
        <h3 class="project-title">نام پروژه دوم</h3>
        <p class="project-description">توضیح کوتاه درباره پروژه دوم که ویژگی‌های کلیدی آن را بیان می‌کند.</p>
      </div>
    </a>
  </div>

  <!-- پروژه ۳ -->
  <div class="project-card">
    <a href="/projects/project-3/">
      <img src="/assets/images/project3-thumb.jpg" alt="پروژه ۳" class="project-image">
      <div class="project-content">
        <h3 class="project-title">نام پروژه سوم</h3>
        <p class="project-description">توضیح کوتاه درباره پروژه سوم که ویژگی‌های کلیدی آن را بیان می‌کند.</p>
      </div>
    </a>
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

.project-description {
  color: #666;
  line-height: 1.6;
}
</style>