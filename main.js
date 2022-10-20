//conecion a base de datosprototype

class ConnectionPrototype{
    constructor(proto){
        this.proto = proto;
        return this.clone();
    }

    clone(){
        let connection = new Connection();
        connection.driver = this.proto.driver;
        connection.server = this.proto.server;
        connection.database = this.proto.database;
        connection.user = this.proto.user;
        connection.password = this.proto.password;

        return connection;
    }
}

class Connection{
    construtor(driver, server, database, user, password){
        this.driver = driver;
        this.server = server;
        this.database = database;
        this.user = user;
        this.password = password;
    }

    getConnection(){
        return this.driver + "://server=" +this.server+ ";database=" +this.database +";user="+this.user+ ";password="+this.password;
    }
}

let connectionSQLServerPrototype = 
new Connection("sqlserver","localhost","beerDB","sa","123456");

let connectionSQLServer = 
    new ConnectionPrototype(connectionSQLServerPrototype );


console.log(connectionSQLServer);

