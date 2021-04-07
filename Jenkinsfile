#!groovy

def tryStep(String message, Closure block, Closure tearDown = null) {
    try {
        block()
    }
    catch (Throwable t) {
        slackSend message: "${env.JOB_NAME}: ${message} failure ${env.BUILD_URL}", channel: '#ci-channel', color: 'danger'

        throw t
    }
    finally {
        if (tearDown) {
            tearDown()
        }
    }
}

String BRANCH = "${env.BRANCH_NAME}"

pipeline {
    agent any
	environment {
	    PROJECTNAME = "bmi/component-library"
        DOCKERFILE = "Dockerfile"
        CONTAINERNAME = "bmi/component-library"
        CONTAINERDIR = "."
        DOCKER_IMAGE_URL = "${DOCKER_REGISTRY_NO_PROTOCOL}/${CONTAINERNAME}"
        DOCKER_IMAGE_TAG = "component-library:build-${env.BUILD_ID}"
	}

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }

        stage("Build") {
            steps {
                script {
                    echo "Build Stage"
                    echo "version: ${env.BUILD_ID}"
                    container = docker.build("${env.DOCKER_IMAGE_TAG}", "-f ./${DOCKERFILE} .")
                }
            }
        }

        stage("Lint & Test") {
            parallel {
                stage('Stylelint') {
                    agent any
                    steps {
                        script {
                            container.inside {
                                sh 'cd /var/service && node_modules/.bin/stylelint --help'
                            }
                        }
                    }
                }
                stage('ESLint') {
                    agent any
                    steps {
                        script {
                            container.inside {
                                sh 'cd /var/service && node_modules/.bin/prettier --help'
                            }
                        }
                    }
                    post {
                        always {
                            junit allowEmptyResults: true, testResults: 'reports/eslint.xml'
                        }
                    }
                }
                stage("Jest") {
                    agent any
                    steps {
                        script {
                            container.inside {
                                sh 'cd /var/service && npm run ci:test'
                            }
                        }
                    }
                    post {
                        always {
                            junit allowEmptyResults: true, testResults: 'reports/unit.xml'
                        }
                    }
                }
            }
        }

        stage("NPM Publish") {
			steps {
				script {
					echo 'Performing npm build'
					sh 'cd /var/service && npm run build'
				}
			}
        }
    }
}
