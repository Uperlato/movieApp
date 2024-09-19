===== EXPO =====

npx create-expo-app@latest [your-app-name] --template blank@latest
npx create-expo-app@latest ./ --template blank@latest

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

{package.json} - "main": "expo-router/entry"

{app.json} - "scheme": "your-app-scheme"

npx expo start -c
npx expo start


===== Native Wind =====

https://www.nativewind.dev/quick-starts/expo

npm install nativewind

npm install --save-dev tailwindcss@3.3.2

npx tailwindcss init

{tailwind.config.js} - content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

{babel.config.js} - plugins: ["nativewind/babel"],
