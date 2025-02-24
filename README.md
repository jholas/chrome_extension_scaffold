![node.js workflow](https://github.com/jholas/chrome_extension_scaffold/actions/workflows/node.js.yml/badge.svg)

# Chrome Extension Scaffold

## Description
This project is a scaffold for creating a Chrome extension. It provides a basic structure and setup to help you get started quickly with developing your own Chrome extension. The purpose of this scaffold is to simplify the initial setup process for creating a Chrome extension. It includes essential files and configurations, allowing you to focus on developing the core functionality of your extension.

## Features
- Basic manifest file setup
- Sample background script
- Sample content script
- Sample popup HTML and JavaScript
- Instructions for loading the extension in Chrome
- Example of message passing between background and content scripts
- Jest tests ready with sample test
- Tailwind v4.0 CSS framework

## Usage
1. Clone the repository:
    ```sh
    git clone https://github.com/jholas/chrome_extension_scaffold.git
    ```
2. Navigate to the project directory:
    ```sh
    cd chrome_extension_scaffold
    ```
3. Install dependencies (if any):
    ```sh
    npm install
    ```
4. Build project
   ```sh
    npm run build
    ```
    or build and watch for changes for development
    ```sh
    npm run watch
    ```
5. Load the extension in Chrome:
    - Open Chrome and go to `chrome://extensions/`
    - Enable "Developer mode" in the top right corner
    - Click "Load unpacked" and select the project directory

6. Start developing your extension by modifying the files in the project directory.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
