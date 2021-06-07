class ExamplePage {
    
    constructor(){
        this.example_url = 'https://www.example.com/';
    }
    
    //UI Methods
    visit = () => {
        cy.visit(this.example_url);
    }

}
export default new ExamplePage();