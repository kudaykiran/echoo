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
        stage('SonarQube Analysis') {
          steps{
              sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://13.92.80.40:9000 -Dsonar.projectName=echo -Dsonar.projectVersion=1.0 -Dsonar.projectKey=jenkins -Dsonar.sources=. -Dsonar.projectBaseDir=/home/jenkins/workspace/"
              }
        }
       stage('sonarQube') {
            steps{
            sh 'sonar-scanner'
            }
        }
    }
}
