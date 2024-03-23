pipeline {
    agent any

    stages {
        stage("run frontend"){
            echo 'executing npm...'
            nodejs('NodeJS-21.7.1') {
                sh 'npm install'
            }
        }
    }  
    stages {
        stage("run backend"){
            echo 'executing backend simple...'
        }
    } 
}
