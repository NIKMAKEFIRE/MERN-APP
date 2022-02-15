import React from "react";
import axios from "axios";


interface LoginProps {
  renderSignup: () => void;
}
const Login = ({renderSignup}: LoginProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = () => {
    axios.post('/login', {
      username: username,
      password: password
    }).then(res => {
      // sucessful, save the token
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);

        window.location.href = '/dashboard';
      } else {
        // do some validation, logging
      }
    });
  }

  return(
    <div style={{height: '300px'}}>
      <h1 className="text-center text-green-400 font-bold text-3xl mb-6">Вход</h1>
      <div className="mb-4">
      <label className="mb-2">Имя пользователя</label>
        <input onChange={(e) => setUsername(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-400 rounded-md" type="text" placeholder="Введите имя пользователя"/>
      </div>
      <div className="mb-4">
      <label>Пароль</label>
        <input onChange={(e) => setPassword(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-400 rounded-md" type="password" placeholder="Введите пароль" />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>Нет аккаунта? <span className="text-green-400 cursor-pointer" onClick={renderSignup}>Регистрация</span></p>
        </div>
        <button className="rounded-lg px-6 py-3 font-bold bg-green-400 text-white" onClick={() => onSubmit()}>Войти</button>
      </div>
    </div>
  )
  
}

export default Login;