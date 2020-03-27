const generateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {   

    it('should generate an unique ID whith 8 characters of length', () => {
        
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})