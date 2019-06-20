

function Film(title,director,producer,release_date,rt_score,description)
{
    this.TaiKhoan = title;
    this.MatKhau = director;
    this.HoTen=producer;
    this.Email = release_date;
    this.SoDT = rt_score;
    this.DSFilm = description;
}
function CreateTable() {
    var tblBody = '';
    for (var i = 0; i < DSFilm.length; i++) {
        //Lấy thông tin người dùng từ mảng người dùng
        var Film = DSFilm[i];
        tblBody += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${Film.title}</td>
                    <td>${Film.director}</td>
                    <td>${Film.producer}</td>
                    <td>${Film.release_date}</td>
                    <td>${Film.rt_score}</td>
                    <td>${Film.description}</td>
                    
                </tr>
            `
    }
    //Dom đến thẻ tBody của tableNguoiDung
    $('#tblDanhSachNguoiDung').html(tblBody);
}

//-----------------------------AJAX----------------------------------

function GetFilm() {
    $.ajax({
        url: 'https://ghibliapi.herokuapp.com/films',
        type: 'GET'
    }).done(function (ketqua) {
        console.log(ketqua)
        DSFilm = ketqua;
        CreateTable();
    }).fail(function (err) {
        console.log(err);
    })
}

$("#btngetjson").click(function(){
    GetFilm(); 
});
