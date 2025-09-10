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


<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>کارت‌های درسی</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 30px;
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #2c3e50;
            font-size: 2.5rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
        }
        .projects-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
        }
        .project-card {
            width: calc(33.33% - 25px);
            border: 1px solid #ddd;
            border-radius: 15px;
            overflow: hidden;
            margin-bottom: 20px;
            background: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }
        .project-card a {
            text-decoration: none;
            color: inherit;
            display: block;
            height: 100%;
        }
        .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            border-bottom: 1px solid #eee;
        }
        .project-content {
            padding: 20px;
        }
        .project-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0 0 10px;
            color: #2c3e50;
            text-align: center;
        }
        /* طراحی واکنش‌گرا برای صفحه‌نمایش‌های کوچک‌تر */
        @media (max-width: 992px) {
            .project-card {
                width: calc(50% - 25px);
            }
        }
        @media (max-width: 768px) {
            .project-card {
                width: 100%;
                max-width: 400px;
            }
            h1 {
                font-size: 2rem;
            }
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>عنوان‌های درسی</h1>
        <div class="projects-grid">
            <!-- Pattern Recognition -->
            <div class="project-card">
                <a href="/teaching/pattern-recognition/">
                    <img src="../assets/images/PR1.JPG" 
                         alt="Pattern Recognition" 
                         class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">Pattern Recognition</h3>
                    </div>
                </a>
            </div>
            <!-- Machine Learning -->
            <div class="project-card">
                <a href="/teaching/machine-learning/">
                    <img src="../assets/images/machinelearning1.JPG" 
                         alt="Machine Learning" 
                         class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">Machine Learning</h3>
                    </div>
                </a>
            </div>
            <!-- Circuit Analysis -->
            <div class="project-card">
                <a href="/teaching/circuit-analysis/">
                    <img src="../assets/images/startPic.jpg" 
                         alt="Circuit Analysis" 
                         class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">Circuit Analysis</h3>
                    </div>
                </a>
            </div>
            <!-- Signal Processing -->
            <div class="project-card">
                <a href="/teaching/signal-processing/">
                    <img src="../assets/images/ECG_1.jpg" 
                         alt="Signal Processing" 
                         class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">Signal Processing</h3>
                    </div>
                </a>
            </div>
            <!-- AI Essentials -->
            <div class="project-card">
                <a href="/teaching/ai-essentials/">
                    <img src="../assets/images/DeepDream2.JPG" 
                         alt="AI Essentials" 
                         class="project-image">
                    <div class="project-content">
                        <h3 class="project-title">AI Essentials</h3>
                    </div>
                </a>
            </div>
        </div>
        <div class="footer">
            طراحی شده با ❤️ | کلیک بر روی هر کارت برای مشاهده جزئیات درس
        </div>
    </div>
</body>
</html>


