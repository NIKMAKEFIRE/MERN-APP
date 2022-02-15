import React from "react";
import axios from "axios";

interface SignupProps {
  renderLogin: () => void;
}

const Signup = ({renderLogin}: SignupProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = () => {
    axios.post('/signup', {
      username: username,
      password: password
    }).then(res => console.log(res));
  }

  React.useEffect(() => {
    if (password === confirmPassword) setDisabled(false);
    else setDisabled(true);
  }, [password, confirmPassword])

  return(
    <div style={{height: '300px'}}>
      <h1 className="text-center text-green-400 font-bold text-3xl mb-6">Регистрация</h1>
      <div className="mb-4">
      <label className="mb-2">Имя пользователя</label>
        <input onChange={(e) => setUsername(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-400 rounded-md" type="text" placeholder="Создайте имя пользователя" />
      </div>
      <div className="mb-4">
      <label>Пароль</label>
        <input onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="Создайте пароль" />
      </div>
      <div className="mb-4">
      <label>Подтвердите пароль</label>
        <input onChange={(e) => setConfirmPassword(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="Подтвердите пароль" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Уже есть аккаунт? <span className="text-green-400 cursor-pointer" onClick={renderLogin}>Вход</span></p>
        </div>
        <button className={`px-3 py-3 font-bold rounded-lg text-white ${disabled ? "bg-gray-400" : "bg-green-400"}`} disabled={disabled} onClick={() => onSubmit()}>Регистрация</button>
      </div>
    </div>
  )
}

export default Signup;