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
