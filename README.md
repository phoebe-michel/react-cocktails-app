# Cocktail App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction
The Cocktail App is a React-based application that allows users to explore various cocktail recipes. By integrating with The Cocktail DB API, the app provides detailed information about cocktails, including ingredients, instructions, and images. This project is a demonstration of my skills in React, Tailwind CSS, and API integration.

## Features
- Browse a wide variety of cocktails
- Search for cocktails by name
- View detailed information about each cocktail, including ingredients and preparation instructions
- Responsive design for optimal viewing on all devices

## Technologies Used
- **React**: A JavaScript library for building user interfaces
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **HTML/CSS**: Markup and styling
- **The Cocktail DB API**: An open database of cocktail recipes

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/phoebe-michel/react-cocktails-app.git
   cd cocktail-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to find cocktails by name.
3. Click on a cocktail to view detailed information.

## API Reference
This project uses The Cocktail DB API to fetch cocktail data. Below is a brief overview of the endpoints used:

- **Search Cocktails by Name**
  - Endpoint: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={cocktail_name}`
  - Example: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`

- **Lookup Full Cocktail Details by ID**
  - Endpoint: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={cocktail_id}`
  - Example: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements
- [The Cocktail DB API](https://www.thecocktaildb.com) for providing the cocktail data.
- [React](https://reactjs.org/) for the powerful UI library.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.

---

Thank you for checking out my Cocktail App! If you have any questions or feedback, feel free to reach out.
