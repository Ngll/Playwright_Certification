pipeline {
  agent any

  tools {
    nodejs 'node18'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/Ngll/Playwright_Certification.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install'
      }
    }

    stage('Test') {
      steps {
        sh 'npx playwright test'
      }
    }
  }

  post {
    always {
      junit 'results.xml'  // if using JUnit reporter
    }
  }
}
