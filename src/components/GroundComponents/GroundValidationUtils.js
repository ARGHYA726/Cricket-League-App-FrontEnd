export class GroundValidationUtils {

    globalStatus = true
    groundNamePattern = /^[A-Z][a-z0-9]+$/

    groundNameChecker = (groundName) => {
        if (groundName.trim().length === 0) {
            this.globalStatus = false
            return "Enter a ground name"
        }

        if (!this.groundNamePattern.test(groundName)) {
            this.globalStatus = false
            return "The name should start with a captital letter followed by small letters and digits"
        }
        this.globalStatus = true
        return ""
    }


    nameChecker = name => {
        if (name.trim().length === 0) {
            return "Invalid input! Please provide a valid input"
        }
        return ""
    }


}