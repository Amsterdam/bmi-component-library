#!groovy

String BRANCH = "${env.BRANCH_NAME}"
String SLACK_CHANNEL = "#aip_devs";

/**
 * @param message Step name
 * @param critical If false, only produces UNSTABLE build on failure but allows build to continue
 * @param block Code block to execute for this step
 */
def tryStep(String message, Closure block, Boolean critical = true) {
    try {
        block()
    } catch (Throwable t) {
        slackSend message: "${env.JOB_NAME}: ${message} failure (branch: ${env.BRANCH_NAME}) ${env.BUILD_URL}", channel: SLACK_CHANNEL, color: critical ? 'danger': 'warning'
		if (!critical && BRANCH != 'master') {
			// Only mark the build as UNSTABLE in case of non critical failure
			currentBuild.result = 'UNSTABLE'
		} else {
			// Halt and fail the build
	        throw t
		}
    }
}

pipeline {
	agent {
		dockerfile {
			args '--privileged'
			additionalBuildArgs '--target builder'
		}
	}

	environment {
        DOCKERFILE = "Dockerfile"
        DOCKER_IMAGE_TAG = "component-library:build-${env.BUILD_ID}"
		GITLAB_USER = credentials('bmi_gitlab_user')
		// Tell NodeJS where to store its cache files so that we don't require root permissions at /.npm
		HOME = '.'
	}

    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("NPM Install") {
            steps {
            	tryStep "NPM Install", {
					script {
						echo "Build Stage"
						echo "version: ${env.BUILD_ID}"

						sh 'git config --local user.name "BMI Jenkins"'
						sh 'git config --local user.email "bmi@amsterdam.nl"'

						// Check if writable remote (https basic auth) already exists from failed run; if so, we remove it
						def commandStdout = sh(returnStdout: true, script: "git remote show")
						if (commandStdout.contains("writable")) {
							sh 'git remote remove writable'
						}
						// Set git remote we can push to after standard-version has done its thing
						sh 'git remote add writable https://$GITLAB_USER@git.data.amsterdam.nl/bmi/component-library.git'

						sh 'npm install'
						
						// Restore package.json after NPM install
						sh 'git checkout package.json'
					}
            	}
            }
        }

        stage("Lint & Test") {
            parallel {
                stage('Stylelint') {
                    steps {
                    	tryStep "stylelint", {
							script {
								sh 'npm run ci:stylelint'
							}
                    	}
                    }
                }
                stage('ESLint') {
                    steps {
                    	tryStep "eslint", {
							script {
								sh 'npm run ci:eslint'
							}
                    	}
                    }
                }
                stage("Unit Tests") {
                    steps {
                    	tryStep "unit test", {
							script {
								sh 'npm run ci:test'
							}
                    	}
                    }
                }
            }
        }

        stage("NPM Publish") {
			when { anyOf { branch 'master'; branch 'develop' } }
			stages {
				stage('Approval Notification') {
					steps {
						script {
							slackSend channel: SLACK_CHANNEL, color: 'warning', message: "${env.JOB_NAME} is waiting for \"${BRANCH == 'master' ? 'Production' : 'Alpha'}\" Release; Please confirm @ ${env.BUILD_URL}"
						}
					}
				}
				stage('On Approval') {
					options {
						timeout(time: 6, unit: 'HOURS')
					}
					input {
						message "Publish to private NPM registry?"
						ok "Yes, publish it!"
					}
					steps {
						tryStep "prepare release", {
							script {
								// Generates changelog and bumps version and then commits and adds a tag
								echo 'Preparing release'
								if (BRANCH == 'master') {
									sh 'npm run release'
								} else {
									sh 'npm run release -- --prerelease alpha'
								}
								sh "git push --follow-tags writable HEAD:${BRANCH}"
							}
						}
						tryStep "npm publish", {
							script {
								// npm publish --tag alpha
								echo 'Publishing to Verdaccio'
								echo 'TODO: npm publish to Verdaccio'
								slackSend channel: SLACK_CHANNEL, color: 'good', message: "${env.JOB_NAME}: success (branch: ${env.BRANCH_NAME}) ${env.BUILD_URL}"
							}
						}
					}
				}
			}
        }
    }

	post {
        always {
			sh 'rm -rf ./reports'
			sh 'git remote remove writable'
		}
	}
}
