FROM gitpod/workspace-full

# Install system dependencies required for Cypress
RUN sudo apt-get update && \
    sudo apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb

# Install Cypress
RUN npm install -g cypress

# Set environment variables for Cypress
ENV CYPRESS_INSTALL_BINARY=0
ENV DISPLAY=:99
