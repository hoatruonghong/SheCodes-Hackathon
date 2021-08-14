

//Try to connect
const sql = require('mssql')
mycon=sql.connect('Server=localhost,1433;Database=shecodes;User Id=sa;Password=shecodes;Encrypt=true')
const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)


public boolean rmvStudent(Student s){
    StringBuilder sql = new StringBuilder("DELETE FROM dbo.[Sinh viên] ");
    sql.append ("WHERE [MSSV]="+s.getId().toString()+" AND [Tên trường]=N\'"+s.getUni()+"\'");
    try {
        PreparedStatement ps = con.prepareStatement(sql.toString());
        return ps.executeUpdate() > 0;
    }catch (Exception e){
        e.printStackTrace();
    }
    return false;
}










