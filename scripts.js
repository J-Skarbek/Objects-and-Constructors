function Book(title, author, pageCount, haveRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.haveRead = haveRead;
    this.displayInfo = function() {
        return `${title} by ${author}, ${pageCount} pages. ${haveRead}.`;
    };

};

const JURASSIC_PARK = new Book('Jurassic Park', 'Michael Crichton', '448', 'I have read');

const INFINITE_JEST = new Book('Infinite Jest', 'David Foster Wallace', '1,079', 'I have not read');


console.log(INFINITE_JEST.displayInfo());

console.log(JURASSIC_PARK.displayInfo());