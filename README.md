# DOM Navigation widget

Embed widget renders the DOM tree of a webpage for easier navigation by DOM.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)


### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aartemius/dom-navigation-widget.git


### Usage

2 ways to embed the widget to the website:
1. 
-Run npm run serve in terminal in your project root directory to start local server
-In your local website add following script tag to the end of your <body> tag: <script src="http://localhost:3030/bundle.js"></script>
-Add following markup to the start of your <body> tag: <div id="dom-navigation-container"></div>
-Run your website

2. 
-Copy file bundle.js from project's /public/dist folder 
-Add this file to your website and add following script to the end of your <body> tag: <script src="your/file/directory/bundle.js"></script> . Replace "your/file/directory/bundle.js" with actual file path.
-Add following markup to the start of your <body> tag: <div id="dom-navigation-container"></div>
-Run your website
