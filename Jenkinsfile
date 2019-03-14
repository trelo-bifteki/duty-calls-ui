pipeline {
  agent {
    docker {
      image 'node:8-alpine'
    }
  }
  environment {
    HOME = '.'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
  }
}
