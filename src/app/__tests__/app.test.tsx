const sum = (x:number, y: number) =>{
    return x + y; 
}

describe("App component", ()=>{
    it("Should sum  correctly",()=>{
        expect(sum(4,4)).toBe(8)
    })
})


export default {}