// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Table from "./components/Table/Table";

function PlayerDashboard() {
  // search Client Side
  // 2. Search List React
  // buat ui, buat 1 input, 1 button search
  // kita tangkap value, 'daffa'
  // kita filter ada nilainya sama seperti input tannya
  // jika ada list,
  // jika tidak ada list kita kosongkan

  // state, setter dan getter
  const [player, setPlayer] = useState([
    {
      id: 1,
      username: "daffa",
      email: "daffa@mail.com",
      exp: "77",
      lvl: "99",
    },
    {
      id: 2,
      username: "akbar",
      email: "akbar@mail.com",
      exp: "22",
      lvl: "41",
    },
    {
      id: 3,
      username: "tes",
      email: "tes@mail.com",
      exp: "18",
      lvl: "56",
    },
    {
      id: 4,
      username: "budi",
      email: "budi@mail.com",
      exp: "32",
      lvl: "87",
    },
  ]);
  const [dataPlayer, setDataPlayer] = useState([
    {
      id: 1,
      username: "daffa",
      email: "daffa@mail.com",
      exp: 77,
      lvl: 99,
    },
    {
      id: 2,
      username: "akbar",
      email: "akbar@mail.com",
      exp: 22,
      lvl: 41,
    },
    {
      id: 3,
      username: "tes",
      email: "tes@mail.com",
      exp: 18,
      lvl: 56,
    },
    {
      id: 4,
      username: "budi",
      email: "budi@mail.com",
      exp: 32,
      lvl: 87,
    },
  ]);
  const [formPlayer, setFormPlayer] = useState([
    {
      username: "",
      email: "",
      exp: "",
      lvl: 0,
    },
  ]);

  // Add Data
  const addData = () => {
    // alert("Tes");
    setPlayer([...player, formPlayer]);
    setFormPlayer({
      username: "",
      email: "",
      exp: "",
      lvl: 0,
    });
  };
  const changehandler = (e) => {
    console.log(e.target.value);
    setFormPlayer({
      ...formPlayer,
      [e.target.name]: e.target.value,
    });
  };
  const changehandlerEdit = (e) => {
    console.log(e.target.value);
    // ...formEditPlayer berfungsi berubah yg event terubah saja
    setFormEditPlayer({
      ...formEditPlayer,
      [e.target.name]: e.target.value,
    });
  };

  // Search
  const [search, setSearch] = useState("");
  const searchandler = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
    // let playerTemp = dataPlayer;
    // let result = playerTemp.filter((item) => {
    //   // item.username.search(search);
    //   if (
    //     item.username.search(search) >= 0 ||
    //     item.email.search(search) >= 0 ||
    //     item.exp.search(search) >= 0 ||
    //     item.lvl.search(search) >= 0
    //   ) {
    //     return item;
    //   }
    // });
    // console.log(result);
    // if (search === "") {
    //   setPlayer(dataPlayer);
    // } else {
    //   setPlayer(result);
    // }
  };
  const btnSearch = () => {
    let playerTemp = dataPlayer;
    let result = playerTemp.filter((item) => {
      // item.username.search(search);
      if (
        item.username.search(search) >= 0 ||
        item.email.search(search) >= 0 ||
        item.exp.toString().search(search) >= 0 ||
        item.lvl.toString().search(search) >= 0
      ) {
        return item;
      }
    });
    console.log(result);
    if (search === "") {
      setPlayer(dataPlayer);
    } else {
      setPlayer(result);
    }
  };

  // Edit
  const editData = (idPlayer) => {
    // alert("Coba id = " + id);
    player.filter((item) => {
      if (item.id === idPlayer) {
        setFormEditPlayer(item);
        console.log(formEditPlayer);
        setEdit(true);
      }
    });
  };
  const [formEditPlayer, setFormEditPlayer] = useState([
    {
      id: "",
      username: "",
      email: "",
      exp: "",
      lvl: 0,
    },
  ]);
  const UpdateData = () => {
    let playerTemp = player;
    let result = player.findIndex((item) => item.id === formEditPlayer.id);
    console.log(result);
    playerTemp[result].username = formEditPlayer.username;
    playerTemp[result].email = formEditPlayer.email;
    playerTemp[result].exp = formEditPlayer.exp;
    playerTemp[result].lvl = formEditPlayer.lvl;
    console.log(playerTemp);
    setFormEditPlayer(playerTemp);
    setFormEditPlayer({
      username: "",
      email: "",
      exp: "",
      lvl: 0,
    });
    setFormPlayer({
      username: "",
      email: "",
      exp: "",
      lvl: 0,
    });
    setEdit(false);
  };

  // optional
  const [edit, setEdit] = useState(false);
  return (
    <div className="App">
      <input type="text" name="search" value={search} onChange={searchandler} />
      <button className="btn btn-primary" onClick={btnSearch}>
        Cari
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">exp</th>
            <th scope="col">lvl</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {player.map((item, index) => {
            return (
              <Table
                key={item.id}
                index={index + 1}
                username={item.username}
                email={item.email}
                exp={item.exp}
                lvl={item.lvl}
                action={() => editData(item.id)}
                nameBtn="Edit"
              />
            );
          })}
        </tbody>
      </table>
      <div className="container">
        <div className="row justify-content-center">
          {edit === false ? (
            <div className="col-6 ">
              <form action="">
                Tambah Data
                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    value={formPlayer.username}
                    name="username"
                    onChange={changehandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    className="form-control"
                    type="text"
                    value={formPlayer.email}
                    name="email"
                    onChange={changehandler}
                  />
                </div>
                <div className="form-group">
                  <label>Exp</label>
                  <input
                    className="form-control"
                    type="number"
                    value={formPlayer.exp}
                    name="exp"
                    onChange={changehandler}
                  />
                </div>
                <div className="form-group">
                  <label>Lvl</label>
                  <input
                    className="form-control"
                    type="number"
                    value={formPlayer.lvl}
                    name="lvl"
                    onChange={changehandler}
                  />
                </div>
              </form>
              <button className="btn btn-primary mt-2" onClick={addData}>
                Tambah
              </button>
            </div>
          ) : (
            <div className="col-6">
              <form action="">
                Edit Data
                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    value={formEditPlayer.username}
                    name="username"
                    onChange={changehandlerEdit}
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    className="form-control"
                    type="text"
                    value={formEditPlayer.email}
                    name="email"
                    onChange={changehandlerEdit}
                  />
                </div>
                <div className="form-group">
                  <label>Exp</label>
                  <input
                    className="form-control"
                    type="number"
                    value={formEditPlayer.exp}
                    name="exp"
                    onChange={changehandlerEdit}
                  />
                </div>
                <div className="form-group">
                  <label>Lvl</label>
                  <input
                    className="form-control"
                    type="number"
                    value={formEditPlayer.lvl}
                    name="lvl"
                    onChange={changehandlerEdit}
                  />
                </div>
              </form>
              <button className="btn btn-warning mt-2" onClick={UpdateData}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>

      <br />
    </div>
  );
}

export default PlayerDashboard;
