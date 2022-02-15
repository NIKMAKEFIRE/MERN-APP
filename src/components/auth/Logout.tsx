const Logout = () => {
  return(
    <p onClick={() => {
      localStorage.removeItem('token');
      window.location.href = '/';
    }} className="cursor-pointer" >Выйти из аккаунта</p>
  )
}

export default Logout;