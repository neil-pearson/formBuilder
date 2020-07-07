### NOTES
* I tried to develop this so that each step had some sort of useful delivery
* My React skills are rusty but thought it best to perservere

### FIRST COMMIT
* Initial solution of create-react-app

### SECOND COMMIT - about 1h 15m
* Initial Form Component Builtyran start
** Generates Controls based on JSON
*** Input and Select implemented
** Submits Form Contents

### THIRD COMMIT - about 2hrs
* Extend to include validation and json generation
** Include Error with each control
** Store Errors and FieldValue in Main Form
** Store JSON in main Form 
** Simple validation of empty text fields
** Check validation on submit
** if valid return json in alert

### TO BE COMPLETED - NEXT STEPS
* Extend validation to be dynamic - based on rules rather than fields though'
* Extend output text to be JSON format based on control style required
* Implement optional fields - probably just not adding validation?
* Add Value based validation - >18 for example
* Add masking based validation - firstname <SPACE> lastname
* Add multiple field controls - guardian consent
* Add dynamic fields controls - contact number (extension of this control)
* Add dependencies between controls
* And of course, tidy up with nicer controls and add tests