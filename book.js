var Books = [
    // ["node js", 1000, "Sanjev varma", "T vell Pvt Ltd"],
    // ["node js", 1000, "Sanjev varma", "T vell Pvt Ltd"],
    // ["node js", 1000, "Sanjev varma", "T vell Pvt Ltd"],
]

function BindBooks(Books) {
    var row = `<tr>
    <th>Sr no</th>
    <th>Title</th>
    <th>Price</th>
    <th>Author</th>
    <th>Publiser</th>
    <th>Actiom</th>
</tr>`;
    Books.forEach(function (book, i) {
        row += `<tr><td>${i + 1}</td><td>${book[0]}</td><td>${book[1]}</td><td>${book[2]}</td><td>${book[3]}</td><td><a href="#" onclick=edit(${i})>Edit</a>  <nbsp/>   <a href="#" onclick=del(${i})>Delete</a></td></tr>`;
    })
    document.getElementById("tb1").innerHTML = row;
}

function edit(i) {
    // console.log(book);
    var book = Books[i];
    document.getElementById("title").value = book[0];
    document.getElementById("price").value = book[1];
    document.getElementById("author").value = book[2];
    document.getElementById("publish").value = book[3];
    document.getElementById("index").value = i;
    document.getElementById('btn-book').innerText = "Update Book"
}

function del(i) {
    event.preventDefault();
    Books.splice(i, 1);
    BindBooks(Books);
    // console.log(i);

}
function Addbook() {
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var author = document.getElementById("author").value;
    var publiser = document.getElementById("publish").value;
    var index = document.getElementById("index").value;
    // console.log(index);
    var book = [title, price, author, publiser];
//     book.push((['task_name'=title]));
//     localStorage.setItem("localtask", book);
    // if (title != null && book[1] !=null && book[2] !=null && book[3] !=null ){
        if (book[0] !="" && book[0] !=undefined && 
             book[1] !="" && book[1] !=undefined && 
             book[2] !="" && book[2] !=undefined &&
             book[3] !="" && book[3] !=undefined){
              

    if (index == "" || index == undefined) {
        Books.push(book);
    }
    else {
        Books.splice(index, 1, book);
        document.getElementById("btn-book").innerText = "Add book";
    }

    // Books.push(book);
    BindBooks(Books);
    ClearForm();
    }else{
            alert("Please fill all fild");
    }
}
document.getElementById("btn-book").addEventListener("click", Addbook);
function ClearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publish").value = "";


}

BindBooks(Books);
