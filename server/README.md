<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shreyashkadam/bookify">
    <img src="readme-images/logo.png" alt="Logo" width="288" height="80">
  </a>

<h3 align="center">Bookify</h3>

  <p align="center">
    An Online Audiobook Streaming Website made using MERN Stack, Tailwind CSS, Firebase for Google authentication and Storage, and Razorpay for Payment Integration
    <br />
    <br />
    <a href="https://shreyash-bookify.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/shreyashkadam/bookify/issues">Report Bug</a>
    ·
    <a href="https://github.com/shreyashkadam/bookify/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#user-role">User Role</a></li>
        <li><a href="#admin-role">Admin Role</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Built With
<ul>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://nodejs.org/en/">Node</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://firebase.google.com/">Firebase</a></li>
  <li><a href="https://razorpay.com/">Razorpay</a></li>
</ul>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Make sure you have latest version of npm installed
   * npm
     ```sh
     npm install npm@latest -g
     ```
2. Make sure you have your accounts set up on MongoDB, Firebase and Razorpay

### Installation

1. Create project on Firebase and MongoDB
2. Make payment instance on Razorpay (preferably in Test Mode)
3. Get your API keys
   * Database String from MongoDB
   * Firebase Config keys from Firebase (Project Settings -> General)
   * Generate API Keys on Razorpay (Settings -> API Keys -> Generate API Keys)
4. Clone the repo
   ```sh
   git clone https://github.com/shreyashkadam/bookify.git
   ```
5. Install NPM packages
   ```sh
   npm install
   ```
6. Create `.env` file in both, `/client` and `/server` folder
7. Append your Firbase Config Keys in `/client/.env`
   ```js
   REACT_APP_FIREBASE_API_KEY = 'YOUR apiKey'
   REACT_APP_FIREBASE_AUTH_DOMAIN = 'YOUR appDomain'
   REACT_APP_FIREBASE_PROJECT_ID = 'YOUR projectId'
   REACT_APP_FIREBASE_STORAGE_BUCKET = 'YOUR storageBucket'
   REACT_APP_FIREBASE_MESSAGING_ID = 'YOUR messagingSenderId'
   REACT_APP_FIREBASE_APPID = 'YOUR appId'
   ```
8. Append your Razorpay API Keys in `/client/.env`
   ```js
   REACT_APP_RAZORPAY_API_KEY = 'YOUR API KEY'
   REACT_APP_RAZORPAY_API_SECRET = 'YOUR API SECRET'
   ```
9. Append your Razorpay API Keys in `/server/.env`
   ```js
   RAZORPAY_API_KEY = 'YOUR API KEY'
   RAZORPAY_API_SECRET = 'YOUR API SECRET'
   ```
10. Append your MongoDB Database String in `/server/.env`
    ```js
    DB_STRING = 'YOUR DATABASE STRING';
    ```
11. Download private key from Firebase and rename it to `serviceAccountKey.json` (Project Setting -> Service Accounts -> Generate Private Key)
12. Put your `serviceAccountKey.json` in `/server/config` folder


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Start the server 
   ```sh
   cd server/
   yarn dev
   ```
2. Start Client
   ```sh
   cd client/
   yarn start
   ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Features
   ### User Role
   #### Payment Gateway
   [![Product Name Screen Shot][product-screenshot1]](https://example.com)
   #### Audiobook Player
   [![Product Name Screen Shot][product-screenshot2]](https://example.com)
   #### Search Filter
   [![Product Name Screen Shot][product-screenshot3]](https://example.com)
   #### Login Page
   [![Product Name Screen Shot][product-screenshot4]](https://example.com)
   #### Google Authentication
   [![Product Name Screen Shot][product-screenshot5]](https://example.com)
    <br />
   ### Admin Role
   #### Admin Dashboard
   [![Product Name Screen Shot][product-screenshot6]](https://example.com)
   #### Manage Users
   [![Product Name Screen Shot][product-screenshot7]](https://example.com)
   #### Manage Audiobooks
   [![Product Name Screen Shot][product-screenshot8]](https://example.com)
   #### Add Audiobooks
   [![Product Name Screen Shot][product-screenshot9]](https://example.com)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Shreyash Kadam - [@linkedin-handle](https://linkedin.com/in/shreyash-kadam) - shreyash.kadam10@gmail.com

Project Link: [https://github.com/shreyashkadam/bookify](https://github.com/shreyashkadam/bookify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/shreyashkadam/bookify.svg?style=for-the-badge
[contributors-url]: https://github.com/shreyashkadam/bookify/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shreyashkadam/bookify.svg?style=for-the-badge
[forks-url]: https://github.com/shreyashkadam/bookify/network/members
[stars-shield]: https://img.shields.io/github/stars/shreyashkadam/bookify.svg?style=for-the-badge
[stars-url]: https://github.com/shreyashkadam/bookify/stargazers
[issues-shield]: https://img.shields.io/github/issues/shreyashkadam/bookify.svg?style=for-the-badge
[issues-url]: https://github.com/shreyashkadam/bookify/issues
[license-shield]: https://img.shields.io/github/license/shreyashkadam/bookify.svg?style=for-the-badge
[license-url]: https://github.com/shreyashkadam/bookify/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shreyash-kadam
[product-screenshot]: readme-images/screenshot.png
[product-screenshot1]: readme-images/screenshot1.png
[product-screenshot2]: readme-images/screenshot2.png
[product-screenshot3]: readme-images/screenshot3.png
[product-screenshot4]: readme-images/screenshot4.png
[product-screenshot5]: readme-images/screenshot5.png
[product-screenshot6]: readme-images/screenshot6.png
[product-screenshot7]: readme-images/screenshot7.png
[product-screenshot8]: readme-images/screenshot8.png
[product-screenshot9]: readme-images/screenshot9.png

