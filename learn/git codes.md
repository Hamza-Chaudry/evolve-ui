git init
git add -A
git commit -m "update html"
git status
git remote add upstream https://github.com/StandardSoft/evolve-ui.git
git remote add origin https://github.com/ansahKhan/evolve-ui.git
git remote set-url --push upstream no_push
 
git log 
git branch 
git remote -v

git config --global init.defaultBranch main 
git branch -m master main
 
 
## Git Command Explanations
 
- **`git init`** – Initializes a new Git repository in the current folder.  

- **`git checkout -b "features/123-playwrighthtml"`** – Creates and switches to a new branch named *features/123-playwrighthtml* for developing a specific feature or task.  

- **`git add -A`** – Stages all changes (new, modified, deleted files) for the next commit.  

- **`git commit -m "update html"`** – Saves the staged changes with a descriptive commit message.  

- **`git push`** – Uploads your local commits to the remote repository (e.g., GitHub).  

- **`git status`** – Shows the current state of the working directory and staging area.  

- **`git remote add upstream https://github.com/StandardSoft/evolve-ui.git`** – Adds a remote repository named *upstream* (usually the original repo you forked from).  

- **`git remote add origin https://github.com/ansahKhan/evolve-ui.git`** – Adds a remote repository named *origin* (usually your personal repo).  

- **`git remote set-url --push upstream no_push`** – Disables pushing to the *upstream* remote (makes it read-only).  

- **`git log`** – Displays the commit history of the repository.  

- **`git branch`** – Lists all local branches and highlights the current one.  

- **`git remote -v`** – Shows all remote repositories linked to the project along with their URLs.  

- **`git config --global init.defaultBranch main`** – Sets *main* as the default branch name for all new Git repositories.  

- **`git branch -m master main`** – Renames the current branch from *master* to *main*.  

 