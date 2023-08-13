<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="favicon.ico" type="image/x-icon">

<style type="text/css">body {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #0a0a0a;
  color: #e0e0e0;
  background-image: linear-gradient(135deg, #0a0a0a 25%, rgba(0, 24, 42, 0.9) 100%);
  background-size: 400% 400%;
  animation: backgroundGradient 20s linear infinite;
}

.course-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: linear-gradient(270deg, #20c997, #3C4CAD,#3C4CAD);
}

.course-info {
  flex: 1;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-right: 40px;
}

.course-info h1 {
  font-size: 36px;
  font-weight: bold;
  color: linear-gradient(135deg, #20c997, #3C4CAD,#20c997, #3C4CAD);
  margin-bottom: 10px;
}

.course-info p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
}

.course-image {
  width: 360px;
  height: 510px;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(rgba(255, 255, 255, 0.05) 10%, transparent 50%);
  background-size: 300% 300%;
  animation: animatedDots 8s linear infinite;
  z-index: -1;
}

.benefits h2 {
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
}

.module-info {
  flex: 1;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.benefit-item li {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 10px;
  list-style-type: none;
  position: relative;
  padding-left: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.benefit-item {
  max-width: 1200px;
  margin: 20px auto;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: linear-gradient(135deg, #00192d, #00081a);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  animation: fadeInUp 1s ease;
}

.emoji {
  font-size: 46px;
  margin-right: 20px;
  color: #fff;
}

.benefit-item li::after {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #37b6ff;
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ribbonFlare {
  0%,
  100% {
    transform: translateY(-50%) rotate(45deg) scale(0.8);
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }
}

@keyframes backgroundGradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes animatedCircles {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

@keyframes animatedDots {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
}

.course-info {
  animation: fadeInFromBottom 1s ease-in-out, shimmer 3s infinite linear;
  animation-delay: 0.3s;
  
  background-size: 1000px 100%;
}

.benefit-item li::before {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #37b6ff;
  opacity: 0;
  transition: opacity;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: linear-gradient(135deg, #20c997, #3C4CAD,#20c997, #3C4CAD);
  font-size: 36px;
  margin: 0;
}

.tagline {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #ccc;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.feature {
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.feature p {
  margin: 0;
  line-height: 1.6;
  margin: 0;
  line-height: 1.6;
  font-size: 16px;
}

.highlight {
  color: #00ff7f;
  font-weight: bold;
}

.footer {
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
  color: #ccc;
}

.footer p {
  margin-bottom: 60px;
}

.hashtags {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.hashtag {
  margin-right: 10px;
  color: #00bfff;
  font-weight: bold;
}

.info {
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
}

.info-item {
  margin-bottom: 20px;
}

.info-item h2 {
  color: rgb(250,250,250);
  font-size: 24px;
  margin: 0;
}

.info-item p {
  margin: 0;
  line-height: 1.6;
}

.project {
  margin-bottom: 30px;
}

.project h3 {
  color: rgb(250,250,250);
  font-size: 24px;
  margin: 0;
}

.project a {
  color: rgb(250,250,250);
}

.trainer-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

.trainer-header {
  text-align: center;
  margin-bottom: 40px;
  grid-column: 1 / -1;
}

.trainer-title {
  color: #00bfff;
  font-size: 42px;
  margin: 0;
}

.info-container {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  grid-column: 1 / -1;
}

.info-item {
  display: inline-block;
  margin: 5px;
}

.feature {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.feature p {
  margin: 0;
  line-height: 1.8;
  font-size: 16px;
}

.highlight {
  color: #00ff7f;
  font-weight: bold;
}

.footer {
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
  color: #ccc;
  grid-column: 1 / -1;
}

.footer p {
  margin-bottom: 10px;
}

.hashtags {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  grid-column: 1 / -1;
}

.hashtag {
  margin-right: 10px;
  color: #00bfff;
  font-weight: bold;
  font-size: 20px;
}

.module {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
}

.week-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.week {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
}

.week .week-title {
  font-weight: bold;
  font-size: 24px;
}

.benefit {
  margin-top: 10px;
}

.emoji {
  font-size: 24px;
  margin-right: 5px;
  vertical-align: middle;
}

/* Mobile responsive styles */
@media only screen and (max-width: 768px) {
  .course-container {
    flex-direction: column;
  }

  .course-info,
  .course-image {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .benefits h2 {
    font-size: 28px;
  }

  .benefit-item li {
    font-size: 16px;
  }

  .trainer-info {
    display: block;
  }
}


header {
  background: linear-gradient(135deg, #20c997, #3C4CAD,#20c997, #3C4CAD);
  padding: 1rem 0;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
    top: 0;
  z-index: 1000; /* Ensure the header stays above other content */
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 2rem;
}

nav a {
  color: rgb(255,255,255);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease-in-out;
  position: relative;
}

nav a::before {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #00bfff, #37b6ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

nav a:hover {
  color: #37b6ff;
}

nav a:hover::before {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav li {
    margin: 1.5rem 0;
  }
}
body {
  margin-top: 80px;
}

/* Center the content horizontally and vertically */
/* Center the content horizontally and vertically */
.ml {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 20px; /* Add margin around the container */

}

/* Style for the video container */
.ml iframe {
  max-width: 90%;
  border: 2px solid red;
  padding: 10px;
  border-radius: 25px;
}

/* Style for the heading */
.ml h1 {
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem; /* Adjust the font size as needed */
  color: #ffffff; /* Choose a color for the heading */
  margin-top: 20px; /* Add some spacing above the heading */
  
  /* Add a shadow underneath the heading */
  text-shadow: 0 100px 100px rgba(0, 0, 0, 0.2);
}


.contact-info a {
  display: block;  
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.contact-info i {
  margin-right: 10px;
  font-size: 20px;  
  color: #fff; 
}


.outer-container {
  margin-top: -80px;
}

.inner-container {
  margin-top: 80px; 



</style>


</head>
<body>

<header>
  <nav>
    <ul>
      <li><a href="home.html">🏡 Home</a></li>
      <li><a href="Course Description.html">💻 Course Description</a></li>
      <li><a href="why.html">🎯 Why This Course is For You?</a></li>
      <li><a href="register.html">👨‍🏫 Register</a></li>
      <li><a href="trainerinfo.html"target="_blank" rel="noopener noreferrer">👨‍🏫 Trainer Info</a></li>
    </ul>
  </nav>
</header>




<!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<div class="outer-container">
    <div class="inner-container">
      <div class="course-container">

  <!-- Course Information -->
  <div class="course-info">
    <h1>From Novice to Ninja: From C Apprentice to Python Sorcerer in Machine Learning 🚀</h1>
    <p>Trainer: Tariqul Islam</p>
    <p>Course Fee: 3000 BDT</p>
    <p>Available Seats: 30</p>
    <p>Schedule: 9.00 pm - 11.00 pm (Not Fixed)</p>
    <p>Platform: Online</p>
    <h1>Course Overview 📚</h1>
    <p>We'll start from scratch and guide you every step of the way on your coding journey. Our patient and dedicated instructors will ensure you grasp the fundamentals with ease. Don't worry if you have no prior experience – we've got you covered. Let's build your coding skills together from the very beginning! 😊🚀</p>
  </div>

  <!-- Course Image -->
  <div class="course-image">
    <img src="tariqul.jpg" alt="Course Image" width="405" height="405">
  </div><br><br><br><br>

  <!-- Contact Information -->

</div>

    </div>
  </div>
    
  <div class="ml">
    <h1 class="ml2" align="center">Machine Learning Intro</h1>
    <iframe width="1349" height="480" src="https://www.youtube.com/embed/mJeNghZXtMo" title="What is Artificial Intelligence (or Machine Learning)?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>



</body>
</html>
