describe("Filter function", () => {
    test("it should filter by a search term (link)", () =>  {
        const input = [
            {id: 1, url: "https://www.ulr1.dev"},
            {id: 2, url: "https://www.ulr2.dev"},
            {id: 3, url: "https://www.ulr3.dev"}
        ]

        const output = [{id: 3, url: "https://www.link3.dev"}]

        expect(filterByTerm(input, "link")).toEqual(output)
    })
})