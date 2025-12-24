pipeline {
  agent any

    // options {
    //     timestamps()
    //     disableConcurrentBuilds()
    // }

    // parameters {
    //     choice(
    //         name: 'TEST_TYPE',
    //         choices: ['smoke', 'regression'],
    //         description: 'Select test suite to execute'
    //     )
    // }

    // environment {
    //     NODE_ENV = 'qa'
    //     ALLURE_RESULTS = 'allure-results'
    //     PLAYWRIGHT_HTML = 'playwright-report'
    //     GIT_CREDS = credentials('GIT_CREDS_ID') // Username/password pair
    // }

    // triggers {
    //     // Nightly regression example
    //     cron('H 1 * * *')
    // }


  stages {

        stage('Install Dependencies') {
            steps {
                bat '''
                    npm ci
                    npx playwright install
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

        stage('Generate Playwright HTML Report') {
            steps {
                bat '''
                    npx playwright show-report
                '''
            }
        }
    }

    // post {

    //     always {
    //         // Allure Report
    //         allure(
    //             includeProperties: false,
    //             jdk: '',
    //             results: [[path: "${ALLURE_RESULTS}"]]
    //         )

    //         // Archive Playwright HTML report
    //         archiveArtifacts artifacts: "${PLAYWRIGHT_HTML}/**", allowEmptyArchive: true
    //     }

    //     success {
    //         slackSend(
    //             color: 'good',
    //             message: """
    //             ✅ *Build SUCCESS*
    //             *Job:* ${env.JOB_NAME}
    //             *Build:* #${env.BUILD_NUMBER}
    //             *Suite:* ${params.TEST_TYPE}
    //             *Report:* ${env.BUILD_URL}allure
    //             """
    //         )
    //     }

    //     failure {
    //         slackSend(
    //             color: 'danger',
    //             message: """
    //             ❌ *Build FAILED*
    //             *Job:* ${env.JOB_NAME}
    //             *Build:* #${env.BUILD_NUMBER}
    //             *Suite:* ${params.TEST_TYPE}
    //             *Check Logs:* ${env.BUILD_URL}
    //             """
    //         )
    //     }
    // }

}
