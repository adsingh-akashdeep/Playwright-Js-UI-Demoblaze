pipeline {
  agent any

 environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
        }

  stages {

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

