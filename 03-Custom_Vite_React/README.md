# Learnings

## Note: The same note will be in 01_vite_react

# LECTURE-2 NOTES

### Difference Between creating development with "npx create-react-app app_name" and with "npm create vite@latest"

👉🏾 vite is fast when it comes to developing environment as compared to react.
Because it doesnt bring's many dev-dependencies or say packages like for script, for testings and other stuffs.

### Components

👉🏾 Functions name should be capitalised
👉🏾 It won't give error if the file name is not capitalize, but it's good practicer to capitalize the file name as well

👉🏾 In react we can make any type of file , if .js or .jsx but in vite its mandatory to write file name .jsx

👉🏾 Since somehow we have to inject "script" tag in our jtml to run the js code.
📝 Vite comes up with a script tag in its html file
📝 But in case of react, we'll have to inject it, and

### Packages common in both the react and vite and their uses

📔 React DOM uses createElement to convert JSX into DOM elements
📔 Since the browser understands only HTML, CSS and JS, so React Dom converts jsx into DOM elements.
📔 React DOM created a virtual DOM (i guess), because when i unisntalled the package it was still working, (still need to go a little more depp) .

🖊️ VITE
👉🏾 When we make a developing environment, unlike npx create-react-app, it does not comes with alot of packages.
👉🏾 It comes up with just react and reaect-dom

```
"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0"
}
```

👉🏾 It does not comes up with lots of packages, it fast.
👉🏾 Unlike create-react-app, it comes up with a script tag for js in its .html file

🖊️ Npx create-react-app
When we make a developing environment comes with alot of packages.
👉🏾 It comes up with many testing libraries and also library for inejcting script tag in html when the built is created to run the js app.
"dependencies": {
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"react": "^18.2.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
}
👉🏾 Which makes it slow
👉🏾 react-scripts injects script tag when the build is created to run the react app, we can see it in page sources
