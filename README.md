document
createElement()
inneHTML

# above superpower of JS

# Inject React code to our project through CDN

# CDN?

# crossorigin?

# CORE FILE OF REACT

# REACTDOM FILE NEED TO MODIFY DOM( BRIDGE BETWEEN REACT AND DOM )

# React at the end of day is js

Git commands
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/a1.git
git push -u origin main

Git

Version control syatem Keep track of changes(track history) in code

features
Popular
free & open source
fast & scalable
collaborate

GitHub
Store and manage their code using git use to Code Host
Folder(Repository)

Add(Ready to commit)
commit(screenshot and save in memory)

Commands
Configuring Git(Tell git in which account we want to change with email and username)

Global Level and Local Level

commands(global)

~ --> means root directory in terminal

git config --global user.name "ajay-CaTi"
git config --global user.name "ajaykumarsingh110@gmail.com"
git config --list ( SHOW EMAIL AND USER WHICH SET ABOVE )

CLONE( clone a repo on local machine )
git clone LINK HERE PASTE

STATUS( display status of code )
git status

CHANGE DIRECTORY )
cd FOLDER NAME

GeT OUT OF A FOLDER
cd ..

MODIFY(changes need to commit)
git restore (DISCARD CHANGE SIN WORKING DIRECTORY)

