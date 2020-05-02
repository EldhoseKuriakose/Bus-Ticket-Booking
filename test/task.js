//importing required libraries
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    /**
     * Test book ticket (POST route)
     */
    describe("POST /tickets/book", () => {
        it("It should book ticket", (done) => {
            const task = {
                name: "Steve",
                phone: 1234567890,
                email: "steve@gmail.com",
                age: 43,
                gender: "Male"
            }
            chai.request(server)
                .post("/tickets/book")
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });
    });

     /**
     * Test update user details by id  (PATCH route)
     */
    describe("PATCH /tickets/update/:id", () => {
        it("It should update user details of the given id", (done) => {
            const task = {
                name: "Emma",
                phone: 8834567890,
                email: "emma@gmail.com",
                age: 29,
                gender: "Female"
            }
            const taskId = 1;
            chai.request(server)
                .patch("/tickets/update/" + taskId)
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("The ticket with given id is not found", (done) => {
            const task = {
                name: "Emma",
                phone: 8834567890,
                email: "emma@gmail.com",
                age: 29,
                gender: "Female"
            }
            const taskId = 177;
            chai.request(server)
                .patch("/tickets/update/" + taskId)
                .send(task)
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });
    });

     /**
     * Test view status by id  (GET route)
     */
    describe("GET /tickets/viewstatus:id", () => {
        it("It should get status of ticket with given id", (done) => {
            const taskId = 1;
            chai.request(server)
                .get("/tickets/viewstatus/" + taskId)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("The ticket with given id is not found", (done) => {
            const taskId = 157;
            chai.request(server)
                .get("/tickets/viewstatus/" + taskId)
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });
    });


     /**
     * Test view details by id   (GET route)
     */
    describe("GET /tickets/viewdetails:id", () => {
        it("It should get user details of ticket with given id", (done) => {
            const taskId = 1;
            chai.request(server)
                .get("/tickets/viewdetails/" + taskId)
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("The ticket with given id is not found", (done) => {
            const taskId = 157;
            chai.request(server)
                .get("/tickets/viewdetails/" + taskId)
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });
    });

     /**
     * Test view open tickets  (GET route)
     */
    describe("GET /tickets/viewopen", () => {
        it("It should get open tickets details", (done) => {
            chai.request(server)
                .get("/tickets/viewopen")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("It should not get open tickets details", (done) => {
            chai.request(server)
                .get("/tickets/viewope")
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });
    });

     /**
     * Test view closed tickets  (GET route)
     */
    describe("GET /tickets/viewclose", () => {
        it("It should get closed tickets details", (done) => {
            chai.request(server)
                .get("/tickets/viewclose")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });

        it("It should not get closed tickets details", (done) => {
            chai.request(server)
                .get("/tickets/viewcl")
                .end((err, res) => {
                    res.should.have.status(404);
                done();
                });
        });
    });


     /**
     * Test admin resetall  (PUT route)
     */
    describe("PUt /tickets/admin/resetall", () => {
        it("Opens up all tickets", (done) => {
            chai.request(server)
                .put("/tickets/admin/resetall")
                .end((err, res) => {
                    res.should.have.status(200);
                done();
                });
        });
    });
});
