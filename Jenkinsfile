pipeline {
    agent any

    stages {
        stage("run frontend"){
            steps {
                echo 'executing npm...'
                nodejs('NodeJS-21.7.1') {
                    sh 'npm install'
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
