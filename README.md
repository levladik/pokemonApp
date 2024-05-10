# Pokemon Card App

This React Native application displays information about different Pokemon using Pokemon cards. Each card includes the Pokemon's name, image, type, HP, moves, and weaknesses.

## Features

- **Pokemon Cards**: Displays Pokemon information in a card format.
- **Dynamic Styling**: Cards are styled based on the Pokemon's type.
- **Searchable**: Allows users to search for Pokemon by name.
- **Platform Compatibility**: Compatible with both iOS and Android platforms.

## Components

### `App.js`

- **State Hooks**: Manages state variables for Pokemon data and loading state.
- **Fetch Data**: Fetches Pokemon data from the API using `useEffect`.
- **Rendering**: Renders the `PokemonCard` component for each Pokemon.

### `PokemonCard.js`

- **Props**: Receives props such as `name`, `image`, `type`, `hp`, `moves`, and `weaknesses`.
- **Styling**: Applies styles based on the Pokemon's type.
- **Content**: Displays Pokemon details such as name, HP, moves, and weaknesses.

## Styling

- **Platform Specific Styling**: Adjusts styles based on the platform (iOS or Android).
- **Card Styling**: Cards have a border, shadow (iOS), and elevation (Android).
- **Type Badge**: Displays a badge with the Pokemon's type and an emoji icon.

## How to Run

1. Ensure you have Node.js and npm installed on your machine.
2. Clone the repository:

   ```bash
   git clone https://github.com/levladik/pokemonApp.git
   ```

3. Navigate to the project directory:

   ```bash
   cd pokemonApp
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the application:

   ```bash
   npm start
   ```

6. Open the app on your emulator or device using Expo.

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.