Untracked(New file that didn't tracked by git)

staged(FILE READY TO COMMITED)
add . (TO STAGED)

AFTER COMMIT STATUS IS UNCHANGED
add .
or
add filename ( FOR SPECIFIC FILE )

COMMIT( -m[message] )
fit commit -m "first commit"

git push origin main

origin( DEFAULT REPO its nam eis origin )
main( THIS mian IS BRANCH )

git init ( USE TO CREATE NEW GIT REPO )

mkdir FOLDERNAME

git remote add origin LINK ( ADD NEW REMOTE DEFAULT DIRECTORY )

git remote ( VERIFY REMOTE GIT )

git branch ( TO CHECK BRANCH[ branch:-- compy of original file to work individually] )

git branch -M main( TO RENAME BRANCH )

git push -u origin main( TELL GIT THAT WE WORK ON A SAME PROJECT REPO AND NEST TIME I WILL USE git push to push code )

Work flow

Create Github Repo
clone
changes
add
commit
push

GIT BRANCHES

git branch ( CHECK BRANCH )
git branch -M mian( TO RENAME BRANCH )
git checkout BRANCH NAME ( TO NAVIGATE )
git checkut -b NEW BRANCH NAME ( TO CREATE NEW BRANCH )
git branch -d BRANCH NAME ( TO DELETE BRANCH )

[ To push the current branch and set the remote as upstream, use ]
git push --set-upstream origin mohna

git pull origin main( USE TO FETCH AND DOWNLOAD CONTENT FROM A REMOTE REPO AND IMMEDIATE UPDATE THE LOCAL REPO TO MATCH THAT CONTENT )

const heading = React.createElement(
"h1",
{ className: "heading" },
"i am heading"
);

CONSOLE.LOG(heading) // Print OBJECT

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

React.createElement(
"ELEMENT ex:- h1, div",
{OBJECT, attributes like:- className, id },
"CHILDREN or nested, child elements"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

# Array List Of Object, of children to make parallel child elements

# root.render(JOB IS TAKE THE OBJECT CREATE THE ELEMENT H1 TAG AND PUT IT INSIDE ROOT ELEMENT)

# createElement= CREATE REACT ELEMENT LAST OF DAY IT IS OBJECT

# craeting an element is core thng of react

# creating root and rendering EVERYthing inside it , it is a job of reactDOM

# type="module"?

# Dom menupulation is most costly operation and react do this efficiently thats why it is so populat ans it is also used in an existing project or a very specific part of website ex:- header, or a single page

# Warning:

Each child in a list should have a unique "key" prop.

Check the top-level render call using <div>. See https://reactjs.org/link/warning-keys for more information.
at div

# in console key is define in react element to distinguish each element in a n array for their update delete added so rerendering the whole component is reduced

# Core of react is above

# JSX is javascript xml it is a syntax to make code more easy dubugging, easy read, developer friendly syntax

# REact code is after the cdn link Before it throws error

# Content already in root div will be replace by what it is it in render

# First it load React in our code THen loads ReactDOM in our code THen loads Add.js file code THen root.render it inside root div

# React just give some HE:PER METHODS to build faster APPLICATIONS

# This code is not raedy to push in production Why Because it is not optimise, minified, not bundled, compressed, optimise images

# NPM( PACKAGE MANAGER ) not Node Package Manager

# npm is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software.

# Packages == Dependencies

# ~ Tilde install major version automatically

# ^ Caret de install minor version automatically

# packahe-lock.json :--> Keeps track of exact verion of packages

# "integrity":"## HASH ##" :--> "Working on my local and not working on production" so it keeps hash to keep track what version is in development will be same as in production

# packahe.json :--> Keeps track of approx verion of packages

# nde_modules :--> Database of packages, packages are stored here, their data.

# what is Transitive Dependencies?

Apackage have its own dependencies and that dependencies have therir own dependencies known as Transitive Dependencies

# Should i put node_modules file on git NO

Because it will Re-generate with help of package.json

# Should i put package.json, package-lock.json file on git yes Because it will kepp track of our dependencies

# WHat ever regenerate do not put it on server/git

# npx parcel index.html

paccel create a server and our app is available on this server

# execute parcel package and give path to main file

# nOt good practice to put cdn links in our app in production mode

Because it make another request to that link to import react and react dom in our app & Today is React 18.2.0 tommmorrow is some another version Headache to updated CDN. So it will be easy to instal it rather than put CDN links

# Parcel

- Dev Buid
- Local Server
- HMR(Hot Module Replacement) Automatically refresh by Read and keep track of file
- File Watching Algo:- written in C++
- Parcel is caching things & provide faster builds
- Iamge Optimization
- Minification
- Bundeling
- Compress (Remove all white space)
- React is fast because of the above thing provide by Parcel
- Consistent Hashing
- Code SPlitting
- Differencial Bundeling (for app is run over different browsers)
- Diagonstic
- Error Handling
- Tree Shaking ALogo- remove unuse of code
- DIfferent dev and prod bundles

# Why JSX build

- make it syntactically easier
- Combination of hTML Like + logic in one file
- Developer Life easy

# Jsx gives to transpiler Babel it converted to React.craeteElement into JS Object

# What is the difference between element and component?

a component refers to a small part of a larger entity
Elements are light, stateless and hence it is faster

# Component Cmposition

One component use in another

# Fubnction component?

It is just a JS function which will return some jsx

# Cross side scripting?

# JSX takes injection attack

Some of the limitations of arrow functions are as follows:

- Arrow functions are anonymous and can be harder to debug. However, we can assign them to a variable for more clarity.
- Arrow functions cannot be used as constructors.
- Arrow functions do not have new.target keyword.
- Arrow functions don't have their own bindings to this or super. Also, they should not be used as methods.
- We usually cannot use an arrow function as a method.
- Arrow functions cannot be used as a generator function.
- The call, apply and bind methods cannot be used with arrow functions.

Some of the benefits of using arrow functions in JavaScript are as follows:

- Arrow functions have shorter syntax than regular - function expressions.
- Arrow functions have implicit return statements.
- Arrow functions increase readability.

img url :-- https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/

logi url :-- https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png

api :-- https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

perticular restaurant :-- https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER

# Header

- Logo
- Nav items

# Body

- Search
- Restauran Container
- ResturantCard

# Footer

- copyright
- Links
- Address
- Contact

# useState() - super powerful state variable

# when ever state variable changes React rerender the components

# React v16 :--> Reconcillation Algorithm(Also known as React fiber)

# 7 Res-card React craetes virtul dom(NESTED OBJECT) representation of actual dom

Diff algorithm :-- find the diff between Updated virtual dom and Previous virtul dom Then actually updated the dom on every render

On click dif between VDOM and ADOM

Virtual dom concept is very old React get it and make its algo on it

# Why React is Fast?

React have a concept of virtual dom it has reconcilaion algorithm inrduce in react 16 now also known as rEact fiber(incremental rendering ability of spliting work into small chunks ) can do very efficienty DOM menupulation find out diff and updated dom

# useState() have two elements WHY?

React needs a trigger to start diff algo and update the DOM

React makes UI Layer and Data Layer synch updated Dom

# So now it is taht easy

# Why useState()?

# What is reconciliation and diffing algorithm in React?

# wht is react fiber?

# reconciliation

When an application's state changes, React needs to update the user interface to reflect the new state. To do this, it compares the current component tree (virtual DOM) with the new one, calculates the difference (diff), and then makes the necessary updates to the actual DOM. This process is called reconciliation.

# Whenever state variables updates react trigger the reconcillation(re-render the component)

# no dependency Array :--> useEffect called on every render.

# Every time my component render useEffect will be called ONCE! when empty array is given[]

# Every time my component render useEffect will be called when-ever the state value is changed given in array[]

# Hooks uses to create local state variable inside functional components.

# Rules of Hook?

# Why error comes in Hooks

eslint-plugin-react-hooks installed with create-react-appby default.

# microfrontend?

# configuration means Info that will tell the browser-router that what will happen in specific path

# client side routing :- All components is already loaded in our app only component loads for diff path

# Loading the class base components means craeting an instance of that class. constructor is called, best place to recieve props, best place to craete state variables. STtse here is big whole object which contain state variables. after contructor then render is called, then componentDidMount is called

# I wnat to render my data as react do ten make api request and then fill data inside it.

# React batch the render(commit base) phase bacause dom upadte is very expensive

# Why write super props?

# Why async componentDidMount?

# Why not use async in useEffect?

# What is EsLint?

chunking
code splitting
Dynamic Bundeling
Lazy Loading
dynamic import

# Hiher oredr component

is a component and returns a component by enhance its features

# Application have 2 layer, Ui layer is powered by Data layer,

# Handle the data layer to make App performansive

# Lifting the state up( give child control to its parent )

# Controlled and uncontrolled comp

# Pure component

# REdux used where data is heavily used

# Seperate libary Redux

# React-Redux act like bridge between raect and redux

# The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

-"Configuring a Redux store is too complicated"
-"I have to add a lot of packages to get Redux to do anything useful"
-"Redux requires too much boilerplate code"

# Redux store is a ery big JS onject stored in Global central place

# Multiple slices(Logcal Partition) in Store

Lodgin info :- User slice
cart info :- cart slice
display theme info :- theme slice

# On Button click how data go in cart slice

Directly cannot modify cart slice No!...

# O----------------------------

# On BUtton click it DISPATCHES an ACTION

# it calls a function(Known as REDUCER)

# and this function Updated/Modify Slice cart(STORE) internially

# Above is for WRITE DATA

# To get data from cart use SELECTOR to give daa to cart

# USing SELECTOR phenonmena known as Subscribibg to store

# install

@reduxjs/toolkit
react-redux

# build store

# connect store to app

# SLice(cartSlice)

# dispatch(action)

# Selector

# addItem:(state, action)=>{

    }

# (state, action)=>{} Reducer function have 2 parameters state, action & modify state based uopn action

# 01:06:08
