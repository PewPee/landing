## PewPee Landing Website

Available for everyone here: https://pewpee.com

### Developing

Install dependencies with:
```lang=bash
npm install
```
This will install all the needed dependencies.

#### Running web-server

Just run `npm run dev` or `yarn dev` to start the web server and the livereload task.
Open http://localhost:3000/ in your browser.

#### Running in production

Run the build script once, which builds the production application in the .next folder:
```lang=bash
npm run build
```

Then use this command to run Node.js server:
```lang=bash
npm run start
```

> Tip: You can customize the start script in package.json to accept a PORT parameter by updating it as: "start": "next start -p $PORT".

#### Deploying

##### Using Docker

Deploy by Docker using these commands:
```lang=bash
docker build -t pewpee-landing .
docker run -p 3000:3000 pewpee-landing
```

### Licensing

<!-- The source code is licensed under GPL v3. License is available [here](/LICENSE). -->
