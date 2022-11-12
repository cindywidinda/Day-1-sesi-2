const bio = {
    firstName: "Mark",
    lastName: "Lee",
    greetings: function(greets){
        const a = this.firstName
        const b = this.lastName
        console.log("hi! "+a+b + greets)
    }
}
bio.greetings("morning")
