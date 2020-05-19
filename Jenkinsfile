pipeline {
    agent { label 'master' }
    stages {
        
        stage('Git pull code') {
            steps {
            git 'https://github.com/kudaykiran/Echo.git'
            }
        }
        stage('Build') {
            steps{
                sh  'npm install'
                sh  'npm install express'
            }
        } 
        stage('deploy') {
            steps{
              sh 'npm run '
              sh 'npm start &'
            }
        }
       stage('sonarQube') {
            steps{
            sh 'sonar-scanner'
            }
        }
    }
}
