HOW TO DEPLOY

First, create a new GitHub repository:

Go to github.com and sign in
Click the "+" button in the top right and select "New repository"
Name your repository and make it public
Don't initialize with any files
Initialize your local repository and push to GitHub:


git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
Connect to Netlify:

Go to app.netlify.com and sign in
Click "Add new site" → "Import an existing project"
Select GitHub as your Git provider
Choose your repository from the list
Configure your build settings:
Build command: npm run build
Publish directory: dist
Click "Deploy site"
For future updates:

Make your code changes locally
Commit your changes:

git add .
git commit -m "Your commit message"
git push
Netlify will automatically detect the push and redeploy your site
The great thing about this setup is that Netlify will automatically rebuild and redeploy your site every time you push changes to GitHub. You don't need to manually trigger deployments.

Also, you can configure environment variables in Netlify's dashboard under Site settings → Environment variables, which is useful for storing sensitive information like API keys.

Would you like me to help you set up any specific part of this process?