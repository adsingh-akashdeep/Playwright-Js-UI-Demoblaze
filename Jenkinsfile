pipeline {
  agent any

  stages {

        environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    npm ci
                    npx playwright install chromium
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat """
                    npx playwright test
                """
            }
        }
    }
}

