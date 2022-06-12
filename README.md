# MS-Code-to-Give-Hackathon

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://utsavk28.github.io/HostedAssets/DetectiveDogLogo.png" alt="Logo" width="240" >
  </a>

  <h2 align="center">St. Judes For Life</h2>

  <p align="center">
    A platform for the beneficiaries of the St. Judes India ChildCare Centres to raise requests for receiving aid from St. Judes For Life(SJFL). 
    <br />
    <a href="https://detective-dog.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/utsavk28/DetectiveDog/issues">Report Bug</a>
    ·
    <a href="https://github.com/utsavk28/DetectiveDog/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This website is for St. Judes For Life(SJFL) organisation started by Morgan Stanley. The website offers multilingual characteristics by providing 5 different languages for the user to read and underatand everything. The website provides smooth working process of requesting aid by user, uploading documents, verifying the request by administrator, accepting or rejecting the aid accordingly and giving aid to the user if accepted. Documents are stored safely and the donations are maintained in the database securely. The platform is be able to notify the SJFL team of incoming requests through email. 
* Home Page
![Social Home Page](https://utsavk28.github.io/HostedAssets/social-ss-2.png)
* About Us Page
![Social Profile Page](https://utsavk28.github.io/HostedAssets/social-ss-1.png)
* How It Works Page
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)
* User Login Page
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)
* Admin Login Page
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)
* Profile Page
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)
* Admin Dashboard Page
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)
* Home Page translated to Marathi
![Social Chat Page](https://utsavk28.github.io/HostedAssets/social-ss-3.png)

### Features

- Multilingual interface
- Facility to upload documents
- Notifications can be received via Email
- Online meet feature facilitated through Zoom
- Responsive and easy to understand design
- Ability to receive Donations and send Aid

## Tech Stack

**Client:**
* [React](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)

**Server:**
* [Postgresql](https://www.postgresql.org/)
* [FastAPI](https://fastapi.tiangolo.com/)
* [Twilio](https://www.twilio.com/)
* [Notify](https://notify.ly/)


<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Get a Mongo URI from [https://cloud.mongodb.com/](https://cloud.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/utsavk28/Social
   ```
3. Install NPM packages
   ```sh
   cd client && npm install
   ```
   ```sh
   cd server && npm install
   ```
4. Enter your Mongo URI and JWT Secret Token in `server/config/default.json`
   ```JSON
   {
		"mongoURI": "mongodb+srv://user:pass@cluster10.uxypi.mongodb.net/test?retryWrites=true&w=majority",
		"jwtSecret": "token"
	}
   ```



<!-- USAGE EXAMPLES -->
## Usage

The beneficiaries of St. Judes India ChildCare Centres can request for aid in various financial as well as non-financial aspects like Education,Health,Career Counselling,Life Skills etc in the future through the website of St. Judes For Life. Those who have received aid for cancer treatment by the SJICC can login and request aid. The Program Coordinators(Admins) can ask for and verify the documents submitted by beneficiaries and accept or reject their request accordingly. They can give aid and keep track of all the transactions for aid. The users can also opt to have a meeting with a volunteer through the website or request an offline meet. The site also provides means of accepting donations from donators. This website breaks the barriers between different parts of the world. It offers an easy online way of giving aid to beneficiaries. It also breaks language barriers by offering 5 different languages for the user.


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

 - [x] Phase 1
	 - CRUD Operations on Posts, Comments and Profile 
	 - CRUD operation on Posts, Profile and Comments
	- Like/Unlike Post & Comments
- [x] Phase 2
	- Follow/Unfollow Users 
	- Chat with your Friends with Real Time Chat Feature
	- Save Posts
	- Explore Page
- [ ] Phase 3
	- .

<!-- AUTHORS -->
## Authors

- [Utsavk28](https://github.com/utsavk28)
- [Rushgala27](https://github.com/rushgala27)
- [Devdev29](https://github.com/devdev29)
- [Ananya-bangera](https://github.com/ananya-bangera)
- [Sans2801](https://github.com/Sans2801)
- [Abhi-0007](https://github.com/Abhi-0007)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License





<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/utsavk28/Social.svg?style=for-the-badge
[contributors-url]: https://github.com/utsavk28/Social/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/outsavk28/Social.svg?style=for-the-badge
[forks-url]: https://github.com/utsavk28/Social/network/members
[stars-shield]: https://img.shields.io/github/stars/utsavk28/Social.svg?style=for-the-badge
[stars-url]: https://github.com/utsavk28/Social/stargazers
[issues-shield]: https://img.shields.io/github/issues/utsavk28/Social.svg?style=for-the-badge
[issues-url]: https://github.com/utsavk28/Social/issues
[license-shield]: https://img.shields.io/github/license/utsavk28/Social.svg?style=for-the-badge
[license-url]: https://github.com/utsavk28/Social/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/utsav-khatu-431b741bb/
