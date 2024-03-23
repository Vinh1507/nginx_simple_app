pipeline {
    agent any

    stages {
        stage("run frontend"){
            steps {
                echo 'executing npm...'
                nodejs('NodeJS-21.7.1') {
                    sh 'npm init'
                    sh 'npm install'
                    sh 'npm install express'
                }
            }
        }
        stage("run backend"){
            steps {
                echo 'executing backend simple...'
            }
        }
    }  
}
