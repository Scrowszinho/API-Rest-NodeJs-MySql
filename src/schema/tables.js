class Tables {
    init(connect) {
       this.connect = connect;
       
       this.createDebit();
    }

    createDebit(){
        const sql = `CREATE TABLE IF NOT EXISTS debits (
                    id int NOT NULL AUTO_INCREMENT, 
                    name varchar(50) NOT NULL, 
                    date date NOT NULL,
                    price float NOT NULL, 
                    status varchar(20) NOT NULL,
                    observations text, PRIMARY KEY(id))`;
        
        this.connect.query(sql, error =>{
            if(error){
                console.log(error);
            } else {
                console.log('Debit table is created successful');
            }
        })
    }
}

module.exports = new Tables;