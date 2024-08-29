
## What is a bundler?
- It's a tool used in web development process
- It bundles all the HTML, CSS & JS files together into a single output file thus improving the performance of web apps
	- Improved performance is the resultant of reduced HTTP request

## Bundler of choice
- There are many bundlers such as webpack, parcel, rollup and more but we are going to use Vite because that is the easiest type of bundler to learn. As a beginner, I will use it

## How to use Vite?
#### Step 1: Install Vite
- ``` npm i --save-dev vite ```
	-  **--save-dev** is flag that only install the particular package in dev environment
	- Vite is only needed in dev environment because the production only going to get the compiled source code which is being done in vite
#### Step 2: Run Vite 
-  There are 2 types of ways to run vite which are: 
1) Using static server
	- After installation complete, open the terminal and run ```npx vite ```
	- If we want, we can go to package.json
		- Create a "script" property if none then inside it create "dev" key with the value being "vite dev"
				![[Pasted image 20240829115111.png | 300]]
		 
		- After done with this, we can go back to terminal and run the static server using ```npm run dev```
	- <span style="font-style:italic; color:rgb(255, 0, 0)">Sometimes,</span> **<span style="color:rgb(255, 0, 0)">the localhost cannot opened due to few reasons, based on my encounter which are:</span>
		- The souce html file is not named as "index.html" : The quick fix is just to rename your html file to index.html
			- In my scenario, I named the html file as vite.html then changed it to index.html
		 - The port might be used by other components: 
			 - The quick fix will be to create vite.config.js file if have not been created.
			 - Then update the port number using this code snippet
						![[Pasted image 20240829121047.png]]
				- The port number can be any 4 digits number
2) Using templates
	- Templates are boiler plate codes that will configure a well structured and optimized environment. This templates helps us to bootstrap the applications without needing us to manually configure build tools like Webpack, Babel and so on
	- They also come with Hot Module Replacement (HMR) which allows us to see changes live in browser (something like Live Open Server)
	- Template codes also allows us to build production code in optimal way, they come with certain commands to build Production code
		- It used to be to create React Application, we need to enter create this template using Create React App (CRA) approach with the command `npx create-react-app` but that approach is now not being used due to it's heavy dependancy and the resultant built time issue
	- With Vite, we can do similar thing with the command `npm create vite`
		- The terminal then will come up with few options
				![[Pasted image 20240829130237.png]]
			- The 1st question it asked was, what's the project name, since we want to create the project in the current folder itself, just type `.` but if we want it to be another folder, we can just type whatever name we want
			- For package name we can just press enter and let it be default
			- Then comes the option to select a framework, in our case we just going to create Vanilla JS, so we select that option
			- Then we select JavaScript in the option of either JavaScript or Typescript and then we are presented with the folder structure as below
							![[Pasted image 20240829131002.png]]<span style="color:rgb(255, 0, 0)">
</span> 
				- This is the boilerplate file structure and code the template built, our main focus should be in 2 sections which are the public folder and the index.html file
					- Public folder is where we store all the static assets like, images, icons etc, this folder is important
					- index.html is the **entry point** for vite, we should not change the html file name and all the javascript will be linked to index.html
			- To proceed to create the dev server, we first have to run `npm i` to install necessary Vite required files from node modules then run `npm run dev`
				- The `npm run dev` command is added into the package.json's "script" property by vite itself
				- You know everything is successful when you see the localhost server as the screenshot below![[Pasted image 20240829132841.png]]
				