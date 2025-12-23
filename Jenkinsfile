pipeline{
    agent any

    stages{
        stage('install'){
            steps{
                sh 'npm ci'
            }
        }

        stage('Run Tests'){
            steps{
                sh 'npx playwright test'
            }
        }
    }
}   