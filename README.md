## Nodejs Express js Nodemon

# Nodejs
install node js

PS C:\Users\semerkand\Desktop\website> npm list

website@1.0.0 C:\Users\semerkand\Desktop\website
├── express@4.18.2
└── nodemon@3.0.1

PS C:\Users\username\Desktop\website> npm list -g

C:\Users\semerkand\AppData\Roaming\npm
├── faker@6.6.6
├── nodemon@3.0.1
├── surge@0.23.1
├── typescript@5.2.2
└── yarn@1.22.19

# Express js

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Copy code

```
npm install express --save

```

## nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

Copy code

```
npm i nodemon
//or

npm install -g nodemon

```

## ejs

What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

```
npm install ejs
```

+ create a views folder and get .html files in it and change the file extension to .ejs
  
+ app.set("view engine", "ejs")

//routes

app.use("/products/:id", function (req, res) {
  <!-- res.send("product details" + " " + req.params.id); --> // change send to render

  res.render("product details" + " " + req.params.id);
});

## How can I use static files in express js ?


app.use(express.static("filename"))

```
app.use(express.static("public"));

```
## How can I use bootstrap css ?

```
//1  install lib on terminal
npm i bootstrap@5.2.2

//2 Add the node_modules folder that contains external libraries like Bootstrap to the project.
app.use(express.static("node_modules"));

```
