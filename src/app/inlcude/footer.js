import styles from './page.module.css'; 
export default function Footer() {
  return (
    <>
     <div className="text-center mt-4">
          <small>
              <a href="" className="link-primary">Forget User Id | Forget Password</a>
          </small>
      </div>
      <div className="text-center">
          <small>
              <a href="" className="link-primary">Unlock User Id | Known you Customer Id</a>
          </small>
      </div>
      <div className="mt-4 text-center">
          <small>
              <span className="text-dark">Not Registered yet?</span> <a href="" className="link-primary">Register Now!</a>
          </small>
      </div>
      <footer className="mt-4 text-center">
      <img src="/footer.jpg" width="100%" />
    </footer>
    </>
  

  );
}
