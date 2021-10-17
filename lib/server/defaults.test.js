const defaults = require("./defaults")
// @ponicode
describe("defaults", () => {
    test("0", () => {
        let callFunction = () => {
            defaults({ noGzip: false, noCors: false, static: true, logger: "\n\nThe first error message:\n", readOnly: true, bodyParser: "Dwarf Crocodile" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            defaults({ noGzip: false, noCors: true, static: false, logger: "Could not find a submission object for message from xqueue", readOnly: true, bodyParser: "Saltwater Crocodile" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            defaults({ noGzip: false, noCors: false, static: true, logger: "There is a mismatch", readOnly: false, bodyParser: "Nile Crocodile" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            defaults({ noGzip: true, noCors: true, static: false, logger: "No os dependencies found. ", readOnly: true, bodyParser: "Spectacled Caiman" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            defaults({ noGzip: true, noCors: true, static: false, logger: "Grader id does not match submission id that was passed in", readOnly: true, bodyParser: "Spectacled Caiman" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            defaults(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
