# Angular Project Setup Guide  

## Step 1: Create a New Angular Project  
```sh
npx ng new <projectName>
cd <projectName>
```

## Step 2: Install Bootstrap  
```sh
npm install bootstrap
```

## Step 3: Add Bootstrap to `angular.json`  
Open `angular.json` and add the Bootstrap CSS file inside the `styles` array:  

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

## Step 4: Generate Components  
```sh
npx ng generate component parent  
npx ng generate component child  
```

## Step 5: Serve the Application  
```sh
npx ng serve -o
```

## Notes:  
- Replace `<projectName>` with your actual project name.  
- The `-o` flag automatically opens the project in your default browser.  
- Ensure `bootstrap.min.css` is correctly referenced in `angular.json` to apply Bootstrap styles.  

