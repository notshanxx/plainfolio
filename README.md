# Plainfolio

:flags: A plain portfolio template for everyone

[Live Preview](https://plainfolio.vercel.app/)

<!--
<p align="center">
<img src="asset/portfolio.gif"/>
</p>
-->

## Features

:pushpin: Fast  
:pushpin: Simple  
:pushpin: One Page  
:pushpin: Reponsive  
:pushpin: Begginer Friendly  
:pushpin: Easy to Customize  


## Table of Contents

- [Prerequisites](#prerequisites)
- [Deploy](#deploy)
- [How to use](#how-to-use)
- [Configuring the template](#configuring-the-template)
- [Changing site color](#changing-color)
- [HTML Sections](#html-sections)
  - [Editing HOME Section](#editing-home-section)
    - [Editing the Profile Picture](#editing-the-profile-picture)
    - [Editing the Social Medias](#editing-the-social-medias)
      - [Add more Social Media Icons](#add-more-social-media-icons)
    - [Editing the Name](#editing-the-name)
    - [Editing the Bio](#editing-the-bio)
    - [Editing the Quote](#editing-the-quote)
  - [Editing PROJECTS section](#editing-projects-section)
    - [PROJECT TEMPLATE](#project-template)
  - [ABOUT SECTION](#about-section)
    - [Changing About Image](#editing-about-image)
    - [Editing Your About Name](#editing-your-about-name)
    - [Editing About Social Media](#editing-the-social-medias)
    - [Editing Your About Long Bio](#editing-your-about-long-bio)
    - [Editing Your Skills](#editing-your-skills)
  - [Others](#others)
     - [Enable Scrolling](#enable-scrolling)
     - [Remove Quote](#remove-quote)
     - [Remove Hover Script](#remove-hover-script)

Follow the folllowing instruction to get the project and run it locally to your computer

### Prerequisites

You will need the following:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/)

```
Vite requires Node.js version 14.18+, 16+ or higher
```

- Should know basic HTML

## How to use

First open your Terminal / Command Prompt

Now clone the repository by entering these

```bash
# Clone the repository
$ git clone https://github.com/notshanxx/plainfolio.git

# Change directory into the repository
$ cd plainfolio

# Remove the current origin repository
$ git remote remove origin

# open in VS Code editor
$ code .
```

Open the New Terminal in the Visual Studio Code at the up left corner or `` [Ctrl + `] ``

After that run

```bash
# Install dependencies
$ npm install

# Run dev server
$ npm run dev
```

After running the `npm run dev`. You should see the following below

```bash

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

Congratulation!!! You can now go to the url `http://localhost:5173/` and view the portfolio


## Deploy

To know how to deploy this and run it online. Follow this [documentation](https://vitejs.dev/guide/static-deploy.html) 

## Configuring the Template

Now to change the default informations.
Go to the `index.html` located at the root folder and follow the following guide.

### Changing Color

Go to the `styles.css` located at the root folder and follow the following guide.

In the first line you will see the `:root`

change only the variable inside it.

```css

:root {
  --bg-color: #070a2d;
  --font-color: #cdced5;
  --link-color: lightblue;
  --text-color-1: rgba(0, 179, 119, 1); 
  --text-color-2: rgba(214, 255, 127, 1);
  --headline-color: white;
}
```


  --bg-color  -the background

  --font-color  -the font color

  --link-color  -the link color

  --text-color-1   -the green color in the site

  --text-color-2  -the yellow collor in the site

  --headline-color  -the h color





### HTML Sections

There's only 3 section to add your infos `The HOME, PROJECTS and ABOUT`

To change or add images or svg. Put your file in the `/asset` folder.  
For image `./asset/img`  
For svg `./asset/svg`

Get SVG in [Feathericons](https://feathericons.com/) if you want to add socials

#### Editing HOME Section

THINGS TO BE EDITED IN HOME SECTION

- your image
- your name
- social media urls
- your bio
- your quote

##### Editing the Profile Picture

To edit the image find these in `index.html`.
Edit the img src by adding your own image in `/asset/img` and copy and paste it's relative path in src like the one below.

```html
<div class="img-container">
  <img width="80" height="80" src="./asset/img/Watashi.jpeg" alt="pfp" />
</div>
```

##### Editing the Social Medias

To edit the social medias find these in `index.html`.
Edit the `href` to your own url.
Get SVG in [Feathericons](https://feathericons.com/) or other sources.

```html
<div class="social-container">
  <!-- GITHUB -->
  <a href="https://github.com/notshanxx" target="_blank"
    ><img width="24" height="24" src="./asset/svg/github.svg" alt="github"
  /></a>

  <!-- LINKEDIN -->
  <a
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    target="_blank"
    ><img width="24" height="24" src="./asset/svg/linkedin.svg" alt="linkedin"
  /></a>
</div>
```

###### Add more Social Media Icons

To add more social media icons. Just follow this template below.  
Edit it's `href` and the `img src`.
Find icons online and add it at`asset/svg`

```html
<a href="https://github.com/notshanxx" target="_blank">
  <img src="./asset/svg/github.svg" alt="github" />
</a>
```

###### Editing the Name

To edit the name find these in `index.html`. Then change it

```html
<h1>MARCO</h1>
```

###### Editing the Bio

To edit the bio find these in `index.html`. Then change it

```html
<p class="user-bio">
  I’m a Student currently pursuing my bachelor's degree in Computer Science.
  <br />
  I’m passionate about developing products that make people's lives easier and
  miserable.
</p>
```

###### Editing the Quote

To edit the quote find these in `index.html`. Then change it

```html
<div class="quote-container">
  <p>
    <!-- EDIT QUOTE -->
    <i>
      You cannot use the word "possibility" without limitations <br />
      - Master Higuchi
    </i>
  </p>
</div>
```

#### Editing PROJECTS section

THINGS TO BE EDITED

- project title
- project repository url
- project short description
- project tools used
- github url

##### PROJECT TEMPLATE

to add more projects copy this template and edit the texts and urls

```html
<div class="repository-container">
  <div class="repository-head">
    <!-- EDIT YOUR PROJECTS -->

    <!-- EDIT YOUR PROJECT'S SOURCE URL-->
    <a
      href="https://github.com/notshanxx/anicard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <!-- EDIT YOUR PROJECT'S TITLE -->
      <h3>anicard</h3>
    </a>

    <!-- EDIT YOUR PROJECT'S SOURCE URL -->
    <a
      href="https://github.com/notshanxx/anicard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./asset/svg/external-link.svg" alt="external-link" />
    </a>
  </div>

  <!-- EDIT YOUR PROJECT'S DESCRIPTION -->
  <p class="repository-description">
    Create simple cards with anime information and cover on it.
  </p>
  <!-- EDIT YOUR PROJECT TOOLS USED -->
  <div class="repository-language-used-container">
    <span class="language-used">Javascript</span>
    <span class="language-used">CSS</span>
    <span class="language-used">HTML</span>
  </div>
</div>
```

#### ABOUT SECTION

THINGS TO BE EDITED IN HOME SECTION

- your image
- your name
- social media urls
- your long bio
- your skills

##### Editing About Image

find these code in the `index.html`. change the `img src`

```html
<!-- Image  -->
<div class="about-img-container">
  <img width="80" height="80" src="./asset/img/Watashi.jpeg" alt="pfp" />
</div>
```

-

##### Editing Your About Name

find these code in the `index.html`. change the name inside

```html
<h2 class="gradient">Marco Manuel</h2>
```

##### Editing About Social Media

find these code in the `index.html`. change the `img src` and the `hrefs` pointing to yours

```html
<ul class="about-social-container">
  <li>
    <img src="./asset/svg/github.svg" alt="Github" />
    <a href="https://github.com/notshanxx/">Github</a>
  </li>

  <li>
    <img src="./asset/svg/mail.svg" alt="LinkedIn" />
    <a href="https://github.com/notshanxx/">Mail</a>
  </li>

  <li>
    <img src="./asset/svg/linkedin.svg" alt="LinkedIn" />
    <a href="https://github.com/notshanxx/"> LinkedIn</a>
  </li>
</ul>
```

`may break design if added more than 3`

##### Editing Your About Long Bio

find these code in the `index.html`. change the contents

```html
<!-- long bio -->
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus
  magnam vel deleniti ea quidem aliquid veniam minima, eveniet impedit
  consequatur nemo dolorem rerum cumque sed qui ratione culpa saepe.
</p>
```

##### Editing Your Skills

find these code in the `index.html`. change/add `<li><li/>` tags

```html
<!-- Skills / Tools -->
<h3>Skills / Tools</h3>
<ul class="skill">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>Phyton</li>
  <li>React</li>
  <li>Svelte</li>
  <li>Node.js</li>
  <li>Git</li>
</ul>
```

## Others

### Enable Scrolling

To enablle scrolling. Go to `styles.css`.
Clear the `overflow` or comment it.

```css
body {
  min-height: 100vh;
  background-color: var(--bg-color);
  text-align: center;
  font-family: "Work Sans", sans-serif; /* remove scroll bar and disable scroll */
  overflow: hidden;
  color: var(--font-color);
}
```

### Remove Quote

To remove the quote. Go to `index.html` and find this `<div>` and comment it out or clear it

```html
<div class="quote-container">
  <p>
    <i>
      You cannot use the word "possibility" without limitations <br />
      - Master Higuchi
    </i>
  </p>
</div>
```

### Remove Hover Script

To remove the hover effect. Go to `index.html` and find this `<script>` tag and comment it out or clear it

```html
<script type="module" src="./script/event-effect.js"></script>
```
