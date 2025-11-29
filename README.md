# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 24
# Verify the Node.js version:
node -v # Should print "v24.11.1".
# Verify npm version:
npm -v # Should print "11.6.2".

# Install homebrew on your machine
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# After brew is installed verify the version
brew help
# Install git to clone the repository from the bitbucket
brew install git
# Check the git version
git --version
# clone the repository from the clone command present in the github actions

# Download VS Code editor cummunity version and open the project:
# Install playwright  using terminal:
npm init playwright@latest
# Return installed version of playwright.
npm playwright -v

# Runs the end-to-end tests.
npx playwright test
# Run test cases in headed mode to open browsers
npx playwright test --headed
# Runs the tests only on Chrome.
npx playwright test --project=chromium
# Run the test cases
npx playwright test --project=chromium --headed checkout.spec.js

